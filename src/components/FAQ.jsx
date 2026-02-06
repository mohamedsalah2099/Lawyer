import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import './FAQ.css'

const FAQ = () => {
  const { t } = useTranslation()
  const [openIndex, setOpenIndex] = useState(null)
  const [faqs, setFaqs] = useState([])

  useEffect(() => {
    // Load FAQs from localStorage or use default from translations
    const saved = localStorage.getItem('faqData')
    if (saved) {
      const savedFAQs = JSON.parse(saved)
      setFaqs(savedFAQs)
    } else {
      // Default FAQs from translations
      setFaqs([
        { key: 'faq1', question: t('faq.faq1.question'), answer: t('faq.faq1.answer') },
        { key: 'faq2', question: t('faq.faq2.question'), answer: t('faq.faq2.answer') },
        { key: 'faq3', question: t('faq.faq3.question'), answer: t('faq.faq3.answer') },
        { key: 'faq4', question: t('faq.faq4.question'), answer: t('faq.faq4.answer') },
        { key: 'faq5', question: t('faq.faq5.question'), answer: t('faq.faq5.answer') },
        { key: 'faq6', question: t('faq.faq6.question'), answer: t('faq.faq6.answer') }
      ])
    }
  }, [t])

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="faq section">
      <div className="container">
        <h2 className="section-title">{t('faq.title')}</h2>
        <p className="section-subtitle">{t('faq.subtitle')}</p>
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div key={faq.key} className={`faq-item ${openIndex === index ? 'active' : ''}`}>
              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="faq-question-text">{faq.question}</span>
                <span className="faq-icon">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
              </button>
              <div
                id={`faq-answer-${index}`}
                className="faq-answer"
                aria-hidden={openIndex !== index}
              >
                <div className="faq-answer-content">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ

