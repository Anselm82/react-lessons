import { SearchBar, ContactList } from "./components";
import { useToggleButton } from "./hooks/useToggleButton";
import { useContacts } from "./useContacts";
import { AddContact, AddContactForm } from "../AddContact";

export const Contacts: React.FC = () => {
  const { open, toggle } = useToggleButton();
  const { contacts, save, remove, search, selected, select, reset } = useContacts();

  return (
    <main>
      <h1 className="title">Contacts</h1>
      <SearchBar onSearch={search} />
      <ContactList contacts={contacts} remove={remove} onEdit={select}/>
      {!open ? (
        <button type="button" onClick={toggle} className="styledButton">
          Add Contact
        </button>
      ) : (
        <AddContact onClose={toggle} onSave={save}/>
      )}
      {selected && <AddContactForm mode={"edit"} contact={selected} onClose={() => reset} onSave={save} />}
    </main>
  );
};
