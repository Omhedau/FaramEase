import React from 'react';

const Rent = () => {
  // Sample product data
  const products = [
    { id: 1, name: 'Product 1', image: '../src/assets/machine1.jpeg', price: '500', location: 'Nagzari, Maharashtra', rating: 4.5 },
    { id: 2, name: 'Product 2', image: '../src/assets/machine2.jpeg', price: '1000', location: 'Ashti, Maharashtra', rating: 4.0 },
    { id: 3, name: 'Product 3', image: '../src/assets/machine3.jpeg', price: '800', location: 'Pargaon, Maharashtra', rating: 3.8 },
    { id: 4, name: 'Product 4', image: '../src/assets/machine4.jpeg', price: '800', location: 'Ghot, Maharashtra', rating: 4.2 },
    { id: 5, name: 'Product 5', image: '../src/assets/machine5.jpeg', price: '800', location: 'Vihir, Maharashtra', rating: 4.6 }
    // Add more products as needed
  ];

  return (
    <div className="container1 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <div key={product.id} className="card bg-white rounded-lg overflow-hidden shadow-lg border border-gray-200">
          <img className="w-full h-48 object-cover" src={product.image} alt={product.name} />
          <div className="p-4">
            <p className="text-xl font-semibold mb-2">{product.name}</p>
            <p className="text-gray-700">${product.price}</p>
            <p className="text-gray-600">Location: {product.location}</p>
            <p className="text-gray-600">Rating: {product.rating}</p>
            <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
              Rent Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Rent;
