import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import './Contact.css'

const Contact = () => {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [contactInfo, setContactInfo] = useState({
    address: { line1: '', line2: '', city: '', country: '' },
    phone: '',
    email: '',
    hours: { weekdays: '', weekend: '', closed: '' }
  })

  useEffect(() => {
    // Load contact info from localStorage or use translations
    const saved = localStorage.getItem('contactInfo')
    if (saved) {
      setContactInfo(JSON.parse(saved))
    } else {
      setContactInfo({
        address: {
          line1: t('contact.address.line1'),
          line2: t('contact.address.line2'),
          city: t('contact.address.city'),
          country: t('contact.address.country')
        },
        phone: t('contact.phone.number'),
        email: t('contact.email.address'),
        hours: {
          weekdays: t('contact.hours.weekdays'),
          weekend: t('contact.hours.weekend'),
          closed: t('contact.hours.closed')
        }
      })
    }
  }, [t])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Save message to localStorage
    const messages = JSON.parse(localStorage.getItem('contactMessages') || '[]')
    const newMessage = {
      id: Date.now().toString(),
      ...formData,
      timestamp: new Date().toISOString()
    }
    messages.push(newMessage)
    localStorage.setItem('contactMessages', JSON.stringify(messages))
    
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2 className="section-title">{t('contact.title')}</h2>
        <p className="section-subtitle">{t('contact.subtitle')}</p>
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">📍</div>
              <h3>{t('contact.address.title')}</h3>
              <p>{contactInfo.address.line1}</p>
              <p>{contactInfo.address.line2}</p>
              <p>{contactInfo.address.city}</p>
              <p>{contactInfo.address.country}</p>
            </div>
            
            <div className="info-card">
              <div className="info-icon">📞</div>
              <h3>{t('contact.phone.title')}</h3>
              <p><a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a></p>
            </div>
            
            <div className="info-card">
              <div className="info-icon">✉️</div>
              <h3>{t('contact.email.title')}</h3>
              <p><a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></p>
            </div>
            
            <div className="info-card">
              <div className="info-icon">🕒</div>
              <h3>{t('contact.hours.title')}</h3>
              <p>{contactInfo.hours.weekdays}</p>
              <p>{contactInfo.hours.weekend}</p>
              <p>{contactInfo.hours.closed}</p>
            </div>
          </div>
          
          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">{t('contact.form.name')}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">{t('contact.form.email')}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">{t('contact.form.phone')}</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">{t('contact.form.message')}</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="submit-btn">
                {t('contact.form.send')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact


