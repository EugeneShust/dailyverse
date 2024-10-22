import { Outlet } from 'react-router-dom';

import { Header, Footer } from "./index"

export const MainLayout = () => {
    return (
      <>
        <Header />
        <div className="container mx-auto">
          <Outlet />
        </div>
        <Footer />
      </>
    );
  };