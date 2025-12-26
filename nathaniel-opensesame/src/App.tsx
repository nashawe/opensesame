import { Routes, Route } from 'react-router-dom';
import { General } from '@/pages/General';
import { OpenSesame } from '@/pages/OpenSesame';
import { Demo } from '@/pages/Demo';
import { useScrollToHash } from '@/lib/scroll';

function App() {
  useScrollToHash();
  return (
    <div className="font-sans">
      <a href="#intro" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-[100] px-4 py-2 bg-slate-900 text-white rounded-md">Skip to content</a>
      <Routes>
        <Route path="/" element={<General />} />
        <Route path="/opensesame" element={<OpenSesame />} />
        <Route path="/demo" element={<Demo />} />
      </Routes>
    </div>
  );
}
export default App;
