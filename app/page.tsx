export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center px-10 py-16">
      <h1 className="text-4xl font-bold">
        HENGYUN · STEPS
      </h1>

      <p className="mt-4 text-gray-600 max-w-2xl">
        Sustainable Thermal Energy Pavement System.
        Pavement cooling with measurable thermal management
        for urban demo and infrastructure deployment.
      </p>

      <div className="mt-10 flex gap-4">
        <a
          href="/demo"
          className="border rounded px-4 py-2"
        >
          Demo / Partners
        </a>
        <a
          href="/contact"
          className="border rounded px-4 py-2"
        >
          Contact
        </a>
      </div>
    </main>
  );
}