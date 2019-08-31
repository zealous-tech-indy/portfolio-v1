import React from 'react'

const Footer = () => (
  <footer id="footer">
    <div className="inner">
      <ul className="icons">
        <li>
          <a
            href="https://twitter.com/tech_indy"
            className="icon alt fa-twitter"
          >
            <span className="label">Twitter</span>
          </a>
        </li>
        <li>
          <a
            href="https://facebook.com/zealoustech/"
            className="icon alt fa-facebook"
          >
            <span className="label">Facebook</span>
          </a>
        </li>
        <li>
          <a
            href="https://instagram.com/zealoustechindy/"
            className="icon alt fa-instagram"
          >
            <span className="label">Instagram</span>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/zealous-tech-indy/"
            className="icon alt fa-github"
          >
            <span className="label">GitHub</span>
          </a>
        </li>
      </ul>
      <ul className="copyright">
        <li>&copy; Zealous Tech LLC</li>
        <li>2019</li>
      </ul>
    </div>
  </footer>
)

export default Footer
