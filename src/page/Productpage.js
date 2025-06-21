
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function ProductPage() {
  const { productName } = useParams();
  const [product, setProduct] = useState(null);
  const [allProducts, setAllProducts] = useState([]);
  const [currentImage, setCurrentImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(0);
  const [coupon, setCoupon] = useState("");
  const [discountedPrice, setDiscountedPrice] = useState(null);
  const [couponMessage, setCouponMessage] = useState("");

  useEffect(() => {
    import("../page/data/product").then((mod) => {
      const decodedName = decodeURIComponent(productName).toLowerCase();
      const products = mod.products;
      setAllProducts(products);
      const found = products.find((p) => p.name.toLowerCase() === decodedName);
      setProduct(found);
    });
  }, [productName]);

  if (!product) return <div className="text-center py-20">Loading...</div>;

  const relatedProducts = allProducts.filter(
    (p) => p.category === product.category && p.name !== product.name
  );

  const handleApplyCoupon = () => {
    const validCoupons = {
      SAVE10: 10,
      WELCOME15: 15,
      ALL: 100,
    };

    const basePrice = product.discount
      ? product.price * (1 - product.discount / 100)
      : product.price;

    const discountPercent = validCoupons[coupon.toUpperCase()];

    if (discountPercent) {
      const couponDiscount = (basePrice * discountPercent) / 100;
      const finalPrice = basePrice - couponDiscount;
      setDiscountedPrice(finalPrice);
      setCouponMessage(`🎉 Coupon Applied! Extra ${discountPercent}% off`);
    } else {
      setDiscountedPrice(null);
      setCouponMessage("❌ Invalid coupon code.");
    }
  };

  return (
<div className="max-w-7xl mx-auto px-4 sm:px-6 pt-4 md:pt-6 pb-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-start">
        {/* Thumbnails */}
        <div className="lg:col-span-1 hidden lg:flex flex-col gap-3">
          {product.images?.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Thumbnail ${idx}`}
              onClick={() => {
                setCurrentImage(idx);
                setSelectedColor(idx);
              }}
              className={`w-full object-cover rounded-md cursor-pointer border aspect-square ${currentImage === idx
                  ? "border-indigo-500 ring-2 ring-indigo-300"
                  : "border-gray-200"
                }`}
            />
          ))}
        </div>

        {/* Main Image */}
        <div className="lg:col-span-5 flex items-center justify-center">
          <div className="w-full max-w-md aspect-[3/4] h-auto sm:h-[560px] bg-white p-2 rounded-2xl shadow-xl border border-gray-200">
            <img
              src={product.images?.[currentImage] || product.image}
              alt={product.name}
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        </div>

        {/* Product Details */}
      <div className="lg:col-span-6 space-y-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">{product.name}</h1>

          <div className="flex items-center text-sm text-gray-600">
            <span className="mr-2">({product.reviews?.length || 128} ratings)</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={i < product.rating ? "text-yellow-400" : "text-gray-300"}
                >
                  ★
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="text-lg font-semibold mb-1">Price:</p>
            <div className="flex items-center gap-2 flex-wrap">
              {product.discount ? (
                <>
                  <span className="text-2xl text-red-600 font-bold">
                    ₹{(product.price * (1 - product.discount / 100)).toFixed(2)}
                  </span>
                  <span className="text-lg text-gray-400 line-through">
                    ₹{product.price.toFixed(2)}
                  </span>
                  <span className="text-sm text-green-600 font-medium">
                    ({product.discount}% OFF)
                  </span>
                </>
              ) : (
                <span className="text-2xl text-red-600 font-bold">
                  ₹{product.price.toFixed(2)}
                </span>
              )}
            </div>

            {discountedPrice && (
              <p className="text-green-700 text-sm mt-2 font-semibold">
                Final Price: ₹{discountedPrice.toFixed(2)}
              </p>
            )}
          </div>

          <div className="flex flex-wrap gap-2 items-center">
            <input
              type="text"
              placeholder="Enter Coupon"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
              className="border px-3 py-2 rounded flex-1 md:flex-none w-full md:w-auto"
            />
            <button
              onClick={handleApplyCoupon}
              className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
            >
              Apply
            </button>
          </div>
          {couponMessage && (
            <p className="text-sm mt-2 text-indigo-600">{couponMessage}</p>
          )}

          <div>
            <p className="font-semibold mb-2">Select Size:</p>
            <div className="flex gap-2 flex-wrap">
              {["XS", "S", "M", "L", "XL", "XXL"].map((size, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedSize(size)}
                  className={`px-3 py-1 border rounded text-sm ${selectedSize === size
                      ? "bg-indigo-600 text-white"
                      : "bg-white text-gray-800"
                    }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="font-semibold mb-2">Select Color:</p>
            <div className="flex gap-2 flex-wrap">
              {product.images?.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`Color ${idx}`}
                  onClick={() => {
                    setCurrentImage(idx);
                    setSelectedColor(idx);
                  }}
                  className={`w-10 h-10 object-cover rounded-md cursor-pointer border ${selectedColor === idx
                      ? "border-indigo-500 ring-2 ring-indigo-300"
                      : "border-gray-200"
                    }`}
                />
              ))}
            </div>
          </div>

         <ul className="list-disc text-sm pl-4 space-y-0.5 text-gray-700">
            <li>Soft Fabric, V-Neck, Cap Sleeve</li>
            <li>Embroidered, Ruffle Hem, Peplum Style</li>
            <li>Perfect for Work, Date, Vacation, Holiday</li>
            <li>Model: 175cm / 5'9", Bust: 33", Waist: 24", Hip: 37"</li>
          </ul>

          <div className="flex gap-4 flex-wrap">
            <button className="w-full sm:w-auto px-6 py-2 bg-indigo-600 text-white rounded text-lg hover:bg-indigo-700">
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <section className="mt-16">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-gray-800">Related Products</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {relatedProducts.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-gray-200 shadow p-4 hover:shadow-lg transition"
            >
              {item.discount && (
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
                  {item.discount}% OFF
                </span>
              )}
              <img
                src={item.image}
                alt={item.name}
                className="h-40 w-full object-contain mb-4 rounded"
              />
              <h3 className="font-semibold text-lg text-gray-800">{item.name}</h3>
              <div className="flex items-center mt-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={i < item.rating ? "text-yellow-400" : "text-gray-300"}
                  >
                    ★
                  </span>
                ))}
              </div>
              <p className="text-lg font-bold mb-3 text-red-600">
                ₹{item.discount
                  ? (item.price * (1 - item.discount / 100)).toFixed(2)
                  : item.price.toFixed(2)}
              </p>
              <div className="flex gap-2">
                <button className="flex-1 bg-indigo-600 text-white text-sm py-2 rounded hover:bg-indigo-700 transition">
                  View
                </button>
                <button className="flex-1 bg-gray-200 text-sm py-2 rounded hover:bg-gray-300">
                  Quote
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Embroidery Section */}
<section className="bg-gradient-to-r mb-6 from-indigo-100 to-purple-100 rounded-2xl p-6 sm:p-10 mt-10 shadow-lg pb-8 sm:pb-16">
          <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Custom Embroidery Available</h2>
          <p className="text-gray-700 text-base sm:text-lg mb-6">
            Want your name, logo, or special message embroidered? We offer premium customization tailored to your needs.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 text-left text-gray-700 mb-6">
            {[
              { icon: "🎨", title: "Personalized Designs", desc: "Choose fonts, colors & placements." },
              { icon: "🧵", title: "Premium Thread Work", desc: "High-quality embroidery that lasts." },
              { icon: "🚀", title: "Fast Processing", desc: "Get your customized product quickly." },
            ].map(({ icon, title, desc }, i) => (
              <div className="flex items-start gap-3" key={i}>
                <span className="text-indigo-600 text-xl">{icon}</span>
                <div>
                  <p className="font-semibold">{title}</p>
                  <p className="text-sm">{desc}</p>
                </div>
              </div>
            ))}
          </div>
          <button
            className="bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-medium px-8 py-3 rounded-full transition duration-300 shadow-md"
            onClick={() => window.location.href = "/contact"}
          >
            Enquire Now
          </button>
        </div>
      </section>
    </div>
  );
}

export default ProductPage;
