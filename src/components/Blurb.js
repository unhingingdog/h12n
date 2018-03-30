import React from 'react'

export default ({ screenHeight }) => {
  const visibility = screenHeight * 1.15 < window.scrollY ? "visible" : "hidden"

  return(
    <div id="blurb" style={{ visibility }}>
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
