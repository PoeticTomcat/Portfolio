import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef()

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
    .sendForm(
        'service_c91443o',
        'template_y9h07it',
        form.current,
        'wmIjROm3OtkCLErYw'
    )
    .then(
        () => {
            alert('Message successfully sent!')
            window.location.reload(false)
        },
        () => {
            alert('Failed to send message, please try again.')
        }
    )
  }

    return (
        <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                    idx={15}/>
                </h1>
                <p>
                    I am interested in a position in the software engineering field. I have experience with back-end development, but I would say my strengths lie in frontend development. I am eager to build upon my experience within the field and ready to continue learning through new projects and applications. If you have any questions or would like to contact me regarding work, use the contact form below.
                </p>
                <div className='contact-form'>
                    <form ref={form} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type="text" name="name" placeholder="Name" required />                                
                            </li>
                            <li className='half'>
                                <input type="email"
                                name ="email"
                                placeholder="Email Address"
                                required
                                />
                            </li>
                           <li>
                            <input placeholder="Subject" type="text" name="subject" required />
                            </li>
                            <li>
                                <textarea 
                                placeholder="Message"
                                name="message"
                                required
                                ></textarea>
                            </li>
                            <input type="submit" className="flat-button" value="SEND"/>
                        </ul>
                    </form>
                </div>
            </div>
            <div className='info-map'>
                Seth Porche,
                <br />
                United States of America,
                <br />
                Tampa, Florida <br />
                <span>porchest2022@outlook.com</span>
            </div>
            <div className='map-wrap'>
                <MapContainer center={[27.980456, -82.318153]} zoom={13}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={[27.980456, -82.318153]}>
                        <Popup>Seth here, looking forward to hearing from you!</Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default Contact