import React, { FC } from "react"
import { AddContactForm } from "./AddContactForm"

export const AddContact : FC<{onClose: () => void, onSave: (contact: Contact) => void}> = ({onClose, onSave}) => {

    return (<div className="addContact">
        <AddContactForm onClose={onClose} onSave={onSave}/>
    </div>)
}