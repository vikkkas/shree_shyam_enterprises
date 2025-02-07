const Market = () => {
  const marketData = [
    { year: 2023, value: 84.9 },
    { year: 2024, value: 90.46 },
    { year: 2025, value: 96.39 },
    { year: 2026, value: 102.7 },
    { year: 2027, value: 109.42 },
    { year: 2028, value: 116.58 },
    { year: 2029, value: 124.2 },
    { year: 2030, value: 132.33 },
    { year: 2031, value: 139.95 },
  ]

  const maxValue = Math.max(...marketData.map((item) => item.value))

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-neutral-800 mb-12">Market Dynamics</h2>
        <div className="bg-neutral-50 p-8 rounded-lg shadow-md">
          <div className="h-64 flex items-end space-x-2">
            {marketData.map((item, index) => (
              <div key={index} className="flex-1 flex flex-col items-center">
                <div
                  className="w-full bg-primary-500 rounded-t"
                  style={{ height: `${(item.value / maxValue) * 100}%` }}
                ></div>
                <span className="text-xs mt-2 text-neutral-600">{item.year}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-neutral-600 mb-4">Market Size (USD Billion)</p>
            <p className="text-neutral-800 font-semibold">
              The global Die Casting Market is projected to reach USD 139.95 billion by 2031,
              <br />
              growing at a CAGR of 6.54% from 2024 to 2031.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Market

