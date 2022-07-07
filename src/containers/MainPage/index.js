import { BrowserRouter } from "react-router-dom";

import Header from '../../components/Header';
import RouterPage from '../RouterPage';
import Footer from '../../components/Footer';

const MainPage = () => {
  return (
    <BrowserRouter>
      <Header />
      <RouterPage />
      <Footer />
    </BrowserRouter>
  );
}

export default MainPage;