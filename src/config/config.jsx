import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import { Fragment } from "react";
import App from "../App";
import Blog from "../pages/Blog/Blog";

const Ways = () => {
  
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route path="/portfolio/" element={<App />} />
          <Route path="/portfolio/Blog" element={<Blog />} />
        </Routes>
      </Fragment>
    </BrowserRouter> 
  );
};

export default Ways;
