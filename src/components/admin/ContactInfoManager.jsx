import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import './AdminComponents.css'

const ContactInfoManager = () => {
  const { t } = useTranslation()
  const [contactInfo, setContactInfo] = useState({
    address: {
      line1: '',
      line2: '',
      city: '',
      country: ''
    },
    phone: '',
    email: '',
    hours: {
      weekdays: '',
      weekend: '',
      closed: ''
    }
  })

  useEffect(() => {
    loadContactInfo()
  }, [])

  const loadContactInfo = () => {
    const saved = localStorage.getItem('contactInfo')
    if (saved) {
      setContactInfo(JSON.parse(saved))
    } else {
      // Load from translations as default
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
  }

  const handleChange = (path, value) => {
    const keys = path.split('.')
    const updated = { ...contactInfo }
    let current = updated
    
    for (let i = 0; i < keys.length - 1; i++) {
      current = current[keys[i]] = { ...current[keys[i]] }
    }
    current[keys[keys.length - 1]] = value
    
    setContactInfo(updated)
  }

  const handleSave = () => {
    localStorage.setItem('contactInfo', JSON.stringify(contactInfo))
    alert(t('admin.contact.saveSuccess'))
  }

  return (
    <div className="admin-manager">
      <h2>{t('admin.contact.title')}</h2>
      <p className="admin-description">{t('admin.contact.description')}</p>

      <div className="admin-form">
        <h3>{t('admin.contact.address')}</h3>
        <div className="form-group">
          <label>{t('admin.contact.line1')}</label>
          <input
            type="text"
            value={contactInfo.address.line1}
            onChange={(e) => handleChange('address.line1', e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>{t('admin.contact.line2')}</label>
          <input
            type="text"
            value={contactInfo.address.line2}
            onChange={(e) => handleChange('address.line2', e.target.value)}
          />
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>{t('admin.contact.city')}</label>
            <input
              type="text"
              value={contactInfo.address.city}
              onChange={(e) => handleChange('address.city', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>{t('admin.contact.country')}</label>
            <input
              type="text"
              value={contactInfo.address.country}
              onChange={(e) => handleChange('address.country', e.target.value)}
            />
          </div>
        </div>

        <h3 style={{ marginTop: '2rem' }}>{t('admin.contact.contactDetails')}</h3>
        <div className="form-row">
          <div className="form-group">
            <label>{t('admin.contact.phone')}</label>
            <input
              type="tel"
              value={contactInfo.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>{t('admin.contact.email')}</label>
            <input
              type="email"
              value={contactInfo.email}
              onChange={(e) => handleChange('email', e.target.value)}
            />
          </div>
        </div>

        <h3 style={{ marginTop: '2rem' }}>{t('admin.contact.officeHours')}</h3>
        <div className="form-group">
          <label>{t('admin.contact.weekdays')}</label>
          <input
            type="text"
            value={contactInfo.hours.weekdays}
            onChange={(e) => handleChange('hours.weekdays', e.target.value)}
            placeholder={t('admin.contact.weekdaysPlaceholder')}
          />
        </div>
        <div className="form-group">
          <label>{t('admin.contact.weekend')}</label>
          <input
            type="text"
            value={contactInfo.hours.weekend}
            onChange={(e) => handleChange('hours.weekend', e.target.value)}
            placeholder={t('admin.contact.weekendPlaceholder')}
          />
        </div>
        <div className="form-group">
          <label>{t('admin.contact.closed')}</label>
          <input
            type="text"
            value={contactInfo.hours.closed}
            onChange={(e) => handleChange('hours.closed', e.target.value)}
            placeholder={t('admin.contact.closedPlaceholder')}
          />
        </div>

        <div className="form-actions">
          <button onClick={handleSave} className="btn-primary">{t('admin.contact.save')}</button>
        </div>
      </div>
    </div>
  )
}

export default ContactInfoManager

