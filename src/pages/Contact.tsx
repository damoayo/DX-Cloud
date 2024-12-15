import Navbar from "../components/navbar/Navbar"
import ContactForm from "../components/ContactForm"

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center min-h-[85vh]  md:m-4 bg-[#16232e]">
        <div className="pb-16 pt-16 to-current md:w-1/2">
          <ContactForm />
        </div>
      </div>
    </div>

  )
}

export default Contact