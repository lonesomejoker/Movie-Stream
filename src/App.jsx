import React from "react";
import "./App.css";

import GenreMovieList from "./components/GenreMovieList";
import Header from "./components/Header";
import MultipleSlide from "./components/MultipleSlide";
import ProductionHouse from "./components/ProductionHouse";
import Series from "./components/Series";
import { Drawer,ConfigProvider, Layout } from "antd";
import Favourites from "./user/Favourites";
import { Content } from "antd/es/layout/layout";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

const App = () => {
  const [open, setOpen] = React.useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  
  return (
    <Layout>
    <div className=" bg-gradient-to-r from-zinc-600 via-neutral-800 to-black 
    font-varela scrollbar-hide max-w-full">
      <Header showDrawer={showDrawer}/>
      <ConfigProvider theme={{
      token: {
        // Seed Token
        colorBgBase:"rgb(23 23 23)",
         colorText:"white"
        },
      }}>
      <div>
        {open && (
          <Drawer title="Your Favourites" onClose={onClose} open={open} 
          >
           <Favourites/>
          </Drawer>
        )}
      </div>
      </ConfigProvider>
      <Content className=" mt-16">
      <Outlet/>
      <MultipleSlide />
      <ProductionHouse />
      <GenreMovieList />
      </Content>
      
    </div>
     <Footer/>
    </Layout>

  );
};

export default App;
