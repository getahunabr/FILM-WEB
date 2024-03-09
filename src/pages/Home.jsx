import React from "react";
import Header from "../Components/Header/Header.jsx";
import Footer from "../Components/Footer/Footer.jsx";
import Banner from "../Components/Banner/Banner.jsx";
import RowsList from "../Components/Row/RowList/RowList.jsx";

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <RowsList />
      <Footer />
    </>
  );
};

export default Home;
