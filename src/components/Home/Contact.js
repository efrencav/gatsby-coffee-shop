import React from 'react'
import Title from '../Globals/Title'




export default function Contact() {
    return (
        <section className="contact py-5">
            <Title title="contact us" />
            <div className="row">
                <div className="col-10 col-sm-8 col-md-6 mx-auto">
                    <form action="https://formspree.io/xkngoddd" method="POST">
                        {/*Name*/}
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" className="form-control" name="name" id="name" placeholder="john smith" />
                        </div>
                        {/*email*/}
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="text" className="form-control" name="email" id="email" placeholder="email@email.com" />
                        </div>
                        {/*message*/}
                        <div className="form-group">
                            <label htmlFor="message">message</label>
                            <textarea name="message" id="description" className="form-control" rows="5" placeholder="Your message goes here."></textarea>
                        </div>
                        {/*submit*/}
                        <button className="btn btn-yellow btn-block text-capitalize mt-5">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}
