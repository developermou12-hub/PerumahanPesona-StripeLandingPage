import React from "react";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import "./App.css";

const App: React.FC = () => {
  return (
    <Layout>
      <Home />
    </Layout>
  );
};

export default App;
