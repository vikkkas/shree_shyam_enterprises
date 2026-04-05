import { CheckCircle } from "lucide-react"

const Products = () => {
  const products = [
    {
      name: "Aluminium Insulator Flange",
      features: ["High Dimensional Accuracy", "Corrosion Resistant", "Lightweight & Strong"],
    },
    {
      name: "Aluminium Threaded Flange",
      features: ["Precision Internal Threading", "High Load Capacity", "Custom Sizes Available"],
    },
    {
      name: "Aluminium Motor Housing",
      features: ["High Strength Aluminium Casting", "Precision Machined Surface", "Durable Industrial Design"],
    },
    {
      name: "Aluminium Blower Housing",
      features: ["High Structural Stability", "Corrosion Resistant Coating", "Custom Designs Available"],
    },
    {
      name: "Aluminium Pulley Casting",
      features: ["Smooth Rotational Performance", "High Load Bearing Capacity", "Long Service Life"],
    },
    {
      name: "CNC Machined Aluminium Housing",
      features: ["Precision CNC Machining", "High Dimensional Accuracy", "Custom Industrial Applications"],
    },
  ]

  return (
    <section id="products" className="py-24 bg-neutral-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-neutral-800 mb-4">Our Products</h2>
        <p className="text-center text-neutral-500 mb-12">High Precision Aluminium Castings</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md transition duration-300 hover:shadow-lg">
              <h3 className="text-lg font-semibold mb-4 text-primary-700">{product.name}</h3>
              <ul className="space-y-2">
                {product.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-neutral-600 text-sm">
                    <CheckCircle className="h-4 w-4 text-primary-500 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products

