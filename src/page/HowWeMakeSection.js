import { useState, useRef } from "react";
import Modal from "react-modal";
import ReactCompareImage from "react-compare-image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

Modal.setAppElement("#root");

const products = [
  {
    id: 1,
    before: "/img/befor.png",
    after: "/img/after.webp",
    title: "Dog Logo Redesign",
  },
  {
    id: 2,
    before: "/img/befor.png",
    after: "/img/after.webp",
    title: "Cat Logo Design",
  },
  {
    id: 3,
    before: "/img/befor.png",
    after: "/img/after.webp",
    title: "Modern Pet Logo",
  },
  {
    id: 4,
    before: "/img/befor.png",
    after: "/img/after.webp",
    title: "Clean Animal Icon",
  },
];

export default function HowWeMakeSection() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const scrollRef = useRef(null);

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsOpen(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setIsOpen(false);
  };

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -250, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 250, behavior: "smooth" });
  };

  return (
    <section className="bg-white py-16 px-4 sm:px-10 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-sm uppercase text-purple-600 font-semibold tracking-wide">
            How We Make
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900">
            Before & After Transformation
          </h2>
          <p className="text-gray-600 text-md sm:text-lg mt-2">
            See the precision and detail we bring to every project.
          </p>
        </div>

        {/* Scroll Controls */}
        {/* <div className="flex justify-between items-center mb-4 px-2 sm:px-0">
          <button onClick={scrollLeft} className="text-purple-700 hover:text-purple-900">
            <FaArrowLeft size={24} />
          </button>
          <button onClick={scrollRight} className="text-purple-700 hover:text-purple-900">
            <FaArrowRight size={24} />
          </button>
        </div> */}

        {/* Scrollable Items */}
   <div
  ref={scrollRef}
  className="flex gap-4 overflow-x-auto scroll-smooth pb-4 px-2 justify-center sm:justify-center"
  style={{
    WebkitOverflowScrolling: "touch",
    scrollBehavior: "smooth",
  }}
>
  {products.map((item) => (
    <div
      key={item.id}
      onClick={() => openModal(item)}
      className="min-w-[240px] max-w-[240px] sm:min-w-[280px] sm:max-w-[280px] bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg cursor-pointer flex-shrink-0"
    >
      <div className="h-[180px] w-full overflow-hidden rounded-t-xl bg-gray-100 flex items-center justify-center">
        <img
          src={item.after}
          alt={item.title}
          className="h-full w-full object-contain"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "/img/fallback.png";
          }}
        />
      </div>
      <div className="p-4 text-center">
        <h3 className="text-md font-semibold text-gray-800">{item.title}</h3>
        <p className="text-xs text-gray-500">Tap to compare</p>
      </div>
    </div>
  ))}
</div>


        {/* Modal */}
        <Modal
          isOpen={isOpen}
          onRequestClose={closeModal}
          className="w-[95vw] max-w-3xl mx-auto bg-white rounded-xl shadow-xl p-4 sm:p-6 outline-none h-[80vh] flex flex-col justify-center"
          overlayClassName="fixed inset-0 bg-black/50 flex justify-center items-center z-50"
        >
          {selectedProduct && (
            <div className="text-center w-full h-full flex flex-col justify-center">
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">
                {selectedProduct.title}
              </h3>
              <div className="w-full h-[60vh] overflow-hidden rounded-lg border border-gray-200 shadow relative">
                <ReactCompareImage
                  leftImage={selectedProduct.before}
                  rightImage={selectedProduct.after}
                  sliderLineColor="#7e22ce"
                  sliderLineWidth={3}
                  handleSize={30}
                  alt="Comparison"
                  hover={true}
                />
              </div>
              <button
                onClick={closeModal}
                className="mt-6 px-6 py-2 bg-purple-700 text-white text-sm rounded-full hover:bg-purple-800 transition"
              >
                Close
              </button>
            </div>
          )}
        </Modal>
      </div>

      {/* Hide scrollbar style */}
      <style jsx>{`
        ::-webkit-scrollbar {
          height: 6px;
        }
        ::-webkit-scrollbar-thumb {
          background-color: #a855f7;
          border-radius: 10px;
        }
        ::-webkit-scrollbar-track {
          background-color: #f3f4f6;
        }
      `}</style>
    </section>
  );
}
