import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { CircularProgress, Typography } from '@mui/material';
import AllProducts from './components/AllProducts';
import ProductDetail from './components/ProductDetail';
import './App.css';

function App() {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get("https://json-server.bytexl.app/products")
      .then(response => {
        setProductList(response.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="app">
      <Typography
        variant='h3'
        display='flex'
        alignItems='center'
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6" width="4rem">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z" />
        </svg>
        Electronics
      </Typography>
      <Router>
        <Routes>
          <Route path="/" element={!loading ? <AllProducts productListProp={productList} /> : <Loading />} />
          <Route path="/product/:id" element={<ProductDetail productList={productList} />} />
        </Routes>
      </Router>
    </div>
  );
}

const Loading = () => (
  <Typography variant="h5" display="flex" gap="12px" alignContent="center">
    <CircularProgress /> Loading...
  </Typography>
);

export default App;
