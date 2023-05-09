import React  from 'react';
import './App.css';
import { useToggleButton } from './useToggleButton';
import { AddContact } from './AddContact';
import { Contacts } from './Contacts';

function App() {
  const { open, toggle } = useToggleButton()
  return (
    <div className="App">

        {!open ? <Contacts />: <AddContact onClose={toggle} />}
        <button type="button" onClick={toggle}>Add Contact</button>
    </div>
  );
}

export default App;
