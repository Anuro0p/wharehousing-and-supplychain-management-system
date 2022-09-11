import { CircularProgress } from '@mui/material';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/home.page';
import SignIn from './pages/sign-in/sign-in.page';
import { RouteAuthentication } from './shared/auth/route-authentication/route-authentication.auth';

const Wharehouse = React.lazy(
  () => import('./features/wharehouse/wharehouse.feature')
);
const SingleProduct = React.lazy(
  () => import('./features/signle-product/single-product.feature')
);
const Products = React.lazy(
  () => import('./features/products/products.feature')
);

function App() {
  const fallbackClasses =
    'w-full h-[50vh] flex items-center justify-center text-center';
  return (
    <Routes>
      <Route path='/' element={<Home />}>
        <Route
          path='wharehouse'
          element={
            <React.Suspense
              fallback={
                <div className={fallbackClasses}>
                  <CircularProgress />
                </div>
              }
            >
              <RouteAuthentication>
                <Wharehouse />
              </RouteAuthentication>
            </React.Suspense>
          }
        />
        <Route
          path='products'
          element={
            <React.Suspense
              fallback={
                <div className={fallbackClasses}>
                  <CircularProgress />
                </div>
              }
            >
              <RouteAuthentication>
                <Products />
              </RouteAuthentication>
            </React.Suspense>
          }
        />
        <Route
          path='products/:id'
          element={
            <React.Suspense
              fallback={
                <div className={fallbackClasses}>
                  <CircularProgress />
                </div>
              }
            >
              <RouteAuthentication>
                <SingleProduct />
              </RouteAuthentication>
            </React.Suspense>
          }
        />
      </Route>
      <Route path='/sign-in' element={<SignIn />}></Route>
    </Routes>
  );
}

export default App;
