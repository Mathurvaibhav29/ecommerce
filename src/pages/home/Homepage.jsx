import React, { useContext } from "react";
import Layout from "../../components/layout/Layout"
import MyContext from "../../context/data/MyContext";
import HeroSection from "../../components/heroSection/HeroSection";
import Filter from "../../components/filter/Filter"
import ProductCard from "../../components/productCard/ProductCard";
function Homepage() {
  const context=useContext(MyContext)
  console.log(context);
  const {name}=context;
  return (
<Layout>
    <HeroSection/>
    <Filter/>
    <ProductCard/>
  </Layout>
  )
}

export default Homepage;
