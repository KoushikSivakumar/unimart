export default function CreateShop() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-12">
      <div className="mb-8">
        <p className="text-sm font-medium text-neutral-500">Seller onboarding</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight">
          Create your campus shop.
        </h1>
        <p className="mt-3 leading-7 text-neutral-600">
          Set up your public storefront. You can add products after creating your shop.
        </p>
      </div>

      <form className="rounded-[2rem] border border-neutral-200 bg-white p-6 shadow-sm">
        <div className="grid gap-5">
          <Field label="Shop name" placeholder="Example: PixelForge" />
          <Field label="Shop tagline" placeholder="Posters, edits, and design work for students" />
          <Field label="Instagram / contact link" placeholder="@yourshop or phone number" />

          <div>
            <label className="text-sm font-medium">Shop category</label>
            <select className="mt-2 w-full rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3 outline-none focus:border-black">
              <option>Accessories</option>
              <option>Study materials</option>
              <option>Design services</option>
              <option>Food</option>
              <option>Art</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label className="text-sm font-medium">About your shop</label>
            <textarea
              placeholder="Tell students what you sell and how they can order."
              rows="5"
              className="mt-2 w-full resize-none rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3 outline-none focus:border-black"
            />
          </div>

          <button
            type="button"
            className="mt-2 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white hover:bg-neutral-800"
          >
            Create shop
          </button>
        </div>
      </form>
    </main>
  );
}

function Field({ label, placeholder }) {
  return (
    <div>
      <label className="text-sm font-medium">{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        className="mt-2 w-full rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3 outline-none focus:border-black"
      />
    </div>
  );
}