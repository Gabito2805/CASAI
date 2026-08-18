import SmoothScroll from "./components/SmoothScroll"
import Intro from "./components/Intro"
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import ScrollExperience from './components/ScrollExperience'
import AutomationSection from './components/AutomationSection'
import AppSection from './components/AppSection'
import PackagesSection from './components/PackagesSection'
import BenefitsSection from './components/BenefitsSection'
import InspirationSection from "./components/InspirationSection"
import AISection from "./components/AIsection"
import InstallationSection from "./components/InstallationSection"
import FAQSection from './components/FAQSection'
import CTASection from "./components/CTASection"
import FinalBrand from './components/FinalBrand'
import Footer from "./components/Footer"
import ProductsSection from './components/ProductsSection'
import AboutCasAI from "./components/AboutCasAI"

function App() {

  return (

    <main className="app">


      {/* =========================================
          SISTEMA GLOBAL
      ========================================= */}

      <Intro />

      <SmoothScroll />

      <Navbar />



      {/* =========================================
          FONDO GLOBAL DE LA WEB
      ========================================= */}

      



      {/* =========================================
          CONTENIDO
      ========================================= */}

      <div className="site-content">


        <Hero />

        <ScrollExperience />

        <AboutCasAI />

        <AutomationSection />

        <AppSection />

        <BenefitsSection />

        <InspirationSection />

        <PackagesSection />

        <AISection />

        <InstallationSection />

        <FAQSection />

        <ProductsSection />

        <CTASection />

        <FinalBrand />

        <Footer />


      </div>


    </main>

  )

}

export default App