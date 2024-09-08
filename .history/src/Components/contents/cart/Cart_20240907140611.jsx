import React from "react";
import img from "../../../assets/available/image10.jpg"
const Cart = () => {
  const products = [
    {
      id: 1,
      name: "فيلا فاخرة",
      area: 300,
      price: 5000000,
      image: {img}, // ضع رابط الصورة الصحيح هنا
    },
    {
      id: 2,
      name: "شقة",
      area: 120,
      price: 1000000,
      image: "https://example.com/apartment.jpg",
    },
    {
      id: 3,
      name: "بيت مستقل",
      area: 200,
      price: 3000000,
      image: "https://example.com/house.jpg",
    },
  ];
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">سلة الوحدات المفضلة</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg p-4 shadow-md">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
            <div className="grid grid-cols-2">
              {" "}
              <p className="text-gray-500 mb-2">
                المساحة: {product.area} متر مربع
              </p>
              <p className="text-gray-500 mb-2">
                المساحة: {product.area} متر مربع
              </p>
              <p className="text-gray-500 mb-2">
                المساحة: {product.area} متر مربع
              </p>
              <p className="text-gray-500 mb-2">
                المساحة: {product.area} متر مربع
              </p>
              <p className="text-gray-500 mb-2">
                المساحة: {product.area} متر مربع
              </p>
              <p className="text-gray-900 font-bold">
                السعر: {product.price} جنيه
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
