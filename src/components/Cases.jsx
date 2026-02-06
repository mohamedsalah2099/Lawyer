import React from 'react'
import { useTranslation } from 'react-i18next'
import './Cases.css'

const Cases = () => {
  const { t } = useTranslation()

  const cases = [
    { key: 'case1' },
    { key: 'case2' },
    { key: 'case3' },
    { key: 'case4' }
  ]

  return (
    <section id="cases" className="cases section">
      <div className="container">
        <h2 className="section-title">{t('cases.title')}</h2>
        <p className="section-subtitle">{t('cases.subtitle')}</p>
        <div className="cases-grid">
          {cases.map((caseItem) => (
            <div key={caseItem.key} className="case-card">
              <div className="case-badge">{t(`cases.${caseItem.key}.date`)}</div>
              <h3 className="case-title">{t(`cases.${caseItem.key}.title`)}</h3>
              <p className="case-description">
                {t(`cases.${caseItem.key}.description`)}
              </p>
              <div className="case-footer">
                <span className="case-status">✓ Won</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Cases





