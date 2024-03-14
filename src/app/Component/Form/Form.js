import React from 'react';
import './Form.css'
const Form = () => {
  return (
    <form action="/api/submit-form" method="POST">
      <h2>Get In Touch Now</h2>
      <label htmlFor="fname">Name:</label>
      <input type="text" id="fname" name="name" placeholder="Your name.." required />

      <label htmlFor="lname">Email:</label>
      <input type="email" id="lname" name="email" placeholder="Your email.." required />

      <label htmlFor="phone">Phone:</label>
      <input type="tel" id="phone" name="phone" placeholder="Your phone number.." />

      <label htmlFor="message">Message:</label>
      <textarea id="message" name="message" placeholder="Write something.." required></textarea>

      <button type="submit">Send Message</button>
    </form>
  );
};

export default Form;
