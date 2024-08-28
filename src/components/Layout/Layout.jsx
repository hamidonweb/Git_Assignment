import { Outlet } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import { Toaster } from 'react-hot-toast';

export default function Layout2() {
  return (
    <div>
      {/* <Header logoUrl="/images/logo2.svg" variant="cs_color_2" /> */}
     
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
}
