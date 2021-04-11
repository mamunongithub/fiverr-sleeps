import React from 'react'
import ReactDOM from 'react-dom'

class PChart extends HTMLElement {
  connectedCallback() {
    const mountPoint = document.createElement('span')
    this.attachShadow({ mode: 'open' }).appendChild(mountPoint)
    const totalLength = 301.10565185546875
    const value = this.getAttribute('value') || 50
    ReactDOM.render(
      <div
        style={{
          position: 'relative',
          width: 250,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg
          style={{
            stroke: 'orange',
            strokeWidth: 4,
            fill: 'none',
            strokeLinecap: 'round',
            transform: 'rotate(-90deg)',
          }}
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="50"
            cy="50"
            r="48"
            strokeDasharray={totalLength}
            strokeDashoffset={totalLength - (value / 100) * totalLength}
          />
        </svg>
        <span
          style={{
            position: 'absolute',
            fontSize: 48,
            fontWeight: 'bold',
          }}
        >
          {value}%
        </span>
      </div>,
      mountPoint
    )
  }
}

customElements.define('p-chart', PChart)
