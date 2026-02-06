import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import './AdminComponents.css'

const FAQManager = () => {
  const { t } = useTranslation()
  const [faqs, setFaqs] = useState([])
  const [editingIndex, setEditingIndex] = useState(null)
  const [formData, setFormData] = useState({ question: '', answer: '' })

  useEffect(() => {
    loadFAQs()
  }, [])

  const loadFAQs = () => {
    const saved = localStorage.getItem('faqData')
    if (saved) {
      setFaqs(JSON.parse(saved))
    } else {
      // Load from translations as default
      const defaultFAQs = [
        { key: 'faq1', question: t('faq.faq1.question'), answer: t('faq.faq1.answer') },
        { key: 'faq2', question: t('faq.faq2.question'), answer: t('faq.faq2.answer') },
        { key: 'faq3', question: t('faq.faq3.question'), answer: t('faq.faq3.answer') },
        { key: 'faq4', question: t('faq.faq4.question'), answer: t('faq.faq4.answer') },
        { key: 'faq5', question: t('faq.faq5.question'), answer: t('faq.faq5.answer') },
        { key: 'faq6', question: t('faq.faq6.question'), answer: t('faq.faq6.answer') }
      ]
      setFaqs(defaultFAQs)
    }
  }

  const saveFAQs = (updatedFAQs) => {
    localStorage.setItem('faqData', JSON.stringify(updatedFAQs))
    setFaqs(updatedFAQs)
  }

  const handleEdit = (index) => {
    setEditingIndex(index)
    setFormData(faqs[index])
  }

  const handleSave = () => {
    const updated = [...faqs]
    if (editingIndex !== null) {
      updated[editingIndex] = { ...formData, key: faqs[editingIndex].key }
    } else {
      updated.push({ ...formData, key: `faq${faqs.length + 1}` })
    }
    saveFAQs(updated)
    setEditingIndex(null)
    setFormData({ question: '', answer: '' })
  }

  const handleDelete = (index) => {
    if (window.confirm(t('admin.faq.deleteConfirm'))) {
      const updated = faqs.filter((_, i) => i !== index)
      saveFAQs(updated)
    }
  }

  return (
    <div className="admin-manager">
      <h2>{t('admin.faq.title')}</h2>
      <p className="admin-description">{t('admin.faq.description')}</p>

      <div className="admin-form">
        <h3>{editingIndex !== null ? t('admin.faq.editFAQ') : t('admin.faq.addFAQ')}</h3>
        <div className="form-group">
          <label>{t('admin.faq.question')}</label>
          <input
            type="text"
            value={formData.question}
            onChange={(e) => setFormData({ ...formData, question: e.target.value })}
            placeholder={t('admin.faq.questionPlaceholder')}
          />
        </div>
        <div className="form-group">
          <label>{t('admin.faq.answer')}</label>
          <textarea
            value={formData.answer}
            onChange={(e) => setFormData({ ...formData, answer: e.target.value })}
            placeholder={t('admin.faq.answerPlaceholder')}
            rows="5"
          />
        </div>
        <div className="form-actions">
          <button onClick={handleSave} className="btn-primary">{t('admin.faq.save')}</button>
          {editingIndex !== null && (
            <button onClick={() => { setEditingIndex(null); setFormData({ question: '', answer: '' }) }} className="btn-secondary">
              {t('admin.faq.cancel')}
            </button>
          )}
        </div>
      </div>

      <div className="admin-list">
        <h3>{t('admin.faq.faqs')} ({faqs.length})</h3>
        {faqs.map((faq, index) => (
          <div key={index} className="admin-item">
            <div className="item-content">
              <h4>{faq.question}</h4>
              <p>{faq.answer}</p>
            </div>
            <div className="item-actions">
              <button onClick={() => handleEdit(index)} className="btn-small btn-edit">{t('admin.faq.edit')}</button>
              <button onClick={() => handleDelete(index)} className="btn-small btn-delete">{t('admin.faq.delete')}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FAQManager

