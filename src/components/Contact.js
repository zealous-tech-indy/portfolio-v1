import React from 'react'

const Contact = () => (
  <section id="contact">
    <div className="inner">
      <section>
        <form data-netlify="true" name="Contact Form" method="POST" action="/">
          <input type="hidden" name="form-name" value="Contact Form" />
          <div className="field half first">
            <label htmlFor="name">
              Name
              <input
                type="text"
                name="name"
                id="name"
                placeholder="First Last"
              />
            </label>
          </div>
          <div className="field half">
            <label htmlFor="phone">
              Phone
              <input
                type="tel"
                name="phone"
                id="phone"
                placeholder="317-123-4567"
              />
            </label>
          </div>
          <div className="field">
            <label htmlFor="email">
              Email
              <input type="text" name="email" id="email" />
            </label>
          </div>
          <div className="field">
            <label htmlFor="message">
              Message
              <textarea name="message" id="message" rows="6" />
            </label>
          </div>
          <ul className="actions">
            <li>
              <input type="submit" value="Send Message" className="special" />
            </li>
            <li>
              <input type="reset" value="Clear" />
            </li>
          </ul>
        </form>
      </section>
      <section className="split">
        <section>
          <div className="contact-method">
            <span className="icon alt fa-envelope" />
            <h3>Email</h3>
            <a href="mailto:zealoustechindy@gmail.com">
              zealoustechindy@gmail.com
            </a>
          </div>
        </section>
        <section>
          <div className="contact-method">
            <span className="icon alt fa-phone" />
            <h3>Phone</h3>
            <span>(317) 426-1771</span>
          </div>
        </section>
        {/* <section>
          <div className="contact-method">
            <span className="icon alt fa-home" />
            <h3>Address</h3>
            <span>
              1234 Somewhere Road #5432
              <br />
              Nashville, TN 00000
              <br />
              United States of America
            </span>
          </div>
        </section> */}
      </section>
    </div>
  </section>
)

export default Contact
