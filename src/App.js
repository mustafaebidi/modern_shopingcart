

import { Fragment } from "react";
import {

  Routes,
  Route,
  useLocation,
  Navigate

} from "react-router-dom";
import Alert from "./components/alret/alret";
import Navbar from "./components/navbar/navbar";
import Beginning from "./pages/beginning/beginning";
import Cart from "./pages/cart/cart";
import Error from "./pages/error/error";
import Favorite from "./pages/favorite/favorite";
import Home from "./pages/home/home";
import Singleproduct from "./pages/singleProduct/singleProduct"



function App() {

  const location =useLocation()





  return (


      <Fragment>

        {location.pathname === "/home" ?<Navbar show={true}/> :<Navbar show={false}/>}
        <Alert />


        <Routes>

                <Route path="/" element={<Navigate to="/beginning" />} />
                <Route path="/home" element={<Home/>}/>
                <Route path="/favorite" element={<Favorite />} />
                <Route path="/cart" element={<Cart/>} />

                <Route path="/item/:id" element={<Singleproduct />} />
                <Route path="/beginning" element={<Beginning />} />
                <Route path="/error" element={<Error />} />




        </Routes>
      
      
      </Fragment>

    




  );
}

export default App;
