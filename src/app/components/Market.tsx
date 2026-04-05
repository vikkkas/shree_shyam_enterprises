const Market = () => {
  const clients = [
    "Aditya Birla Insulators",
    "RC Ravikiran Ceramic Pvt Ltd",
    "BHEL",
    "Mahalaxmi Ceramic Industries",
  ]

  const certifications = [
    {
      title: "ISO Certified",
      subtitle: "ISO 9001:2015",
      description: "Quality Management System",
    },
    {
      title: "ZED Bronze",
      subtitle: "MSME Sustainable (ZED)",
      description: "Certificate of Merit",
    },
    {
      title: "Udyam Registration",
      subtitle: "Government of India",
      description: "Micro, Small & Medium Enterprise",
    },
  ]

  const locations = ["Ankleshwar", "Surat", "Mehsana", "Vadodara", "Halol", "Pune", "Delhi", "Bhopal"]

  return (
    <section id="clients" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-neutral-800 mb-4">Our Clients</h2>
        <p className="text-center text-neutral-500 mb-12">Trusted by Leading Companies Across India</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
          {clients.map((client, i) => (
            <div
              key={i}
              className="bg-neutral-50 border border-neutral-200 rounded-lg p-6 flex items-center justify-center text-center font-semibold text-neutral-700 text-sm shadow-sm"
            >
              {client}
            </div>
          ))}
        </div>
        <p className="text-center text-neutral-500 text-sm mb-16">
          {locations.join(" | ")}
        </p>

        <h2 className="text-3xl font-bold text-center text-neutral-800 mb-4">Our Certifications</h2>
        <p className="text-center text-neutral-500 mb-12">Committed to Quality, Compliance & Excellence</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certifications.map((cert, i) => (
            <div key={i} className="bg-neutral-50 border border-neutral-200 rounded-lg p-8 text-center shadow-sm">
              <h3 className="text-xl font-bold text-primary-700 mb-1">{cert.title}</h3>
              <p className="text-sm font-semibold text-neutral-700 mb-1">{cert.subtitle}</p>
              <p className="text-neutral-500 text-sm">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Market

