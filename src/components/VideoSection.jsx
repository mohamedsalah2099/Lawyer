import React from 'react'
import { useTranslation } from 'react-i18next'
import './VideoSection.css'

const VideoSection = () => {
  const { t } = useTranslation()

  // Extract YouTube video ID from URL or use direct ID
  // Supports formats like:
  // - https://www.youtube.com/watch?v=VIDEO_ID
  // - https://youtu.be/VIDEO_ID
  // - https://www.youtube.com/embed/VIDEO_ID
  // - Or just the VIDEO_ID itself
  const getVideoId = (urlOrId) => {
    if (!urlOrId) return 'dQw4w9WgXcQ' // Default fallback
    
    // If it's already just an ID (no slashes or special chars), return it
    if (!urlOrId.includes('/') && !urlOrId.includes('?')) {
      return urlOrId
    }
    
    // Extract from various YouTube URL formats
    const patterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
      /^([a-zA-Z0-9_-]{11})$/
    ]
    
    for (const pattern of patterns) {
      const match = urlOrId.match(pattern)
      if (match) {
        return match[1] || match[0]
      }
    }
    
    return urlOrId
  }

  const videoId = getVideoId(t('video.videoId'))

  // Construct the embed URL with additional parameters for better experience
  const embedUrl = `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&showinfo=0`

  return (
    <section id="video" className="video-section section">
      <div className="container">
        <h2 className="section-title">{t('video.title')}</h2>
        <p className="section-subtitle">{t('video.subtitle')}</p>
        <div className="video-wrapper">
          <div className="video-container">
            <iframe
              src={embedUrl}
              title={t('video.title')}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="video-iframe"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VideoSection

