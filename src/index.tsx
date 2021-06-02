import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'

if (process.env.NODE_ENV === 'production') {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./service-worker.js')
    })
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
