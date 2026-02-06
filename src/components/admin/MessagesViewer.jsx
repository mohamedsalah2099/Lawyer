import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import './AdminComponents.css'

const MessagesViewer = () => {
  const { t } = useTranslation()
  const [messages, setMessages] = useState([])
  const [selectedMessage, setSelectedMessage] = useState(null)

  useEffect(() => {
    loadMessages()
    // Refresh messages every 5 seconds
    const interval = setInterval(loadMessages, 5000)
    return () => clearInterval(interval)
  }, [])

  const loadMessages = () => {
    const saved = localStorage.getItem('contactMessages')
    if (saved) {
      setMessages(JSON.parse(saved))
    }
  }

  const handleDelete = (id) => {
    if (window.confirm(t('admin.messages.deleteConfirm'))) {
      const updated = messages.filter(msg => msg.id !== id)
      localStorage.setItem('contactMessages', JSON.stringify(updated))
      setMessages(updated)
      if (selectedMessage && selectedMessage.id === id) {
        setSelectedMessage(null)
      }
    }
  }

  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleString()
  }

  return (
    <div className="admin-manager">
      <h2>{t('admin.messages.title')}</h2>
      <p className="admin-description">{t('admin.messages.description')}</p>

      <div className="messages-container">
        <div className="messages-list">
          <h3>{t('admin.messages.messages')} ({messages.length})</h3>
          {messages.length === 0 ? (
            <p className="empty-state">{t('admin.messages.noMessages')}</p>
          ) : (
            messages.map((message) => (
              <div
                key={message.id}
                className={`message-item ${selectedMessage?.id === message.id ? 'active' : ''}`}
                onClick={() => setSelectedMessage(message)}
              >
                <div className="message-header">
                  <strong>{message.name}</strong>
                  <span className="message-date">{formatDate(message.timestamp)}</span>
                </div>
                <p className="message-preview">{message.message.substring(0, 50)}...</p>
                <span className="message-email">{message.email}</span>
              </div>
            ))
          )}
        </div>

        {selectedMessage && (
          <div className="message-detail">
            <div className="message-detail-header">
              <h3>{t('admin.messages.messageDetails')}</h3>
              <button onClick={() => handleDelete(selectedMessage.id)} className="btn-delete">
                {t('admin.messages.delete')}
              </button>
            </div>
            <div className="message-detail-content">
              <div className="detail-row">
                <strong>{t('admin.messages.name')}:</strong>
                <span>{selectedMessage.name}</span>
              </div>
              <div className="detail-row">
                <strong>{t('admin.messages.email')}:</strong>
                <span>{selectedMessage.email}</span>
              </div>
              <div className="detail-row">
                <strong>{t('admin.messages.phone')}:</strong>
                <span>{selectedMessage.phone}</span>
              </div>
              <div className="detail-row">
                <strong>{t('admin.messages.date')}:</strong>
                <span>{formatDate(selectedMessage.timestamp)}</span>
              </div>
              <div className="detail-row full-width">
                <strong>{t('admin.messages.message')}:</strong>
                <p>{selectedMessage.message}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default MessagesViewer

