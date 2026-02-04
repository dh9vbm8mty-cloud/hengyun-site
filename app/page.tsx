export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Logo placeholder (replace later with SVG/image) */}
            <div className="h-9 w-9 rounded-md border flex items-center justify-center text-sm font-semibold">
              H
            </div>
            <div className="leading-tight">
              <div className="font-semibold tracking-tight">HENGYUN Technology</div>
              <div className="text-xs text-gray-500">
                Deployable thermal infrastructure solutions for urban environments
              </div>
            </div>
          </div>

          <nav className="flex items-center gap-5 text-sm">
            <a className="text-gray-700 hover:text-black" href="#amps">
              AMPS
            </a>
            <a className="text-gray-700 hover:text-black" href="#steps">
              STEPS
            </a>
            <a className="text-gray-700 hover:text-black" href="#contact">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1">
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight">
              Pavement Cooling and Low-Grade Thermal Recovery for Urban Demonstration Sites
            </h1>
            <p className="mt-4 text-gray-600 text-lg">
              A deployable system for measurable surface cooling and thermal data collection.
            </p>

            <div className="mt-10 flex gap-3 flex-wrap">
              <a
                href="#demo"
                className="rounded-md border px-4 py-2 text-sm hover:bg-gray-50"
              >
                Demo / Partners
              </a>
              <a
                href="#contact"
                className="rounded-md border px-4 py-2 text-sm hover:bg-gray-50"
              >
                Contact
              </a>
            </div>

            <p className="mt-6 text-sm text-gray-500">
              都市示範場域用的鋪面降溫與低品位熱能回收系統，強調可部署與可量測。
            </p>
          </div>
        </section>

        {/* About / Company */}
        <section className="mx-auto max-w-6xl px-6 py-10 border-t">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h2 className="text-sm font-semibold text-gray-900">About HENGYUN</h2>
              <p className="mt-3 text-gray-600">
                HENGYUN Technology develops deployable thermal infrastructure solutions for urban environments.
              </p>
            </div>

            <div id="amps" className="scroll-mt-24">
              <h2 className="text-sm font-semibold text-gray-900">AMPS</h2>
              <p className="mt-3 text-gray-600">
                AMPS is a modular platform designed to support urban pavement cooling, thermal management, and
                environmental data collection across different deployment scenarios.
              </p>
              <p className="mt-3 text-xs text-gray-500">
                Advanced Microclimate Pavement System (platform layer)
              </p>
            </div>

            <div id="steps" className="scroll-mt-24">
              <h2 className="text-sm font-semibold text-gray-900">STEPS</h2>
              <p className="mt-3 text-gray-600">
                STEPS is an application under the AMPS platform, focusing on pavement surface cooling and low-grade
                thermal recovery for urban demonstration and pilot projects.
              </p>
              <p className="mt-3 text-xs text-gray-500">
                Sustainable Thermal Energy Pavement System (application under AMPS)
              </p>
            </div>
          </div>
        </section>

        {/* Demo / Partners */}
        <section id="demo" className="mx-auto max-w-6xl px-6 py-12 border-t scroll-mt-24">
          <div className="max-w-3xl">
            <h2 className="text-xl font-semibold">Demo / Partners</h2>
            <p className="mt-3 text-gray-600">
              We are open to collaboration for urban pilot deployments and demonstration sites. Typical engagement
              includes site evaluation, deployment planning, and measurement-oriented operation to support
              data-ready outcomes.
            </p>

            <ul className="mt-6 grid gap-3 md:grid-cols-2">
              <li className="rounded-lg border p-4">
                <div className="font-medium">Site partners</div>
                <div className="mt-1 text-sm text-gray-600">
                  Parking lots, sidewalks, campuses, or managed urban surfaces suitable for pilot deployment.
                </div>
              </li>
              <li className="rounded-lg border p-4">
                <div className="font-medium">Program / public sector</div>
                <div className="mt-1 text-sm text-gray-600">
                  Demonstration, testbed, or grant-aligned projects requiring measurable urban heat mitigation.
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mx-auto max-w-6xl px-6 py-12 border-t scroll-mt-24">
          <div className="max-w-3xl">
            <h2 className="text-xl font-semibold">Contact</h2>
            <p className="mt-3 text-gray-600">
              For partnership inquiries, please email:
            </p>

            {/* Replace with your real email when ready */}
            <div className="mt-4 rounded-lg border p-4">
              <div className="text-sm text-gray-500">Email</div>
              <div className="mt-1 font-medium">contact@hengyun-tech.com</div>
              <div className="mt-2 text-xs text-gray-500"></div>
            </div>
            <p className="mt-6 text-xs text-gray-500">
              Note: This site presents a public-safe overview. Detailed technical specifications and validation data are
              shared only under appropriate collaboration contexts.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <div className="font-semibold">HENGYUN Technology</div>
              <div className="mt-2 text-sm text-gray-600">
                Deployable thermal infrastructure solutions for urban environments.
              </div>
            </div>

            <div className="text-sm text-gray-600">
              <div className="font-medium text-gray-900">Platform</div>
              <div className="mt-2">AMPS — Advanced Microclimate Pavement System</div>
            </div>

            <div className="text-sm text-gray-600">
              <div className="font-medium text-gray-900">Application</div>
              <div className="mt-2">STEPS — Sustainable Thermal Energy Pavement System</div>
            </div>
          </div>

          <div className="mt-8 text-xs text-gray-500">
            © {new Date().getFullYear()} HENGYUN Technology
          </div>
        </div>
      </footer>
    </div>
  );
}