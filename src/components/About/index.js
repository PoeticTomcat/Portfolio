import { useEffect, useState } from 'react'
import {
  faAngular,
  faAws,
  faCss3,
  faGitAlt,
  faGitSquare,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
              idx={15}
            />
          </h1>
          <p>
                As an experienced Full Stack Developer, I have a proven track record in creating transformative solutions. From leading a React-based trivia game application to optimizing wardrobe inventory management, my diverse projects showcase my ability to tackle challenges and deliver impactful solutions.
                </p>
                <p align="LEFT">
                I've demonstrated proficiency in React.js, Django REST Framework, JavaScript, HTML, CSS, and Python, earning endorsements for my expertise. My experiences, from developing a car sales and service application to troubleshooting hardware, reflect a comprehensive skill set in areas such as Application Development, Software Infrastructure, and Engineering.
                </p>
                <p>
                My educational background at Hack Reactor has equipped me with strong programming skills. Real-world projects like Trivia Titans and Wardrobify highlight my expertise in system design, back-end development, and front-end technologies like React. In my previous career, I successfully managed large warehouses, aligning my organizational skills with my software engineering expertise.
                </p>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAws} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitSquare} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About