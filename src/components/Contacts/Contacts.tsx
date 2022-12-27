import React from 'react'
import ContactsModuleCSS from './Contacts.module.scss'
import github from './icons8-github-94.png'
import coffee from './icons8-coffee-40.png'
import envelope from './icons8-envelope-80.png'
import insta from './icons8-instagram-138.png'

const Contacts = () => {
    return (
        <div className={ContactsModuleCSS.contactsContainer}>
            <main className="section">
      <div className="container">
        <ul className="content-list">
          <li className="content-list__item">
            <h2 className="title-2">Location</h2>
            <p>Midlands, UK</p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Buy me a coffee</h2>
            <p>
              <a href="https://www.buymeacoffee.com/evgenii"><img src={coffee} alt="buy me a coffee link"/></a>
            </p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">github</h2>
            <p>
              <a href="https://github.com/itsevgenii"><img src ={github} alt="github link"/></a>
            </p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Email</h2>
            <p>
              <a href="mailto:smazanovich@icloud.com">
                <img src={envelope} alt="email link"/>
              </a>
            </p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Instagram</h2>
            <p>
              <a href="https://www.instagram.com/evgenii_jsdev/">
                <img src={insta} alt="insta link"/>
              </a>
            </p>
          </li>
        </ul>
        <h2>27 Dec 2022.  © 2022 Evgenii Smazanovich</h2>
      </div>
    </main>
        </div>
    )
}

export default Contacts