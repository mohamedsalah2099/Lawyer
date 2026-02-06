import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import './AdminComponents.css'

const SliderManager = () => {
  const { t, i18n } = useTranslation()
  const [slides, setSlides] = useState([])
  const [editingIndex, setEditingIndex] = useState(null)
  const [formData, setFormData] = useState({ title: '', subtitle: '', image: '', visible: true })

  useEffect(() => {
    loadSlides()
  }, [])

  const loadSlides = () => {
    const saved = localStorage.getItem('sliderData')
    if (saved) {
      setSlides(JSON.parse(saved))
    } else {
      // Load from translations as default
      const defaultSlides = [
        { key: 'slide1', title: t('slider.slide1.title'), subtitle: t('slider.slide1.subtitle'), image: '', visible: true },
        { key: 'slide2', title: t('slider.slide2.title'), subtitle: t('slider.slide2.subtitle'), image: '', visible: true },
        { key: 'slide3', title: t('slider.slide3.title'), subtitle: t('slider.slide3.subtitle'), image: '', visible: true },
        { key: 'slide4', title: t('slider.slide4.title'), subtitle: t('slider.slide4.subtitle'), image: '', visible: true }
      ]
      setSlides(defaultSlides)
    }
  }

  const saveSlides = (updatedSlides) => {
    localStorage.setItem('sliderData', JSON.stringify(updatedSlides))
    setSlides(updatedSlides)
  }

  const handleEdit = (index) => {
    setEditingIndex(index)
    setFormData(slides[index])
  }

  const handleSave = () => {
    const updated = [...slides]
    if (editingIndex !== null) {
      updated[editingIndex] = { ...formData, key: slides[editingIndex].key }
    } else {
      updated.push({ ...formData, key: `slide${slides.length + 1}` })
    }
    saveSlides(updated)
    setEditingIndex(null)
    setFormData({ title: '', subtitle: '', image: '', visible: true })
  }

  const handleDelete = (index) => {
    if (window.confirm(t('admin.slider.deleteConfirm'))) {
      const updated = slides.filter((_, i) => i !== index)
      saveSlides(updated)
    }
  }

  const toggleVisibility = (index) => {
    const updated = [...slides]
    updated[index].visible = !updated[index].visible
    saveSlides(updated)
  }

  return (
    <div className="admin-manager">
      <h2>{t('admin.slider.title')}</h2>
      <p className="admin-description">{t('admin.slider.description')}</p>

      <div className="admin-form">
        <h3>{editingIndex !== null ? t('admin.slider.editSlide') : t('admin.slider.addSlide')}</h3>
        <div className="form-row">
          <div className="form-group">
            <label>{t('admin.slider.slideTitle')}</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder={t('admin.slider.slideTitle')}
            />
          </div>
          <div className="form-group">
            <label>{t('admin.slider.slideSubtitle')}</label>
            <input
              type="text"
              value={formData.subtitle}
              onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
              placeholder={t('admin.slider.slideSubtitle')}
            />
          </div>
        </div>
        <div className="form-group">
          <label>{t('admin.slider.imageUrl')}</label>
          <input
            type="text"
            value={formData.image}
            onChange={(e) => setFormData({ ...formData, image: e.target.value })}
            placeholder={t('admin.slider.imageUrlPlaceholder')}
          />
        </div>
        <div className="form-group">
          <label>
            <input
              type="checkbox"
              checked={formData.visible}
              onChange={(e) => setFormData({ ...formData, visible: e.target.checked })}
            />
            {t('admin.slider.visible')}
          </label>
        </div>
        <div className="form-actions">
          <button onClick={handleSave} className="btn-primary">{t('admin.slider.save')}</button>
          {editingIndex !== null && (
            <button onClick={() => { setEditingIndex(null); setFormData({ title: '', subtitle: '', image: '', visible: true }) }} className="btn-secondary">
              {t('admin.slider.cancel')}
            </button>
          )}
        </div>
      </div>

      <div className="admin-list">
        <h3>{t('admin.slider.slides')} ({slides.length})</h3>
        {slides.map((slide, index) => (
          <div key={index} className={`admin-item ${!slide.visible ? 'inactive' : ''}`}>
            <div className="item-content">
              <div className="item-header">
                <h4>{slide.title || t('admin.slider.untitled')}</h4>
                <span className={`status-badge ${slide.visible ? 'active' : 'inactive'}`}>
                  {slide.visible ? t('admin.slider.statusVisible') : t('admin.slider.statusHidden')}
                </span>
              </div>
              <p className="item-subtitle">{slide.subtitle}</p>
            </div>
            <div className="item-actions">
              <button onClick={() => toggleVisibility(index)} className="btn-small">
                {slide.visible ? t('admin.slider.hide') : t('admin.slider.show')}
              </button>
              <button onClick={() => handleEdit(index)} className="btn-small btn-edit">{t('admin.slider.edit')}</button>
              <button onClick={() => handleDelete(index)} className="btn-small btn-delete">{t('admin.slider.delete')}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SliderManager

