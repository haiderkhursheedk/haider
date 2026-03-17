import { useState } from 'react';

interface Video {
  id: number;
  url: string;
  title: string;
  hoverText: string;
}

export default function VideoPlayer2() {

  const videos: Video[] = [
    {
      id: 1,
      url: 'https://kurpmqtkgthagnjqmphd.supabase.co/storage/v1/object/public/assets/aeomidotme.mp4',
      title: "hey, it's aeomi",
      hoverText: 'aeomi'
    }
  ];

  const [currentIndex] = useState(0);
  const [isHovered] = useState(false);
  const [mousePosition] = useState({ x: 0, y: 0 });

  return (
    <div className="max-w-xl">
      <div className="flex items-center gap-6">

        <div className="flex-1">
          <div
            className="relative overflow-hidden"
          >
            <video
              key={videos[currentIndex].id}
              className="w-full aspect-video"
              controls
              autoPlay
              loop
              muted
            >
              <source src={videos[currentIndex].url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {isHovered && (
              <div
                className="absolute pointer-events-none z-20"
                style={{
                  left: `${mousePosition.x + 15}px`,
                  top: `${mousePosition.y + 15}px`,
                }}
              >
                <div className="bg-white text-gray-900 px-4 py-2 rounded-lg shadow-xl text-sm font-medium whitespace-nowrap">
                  {videos[currentIndex].hoverText}
                </div>
              </div>
            )}
          </div>

          <h1 className="text-sm mt-4 ml-3 italic text-white">
            {videos[currentIndex].title}
          </h1>
        </div>
      </div>
    </div>
  );
}