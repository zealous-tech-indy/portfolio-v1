import React from 'react'

const BannerLanding = props => {
  const { title, desc1, desc2, page } = props
  return (
    <section id="banner" className={`style2 ${page}`}>
      <div className="inner">
        <header className="major">
          <h1>{title}</h1>
        </header>
        <div className="content">
          <p>
            {desc1}
            <br />
            {desc2}
          </p>
        </div>
      </div>
    </section>
  )
}

export default BannerLanding
