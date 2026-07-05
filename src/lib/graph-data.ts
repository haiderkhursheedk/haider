export interface GraphNode {
  id: string;
  name: string;
  val: number; // size
  path?: string; // route
  type: "main" | "category" | "project" | "essay" | "other";
}

export interface GraphLink {
  source: string;
  target: string;
}

export interface GraphData {
  nodes: GraphNode[];
  links: GraphLink[];
}

export const graphData: GraphData = {
  nodes: [
    { id: "about-me", name: "about me", val: 6, path: "/", type: "main" },
    { id: "ventures", name: "ventures", val: 5, path: "/projects", type: "category" },
    { id: "essays", name: "essays", val: 5, path: "/essays", type: "category" },

    // Startups
    { id: "aeomi", name: "aeomi", val: 4, path: "/projects/aeomi", type: "project" },
    { id: "mia", name: "mia", val: 3, path: "/projects/mia", type: "project" },
    { id: "lixta-network", name: "lixta network", val: 3, path: "/projects/lixta-network", type: "project" },
    { id: "lixta-labs", name: "lixta labs", val: 3, path: "/projects/lixta-labs", type: "project" },

    // Past/Other
    { id: "game-studio", name: "game dev studio (exited)", val: 2, path: "/projects/game-studio", type: "project" },
    { id: "youtube", name: "youtube channel", val: 2, path: "https://youtube.com/@haiderkhursheedk", type: "other" },

    // Essays
    { id: "reflections-selling", name: "reflections on selling my company", val: 3, path: "/essays/reflections", type: "essay" },
  ],
  links: [
    // Core structure
    { source: "about-me", target: "ventures" },
    { source: "about-me", target: "essays" },
    { source: "about-me", target: "youtube" },

    // Ventures
    { source: "ventures", target: "aeomi" },
    { source: "ventures", target: "lixta-labs" },
    { source: "ventures", target: "lixta-network" },
    { source: "ventures", target: "game-studio" },

    // Products under ventures
    { source: "aeomi", target: "mia" },

    // Essays
    { source: "essays", target: "reflections-selling" },

    // Direct mentions from about me
    { source: "about-me", target: "aeomi" },
    { source: "lixta-labs", target: "lixta-network" } // Labs is the holding company
  ]
};
