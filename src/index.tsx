/*
 * @Descripttion:
 * @Author: OwenWong
 * @Email: owen.cq.cn@gmail.com
 * @Date: 2021-11-08 10:36:01
 */
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

if (module.hot) {
  module.hot.accept()
}

ReactDOM.render(<App />, document.getElementById('app'))
