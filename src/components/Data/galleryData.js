import art_work from "../../assets/art_work.mp4";
import location_vid from "../../assets/location_vid.mp4";

import { assets } from "../../assets/assets";

const galleryData = [
  // ================= YouTube =================
  {
    id: 1,
    type: "video",
    platform: "youtube",

    title: "SAHA SILVER WORKS Collection",
    category: "Featured Video",

    videoId: "0qQtS5Lsvuc",

    thumbnail: "https://img.youtube.com/vi/0qQtS5Lsvuc/hqdefault.jpg",
  },

  {
    id: 2,
    type: "video",
    platform: "youtube",

    title: "SAHA SILVER WORKS Collection",
    category: "Featured Video",

    videoId: "-EW29rmnVmg",

    thumbnail: "https://img.youtube.com/vi/-EW29rmnVmg/hqdefault.jpg",
  },

  {
    id: 3,
    type: "video",
    platform: "youtube",

    title: "SAHA SILVER WORKS Collection",
    category: "Featured Video",

    videoId: "0qQtS5Lsvuc",
    thumbnail: "https://youtu.be/0qQtS5Lsvuc?si=0wWZNMLYCLllxW0c",
  },

  // ================= Facebook =================
  {
    id: 4,
    type: "external",
    platform: "facebook",

    title: "Customer Showcase",
    category: "Facebook Video",

    url: "https://www.facebook.com/share/v/14ixjYhdvkr/",

    thumbnail: "/gallery/facebook1.jpg",
  },

  {
    id: 5,
    type: "external",
    platform: "facebook",

    title: "Silver Jewellery Collection",
    category: "Facebook Video",

    url: "https://www.facebook.com/share/v/17ijcKNrYG/",

    thumbnail: "/gallery/facebook2.jpg",
  },

  {
    id: 6,
    type: "external",
    platform: "facebook",

    title: "Latest Silver Collection",
    category: "Facebook Video",

    url: "https://www.facebook.com/share/v/1DU6N5aCRb/",

    thumbnail: "/gallery/facebook2.jpg",
  },

  {
    id: 7,
    type: "external",
    platform: "facebook",

    title: "Latest Collection",
    category: "Facebook Video",

    url: "https://www.facebook.com/share/v/14ixjYhdvkr/",

    thumbnail: "/gallery/facebook2.jpg",
  },

  {
    id: 7,
    type: "external",
    platform: "facebook",

    title: "Latest Collection",
    category: "Facebook Video",

    url: "https://www.facebook.com/share/v/14ixjYhdvkr/",

    thumbnail: "/gallery/facebook2.jpg",
  },

  // ================= Instagram =================
  {
    id: 8,
    type: "external",
    platform: "instagram",

    title: "Garanhata Market",
    category: "Instagram Reel",

    url: "https://www.instagram.com/reel/DZ_-PD7xUxL/?igsh=enNrZXFpcXdhZDY2",

    thumbnail: "/gallery/instagram1.jpg",
  },

  // ================= Local Video =================
  {
    id: 9,
    type: "local-video",
    platform: "local",

    title: "Art Work",
    category: "Workshop Video",

    video: art_work,

    thumbnail: "/gallery/images/news_img.jpeg",
  },

  {
    id: 10,
    type: "local-video",
    platform: "local",

    title: "Location Visit",
    category: "Store Location",

    video: location_vid,

    thumbnail: "/gallery/images/reporter_img.jpeg",
  },

  // ================= Instagram =================
  {
    id: 11,
    type: "external",
    platform: "instagram",

    title: "Silver Jewellery Reel",
    category: "Instagram Reel",

    url: "https://www.instagram.com/reel/DZ_-PD7xUxL/?igsh=enNrZXFpcXdhZDY2",

    thumbnail: "/gallery/instagram1.jpg",
  },
  // ================= Local Video =================
  {
    id: 12,
    // type: "local-video",
    type: "local-image",
    platform: "local",

    title: "Art Work",
    // category: "Workshop Video",

    // video: art_work,

    thumbnail: assets.news_img,
  },

  {
    id: 13,
    // type: "local-video",
    type: "local-image",
    platform: "local",

    title: "Location Visit",
    // category: "Store Location",

    // video: location_vid,

    thumbnail: assets.reporter_img,
  },
];

export default galleryData;
