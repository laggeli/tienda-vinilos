import { useEffect } from "react";
import AnalogRitualBanner from "../components/analogiaRitualBanner/AnalogiaRitualBanner"
import CommunitySection from "../components/communitySection/CommunitySection"
import FeaturedSection from "../components/featuredSection/FeaturedSection"
import Hero from "../components/hero/Hero"
import SandroPromoBanner from "../components/sandroPromoBanner/SandroPromoBanner"

function Home({onActualizarCarrito}) {
  useEffect(() => { document.title = "Lado V | Inicio"; }, []);
  return (
    <>
      <Hero/>
      <FeaturedSection onActualizarCarrito={onActualizarCarrito}/>
      <AnalogRitualBanner/>
      <CommunitySection/>
      <SandroPromoBanner/>
    </>
  )
}

export default Home