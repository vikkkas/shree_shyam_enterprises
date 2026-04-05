import { Zap, Car, Cog, ArrowRight } from "lucide-react"

const Services = () => {
  const industries = [
    {
      icon: <Zap className="h-10 w-10 text-yellow-500" />,
      title: "Electrical Industry",
      description: "Insulator flanges, housings & precision parts",
    },
    {
      icon: <Car className="h-10 w-10 text-primary-500" />,
      title: "Automobile Industry",
      description: "Lightweight aluminium parts & custom castings",
    },
    {
      icon: <Cog className="h-10 w-10 text-neutral-600" />,
      title: "Industrial Machinery",
      description: "Motor housings, pulleys, heavy-duty components",
    },
  ]

  const processSteps = [
    "Design & Pattern Development",
    "Aluminium Casting",
    "Machining",
    "Surface Finishing & Inspection",
  ]

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-neutral-800 mb-4">Industries We Serve</h2>
        <p className="text-center text-neutral-500 mb-12">
          We provide high-precision aluminium castings and machined components for multiple industrial sectors
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          {industries.map((industry, index) => (
            <div key={index} className="bg-neutral-50 p-8 rounded-lg shadow-md transition duration-300 hover:shadow-lg">
              <div className="flex justify-center mb-6">{industry.icon}</div>
              <h3 className="text-xl font-semibold text-center mb-4 text-neutral-800">{industry.title}</h3>
              <p className="text-neutral-600 text-center">{industry.description}</p>
            </div>
          ))}
        </div>
        <div className="bg-neutral-50 rounded-xl p-8">
          <h3 className="text-xl font-bold text-center text-neutral-800 mb-8">Our Manufacturing Process</h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            {processSteps.map((step, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="bg-primary-600 text-white rounded-lg px-5 py-3 text-sm font-medium text-center">
                  {step}
                </div>
                {i < processSteps.length - 1 && (
                  <ArrowRight className="h-5 w-5 text-primary-400 hidden md:block flex-shrink-0" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services

