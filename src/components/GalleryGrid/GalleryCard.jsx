import { motion } from "framer-motion";
import { Play } from "lucide-react";

const GalleryCard = ({ item, onOpen }) => {
  const thumbnail =
    item.type === "video"
      ? `https://img.youtube.com/vi/${item.videoId}/hqdefault.jpg`
      : item.thumbnail || item.image;

  const handleClick = () => {
    // Open YouTube inside Modal
    if (item.type === "video") {
      onOpen(item);
    }

    // Open Facebook & Instagram in New Tab
    if (item.type === "external") {
      window.open(item.url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      onClick={handleClick}
      className="group cursor-pointer overflow-hidden rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-xl transition-all duration-300 hover:border-yellow-400/70 hover:shadow-yellow-500/20"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={thumbnail}
          alt={item.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition" />

        {/* Play Button */}
        {(item.type === "video" || item.type === "external") && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-yellow-500/90 backdrop-blur-md shadow-xl transition group-hover:scale-110">
              <>
                {item.platform === "youtube" && (
                  <Play className="fill-black text-black ml-1" size={28} />
                )}

                {item.platform === "facebook" && (
                  <span className="text-2xl font-bold text-black">f</span>
                )}

                {item.platform === "instagram" && (
                  <span className="text-2xl">📷</span>
                )}
              </>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <span className="text-xs uppercase tracking-[3px] text-yellow-400">
          {item.category}
        </span>

        <h3 className="mt-2 text-xl font-semibold text-white">{item.title}</h3>

        <p className="mt-3 text-sm text-gray-300">
          Click to explore this collection.
        </p>
      </div>
    </motion.div>
  );
};

export default GalleryCard;
