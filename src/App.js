import Layout from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import BrandsPage from "./components/BrandsPage";
import CategoriesPage from "./components/CategoriesPage";
import OffersPage from "./components/OffersPage"

const BRANDS = ["brand"] 
function App() {
  return (
    <Routes>
        <Route path="/" element ={ <Layout/>}>
          <Route path="/" element={<Homepage/>}/>
          
          <Route path="brands" element={<BrandsPage/>} />

          {BRANDS.map((b,i) => {
              console.log(b)
              return <Route path={b} element={<OffersPage brandName={b}/>}/>
            })}
          
          <Route path="categories" element={<CategoriesPage/>}/>        
        </Route>
    </Routes>
  );
}

export default App;
