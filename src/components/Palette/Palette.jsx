import { SchemeColor } from "../SchemeColor/SchemeColor"
import './palette.css'
import React from 'react';

export const Palette = ({paletteData}) => {
  const schemeClass = `palette-scheme palette-scheme--${paletteData.direction}`

  return (
    <div className="palette">
      <div className={schemeClass}>
        <img className="scheme-image" src={paletteData.image} alt={paletteData.name} />
        <div className="scheme-colors">
          {paletteData.colors.map((color) => 
          <SchemeColor color={color}/>
          )}
        </div>
      </div>
      <div className="palette-info">
        <h2>{paletteData.name}</h2>
        <p>{paletteData.description}</p>
        <p>Photo by <a href={paletteData.attribution.url} target="_blank">{paletteData.attribution.name}</a>.</p>
      </div>
    </div>
)}
