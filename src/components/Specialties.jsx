import React from 'react'
import { useTranslation } from 'react-i18next'
import './Specialties.css'

const Specialties = () => {
  const { t } = useTranslation()

  const specialties = [
    {
      key: 'criminalCases',
      icon: '⚖️'
    },
    {
      key: 'laborDisputes',
      icon: '💼'
    },
    {
      key: 'commercialIssues',
      icon: '📊'
    },
    {
      key: 'realEstateIssues',
      icon: '🏠'
    },
    {
      key: 'legalConsultations',
      icon: '📋'
    },
    {
      key: 'inheritanceDisputes',
      icon: '👨‍👩‍👧‍👦'
    },
    {
      key: 'contractDrafting',
      icon: '📝'
    },
    {
      key: 'officialDocumentation',
      icon: '📄'
    },
    {
      key: 'agencyDocumentation',
      icon: '🔐'
    },
    {
      key: 'corporateLawyer',
      icon: '🏢'
    },
    {
      key: 'arbitrationLawyer',
      icon: '⚖️'
    }
  ]

  return (
    <section id="specialties" className="specialties section">
      <div className="container">
        <h2 className="section-title">{t('specialties.title')}</h2>
        <p className="section-subtitle">{t('specialties.subtitle')}</p>
        <div className="specialties-grid">
          {specialties.map((specialty) => (
            <div key={specialty.key} className="specialty-card">
              <div className="specialty-icon">{specialty.icon}</div>
              <h3 className="specialty-title">{t(`specialties.${specialty.key}.title`)}</h3>
              <p className="specialty-description">
                {t(`specialties.${specialty.key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Specialties


