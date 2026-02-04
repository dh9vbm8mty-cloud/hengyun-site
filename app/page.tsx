export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center px-10 py-16">
      <h1 className="text-4xl font-bold max-w-3xl">
        Pavement Cooling and Low-Grade Thermal Recovery for Urban Demonstration Sites
      </h1>

      <p className="mt-4 text-gray-600 max-w-2xl">
        A deployable system for measurable surface cooling and thermal data collection.
      </p>

      <div className="mt-10 flex gap-3 flex-wrap">
        <a className="rounded-md border px-4 py-2" href="/demo">
          Demo / Partners
        </a>
        <a className="rounded-md border px-4 py-2" href="/contact">
          Contact
        </a>
      </div>
    </main>
  );
}