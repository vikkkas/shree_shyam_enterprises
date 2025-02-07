import { Facebook, Twitter, Linkedin, Mail } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-neutral-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">SHREE SHYAM ENTERPRISE</h3>
            <p className="text-sm text-neutral-400">Forging Excellence, Shaping the Future.</p>
          </div>
          <div className="w-full md:w-1/3 text-center mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
            <p className="text-sm text-neutral-400">Ankleshwar, Gujarat, India</p>
            <p className="text-sm text-neutral-400">Email: info@shreeshyam.com</p>
            <p className="text-sm text-neutral-400">Phone: +91 1234567890</p>
          </div>
          <div className="w-full md:w-1/3 text-center md:text-right">
            <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
            <div className="flex justify-center md:justify-end space-x-4">
              <a href="#" className="hover:text-primary-400 transition duration-300">
                <Facebook />
              </a>
              <a href="#" className="hover:text-primary-400 transition duration-300">
                <Twitter />
              </a>
              <a href="#" className="hover:text-primary-400 transition duration-300">
                <Linkedin />
              </a>
              <a href="#" className="hover:text-primary-400 transition duration-300">
                <Mail />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-neutral-700 mt-8 pt-8 text-sm text-center text-neutral-400">
          <p>&copy; 2024 SHREE SHYAM ENTERPRISE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

