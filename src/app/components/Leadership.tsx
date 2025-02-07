import Image from "next/image"

const Leadership = () => {
  return (
    <section className="py-24 bg-neutral-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-neutral-800 mb-12">Visionary Leadership</h2>
        <div className="max-w-2xl mx-auto bg-white rounded-lg overflow-hidden shadow-md transition duration-300 hover:shadow-lg">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <Image
                className="h-48 w-full object-cover md:w-48"
                src="/placeholder.svg"
                alt="Ankit Kumar"
                width={192}
                height={192}
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-primary-600 font-semibold">General Manager</div>
              <a href="#" className="block mt-1 text-lg leading-tight font-medium text-neutral-800 hover:underline">
                Ankit Kumar
              </a>
              <p className="mt-2 text-neutral-600">
                Overseeing operations since 2024, Ankit Kumar brings robust experience in production management, quality
                control, and sales. His leadership is integral to driving our team towards achieving excellence in every
                facet of our manufacturing operations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Leadership

