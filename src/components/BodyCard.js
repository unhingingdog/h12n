import React from 'react'

export default ({ title, body, techIcons, icon, preview }) => {
  return(
    <div className="body-card">
      <div className="card-title">{title}</div>
      <div className="card-body">{body}</div>
      <img className="preview" src={preview} />
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
    </div>
  )
}
