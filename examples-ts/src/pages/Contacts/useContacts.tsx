import { useEffect, useState } from "react";

export const useContacts = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [filtered, setFiltered] = useState<Contact[]>([]);
  const [selected, setSelected] = useState<Contact | undefined>();

  const select = (contact: Contact) => {
    setSelected(contact);
  };

  const reset = () => {
    setSelected(undefined);
  };

  const search = (value: string) => {
    if (!value || value.length === 0) setFiltered([]);
    else setFiltered(contacts.filter((item) => item.name.includes(value)));
  };

  const save = (contact: Contact) => {
    if (contact.id === 0)
      setContacts([...contacts, { ...contact, id: contacts.length + 1 }]);
    else update(contact);
  };

  const remove = (id: number) => {
    setContacts(contacts.filter((item) => item.id !== id));
  };

  const update = (contact: Contact) => {
    const users = [
      ...contacts.filter((item) => item.id !== contact.id),
      contact,
    ];
    setContacts(users);
  };

  useEffect(() => {
    const load = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const result = await response.json();
      setContacts(result);
    };
    load();
  }, []);
  

  return {
    contacts: filtered.length === 0 ? contacts : filtered,
    filtered,
    selected,
    select,
    reset,
    save,
    update,
    remove,
    search,
  };
};
