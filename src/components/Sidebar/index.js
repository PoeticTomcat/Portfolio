import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faHome,
    faUser,
    faEnvelope,
    faLink,
    faCodeMerge,
    faCodeBranch
  } from '@fortawesome/free-solid-svg-icons'
import { faFreeCodeCamp, faGitlabSquare, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className ='nav-bar'>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon ={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon ={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon ={faEnvelope} color="#4d4d4e" />
            </NavLink>
        </nav>
        <ul>
            <li>LinkedIn
                <a target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/seth-porche/">
                    <FontAwesomeIcon icon={faLinkedinIn} color="#4d4d4e" />
                </a>
            </li>
            <li>GitLab
                <a target="_blank" rel='noreferrer' href="https://gitlab.com/sporche">
                    <FontAwesomeIcon icon={faGitlabSquare} color="#4d4d4e" />
                </a>
            </li>
            <li>Codewars
                <a target="_blank" rel='noreferrer' href="https://www.codewars.com/users/PoeticTomcat">
                    <FontAwesomeIcon icon={faCodeBranch} color="#4d4d4e" />
                </a>
            </li>
        </ul>
    </div>
)
export default Sidebar