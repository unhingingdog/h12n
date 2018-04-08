import React from 'react'

export default ({ title, children, techIcons, preview, externalIcons, appearAt }) => {
  const show = window.scrollY > appearAt ? { transform: 'translate(0)' } : {}
  return(
    <div className="body-card body-card-item">
      <div className="card-title body-card-item">{title}</div>
      <img className="preview body-card-item" src={preview} style={show} />
      <div className="external-icons body-card-item">
        { externalIcons.map((icon, key) =>
            <a href={icon.link}>
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
      <div className="tech-icons body-card-item">
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

const styles = {
  showPreview: {
    transform: 'translate(0)'
  }
}
