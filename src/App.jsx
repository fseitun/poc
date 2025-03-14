import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [sharedData, setSharedData] = useState({
    title: '',
  })

  useEffect(() => {
    const fullUrl = window.location.href

    const urlParams = new URLSearchParams(window.location.search)
    const title = urlParams.get('title') || ''

    setSharedData({
      title,
    })

    console.log('URL Params:', { title, fullUrl })
  }, [])

  const hasSharedContent = sharedData.url || sharedData.text || sharedData.title

  return (
    <div className="app-container">
      {hasSharedContent ? (
        <>
          <h1>Vengo de la app guacho</h1>
          <div className="shared-content">
            <h2>Contenido compartido:</h2>
            {sharedData.url && (
              <div>
                <h3>URL:</h3>
                <p>{sharedData.url} Viva Perón, carajo</p>
              </div>
            )}
            {sharedData.title && (
              <div>
                <h3>Title:</h3>
                <p>{sharedData.title}</p>
              </div>
            )}
          </div>
        </> ) : (
        <div className="instructions">
          <p>guarda la app en tu telefono</p>
          <p>cerra la app</p>
          <p>anda a yt</p>
          <p>comparti un video con esa app</p>
          <p>listi</p>
        </div>
      )}
    </div>
  )
}

export default App
