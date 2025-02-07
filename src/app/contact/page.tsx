import ContactForm from "../components/ContactForm"

export default function ContactPage() {
  return (

    <div className="min-h-screen bg-neutral-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="px-6 py-8">
          <h1 className="text-3xl font-bold text-neutral-800 mb-6">Contact Us</h1>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

