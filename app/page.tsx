export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center px-10 py-16">
      <h1 className="text-4xl font-bold">HENGYUN · STEPS</h1>
      <p className="mt-4 text-gray-600 max-w-2xl">
        Sustainable Thermal Energy Pavement System — pavement cooling with measurable
        thermal management and data-ready deployment for demo sites.
      </p>

      <div className="mt-10 flex gap-3 flex-wrap">
        <a
          className="rounded-md border px-4 py-2"
          href="/demo"
        >
          Demo / Partners
        </a>
        <a
          className="rounded-md border px-4 py-2"
          href="/contact"
        >
          Contact
        </a>
      </div>
    </main>
  );
}