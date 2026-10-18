import AnalogRitualBanner from "../components/analogiaRitualBanner/AnalogiaRitualBanner"
import CommunitySection from "../components/communitySection/CommunitySection"
import FeaturedSection from "../components/featuredSection/FeaturedSection"
// import Footer from "../components/Footer" apenas se implemente lo sumamos
import Hero from "../components/hero/Hero"

function Home({onActualizarCarrito}) {
  return (
    <>
      <Hero/>
      <FeaturedSection onActualizarCarrito={onActualizarCarrito}/>
      <AnalogRitualBanner/>
      <CommunitySection/>
    </>
  )
}

export default Home