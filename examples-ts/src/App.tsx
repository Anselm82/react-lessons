import React  from 'react';
import './App.css';
import { useToggleButton } from './useToggleButton';
import { AddContact } from './AddContact';
import { Contacts } from './Contacts';
import { useContacts } from './useContacts';



function App() {
  const { open, toggle } = useToggleButton()
  const { contacts, filtered, save, search } = useContacts();
  return (
    <div className="App">
        {!open ? <><Contacts contacts={filtered.length > 0 ? filtered :contacts} search={search} />
        <button type="button" onClick={toggle}>Add Contact</button>
        </> : <AddContact onClose={toggle} onSave={save}/>}
        
    </div>
  );
}

export default App;
