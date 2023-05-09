import React, { FC } from "react"
import { AddContactForm } from "./AddContactForm"

export const AddContact : FC<{onClose: () => void}> = ({onClose}) => {

    return (<div style={{width: 250}}>
        <AddContactForm onClose={onClose}/>
    </div>)
}