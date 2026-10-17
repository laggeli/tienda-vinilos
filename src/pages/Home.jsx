import AnalogRitualBanner from "../components/AnalogiaRitualBanner"
import FeaturedSection from "../components/FeaturedSection"
import Hero from "../components/Hero"

function Home({onActualizarCarrito}) {
  return (
    <>
      <Hero/>
      <FeaturedSection onActualizarCarrito={onActualizarCarrito}/>
      <AnalogRitualBanner/>
    </>
  )
}

export default Home