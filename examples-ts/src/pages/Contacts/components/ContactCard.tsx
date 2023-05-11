import { FC } from "react";

export const ContactCard: FC<{ contact: Contact, remove: () => void, onCardClicked: () => void }> = ({ contact, remove, onCardClicked }) => {
  return (
    <div className="listItem" onClick={onCardClicked}>
      <div className="infoField" id="contact-name">Name: {contact.name}</div>
      <div className="infoField" id="contact-phone">Phone: {contact.phone}</div>
      <div className="infoField" id="contact-email">Email: {contact.email}</div>
      <button type="button" onClick={remove} className="styledButton">
          Remove contact
      </button>
    </div>
  );
};
