// import { useState } from "react";

// import { assets } from "../assets/assets";
// import galleryData from "../components/Data/galleryData";

// import GalleryHero from "../components/GalleryHero.jsx/GalleryHero";
// import GalleryCard from "../components/GalleryGrid/GalleryCard";
// import VideoModal from "../components/VideoModal/VideoModal";

// const Gallery = () => {
//   const [selectedVideo, setSelectedVideo] = useState(null);

//   return (
//     <main className="relative">
//       {/* Fixed Background */}
//       <div
//         className="fixed inset-0 -z-20 bg-cover bg-center bg-no-repeat"
//         style={{
//           backgroundImage: `url(${assets.web_bg})`,
//         }}
//       />

//       {/* Overlay */}
//       <div className="fixed inset-0 -z-10 bg-gradient-to-br from-black/80 via-black/50 to-black/80" />

//       {/* Scroll Content */}
//       <div className="relative z-10">
//         {/* Hero */}
//         <GalleryHero />

//         {/* Gallery Grid */}
//         <section className="mx-auto max-w-7xl px-6 py-20">
//           <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//             {galleryData.map((item) => (
//               <GalleryCard
//                 key={item.id}
//                 item={item}
//                 onOpen={(card) => {
//                   if (card.type === "video") {
//                     setSelectedVideo(card);
//                   }
//                 }}
//               />
//             ))}
//           </div>
//         </section>

//         {/* Video Modal */}
//         <VideoModal
//           video={selectedVideo}
//           onClose={() => setSelectedVideo(null)}
//         />
//       </div>
//     </main>
//   );
// };

// export default Gallery;

import { useState } from "react";

import { assets } from "../assets/assets";
import galleryData from "../components/Data/galleryData";

import GalleryHero from "../components/GalleryHero.jsx/GalleryHero";
import GalleryCard from "../components/GalleryGrid/GalleryCard";
import VideoModal from "../components/VideoModal/VideoModal";

const Gallery = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleOpen = (card) => {
    // YouTube + Local Videos
    if (card.type === "video" || card.type === "local-video") {
      setSelectedVideo(card);
      return;
    }

    // Facebook / Instagram
    if (card.type === "external") {
      window.open(card.url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <main className="relative">
      {/* Fixed Background */}
      <div
        className="fixed inset-0 -z-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${assets.web_bg})`,
        }}
      />

      {/* Overlay */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-black/80 via-black/50 to-black/80" />

      {/* Content */}
      <div className="relative z-10">
        <GalleryHero />

        <section className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {galleryData.map((item) => (
              <GalleryCard key={item.id} item={item} onOpen={handleOpen} />
            ))}
          </div>
        </section>

        <VideoModal
          video={selectedVideo}
          onClose={() => setSelectedVideo(null)}
        />
      </div>
    </main>
  );
};

export default Gallery;
