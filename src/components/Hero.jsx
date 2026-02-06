import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import './Hero.css'

const Hero = () => {
  const { t } = useTranslation()

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">{t('hero.title')}</h1>
          <p className="hero-subtitle">{t('hero.subtitle')}</p>
          <Link to="/contact" className="hero-cta">{t('hero.cta')}</Link>
        </div>
      </div>
    </section>
  )
}

export default Hero


