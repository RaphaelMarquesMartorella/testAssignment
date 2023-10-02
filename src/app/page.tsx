import Header from "@/components/Header"
import NavBar from "../components/NavBar"
import SectionOne from "@/components/SectionOne"
import SectionTwo from "@/components/SectionTwo"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="">
      <NavBar />
      <Header />
      <SectionOne />
      <SectionTwo />
      <Footer />
    </main>
  )
}
