
import React from "react";
import PropTypes from "prop-types";
import Navbar from "./global/Navbar";
import Footer from "./global/Footer";
import "./layout.css";
import "./bootstrap.min.css";
const Layout = ({ children }) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;