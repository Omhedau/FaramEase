import React, { useState } from 'react';

const ShareResources = () => {
  const [equipmentName, setEquipmentName] = useState('');
  const [equipmentType, setEquipmentType] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);

  const equipmentTypes = [
    'Tractor',
    'Plow',
    'Seeder',
    'Harvester',
    'Sprayer',
    'Cultivator',
    // Add more options as needed
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="max-w-lg mx-auto mt-8 p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Share Resources</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="equipmentName" className="block text-gray-700 font-semibold mb-2">Equipment Name:</label>
          <input type="text" id="equipmentName" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500" 
            value={equipmentName} onChange={(e) => setEquipmentName(e.target.value)} required />
        </div>
        <div className="mb-4">
          <label htmlFor="equipmentType" className="block text-gray-700 font-semibold mb-2">Equipment Type:</label>
          <select id="equipmentType" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
            value={equipmentType} onChange={(e) => setEquipmentType(e.target.value)} required>
            <option value="" disabled>Select Equipment Type</option>
            {equipmentTypes.map((type, index) => (
              <option key={index} value={type}>{type}</option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 font-semibold mb-2">Description:</label>
          <textarea id="description" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
            value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block text-gray-700 font-semibold mb-2">Price/day:</label>
          <input type="text" id="price" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500" 
            value={price} onChange={(e) => setPrice(e.target.value)} required />
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block text-gray-700 font-semibold mb-2">Image:</label>
          <input type="file" id="image" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500" 
            onChange={(e) => setImage(e.target.files[0])} required />
        </div>
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300">Share</button>
      </form>
    </div>
  );
};

export default ShareResources;
