import { FC } from "react";

export const ContactCard: FC<{ contact: Contact, remove: () => void, onCardClicked: () => void }> = ({ contact, remove, onCardClicked }) => {

  const handleClose = (event: any) => {
    event.preventDefault();
    remove()
  }

  const handleClick = (event: any) => {
    event.preventDefault();
    onCardClicked()
  }
  return (
    <div className="listItem">
      <div onClick={handleClick}>
      <div className="infoField" id="contact-name">Name: {contact.name}</div>
      <div className="infoField" id="contact-phone">Phone: {contact.phone}</div>
      <div className="infoField" id="contact-email">Email: {contact.email}</div>
      </div>
      <button type="button" onClick={handleClose} className="styledButton">
          Remove contact
      </button>
    </div>
  );
};
