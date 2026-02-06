import React from 'react'
import Hero from '../components/Hero'
import EventSlider from '../components/EventSlider'
import VideoSection from '../components/VideoSection'
import FAQ from '../components/FAQ'

const Home = () => {
  return (
    <div className="page">
      <Hero />
      <EventSlider />
      <VideoSection />
      <FAQ />
    </div>
  )
}

export default Home


