import React, { useState } from 'react';
import { Camera, Facebook, Instagram, Twitter, Menu, X, Filter } from 'lucide-react';

// Navigation Component
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#EAEAEA]/90 backdrop-blur-sm z-40">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-2">
            <Camera className="h-8 w-8 text-gray-900" />
            <span className="text-xl font-bold">Studio Photo</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-900 hover:text-gray-600">Accueil</a>
            <a href="/architecture" className="text-gray-900 hover:text-gray-600">Architecture</a>
            <a href="/automobile" className="text-gray-900 hover:text-gray-600">Automobile</a>
            <a href="/paysage" className="text-gray-900 hover:text-gray-600">Paysage</a>
            <a href="/blog" className="text-gray-900 hover:text-gray-600">Blog</a>
            <a href="/contact" className="text-gray-900 hover:text-gray-600">Contact</a>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </nav>
  );
};

// Architecture Page Component
const ArchitecturePage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('all');

  const images = [
    { 
      id: 1, 
      src: '/placeholder-1.jpg', 
      title: 'Villa Contemporaine',
      type: 'exterieur',
      location: 'Genève, Suisse'
    },
    { 
      id: 2, 
      src: '/placeholder-2.jpg', 
      title: 'Loft Moderne',
      type: 'interieur',
      location: 'Lausanne, Suisse'
    },
    // ... autres images
  ];

  const filteredImages = filter === 'all' ? images : images.filter(img => img.type === filter);

  return (
    <div className="min-h-screen bg-[#EAEAEA]">
      <Navigation />
      
      <main className="pt-20">
        {/* Header */}
        <div className="h-96 relative">
          <img src="/header.jpg" alt="Architecture" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <h1 className="text-6xl font-bold text-white">Architecture</h1>
          </div>
        </div>

        {/* Filter and Grid */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex gap-4 mb-8">
            <button 
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-full ${filter === 'all' ? 'bg-gray-900 text-white' : 'bg-white'}`}
            >
              Tous
            </button>
            <button 
              onClick={() => setFilter('interieur')}
              className={`px-4 py-2 rounded-full ${filter === 'interieur' ? 'bg-gray-900 text-white' : 'bg-white'}`}
            >
              Intérieur
            </button>
            <button 
              onClick={() => setFilter('exterieur')}
              className={`px-4 py-2 rounded-full ${filter === 'exterieur' ? 'bg-gray-900 text-white' : 'bg-white'}`}
            >
              Extérieur
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image) => (
              <div 
                key={image.id}
                onClick={() => setSelectedImage(image)}
                className="cursor-pointer group relative aspect-[4/3] overflow-hidden rounded-lg"
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity p-6">
                  <h3 className="text-white text-xl font-semibold">{image.title}</h3>
                  <p className="text-white/80">{image.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <button 
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white"
          >
            <X size={32} />
          </button>
          <img
            src={selectedImage.src}
            alt={selectedImage.title}
            className="max-w-4xl w-full h-auto"
          />
        </div>
      )}
    </div>
  );
};

export default ArchitecturePage;
