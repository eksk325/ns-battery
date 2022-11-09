import { useState, useEffect } from "react";
import styles from "../styles/Products.module.css";
import ProductGrid from "../js/ProductGrid";

function Products() {
  const [option, setOption] = useState("inStock");
  const [batteries, setBatteries] = useState(null);

  useEffect(() => {
    const fetchBatteries = async () => {
      const response = await fetch("api/batteries");
      const json = await response.json();

      if (response.ok) {
        setBatteries(json);
      }
    };

    fetchBatteries();
  }, []);

  return (
    <div>
      <h1 className={styles.title}> Products</h1>
      <div className={styles.buttonContainer}>
        <div className={styles.switcher}>
          <button
            style={{
              textAlign: "right",
              fontWeight: option == "inStock" ? "bold" : "normal",
            }}
            onClick={() => setOption("inStock")}
          >
            In stock
          </button>
          <p>|</p>
          <button
            style={{
              textAlign: "left",
              fontWeight: option == "order" ? "bold" : "normal",
            }}
            onClick={() => setOption("order")}
          >
            Order available
          </button>
        </div>
      </div>
      <div>
        {batteries &&
          batteries.map((battery) => (
            <p key={battery.productID}>{battery.name}</p>
          ))}
      </div>
      <ProductGrid option={option} />
    </div>
  );
}

export default Products;
