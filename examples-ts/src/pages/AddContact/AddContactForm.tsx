import React, { FC, useState } from "react";

export const AddContactForm: FC<{
  mode: "edit" | "add"
  contact: Contact
  onClose: () => void;
  onSave: (contact: Contact) => void;
}> = ({ mode = "add", contact, onClose, onSave }) => {
  const [name, setName] = useState(contact.name);
  const [phone, setPhone] = useState(contact.phone);
  const [email, setEmail] = useState(contact.email);
  const [username, setUsername] = useState(contact.username);
  const [website, setWebsite] = useState(contact.website);
  return (
    <div className="addForm">
      <h2 className="list-header">{mode === "add" ? "Add new" : "Edit"} contact</h2>
      <input
        className="inputField"
        value={name}
        placeholder="Type the name..."
        type="text"
        id="contact-name"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        className="inputField"
        placeholder="Type the username..."
        value={username}
        type="text"
        id="contact-username"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <input
        className="inputField"
        type="text"
        value={phone}
        placeholder="Type the phone..."
        id="contact-phone"
        onChange={(e) => {
          setPhone(e.target.value);
        }}
      />
      <input
        className="inputField"
        type="text"
        value={email}
        id="contact-email"
        placeholder="Type the email..."
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        className="inputField"
        type="text"
        value={website}
        id="contact-website"
        placeholder="Type the website..."
        onChange={(e) => {
          setWebsite(e.target.value);
        }}
      />
      <div className="actions">
        <button id="close" className="styledButton" onClick={onClose}>
          Close
        </button>

        <button
          id="add"
          className="styledButton"
          onClick={() => {
            onSave({
              id: contact.id,
              name: name,
              phone: phone,
              email: email,
              username: username,
              website: website,
            });
            onClose();
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
};
