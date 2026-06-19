import { Camera, CheckCircle2, Store } from 'lucide-react';

export default function CreateShop() {
  return (
    <div className="page-shell py-8">
      <section className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="soft-card p-6 sm:p-8">
          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-3xl bg-amber-100">
            <Store size={25} />
          </div>
          <p className="eyebrow">Create shop</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight">
            Start selling to students.
          </h1>
          <p className="mt-4 leading-7 text-zinc-600">
            This MVP shell keeps shop creation simple: profile, category,
            campus location, and a friendly storefront preview.
          </p>

          <div className="mt-8 space-y-4">
            {['No payment setup', 'Request-based buying', 'Product-first storefront'].map(
              (item) => (
                <p key={item} className="flex items-center gap-3 font-bold">
                  <CheckCircle2 size={18} />
                  {item}
                </p>
              ),
            )}
          </div>
        </div>

        <form className="soft-card space-y-5 p-6 sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="space-y-2">
              <span className="text-sm font-bold">Shop name</span>
              <input className="w-full rounded-2xl border border-stone-300 px-4 py-3 outline-none focus:border-zinc-950" />
            </label>
            <label className="space-y-2">
              <span className="text-sm font-bold">Category</span>
              <input className="w-full rounded-2xl border border-stone-300 px-4 py-3 outline-none focus:border-zinc-950" />
            </label>
          </div>

          <label className="space-y-2">
            <span className="text-sm font-bold">Campus location</span>
            <input className="w-full rounded-2xl border border-stone-300 px-4 py-3 outline-none focus:border-zinc-950" />
          </label>

          <label className="space-y-2">
            <span className="text-sm font-bold">Shop description</span>
            <textarea
              rows="5"
              className="w-full rounded-2xl border border-stone-300 px-4 py-3 outline-none focus:border-zinc-950"
            />
          </label>

          <button
            type="button"
            className="flex w-full items-center justify-center gap-2 rounded-3xl border border-dashed border-stone-300 bg-stone-100 px-4 py-8 text-sm font-bold text-zinc-600"
          >
            <Camera size={18} />
            Upload shop logo later
          </button>

          <button type="button" className="btn-primary w-full">
            Create shop preview
          </button>
        </form>
      </section>
    </div>
  );
}
