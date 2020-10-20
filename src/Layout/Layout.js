import React from "react";
import Header from "../Components/Layout/header";

const Layout = props => {
  console.log(props)
  return (
    <>
      <Header />
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
