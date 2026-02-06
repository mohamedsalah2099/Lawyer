import React, { useState, useEffect } from 'react'
import './WhatsAppButton.css'

const WhatsAppButton = () => {
  const [phoneNumber, setPhoneNumber] = useState('')

  useEffect(() => {
    // Try to get phone number from localStorage
    const saved = localStorage.getItem('contactInfo')
    if (saved) {
      try {
        const contactInfo = JSON.parse(saved)
        if (contactInfo.phone) {
          // Clean phone number: remove spaces, dashes, and other non-digit characters except +
          const cleaned = contactInfo.phone.replace(/[^\d+]/g, '')
          setPhoneNumber(cleaned)
        }
      } catch (e) {
        console.error('Error parsing contact info:', e)
      }
    }
    
    // If no phone number found, you can set a default one here
    // For example: setPhoneNumber('1234567890')
  }, [])

  // Format phone number for WhatsApp URL (remove + and ensure it's digits only)
  const getWhatsAppUrl = () => {
    if (!phoneNumber) {
      // Default placeholder - replace with actual number
      return 'https://wa.me/1234567890'
    }
    // Remove + and any non-digit characters
    const cleaned = phoneNumber.replace(/[^\d]/g, '')
    return `https://wa.me/${cleaned}`
  }

  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
      aria-label="Contact us on WhatsApp"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        className="whatsapp-logo"
      />
    </a>
  )
}

export default WhatsAppButton

