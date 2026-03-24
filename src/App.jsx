import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/common/Navbar';
import Home from './pages/Home';
import Explore from './pages/Explore';
import PlanTrip from './pages/PlanTrip';
import NotFound from './pages/NotFound';
import Loader from './components/common/Loader';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate AI data loading sequences
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <AnimatePresence mode="wait">
        {loading ? (
          <Loader key="loader" />
        ) : (
          <motion.div
            key="main-app"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="flex flex-col min-h-screen bg-black text-white selection:bg-zinc-800 w-full"
          >
            <Navbar />
            <main className="flex-grow w-full">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/explore" element={<Explore />} />
                <Route path="/plan" element={<PlanTrip />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </Router>
  );
}

export default App;
