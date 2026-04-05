const About = () => {
  return (
    <section id="about" className="py-24 bg-neutral-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-neutral-800 mb-4">Welcome to Shree Shyam Enterprise</h2>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-neutral-600 mb-6 text-lg leading-relaxed">
            <strong>Shree Shyam Enterprise</strong> is a trusted name in the field of industrial manufacturing of
            Aluminium Castings. With a commitment to <strong>quality, precision, and timely delivery</strong>, we
            specialize in delivering customized engineering and fabrication services to meet diverse industrial
            requirements.
          </p>
          <p className="text-neutral-600 text-lg leading-relaxed mb-10">
            Founded in 2022 at Ankleshwar, Gujarat, we have grown from an initial investment of ₹10 Lakh to achieving
            ₹1 Crore in revenue — with an ambitious target of ₹10 Crore by 2030.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: "Founded", value: "2022" },
              { label: "Revenue (2026)", value: "₹1 Crore" },
              { label: "Target by 2030", value: "₹10 Crore" },
            ].map((stat, i) => (
              <div key={i} className="bg-white rounded-lg shadow-sm p-6 border border-neutral-200">
                <p className="text-3xl font-bold text-primary-700 mb-1">{stat.value}</p>
                <p className="text-neutral-500 text-sm uppercase tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

