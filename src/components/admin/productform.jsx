import { useState, useEffect } from "react";

export default function ProductForm({ addProduct, updateProduct, editingProduct }) {
  const [form, setForm] = useState({
    name: "",
    category: "",
    price: "",
    stock: "",
  });

  // When editingProduct changes, fill the form with its data
  useEffect(() => {
    if (editingProduct) {
      setForm(editingProduct);
    } else {
      setForm({ name: "", category: "", price: "", stock: "" });
    }
  }, [editingProduct]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingProduct) {
      updateProduct({ ...form, id: editingProduct.id });
    } else {
      addProduct({ ...form, id: Date.now() });
      setForm({ name: "", category: "", price: "", stock: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow rounded-xl p-6 space-y-4">
      <h2 className="text-lg font-semibold">
        {editingProduct ? "Edit Product" : "Add Product"}
      </h2>

      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Product name"
        className="border rounded-lg px-3 py-2 w-full"
        required
      />

      <input
        name="category"
        value={form.category}
        onChange={handleChange}
        placeholder="Category"
        className="border rounded-lg px-3 py-2 w-full"
        required
      />

      <input
        name="price"
        type="number"
        value={form.price}
        onChange={handleChange}
        placeholder="Price"
        className="border rounded-lg px-3 py-2 w-full"
        required
      />

      <input
        name="stock"
        type="number"
        value={form.stock}
        onChange={handleChange}
        placeholder="Stock"
        className="border rounded-lg px-3 py-2 w-full"
        required
      />

      <button type="submit" className="bg-black text-white px-4 py-2 rounded-lg">
        {editingProduct ? "Save Changes" : "Add Product"}
      </button>
    </form>
  );
}