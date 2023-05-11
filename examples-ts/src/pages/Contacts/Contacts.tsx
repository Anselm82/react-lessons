import { SearchBar, ContactList } from "./components";
import { useToggleButton } from "./hooks/useToggleButton";
import { useContacts } from "./useContacts";
import { AddContact, AddContactForm } from "../AddContact";
import { useState } from "react";

export const Contacts: React.FC = () => {
  const { open, toggle } = useToggleButton();
  const { contacts, save, remove, search } = useContacts();
  const [selected, setSelected] = useState<Contact | undefined>()
  
  const handleEditClicked = (contact: Contact) => {
    setSelected(contact)
  }

  return (
    <main>
      <h1 className="title">Contacts</h1>
      <SearchBar onSearch={search} />
      <ContactList contacts={contacts} remove={remove} onEdit={handleEditClicked}/>
      {!open ? (
        <button type="button" onClick={toggle} className="styledButton">
          Add Contact
        </button>
      ) : (
        <AddContact onClose={toggle} onSave={save}/>
      )}
      {selected && <AddContactForm mode={"edit"} contact={selected} onClose={() => setSelected(undefined)} onSave={save} />}
    </main>
  );
};
