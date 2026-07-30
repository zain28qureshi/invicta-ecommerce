import { useState } from "react";

import ProductForm from "../../components/admin/productform.jsx";
import ProductTable from "../../components/admin/producttable.jsx";
import StatsCard from "../../components/admin/statscard.jsx";

import adminProducts from "../../data/adminproducts";

export default function Products() {
  const [products, setProducts] = useState(adminProducts);

  const [editingProduct, setEditingProduct] = useState(null);

  function addProduct(product) {
    setProducts([...products, product]);
  }

  function updateProduct(updatedProduct) {
    setProducts(
      products.map((product) =>
        product.id === updatedProduct.id
          ? updatedProduct
          : product
      )
    );

    setEditingProduct(null);
  }

  function deleteProduct(id) {
    setProducts(products.filter((product) => product.id !== id));
  }

  return (
    <div className="space-y-6">

      <StatsCard
        title="Total Products"
        value={products.length}
      />

      <ProductForm
        addProduct={addProduct}
        updateProduct={updateProduct}
        editingProduct={editingProduct}
      />

      <ProductTable
        products={products}
        deleteProduct={deleteProduct}
        setEditingProduct={setEditingProduct}
      />

    </div>
  );
}