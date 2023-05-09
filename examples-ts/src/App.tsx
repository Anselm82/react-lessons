import React  from 'react';
import './App.css';
import { useToggleButton } from './useToggleButton';
import { AddContact } from './AddContact';
import { Contacts } from './Contacts';

function App() {
  const { open, toggle } = useToggleButton()
  return (
    <div className="App">

        {!open ? <><Contacts />
        <button type="button" onClick={toggle}>Add Contact</button>
        </> : <AddContact onClose={toggle} />}
        
    </div>
  );
}

export default App;
