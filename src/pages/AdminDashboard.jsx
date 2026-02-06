import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useAuth } from '../context/AuthContext'
import SliderManager from '../components/admin/SliderManager'
import FAQManager from '../components/admin/FAQManager'
import ContactInfoManager from '../components/admin/ContactInfoManager'
import MessagesViewer from '../components/admin/MessagesViewer'
import './AdminDashboard.css'

const AdminDashboard = () => {
  const { t } = useTranslation()
  const { logout } = useAuth()
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('slider')

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  const tabs = [
    { id: 'slider', label: t('admin.dashboard.tabs.slider'), icon: '🖼️' },
    { id: 'faq', label: t('admin.dashboard.tabs.faq'), icon: '❓' },
    { id: 'contact', label: t('admin.dashboard.tabs.contact'), icon: '📞' },
    { id: 'messages', label: t('admin.dashboard.tabs.messages'), icon: '📧' }
  ]

  return (
    <div className="admin-dashboard">
      <div className="admin-header">
        <div className="container">
          <div className="admin-header-content">
            <h1>⚖️ {t('admin.dashboard.title')}</h1>
            <button onClick={handleLogout} className="logout-btn">
              {t('admin.dashboard.logout')}
            </button>
          </div>
        </div>
      </div>
      <div className="admin-content">
        <div className="container">
          <div className="admin-tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`admin-tab ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <span className="tab-icon">{tab.icon}</span>
                <span className="tab-label">{tab.label}</span>
              </button>
            ))}
          </div>
          <div className="admin-panel">
            {activeTab === 'slider' && <SliderManager />}
            {activeTab === 'faq' && <FAQManager />}
            {activeTab === 'contact' && <ContactInfoManager />}
            {activeTab === 'messages' && <MessagesViewer />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard

