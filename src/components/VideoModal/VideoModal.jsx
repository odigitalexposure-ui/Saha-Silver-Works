import { useEffect } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const VideoModal = ({ video, onClose }) => {
  // Disable background scroll
  useEffect(() => {
    document.body.style.overflow = video ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [video]);

  // ESC close
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
          className="
            fixed
            inset-0
            z-[99999]
            flex
            items-center
            justify-center
            bg-black/90
            backdrop-blur-md
            px-4
            pt-32
            pb-10
          "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="
              relative
              w-full
              max-w-3xl
              mt-10
            "
            initial={{
              scale: 0.92,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            exit={{
              scale: 0.92,
              opacity: 0,
            }}
            transition={{
              duration: 0.35,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={onClose}
              className="
                absolute
                top-4
                right-4
                z-[999999]
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                bg-white
                text-black
                shadow-xl
                hover:bg-red-500
                hover:text-white
                transition-all
                duration-300
                hover:scale-110
              "
            >
              <X size={24} />
            </button>

            {/* VIDEO CARD */}
            <div
              className="
                rounded-3xl
                border
                border-white/20
                bg-zinc-900
                p-3
                shadow-2xl
              "
            >
              <div
                className="
                  relative
                  w-full
                  h-[55vh]
                  md:h-[65vh]
                  overflow-hidden
                  rounded-2xl
                  bg-black
                "
              >
                {/* YouTube */}
                {video.type === "video" && (
                  <iframe
                    className="
                      absolute
                      inset-0
                      h-full
                      w-full
                    "
                    src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1&rel=0`}
                    title={video.title}
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                  />
                )}

                {/* Local Video */}
                {video.type === "local-video" && (
                  <video
                    className="
                      h-full
                      w-full
                      object-contain
                      bg-black
                    "
                    controls
                    autoPlay
                  >
                    <source src={video.video} type="video/mp4" />
                    Your browser does not support video.
                  </video>
                )}
              </div>
            </div>

            {/* TITLE */}
            <div className="mt-5 text-center">
              <h3
                className="
                  text-xl
                  md:text-2xl
                  font-semibold
                  text-white
                "
              >
                {video.title}
              </h3>

              {video.category && (
                <p
                  className="
                    mt-1
                    text-sm
                    text-gray-300
                  "
                >
                  {video.category}
                </p>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VideoModal;
