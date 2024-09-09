import React from 'react'

const Cart = () => {
  return (
    <div className="p-4">
    <h2 className="text-2xl font-bold mb-4">سلة التسوق</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <div key={product.id} className="border rounded-lg p-4 shadow-md">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-40 object-cover rounded-lg mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
          <p className="text-gray-500 mb-2">المساحة: {product.area} متر مربع</p>
          <p className="text-gray-900 font-bold">السعر: {product.price} جنيه</p>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Cart
