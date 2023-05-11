import React, { FC } from "react"
import { AddContactForm } from "./AddContactForm"

export const AddContact : FC<{onClose: () => void, onSave: (contact: Contact) => void}> = ({onClose, onSave}) => {
    const contact : Contact = {
        id: 0,
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""
    }
    return (<div className="addContact">
        <AddContactForm onClose={onClose} onSave={onSave} contact={contact} mode={"add"}/>
    </div>)
}