import { useEffect } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const VideoModal = ({ video, onClose }) => {
  // Disable background scroll
  useEffect(() => {
    if (video) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [video]);

  // Close on ESC
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      {video && (
        <motion.div
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/90 backdrop-blur-md p-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.35 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl"
          >
            {/* Close Button */}

            <button
              onClick={onClose}
              className="absolute right-1 top-64 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-black/70 text-white backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:bg-red-500"
            >
              <X size={22} />
            </button>

            {/* Video */}

            <div className="overflow-hidden rounded-3xl border border-white/20 bg-black shadow-2xl">
              <div className="relative aspect-video">
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1&rel=0`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VideoModal;
