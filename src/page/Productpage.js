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

  const [showModal, setShowModal] = useState(false);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [submitMessage, setSubmitMessage] = useState("");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    import("../page/data/product").then((mod) => {
      const decodedName = decodeURIComponent(productName).toLowerCase();
      const products = mod.products;
      setAllProducts(products);
      const found = products.find((p) => p.name.toLowerCase() === decodedName);
      setProduct(found);
    });
  }, [productName]);

  if (!product) return <div className="text-center py-20">Loading...</div>;

  const handleApplyCoupon = () => {
    const validCoupons = { SAVE10: 10, WELCOME15: 15, ALL: 100 };
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

  const handleBuyNowClick = () => setShowModal(true);

  const handleFormSubmit = async () => {
    if (!userName || !userEmail || !userPhone) {
      setSubmitMessage("❌ Please fill all fields.");
      return;
    }

    const payload = {
      user_name: userName.trim(),
      user_email: userEmail.trim(),
      user_phone: userPhone.trim(),
      product_name: product?.name || "Unknown",
      product_image: product?.images?.[currentImage] || product?.image || "",
      product_price: product?.price || 0,
      coupon_used: coupon || "None",
      discounted_price:
        discountedPrice || (product?.price * (1 - (product?.discount || 0) / 100)).toFixed(2),
      selected_size: selectedSize || "Not selected",
      selected_color_image: product?.images?.[selectedColor] || "",
    };

    try {
      await fetch("https://script.google.com/macros/s/AKfycbxevhhLCIjAHruuD6kxIv47okHYl-KG9vzb_OwRM5ldKXzTAPQc4Ith-C_Vb-EceLT7/exec", {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      setSubmitMessage("✅ Submitted successfully!");
      setShowModal(false);
      setUserName("");
      setUserEmail("");
      setUserPhone("");
    } catch (err) {
      console.error(err);
      setSubmitMessage("❌ Submission failed. Try again.");
    }
  };


  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-4 md:pt-6 pb-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-start">
        {/* Thumbnail Images */}
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
              className={`w-full object-cover rounded-md cursor-pointer border aspect-square ${
                currentImage === idx
                  ? "border-indigo-500 ring-2 ring-indigo-300"
                  : "border-gray-200"
              }`}
            />
          ))}
        </div>

        {/* Main Image */}
        <div className="lg:col-span-5 flex items-center justify-center">
          <div className="hidden sm:block w-full max-w-md aspect-[3/4] bg-white p-3 rounded-2xl shadow-xl border border-gray-200">
            <img
              src={product.images?.[currentImage] || product.image}
              alt={product.name}
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <div className="block sm:hidden w-[320px] h-[440px] bg-white p-3 rounded-2xl shadow-xl border border-gray-200 overflow-x-auto scroll-smooth snap-x snap-mandatory">
            <div className="flex h-full gap-x-4">
              {product.images?.map((img, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 w-[280px] h-full snap-center"
                  onClick={() => {
                    setCurrentImage(idx);
                    setSelectedColor(idx);
                  }}
                >
                  <img
                    src={img}
                    alt={`Product Image ${idx}`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              ))}
              <div className="flex-shrink-0 w-[20px]"></div>
            </div>
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

          {/* Price */}
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

          {/* Coupon Input */}
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

          {/* Size Selector */}
          <div>
            <p className="font-semibold mb-2">Select Size:</p>
            <div className="flex gap-2 flex-wrap">
              {["XS", "S", "M", "L", "XL", "XXL"].map((size, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedSize(size)}
                  className={`px-3 py-1 border rounded text-sm ${
                    selectedSize === size
                      ? "bg-indigo-600 text-white"
                      : "bg-white text-gray-800"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Color Selector */}
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
                  className={`w-10 h-10 object-cover rounded-md cursor-pointer border ${
                    selectedColor === idx
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

          {/* Buy Now Button */}
          <div className="flex gap-4 flex-wrap">
            <button
              className="w-full sm:w-auto px-6 py-2 bg-indigo-600 text-white rounded text-lg hover:bg-indigo-700"
              onClick={handleBuyNowClick}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* MODAL */}
  {showModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center px-4">
          <div className="bg-white rounded-lg max-w-lg w-full p-6 relative shadow-xl">
            <button onClick={() => setShowModal(false)} className="absolute top-2 right-3 text-xl text-gray-500 hover:text-red-500">×</button>
            <h3 className="text-xl font-bold mb-4 text-gray-800">Complete Your Order</h3>
            <div className="flex gap-4 mb-4">
              <img src={product?.images?.[selectedColor]} alt="Selected" className="w-24 h-24 rounded object-cover" />
              <div>
                <p className="font-semibold">{product?.name}</p>
                {selectedSize && <p>Size: {selectedSize}</p>}
                <p>Color #{selectedColor + 1}</p>
                <p className="text-red-600 font-semibold">
                  ₹{discountedPrice || (product?.price * (1 - (product?.discount || 0) / 100)).toFixed(2)}
                </p>
              </div>
            </div>
            <div className="space-y-3">
              <input type="text" placeholder="Your Name" value={userName} onChange={(e) => setUserName(e.target.value)} className="w-full border px-4 py-2 rounded" />
              <input type="email" placeholder="Your Email" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} className="w-full border px-4 py-2 rounded" />
              <input type="tel" placeholder="Your Phone Number" value={userPhone} onChange={(e) => setUserPhone(e.target.value)} className="w-full border px-4 py-2 rounded" />
              <button className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700" onClick={handleFormSubmit}>
                Submit Order
              </button>
              {submitMessage && <p className="text-sm text-center text-indigo-600 mt-2">{submitMessage}</p>}
            </div>
          </div>
        </div>
      )}
    
    
    
      
    </div>
  );
}

export default ProductPage;
