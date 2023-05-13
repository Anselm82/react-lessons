import { SearchBar, ContactList } from "./components";
import { useToggleButton } from "./hooks/useToggleButton";
import { useContacts } from "./useContacts";
import { AddContact, AddContactForm } from "../AddContact";

export const Contacts: React.FC = () => {
  const { open, toggle } = useToggleButton();
  const { open: openEdit, toggle: toggleEdit } = useToggleButton();
  const { contacts, save, remove, search, selected, select, reset } = useContacts();

  const handleClose = () => {
    toggleEdit();
    reset();
  }

  const handleEdit = (contact: Contact) => {
    select(contact)
    toggleEdit();
  }
  
  return (
    <main>
      <h1 className="title">Contacts</h1>
      <SearchBar onSearch={search} />
      <ContactList contacts={contacts} remove={remove} onEdit={handleEdit}/>
      {!open ? (
        <button type="button" onClick={toggle} className="styledButton">
          Add Contact
        </button>
      ) : (
        <AddContact onClose={toggle} onSave={save}/>
      )}
      {selected && openEdit && <AddContactForm mode={"edit"} contact={selected} onClose={handleClose} onSave={save} />}
    </main>
  );
};
