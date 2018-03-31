import React from 'react'

export default ({ screenHeight, odysseyPlayed }) => {
  const visibility = odysseyPlayed ? "visible" : "hidden"

  const style = odysseyPlayed ?
    {
      opacity: 1,
      transition: 'opacity 1200ms',
    } :
    {
      opacity: 0,
      transition: 'opacity 1200ms',
    }

    console.log(style)

  return(
    <div id="blurb" style={style}>
      <p>
        Blog gentrify truffaut, activated charcoal helvetica post-ironic
        drinking vinegar YOLO roof party keffiyeh cred DIY woke tilde palo
        santo. 90's chia celiac pok pok tilde, echo park hell of chillwave
        sriracha tattooed trust fund. Gastropub venmo jean shorts vegan af
        polaroid. Chicharrones direct trade hella, fanny pack stumptown tilde
        flexitarian af.
      </p>
    </div>
  )
}
