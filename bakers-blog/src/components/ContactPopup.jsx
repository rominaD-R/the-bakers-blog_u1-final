import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import './css/ContactPopup.css'

export default function ContactPopup( props ) {
  return (props.trigger) ? (
    <div className='popup-background'>
        <div className='popup-contact'>
            <div className='top-row'>
                <h2>Contact Me!</h2>
                <button onClick={() => props.setTrigger(false)}><FontAwesomeIcon icon={faX} /></button>
            </div>
            <form action="">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" placeholder="Your name..." />

                <label for="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="Your email..." />

                <label for="subject">Message:</label>
                <textarea id="subject" name="subject" placeholder="Write something..."></textarea>

                <input type="submit" value="Submit" onClick={() => props.setTrigger(false)} />
            </form>
        </div>
    </div>
  ) : "";
}
