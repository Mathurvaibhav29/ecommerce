import React, { useContext } from "react";
import Layout from "../../components/layout/Layout"
import MyContext from "../../context/data/MyContext";
function Homepage() {
  const context=useContext(MyContext)
  console.log(context);
  const {name}=context;
  return <Layout>Name:{name}</Layout>;
}

export default Homepage;
