import React, { FC, useState } from "react";

export const AddContactForm: FC<{
  onClose: () => void;
  onSave: (contact: Contact) => void;
}> = ({ onClose, onSave }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  return (
    <>
      <input
        type="text"
        id="contact-name"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        type="text"
        id="contact-phone"
        onChange={(e) => {
          setPhone(e.target.value);
        }}
      />
      <input
        type="text"
        id="contact-email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <br />
      <button id="close" onClick={onClose}>
        Close
      </button>
      <br />
      <button
        id="add"
        onClick={() =>
          onSave({
            id: 0,
            name: name,
            phone: phone,
            email: email,
          })
        }
      >
        Save
      </button>
    </>
  );
};
