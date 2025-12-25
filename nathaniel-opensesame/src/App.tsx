import { Routes, Route } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Home } from '@/pages/Home';
import { Demo } from '@/pages/Demo';
import { useScrollToHash } from '@/lib/scroll';

function App() {
  useScrollToHash();
  return (
    <div className="flex min-h-screen flex-col font-sans">
      <a href="#why" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-[100] px-4 py-2 bg-slate-900 text-white rounded-md">Skip to content</a>
      <Navbar />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/demo" element={<Demo />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
export default App;
