import React from 'react'
import { useTranslation } from 'react-i18next'
import './Clients.css'

const Clients = () => {
  const { t } = useTranslation()

  const clients = [
    { key: 'client1' },
    { key: 'client2' },
    { key: 'client3' },
    { key: 'client4' },
    { key: 'client5' },
    { key: 'client6' },
    { key: 'client7' },
    { key: 'client8' }
  ]

  return (
    <section id="clients" className="clients section">
      <div className="container">
        <h2 className="section-title">{t('clients.title')}</h2>
        <p className="section-subtitle">{t('clients.subtitle')}</p>
        <div className="clients-grid">
          {clients.map((client) => (
            <div key={client.key} className="client-card">
              <div className="client-logo">
                <div className="logo-placeholder">
                  {t(`clients.${client.key}.logo`)}
                </div>
              </div>
              <div className="client-info">
                <h3 className="client-name">{t(`clients.${client.key}.name`)}</h3>
                <p className="client-industry">{t(`clients.${client.key}.industry`)}</p>
                <p className="client-description">
                  {t(`clients.${client.key}.description`)}
                </p>
              </div>
              <div className="client-badge">
                <span className="badge-icon">✓</span>
                <span className="badge-text">{t('clients.trusted')}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Clients




