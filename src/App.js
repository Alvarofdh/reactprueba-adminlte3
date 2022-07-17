import React from "react";
import {Route,Routes} from "react-router-dom";
import Login from './componets/Login'
import Sales from "./componets/Sales";
import ProductsAdmin from  './componets/products/ProductsAdmin';
import ProductsEdit from './componets/products/ProductsEdit';
import ProductsAdd from './componets/products/ProductsAdd';

function App() {
  return (
      <div className="app">
        <Routes>
           <Route path ="/" element = {<Login/>}></Route>
           <Route path="/sales" element={<Sales />}></Route>
           <Route path="/products" element={<ProductsAdmin />}></Route>
           <Route path="/products/add" element={<ProductsAdd />}></Route>
           <Route path="/products/edit" element={<ProductsEdit />}></Route>
        </Routes>
      </div>
  );
}

export default App;
