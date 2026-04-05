const Leadership = () => {
  return (
    <section id="leadership" className="py-24 bg-neutral-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-neutral-800 mb-12">Founder&apos;s Vision &amp; Company Growth</h2>
        <div className="max-w-3xl mx-auto bg-white rounded-lg overflow-hidden shadow-md p-8">
          <div className="md:flex gap-8 items-start">
            <div className="md:flex-shrink-0 mb-6 md:mb-0">
              <div className="h-32 w-32 rounded-full bg-primary-100 flex items-center justify-center mx-auto">
                <span className="text-4xl font-bold text-primary-700">BP</span>
              </div>
              <div className="text-center mt-4">
                <p className="font-semibold text-neutral-800">Bhrigunath Prasad</p>
                <p className="text-sm text-primary-600">Founder &amp; Managing Director</p>
              </div>
            </div>
            <div className="flex-1">
              <blockquote className="text-neutral-600 italic mb-6 leading-relaxed">
                &ldquo;From a humble beginning with an initial investment of ₹10 Lakh, Shree Shyam Enterprise has
                achieved ₹1 Crore in revenue by 2026 — and is ambitiously targeting ₹10 Crore by 2030.&rdquo;
              </blockquote>
              <p className="text-neutral-600 text-sm leading-relaxed mb-8">
                Our vision is to become a trusted global name in industrial-grade aluminium castings and precision
                flanges by delivering quality, innovation, and value to every client.
              </p>
              <div className="grid grid-cols-3 gap-4 text-center">
                {[
                  { year: "2022", milestone: "Started", value: "₹10 Lakh" },
                  { year: "2026", milestone: "Achieved", value: "₹1 Crore" },
                  { year: "2030", milestone: "Target", value: "₹10 Crore" },
                ].map((item, i) => (
                  <div key={i} className="bg-neutral-50 rounded-lg p-4 border border-neutral-200">
                    <p className="text-xs text-neutral-500 uppercase tracking-wide mb-1">{item.year}</p>
                    <p className="text-lg font-bold text-primary-700">{item.value}</p>
                    <p className="text-xs text-neutral-500">{item.milestone}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Leadership

