import React from "react";

function ProductGrid({ option }) {
  if (option == "inStock") {
    return <div>In stock</div>;
  } else {
    return <div>ORDER</div>;
  }
}

export default ProductGrid;
