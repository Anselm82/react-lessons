import React, { FC, useState } from "react";

export const AddContactForm: FC<{
  onClose: () => void;
  onSave: (contact: Contact) => void;
}> = ({ onClose, onSave }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="addForm">
      <h2 className="list-header">Add new contact</h2>
      <input
        className="inputField"
        placeholder="Type the name..."
        type="text"
        id="contact-name"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
      className="inputField"
        type="text"
        placeholder="Type the phone..."
        id="contact-phone"
        onChange={(e) => {
          setPhone(e.target.value);
        }}
      />
      <input
      className="inputField"
        type="text"
        id="contact-email"
        placeholder="Type the email..."
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <div className="actions">
      <button id="close" className="styledButton" onClick={onClose}>
        Close
      </button>

      <button
        id="add"
        className="styledButton"
        onClick={() =>{
          onSave({
            id: 0,
            name: name,
            phone: phone,
            email: email,
          })
          onClose()}
        }
      >
        Save
      </button>
      </div>
    </div>
  );
};
