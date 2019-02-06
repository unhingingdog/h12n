import React from 'react'
import TechInventory from './TechInventory'

export default ({ title, children, tech, preview, externalIcons }) => {
  
  return(
    <div className="body-card body-card-item">
      <h1 className="card-title body-card-item">{title}</h1>
        <img className="preview body-card-item" src={preview} />
      <div className="external-icons body-card-item">
        {externalIcons.map((icon, key) =>
            <a href={icon.link} target="_blank">
              <img
                src={icon.image}
                className="external-icon"
                key={key}
              />
            </a>
          )
        }
      </div>
      <div className="card-body body-card-item">{children}</div>
      <TechInventory techUsed={tech} />
    </div>
  )
}