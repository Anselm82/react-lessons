import { FC, useState } from "react"
import { ContactList } from "./ContactList"
import { SearchBar } from "./SearchBar"
import contactsJson from "./contacts.json";

export const Contacts : FC = () => {
    const [contacts, setContacts] = useState<Contact[]>(contactsJson)
    const handleSearch = (value: string) => {
      if(!value || value.length === 0)
        setContacts(contactsJson)
      else 
        setContacts(contacts.filter(item => item.name.includes(value)))
    }
    return (<>
        <SearchBar onSearch={handleSearch} />
        <ContactList contacts={contacts} /> 
        </>)
}