"use client";

import { useEffect, useRef, useState, useMemo } from 'react';
import dynamic from 'next/dynamic';
import { useRouter, usePathname } from 'next/navigation';
import { graphData, GraphNode } from '@/lib/graph-data';
import { useTheme } from 'next-themes';

// Dynamically import avoiding SSR to prevent canvas errors
const ForceGraph2D = dynamic(() => import('react-force-graph-2d'), { ssr: false });

export function InteractiveGraph() {
  const router = useRouter();
  const pathname = usePathname();
  const { theme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const fgRef = useRef<any>(null);
  const [dimensions, setDimensions] = useState({ width: 288, height: 288 });

  useEffect(() => {
    if (containerRef.current) {
      setDimensions({
        width: containerRef.current.offsetWidth,
        height: containerRef.current.offsetHeight
      });
    }

    const handleResize = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight
        });
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Helper: center view on the active node's actual position
  const centerOnActiveNode = (duration: number = 400) => {
    if (!fgRef.current) return;
    const gd = fgRef.current.graphData();
    const activeNode = gd?.nodes?.find((n: any) => n.id === activeNodeId);
    if (activeNode) {
      fgRef.current.centerAt(activeNode.x, activeNode.y, duration);
    } else {
      fgRef.current.centerAt(0, 0, duration);
    }
  };

  // Configure physics — compact layout like Obsidian
  useEffect(() => {
    if (fgRef.current) {
      fgRef.current.d3Force('charge').strength(-80);
      fgRef.current.d3Force('link').distance(40);
      // Start view centered on origin where all nodes begin
      fgRef.current.centerAt(0, 0, 0);
      fgRef.current.zoom(3.5, 0);
    }
  }, []);

  // After the simulation fully cools, center on active node
  const handleEngineStop = () => {
    centerOnActiveNode(400);
  };

  const isDark = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);

  // Colors strictly matching the Obsidian style referencing the user's uploaded image
  const nodeColorMain = isDark ? '#A3A3A3' : '#888888'; // Dimmer gray for neighbors
  const nodeColorActive = isDark ? '#D4D4D4' : '#555555'; // Brighter/larger for active
  const linkColor = isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)';
  const textColor = isDark ? '#E5E5E5' : '#171717';

  const findActiveNodeId = () => {
    const exactMatch = graphData.nodes.find(n => n.path === pathname);
    if (exactMatch) return exactMatch.id;
    return 'about-me';
  };

  const activeNodeId = findActiveNodeId();

  // Re-center whenever the active page changes
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    // Small delay to let simulation update node positions
    setTimeout(() => {
      centerOnActiveNode(300);
    }, 100);
  }, [activeNodeId]);

  const highlightedNodes = useMemo(() => {
    const neighbors = new Set<string>([activeNodeId]);
    graphData.links.forEach(link => {
      if (link.source === activeNodeId) neighbors.add(link.target);
      if (link.target === activeNodeId) neighbors.add(link.source);
    });
    return neighbors;
  }, [activeNodeId]);


  const displayGraphData = useMemo(() => {
    return {
      nodes: graphData.nodes.map(n => ({ ...n, id: n.id })),
      links: graphData.links.map(l => ({ ...l }))
    };
  }, []);

  return (
    <div className='mt-2'>
      <aside className="flex-shrink-0 p-3  mt-16 border-l border-border bg-background sticky top-0 hidden lg:flex items-start justify-center h-screen">


        <div
          ref={containerRef}
          className="w-72 h-72 rounded-xl overflow-hidden relative"
        >
          <ForceGraph2D
            ref={fgRef}
            width={dimensions.width}
            height={dimensions.height}
            graphData={displayGraphData}
            nodeId="id"
            nodeVal="val"
            nodeRelSize={1}
            nodeCanvasObject={(node: any, ctx, globalScale) => {
              const isActive = node.id === activeNodeId;
              const isNeighbor = highlightedNodes.has(node.id);
              if (!isNeighbor && !isActive) return;

              const size = isActive ? 8 : 4;

              // Subtle glow for active node
              if (isActive) {
                ctx.shadowColor = nodeColorActive;
                ctx.shadowBlur = 10;
              } else {
                ctx.shadowBlur = 0;
              }

              ctx.beginPath();
              ctx.arc(node.x, node.y, size, 0, 2 * Math.PI, false);
              ctx.fillStyle = isActive ? nodeColorActive : nodeColorMain;
              ctx.fill();

              // Reset shadow
              ctx.shadowBlur = 0;

              const label = node.name;
              const fontSize = Math.max(10 / globalScale, 4);
              ctx.font = `${fontSize}px "Satoshi", sans-serif`;

              ctx.textAlign = 'center';
              ctx.textBaseline = 'top';
              ctx.fillStyle = textColor;
              ctx.fillText(label, node.x, node.y + size + (6 / globalScale));
            }}
            nodePointerAreaPaint={(node: any, color, ctx) => {
              // This is required to make custom rendered nodes clickable
              const isActive = node.id === activeNodeId;
              const isNeighbor = highlightedNodes.has(node.id);
              if (!isNeighbor && !isActive) return;

              const size = (isActive ? 8 : 4) + 12; // Extra padding for easier clicking

              ctx.fillStyle = color;
              ctx.beginPath();
              ctx.arc(node.x, node.y, size, 0, 2 * Math.PI, false);
              ctx.fill();
            }}
            linkColor={(link: any) => {
              const isLinkActive = link.source.id === activeNodeId || link.target.id === activeNodeId;
              return isLinkActive ? linkColor : 'transparent';
            }}
            linkWidth={0.5}
            backgroundColor="transparent"
            onNodeClick={(node: any) => {
              const n = node as unknown as GraphNode;
              if (n.path) {
                router.push(n.path);
              }
            }}
            d3VelocityDecay={0.3}
            enableNodeDrag={true}
            enableZoomInteraction={false}
            enablePanInteraction={false}
            warmupTicks={50}
            cooldownTicks={200}
            onEngineStop={handleEngineStop}
          />

          {/* <div className="absolute bottom-2 right-3 text-[11px] text-muted-foreground opacity-60 select-none tracking-widest font-bold">
          LIXTA NETWORK
        </div> */}
        </div>
      </aside>

    </div>
  );
}

