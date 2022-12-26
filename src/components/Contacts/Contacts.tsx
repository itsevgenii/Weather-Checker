import React from 'react'
import ContactsModuleCSS from './Contacts.module.scss'

const Contacts = () => {
    return (
        <div className={ContactsModuleCSS.contactsContainer}>
            <h1>About us:</h1>
            <main className="section">
      <div className="container">
        <h1 className="title-1">Contacts : Evgenii</h1>

        <ul className="content-list">
          <li className="content-list__item">
            <h2 className="title-2">Location</h2>
            <p>Midlands, UK</p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Telegram / WhatsApp</h2>
            <p>
              <a href="tel:+447865508114">+44 (786) 550-81-14</a>
            </p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Email</h2>
            <p>
              <a href="mailto:smazanovich@hotmail.com">
                smazanovich@hotmail.com
              </a>
            </p>
          </li>
        </ul>
      </div>
    </main>
        </div>
    )
}

export default Contacts