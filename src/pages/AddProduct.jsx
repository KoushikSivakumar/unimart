import { useState } from "react";

export default function AddProduct() {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "Accessories",
    image: "",
    description: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    console.log("Product created:", {
      ...formData,
      price: Number(formData.price),
      status: "live",
      createdAt: new Date().toISOString(),
    });

    alert("Product added in mock mode. Check console.");
  }

  return (
    <main className="mx-auto max-w-3xl px-5 py-12">
      <div className="mb-8">
        <p className="text-sm font-medium text-neutral-500">Seller tools</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight">
          Add a new product.
        </h1>
        <p className="mt-3 leading-7 text-neutral-600">
          Create a listing for your shop. Later, this will save directly to
          Firebase.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="rounded-[2rem] border border-neutral-200 bg-white p-6 shadow-sm"
      >
        <div className="grid gap-5">
          <Field
            label="Product name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Custom poster design"
            required
          />

          <Field
            label="Price"
            name="price"
            type="number"
            value={formData.price}
            onChange={handleChange}
            placeholder="299"
            required
          />

          <div>
            <label className="text-sm font-medium">Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="mt-2 w-full rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3 outline-none focus:border-black"
            >
              <option>Accessories</option>
              <option>Study</option>
              <option>Design</option>
              <option>Lifestyle</option>
              <option>Food</option>
              <option>Services</option>
            </select>
          </div>

          <Field
            label="Image URL"
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="Paste image URL for now"
          />

          <div>
            <label className="text-sm font-medium">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe what you're selling..."
              rows="5"
              className="mt-2 w-full resize-none rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3 outline-none focus:border-black"
            />
          </div>

          <button className="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white hover:bg-neutral-800">
            Add product
          </button>
        </div>
      </form>
    </main>
  );
}

function Field({ label, ...props }) {
  return (
    <div>
      <label className="text-sm font-medium">{label}</label>
      <input
        {...props}
        className="mt-2 w-full rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3 outline-none focus:border-black"
      />
    </div>
  );
}