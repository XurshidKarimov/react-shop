import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import React from "react";
import Shop from "./components/Shop";
export default function App() {
  return (
    <React.Fragment>
      <Header />
      <Shop />
      <Footer />
    </React.Fragment>
  );
}
