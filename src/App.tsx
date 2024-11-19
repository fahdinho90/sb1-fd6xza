import React, { useState } from 'react';
import { Scale } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import NotaryCard from './components/NotaryCard';
import ServiceCard from './components/ServiceCard';
import Navigation from './components/Navigation';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import { notaries } from './data/notaries';
import { services } from './data/services';

function Home() {
  const [searchResults, setSearchResults] = useState<any>(null);

  const handleSearch = (query: string) => {
    if (!query.trim()) {
      setSearchResults(null);
      return;
    }

    const results = notaries.filter(notary => 
      notary.name.toLowerCase().includes(query.toLowerCase()) ||
      notary.address.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <>
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-6">
            <Scale className="w-12 h-12" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Notaires au Maroc
          </h1>
          <p className="text-xl text-center mb-12 text-blue-100">
            Trouvez un notaire professionnel près de chez vous
          </p>
          <SearchBar onSearch={handleSearch} />
        </div>
      </header>

      {searchResults && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-semibold mb-6">
              {searchResults.length} Résultats trouvés
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {searchResults.map((notary: any) => (
                <NotaryCard key={notary.id} notary={notary} />
              ))}
            </div>
          </div>
        </section>
      )}

      {!searchResults && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Nos Services Notariaux
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map(service => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <footer className="bg-gray-800 text-white py-8">
          <div className="container mx-auto px-4 text-center">
            <p>© {new Date().getFullYear()} Notaire-Maroc. Tous droits réservés.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;