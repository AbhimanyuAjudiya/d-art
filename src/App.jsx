import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components';
import { Home, GalleryPage } from './pages';

/**
 * D Art Studio - Premium Artwork Showcase Website
 * A quiet gallery — refined, confident, timeless.
 */
function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<GalleryPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
