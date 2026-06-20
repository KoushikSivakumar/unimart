import { X } from "lucide-react";
import { useState } from "react";

export default function RequestModal({ product, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    meetup: "Library",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    console.log("Buy request submitted:", {
      productId: product.id,
      productName: product.name,
      seller: product.seller,
      ...formData,
      status: "pending",
      createdAt: new Date().toISOString(),
    });

    setIsSubmitted(true);
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 px-5 backdrop-blur-sm">
      <div className="w-full max-w-lg rounded-[2rem] bg-white p-6 shadow-xl">
        <div className="mb-5 flex items-start justify-between gap-5">
          <div>
            <p className="text-sm font-medium text-neutral-500">
              Request to buy
            </p>
            <h2 className="mt-1 text-2xl font-semibold tracking-tight">
              {product.name}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="rounded-full bg-neutral-100 p-2 hover:bg-neutral-200"
          >
            <X size={18} />
          </button>
        </div>

        {isSubmitted ? (
          <div className="rounded-3xl bg-neutral-100 p-6 text-center">
            <h3 className="text-xl font-semibold">Request sent</h3>
            <p className="mt-3 leading-7 text-neutral-600">
              Your request has been sent to the seller. For now, this is stored
              in console only. Later we will push it into Firebase.
            </p>

            <button
              onClick={onClose}
              className="mt-6 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid gap-4">
            <Field
              label="Your name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Koushik"
              required
            />

            <Field
              label="Contact"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              placeholder="Phone, Instagram, or email"
              required
            />

            <div>
              <label className="text-sm font-medium">Preferred meetup</label>
              <select
                name="meetup"
                value={formData.meetup}
                onChange={handleChange}
                className="mt-2 w-full rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm outline-none focus:border-black"
              >
                <option>Library</option>
                <option>Main block</option>
                <option>Canteen</option>
                <option>Hostel gate</option>
                <option>Near department</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Example: Is this available today?"
                rows="4"
                className="mt-2 w-full resize-none rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm outline-none focus:border-black"
              />
            </div>

            <button className="mt-2 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white hover:bg-neutral-800">
              Send request
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

function Field({ label, ...props }) {
  return (
    <div>
      <label className="text-sm font-medium">{label}</label>
      <input
        {...props}
        className="mt-2 w-full rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm outline-none focus:border-black"
      />
    </div>
  );
}