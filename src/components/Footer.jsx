import React from 'react'
import { useTranslation } from 'react-i18next'
import './Footer.css'

const Footer = () => {
  const { t } = useTranslation()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>&copy; {t('footer.year')} Law Firm. {t('footer.rights')}.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer





