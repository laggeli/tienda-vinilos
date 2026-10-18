import AnalogRitualBanner from "../components/AnalogiaRitualBanner"
import CommunitySection from "../components/CommunitySection"
import FeaturedSection from "../components/FeaturedSection"
import Footer from "../components/Footer"
import Hero from "../components/Hero"

function Home({onActualizarCarrito}) {
  return (
    <>
      <Hero/>
      <FeaturedSection onActualizarCarrito={onActualizarCarrito}/>
      <AnalogRitualBanner/>
      <CommunitySection/>
      <Footer/>
    </>
  )
}

export default Home