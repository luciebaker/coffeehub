import React from 'react'
import Title from '../global/Title'

export default function Contact() {
    return (
        <section id="contact" className="contact py-5">
        <Title title="Contact Us" />
        <div className="row">
        <div className="col-10 col-sm-8 col-md-6 mx-auto">
        <form>
        {/* name*/}
        <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" className="form-control" name="name" id="name" placeholder="Enter Your Name Here"></input>
        </div>
        {/* email*/}
        <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="text" className="form-control" name="email" id="email" placeholder="Enter Your Email Here"></input>
        </div>
        {/* description*/}
        <div className="form-group">
        <label htmlFor="description">Your Message</label>
        <textarea name="description" id="description" className="form-control" rows="5" placeholder="Enter your Message here"></textarea>
        </div>
          {/* submit button*/}
          <button type="submit" aria-label="submit-button" className="btn btn-green btn-block mt-5">Submit</button>
        </form>
        </div>
        </div>
        </section>
    )
}
