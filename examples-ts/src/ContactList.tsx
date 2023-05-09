import { FC } from "react"
import { ContactCard } from "./ContactCard"

export const ContactList : FC<{contacts: Contact[]}> = ({contacts}) => {

    return (<div>
        {contacts.map(contact => <ContactCard key={contact.id} contact={contact} />)}
    </div>)
}