import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useAuth } from '../context/AuthContext'
import './LoginPage.css'

const LoginPage = () => {
  const { t } = useTranslation()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    
    if (login(username, password)) {
      navigate('/admin')
    } else {
      setError(t('admin.login.error'))
    }
  }

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-card">
          <div className="login-header">
            <h1>⚖️ {t('admin.login.title')}</h1>
            <p>{t('admin.login.subtitle')}</p>
          </div>
          <form onSubmit={handleSubmit} className="login-form">
            {error && <div className="error-message">{error}</div>}
            <div className="form-group">
              <label htmlFor="username">{t('admin.login.username')}</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                placeholder={t('admin.login.usernamePlaceholder')}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">{t('admin.login.password')}</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder={t('admin.login.passwordPlaceholder')}
              />
            </div>
            <button type="submit" className="login-btn">{t('admin.login.loginBtn')}</button>
          </form>
          <div className="login-footer">
            <p>{t('admin.login.defaultCreds')}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage

