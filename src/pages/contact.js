import React, { Component } from 'react'
import Link, { navigateTo } from 'gatsby-link'
import { Button, LabelledInput } from '../components'

class Contact extends Component {

  constructor () {
    super()
    this.state = {
      submitted: false
    }
  }

  // not cool, but currently the only way to use the howdy client
  componentDidMount () {
    const script = document.createElement("script");
    script.src = "https://static.howdyform.com/howdyClient.js?token=amFja0BqYWNrZGMuY29t";
    script.async = true;
    script.dataset.howdyRecipient = 'jack@patchsoftware.co.uk'
    script.onload = () => {
      window.howdyEvents.afterSend = () => navigateTo('/thanks')
    }
    document.body.appendChild(script);
  }

  render () {
    return (
      <div style={{ width: '100%' }}>
        <h1>Get in touch</h1>
        <p>
          We'd ❤️ to work with you on your next big idea!<br />
          Drop us a message in the form below.
        </p>
        <form autoComplete="off">
          <LabelledInput
            label="Your name"
            name="name"
            type="text"
            style={{ marginBottom: '1.5rem' }}
            data-howdy-validate="none"
            required
          />
          <LabelledInput
            label="Your email address"
            name="email"
            type="email"
            style={{ marginBottom: '1.5rem' }}
            data-howdy-validate="none"
            required
          />
          <LabelledInput
            label="Your message"
            name="message"
            data-howdy-validate="none"
            multiline
            required
          />
          <Button type="submit" style={{ float: 'right', marginTop: '1rem' }}>Send</Button>
        </form>
      </div>
    )
  }
}

export default Contact
