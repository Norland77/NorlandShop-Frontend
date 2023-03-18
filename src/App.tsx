import React, {useState} from 'react';
import Header from "./components/Header/Header";
import CardsList from "./pages/CardsList/CardsList";
import {Routes, Route} from "react-router-dom";
import CategoryPages from "./pages/CategoryPages/CategoryPages";
import {Provider} from "react-redux";
import {store} from "./store";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import BasketPage from "./pages/BasketPage/BasketPage";
import {useTelegram} from "./hooks/useTelegram";

const App = () => {
    const {tg} = useTelegram()
    tg.expand();
  return (
          <Provider store={store}>
              <Routes>
                  <Route path="/" element={<Header/>}>
                      <Route path="/" element={<CardsList />}/>
                      <Route path="/dishes" element={<CategoryPages idCategory={"67"}/>}/>
                      <Route path="/gadgets" element={<CategoryPages idCategory = {"68"}/>}/>
                      <Route path="/accessories" element={<CategoryPages idCategory = {"69"}/>}/>
                      <Route path="/sets" element={<CategoryPages idCategory = {"86"}/>}/>
                      <Route path="/souvenir" element={<CategoryPages idCategory = {"71"}/>}/>
                      <Route path={"/basket"} element={<BasketPage />}/>
                      <Route path="*" element={<PageNotFound />}/>
                  </Route>
              </Routes>
          </Provider>
  );
};

export default App;
