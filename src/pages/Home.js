import React from 'react';
import Layout from '../components/Layout';
import Products from "./Products";

const Home = () => {
  return (
    <Layout>
      <h2 style={{textAlign: "center"}}>Welcome to the Toolkit-Shop</h2>
      <section>
        <Products />
      </section>
    </Layout>
  )
}

export default Home;