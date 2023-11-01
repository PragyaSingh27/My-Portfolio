import Loader from 'react-loaders';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useState } from 'react';
import { useEffect } from 'react';
import React from 'react';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import mail from "./mail.json";
import Lottie from "lottie-react";
// import {MapContainer,TileLayer} from 'https://cdn.esm.sh/react-leaflet'

const Contact = () => {
    const[letterClass, setLetterClass] = useState('text-animate')
    const refForm=useRef()
    useEffect(() => {
        let timeout = setTimeout(() => {
           setLetterClass("text-animate-hover");
         }, 3000);
       
         return () => {
           clearTimeout(timeout);
         };
       }, []);
       const sendEmail = (e) => {
        e.preventDefault()

        emailjs
        .sendForm('service_kyvvmu3','template_6uxavxf',refForm.current,'wkarRjx09pC5xiyJL')
        .then(
          () => {
            alert('Message successfully sent!')
            window.location.reload(false)
          },
          () => {
            alert('Failed to send the message, please try again')
          }
        )
    }

          
    return(
        <>
            <div className="container contact-page">
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['C','o','n','t','a','c','t',' ','m','e']}
                        idx={15}
                        />
                    </h1>
                    <p>Feel free to contact me for any work or suggestions using below form.</p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type='text' name='name' placeholder='Name' required/>
                                </li>
                                <li className='half'>
                                    <input type='email' name='email' placeholder='Email' required/>
                                </li>
                                <li>
                                    <input placeholder='Subject' type='text' name='subject' required/>
                                </li>
                                <li>
                                    <textarea placeholder='Message' name='message'
                                    required>

                                    </textarea>
                                </li>
                                <li>
                                    <input type="submit" className='flat-button'
                                    value='Send'/>
                                </li>

                            </ul>
                        </form>
                    </div>
                </div>
                <div className="mail">
                    <Lottie animationData={mail} />
                </div>
                {/* <div className="info-map">
                    Pragya Singh, <br/>
                    India, <br/>
                    JSS Academy of Technical Education,201301 <br/>
                    Noida, Uttar Pradesh <br/>
                    <span>psingh272001@gmail.com</span>
                </div> */}


                {/* <div className='map-wrap'>
                    <MapContainer center={[28.612641208507355, 77.37225171083178]} zoom={13}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[28.612641208507355, 77.37225171083178]} >
                            <Popup>Hi, I live here.</Popup>
                        </Marker>


                    </MapContainer>
                </div> */}
            </div>
            <Loader type="pacman"/>
        </>
    )
}

export default Contact;
