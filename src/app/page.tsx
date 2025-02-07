import Hero from "./components/Hero"
import About from "./components/About"
import Services from "./components/Services"
import Products from "./components/Products"
import Market from "./components/Market"
import Leadership from "./components/Leadership"

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Hero />
      <About />
      <Services />
      <Products />
      <Market />
      <Leadership />
    </main>
  )
}

