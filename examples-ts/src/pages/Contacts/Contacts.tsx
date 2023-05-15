import { SearchBar, ContactList } from "./components";
import { useToggleButton } from "./hooks/useToggleButton";
import { useContacts } from "./useContacts";
import { AddContact, AddContactForm } from "../AddContact";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

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
  
  const { theme, toggleTheme } = useContext(ThemeContext);
  
  const styles = {
    backgroundColor: theme === 'light' ? '#fff' : '#000',
    color: theme === 'light' ? '#000' : '#fff',
    padding: '1rem',
    minHeight: "100vh",
    overflow: "auto"
  };

  return (
    <main style={styles}>
      <h1 className="title">Contacts</h1>
      <SearchBar onSearch={search} />
      <button onClick={toggleTheme} className="styledButton">
        Change theme to {theme === 'light' ? 'Dark mode' : 'Light mode'}
      </button>
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
