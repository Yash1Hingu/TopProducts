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
