import { useEffect, useState } from "react";
import AllProducts from "./components/AllProducts";
import axios from "axios";
import { CircularProgress, Typography } from "@mui/material";
import './App.css';

function App() {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get("https://json-server.bytexl.app/products ").then(response => {
      setProductList(response.data);
      setLoading(false);
    })
  }, [])

  return (
    <div className="app">
      {!loading ? <AllProducts
        productListProp={productList}
      /> : <Typography
        variant="h5"
        display="flex"
        gap="12px"
        alignContent="center"
      >
        <CircularProgress /> Loading...
      </Typography>}
    </div>
  )
}

export default App;
