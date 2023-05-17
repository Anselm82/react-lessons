import { SearchBar, ContactList } from "./components";
import { useToggleButton } from "./hooks/useToggleButton";
import { useContacts } from "./useContacts";
import { AddContact } from "../AddContact";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { Link } from "react-router-dom";
import { Button } from "../../components/StyledComponents";

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
      <Button onClick={toggleTheme}>
        Change theme to {theme === 'light' ? 'Dark mode' : 'Light mode'}
      </Button>
      <ContactList contacts={contacts} remove={remove}/>
      {!open ? (
        <Button type="button" onClick={toggle}>
          Add Contact
        </Button>
      ) : (
        <AddContact onClose={toggle} onSave={save}/>
      )}
    </main>
  );
};
