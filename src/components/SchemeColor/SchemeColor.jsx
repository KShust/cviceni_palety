import './scheme-color.css'
import React from 'react'

export const SchemeColor = ({ color }) => {
  return (
    <div key={color} className="scheme-color" style={{ backgroundColor: color }}>
      {color}
    </div>
)};

