import { useEffect } from 'react'
import HeaderImage from '../../assets/header.jpg'
import data from './data'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './header.css'

const Header = () => {
  useEffect(() => {
    AOS.init({duration: 2000})
  }, [])

  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__profile" data-aos="fade-in">
          <img src={HeaderImage} alt="Header Portait" />
        </div>
        <p className="header__eyebrow" data-aos="fade-up">Product Manager • UX Strategist • Growth Partner</p>
        <h3 data-aos="fade-up">Ivan Flores Hurtado</h3>
        <p className="header__lead" data-aos="fade-up">
          I help teams ship human-centered products that grow revenue and customer love. From early discovery
          to polished delivery, I connect strategy, UX, and execution across global teams.
        </p>
        <div className="header__cta" data-aos="fade-up">
          <a href="#contact" className="btn primary pulse">Let's Talk</a>
          <a href="#portfolio" className="btn light">View Case Studies</a>
        </div>
        <div className="header__highlights" data-aos="fade-up">
          <div>
            <span>6+ Years</span>
            <small>Product & UX Leadership</small>
          </div>
          <div>
            <span>45+ Launches</span>
            <small>Startups to Enterprise</small>
          </div>
          <div>
            <span>Global Teams</span>
            <small>US • Europe • LatAm</small>
          </div>
        </div>
        <div className="header__socials">
          {data.map(item => (
            <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer">
              {item.icon}
            </a>
          ))}
        </div>
        <a className="scroll__indicator" href="#about">
          <span>Scroll</span>
          <div className="scroll__line" />
        </a>
      </div>
    </header>
  )
}

export default Header
