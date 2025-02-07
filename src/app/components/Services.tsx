import { Cast, Recycle, Truck } from "lucide-react"

const Services = () => {
  const services = [
    {
      icon: <Cast className="h-12 w-12 text-primary-500" />,
      title: "Precision Casting",
      description: "State-of-the-art die-casting technology for precise and durable components.",
    },
    {
      icon: <Recycle className="h-12 w-12 text-secondary-500" />,
      title: "Sustainable Manufacturing",
      description: "Eco-friendly practices minimizing waste and using recycled materials.",
    },
    {
      icon: <Truck className="h-12 w-12 text-primary-500" />,
      title: "Reliable Delivery",
      description: "Robust partnerships and adept logistics ensuring timely deliveries.",
    },
  ]

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-neutral-800 mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div key={index} className="bg-neutral-50 p-8 rounded-lg shadow-md transition duration-300 hover:shadow-lg">
              <div className="flex justify-center mb-6">{service.icon}</div>
              <h3 className="text-xl font-semibold text-center mb-4 text-neutral-800">{service.title}</h3>
              <p className="text-neutral-600 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

