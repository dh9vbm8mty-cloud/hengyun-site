export default function Home() {
  return (
    <main className="min-h-screen px-6 py-16 max-w-5xl mx-auto">
      {/* Header */}
      <header className="mb-16">
        <div className="text-sm text-gray-500">HENGYUN Technology</div>
        <div className="text-xl font-semibold">
          Deployable thermal infrastructure solutions for urban environments
        </div>
      </header>

      {/* Hero */}
      <section className="mb-20">
        <h1 className="text-4xl font-bold tracking-tight max-w-3xl">
          A Deployable System for Urban Pavement Cooling and Thermal Energy Recovery
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl">
          都市示範場域用的鋪面降溫與熱能回收系統，強調可部署與可量測。
        </p>
      </section>

      {/* About */}
      <section className="grid md:grid-cols-3 gap-10 mb-20">
        <div>
          <h2 className="text-sm font-semibold">HENGYUN</h2>
          <p className="mt-2 text-gray-600">
            HENGYUN Technology develops deployable thermal infrastructure
            solutions for urban environments.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold">AMPS</h2>
          <p className="mt-2 text-gray-600">
            AMPS is a modular platform supporting pavement cooling, thermal
            management, and environmental data collection.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold">STEPS</h2>
          <p className="mt-2 text-gray-600">
            STEPS is an application under the AMPS platform, designed for urban
            demonstration settings.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="mb-24">
        <h2 className="text-lg font-semibold">Contact</h2>
        <p className="mt-2 text-gray-600">
          For partnership and demonstration inquiries:
        </p>
        <div className="mt-4 font-medium">founder@hengyun-tech.com</div>
      </section>

      {/* Footer */}
      <footer className="pt-10 border-t text-sm text-gray-500">
        <div>© {new Date().getFullYear()} HENGYUN Technology</div>
      </footer>
    </main>
  );
}