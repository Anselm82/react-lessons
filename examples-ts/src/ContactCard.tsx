import { FC } from "react"

export const ContactCard : FC<{contact: Contact}> = ({contact}) => {

    return <div style={{width: 250}}>
        <input type="text" id="contact-name" disabled value={contact.name}/>
        <input type="text" id="contact-phone" disabled value={contact.phone}/>
        <input type="text" id="contact-email" disabled value={contact.email}/>
        <br/>
    </div>
}