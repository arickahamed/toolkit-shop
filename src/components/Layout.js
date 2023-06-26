import React from 'react';
import ScrollToTop from 'react-scroll-to-top';
import "../style/Layout.css";
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({children}) => {
  return (
    <div className='layout'>
        <Navbar />
        <ScrollToTop smooth/>
        <main>
            {children}
        </main>
        <div className="layout-footer">
        <Footer />
        </div>
    </div>
  )
}

export default Layout