import { useState } from "react";
import contactsJson from "./contacts.json";

export const useContacts = () => {

    const [contacts, setContacts] = useState<Contact[]>(contactsJson);
    const [filtered, setFiltered] = useState<Contact[]>([]);

    const search = (value: string) => {
        if (!value || value.length === 0)
            setFiltered([]);
        else
            setFiltered(contacts.filter((item) => item.name.includes(value)));
    };

    const save = (contact: Contact) => {
        setContacts([...contacts, {...contact, id: contacts.length + 1}]);
    };

    return {
        contacts,
        filtered,
        save,
        search
    };
};
