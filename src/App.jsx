

import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Error from "./pages/Error";
import Layout from "./pages/Layout";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App(){
    return(
 <div>
    <div className="App">
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Layout/>}>
                  <Route index element={<Home/>}/>
                  <Route path="category" element={<Category/>}/>
                  <Route path="/category/:categoryId" element={<ItemListContainer greeting="Bienvenidos a la Tienda"  />}/>
                  <Route path="/item/:id" element={<ItemDetailContainer  greeting="Detalle de Producto" />} />
                  <Route path="*" element={<Error/>}/>
               </Route>
          </Routes>
      </BrowserRouter>
    </div>
 </div>
    )
}
export default App;