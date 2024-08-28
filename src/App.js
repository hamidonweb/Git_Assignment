import { Route, Routes, useLocation } from 'react-router-dom';
import HomePageV2 from './components/Pages/HomePage';

import Layout2 from './components/Layout/Layout';
import { useEffect } from 'react';
function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <Routes>
    
      <Route path="/" element={<Layout2 />}>
        <Route path="/" element={<HomePageV2 />} />
      </Route>
    
    </Routes>
  );
}

export default App;
