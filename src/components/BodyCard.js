import React from 'react'

export default ({ title, body, techIcons, icon, preview, externalIcons }) => {
  return(
    <div className="body-card">
      <img className="preview" src={preview} />
      <div className="card-title">{title}</div>
      <div className="card-body">{body}</div>
      <div className="tech-icons">
        { techIcons.map((icon, key) =>
            <img
              src={icon}
              className="tech-icon"
              key={key}
            />
          )
        }
      </div>
      <div className="external-icons">
        { externalIcons.map((icon, key) =>
            <img
              src={icon}
              className="external-icon"
              key={key}
            />
          )
        }
      </div>
    </div>
  )
}
