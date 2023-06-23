import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from "../components/Layout";

const PageNotFound = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate("/");
  }
  return (
    <Layout>
      <div style={{display: "flex", height: "60vh", flexDirection: "column", alignItems: "center", justifyContent: "center", color: "red"}}>
        <h1>404</h1>
        <h5>Page Not Found!</h5>
        <br />
        <button style={{padding: "5px 10px"}} onClick={()=> handleGoBack()}>Go Back</button>
    </div>
    </Layout>
    
  )
}

export default PageNotFound;