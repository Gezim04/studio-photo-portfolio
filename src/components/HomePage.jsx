import React from 'react';

const CategorySection = ({ title, description, imagePath, link }) => (
  <a 
    href={link}
    className="block relative w-full h-screen/3 overflow-hidden group cursor-pointer"
  >
    <img
      src={imagePath}
      alt={title}
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <div className="absolute bottom-0 left-0 p-8 text-white">
        <h2 className="text-4xl font-bold mb-2">{title}</h2>
        <p className="text-lg">{description}</p>
      </div>
    </div>
  </a>
);

const HomePage = () => {
  const categories = [
    {
      title: 'Architecture',
      description: 'Designs modernes et espaces contemporains',
      imagePath: '/architecture.jpg',
      link: '/architecture'
    },
    {
      title: 'Automobile',
      description: 'Véhicules d\'exception sous leur meilleur angle',
      imagePath: '/automobile.jpg',
      link: '/automobile'
    },
    {
      title: 'Paysage',
      description: 'Capturez la beauté naturelle du monde',
      imagePath: '/paysage.jpg',
      link: '/paysage'
    }
  ];

  return (
    <div className="min-h-screen">
      {categories.map((category, index) => (
        <CategorySection key={index} {...category} />
      ))}
    </div>
  );
};

export default HomePage;