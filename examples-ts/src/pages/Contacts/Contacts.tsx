import { SearchBar, ContactList } from "./components";
import { useToggleButton } from "./hooks/useToggleButton";
import { useContacts } from "./useContacts";
import { AddContact } from "../AddContact";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { Link } from "react-router-dom";

export const Contacts: React.FC = () => {
  const { open, toggle } = useToggleButton();
  const { contacts, save, remove, search } = useContacts();
  
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
      <Link to="/"><h1 className="title">MacContactos</h1></Link>
      <SearchBar onSearch={search} />
      <button onClick={toggleTheme} className="styledButton">
        Change theme to {theme === 'light' ? 'Dark mode' : 'Light mode'}
      </button>
      <ContactList contacts={contacts} remove={remove}/>
      {!open ? (
        <button type="button" onClick={toggle} className="styledButton">
          Add Contact
        </button>
      ) : (
        <AddContact onClose={toggle} onSave={save}/>
      )}
    </main>
  );
};
