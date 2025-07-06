import React, { useState } from "react";

const galleryImages = [
  { id: 1, url: "/img/em1.jpg", title: "Floral Embroidery Design", category: "Embroidery Digitizing" },
  { id: 2, url: "/img/g1.jpg", title: "Modern Vector Art", category: "Vector Art Conversion" },
  { id: 3, url: "/img/em3.jpg", title: "Traditional Stitch Pattern", category: "Embroidery Digitizing" },
  { id: 4, url: "/img/g3.jpg", title: "Digital Vector Design", category: "Vector Art Conversion" },
  { id: 5, url: "/img/g4.jpg", title: "Digital Vector Design", category: "Vector Art Conversion" },
  { id: 6, url: "/img/g6.jpg", title: "Digital Vector Design", category: "Vector Art Conversion" },
  { id: 7, url: "/img/g7.jpg", title: "Digital Vector Design", category: "Vector Art Conversion" },
  { id: 8, url: "/img/g10.jpg", title: "Digital Vector Design", category: "Vector Art Conversion" },
  { id: 9, url: "/img/8.jpg", title: "Digital Vector Design", category: "Vector Art Conversion" },
  { id: 11, url: "/img/em4.jpg", title: "Floral Embroidery Design", category: "Embroidery Digitizing" },
  { id: 12, url: "/img/em6.jpg", title: "Floral Embroidery Design", category: "Embroidery Digitizing" },
  { id: 13, url: "/img/em7.jpg", title: "Floral Embroidery Design", category: "Embroidery Digitizing" },
  { id: 14, url: "/img/em9.jpg", title: "Floral Embroidery Design", category: "Embroidery Digitizing" },
];

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxImage, setLightboxImage] = useState(null);

  const filteredImages =
    selectedCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-[#4B4FCA] via-purple-800 to-pink-600 py-20 px-4 text-center shadow">
        <h1 className="text-5xl font-bold text-white mb-4">Our Premium Designs</h1>
        <p className="text-lg text-white max-w-xl mx-auto">
          Browse embroidery and vector art conversion — crafted with passion and precision.
        </p>
      </header>

      <div className="max-w-7xl mx-auto px-4 mt-8 pb-16">
        {/* Top Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {["All", "Embroidery Digitizing", "Vector Art Conversion"].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium text-sm transition duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-[#4B4FCA] via-purple-800 to-pink-600 text-white shadow"
                  : "bg-gray-200 text-gray-800 hover:bg-gradient-to-r hover:from-[#4B4FCA] hover:via-purple-800 hover:to-pink-600 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              onClick={() => setLightboxImage(image)}
              className="relative bg-white rounded-2xl overflow-hidden shadow-lg cursor-pointer group transform hover:-translate-y-2 transition duration-500"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-72 object-cover group-hover:scale-110 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 rounded-2xl"></div>
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition duration-700">
                <h2 className="text-2xl font-bold drop-shadow">{image.title}</h2>
                <p className="text-sm drop-shadow">{image.category}</p>
              </div>
            </div>
          ))}
        </main>
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setLightboxImage(null)}
        >
          <div
            className="relative w-full max-w-2xl mx-4 p-4 bg-white rounded-xl shadow-2xl animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightboxImage.url}
              alt={lightboxImage.title}
              className="w-full h-auto max-h-[80vh] object-contain rounded"
            />
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-3 right-3 text-black text-3xl hover:scale-110 transition"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
