import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [productList, setProductList] = useState([]);
  const [searchProduct, setSearchProduct] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      setLoading(true);
      const productData = await fetch(`https://fakestoreapi.com/products`);
      const result = await productData.json();
      setProductList(result);
      console.log("result:", result);
    } catch (error) {
      console.log("Unable to fetch the Data ", message.error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredProducts = productList.filter((product) =>
    product.title.toLowerCase().includes(searchProduct.toLowerCase()),
  );

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">product List</h2>
      <input
        type="text"
        className="form-control mb-4"
        placeholder="Search Product..."
        value={searchProduct}
        onChange={(e) => setSearchProduct(e.target.value)}
        required
      />
      {loading ? (
        <div className="text-center">
          <div className="spinner-border"></div>
        </div>
      ) : (
        <div className="row">
          {filteredProducts.map((product) => (
            <div
              className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
              key={product.id}
            >
              <div className="card h-100">
                <img
                  src={product.image}
                  alt={product.title}
                  className="card-img-top p-3"
                  style={{
                    height: "250px",
                    objectFit: "contain",
                  }}
                />

                <div className="card-body">
                  <h6>{product.title}</h6>

                  <p>
                    <strong>Price:</strong> ${product.price}
                  </p>

                  <p>
                    <strong>Category:</strong>
                    {product.category}
                  </p>

                  <p>
                    <strong>Rating:</strong>
                    {product.rating?.rate || "N/A"} ⭐
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
