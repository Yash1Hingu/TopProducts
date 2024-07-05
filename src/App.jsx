import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {

    axios.get("https://json-server.bytexl.app/products ").then(response => {
      setProductList(response.data);
    })

  }, [])

  return (
    <>
      {productList.map(product => <>
        <div>
          <h1>{product.productName}</h1>
        </div>
      </>)}
    </>
  )
}

export default App;
