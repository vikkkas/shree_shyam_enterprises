const Products = () => {
  const products = [
    "Aluminum Alloy Ingots",
    "Gravity Die Castings (GDC)",
    "Pressure Die Castings (PDC)",
    "Sand Castings",
    "Precision Machined Components",
    "Assembled Aluminum Parts",
  ]

  return (
    <section id="products" className="py-24 bg-neutral-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-neutral-800 mb-12">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md transition duration-300 hover:shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-primary-700">{product}</h3>
              <p className="text-neutral-600">High-quality aluminum components for various industrial applications.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products

