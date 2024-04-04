import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import HomeScreen from './pages/home';
import AboutScreen from './pages/about';
import ProductScreen from './pages/product';
import ErrorScreen from './pages/404';

import './assets/foundation.css'
import SiteSharedLayout from './layout';
import DashboardSharedLayout from './layout/dahboard';
import ProductListScreen from './pages/products';
import SingleProductScreen from './pages/products/single-product';

const DashboardHome = () => {
  return <>
    <h1>Home Dashboard</h1>
    <p>lorm ipsum</p>
  </>
}


function App() {
  return (<>

    <BrowserRouter>

      <Routes>
        <Route path="/" element={<SiteSharedLayout />} >
          <Route index element={<HomeScreen />} />
          <Route
            path="about"
            element={<AboutScreen />} />
          <Route path='*' element={<ErrorScreen />} />
          <Route
            path="product"
            element={<ProductScreen />} />
          <Route
            path="gallery"
            element={<h1>Gallery page</h1>} />

          <Route path='/products'>
            <Route index element={<ProductListScreen />} />
            <Route path='single-product/:productId' element={<SingleProductScreen/>} />
          </Route>
          
        </Route>



        <Route path='/dashboard' element={<DashboardSharedLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path='profile' element={<h2>profile</h2>} />
          <Route path='setting' element={<h2>settings</h2>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
