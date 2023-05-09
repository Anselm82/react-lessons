import React, { FC } from "react"
import { AddContactForm } from "./AddContactForm"

export const AddContact : FC<{onClose: () => void, onSave: (contact: Contact) => void}> = ({onClose, onSave}) => {

    return (<div style={{width: 250}}>
        <AddContactForm onClose={onClose} onSave={onSave}/>
    </div>)
}