import { FC } from "react";
import { Link } from "react-router-dom";

export const ContactCard: FC<{
  contact: Contact;
  remove: () => void;
}> = ({ contact, remove }) => {
  
  const handleClose = (event: any) => {
    event.preventDefault();
    remove();
  };

  return (
    <div className="listItem">
      <Link to={`/contact/${contact.id}`}>
        <div className="infoField" id="contact-name">
          Name: {contact.name}
        </div>
        <div className="infoField" id="contact-phone">
          Phone: {contact.phone}
        </div>
        <div className="infoField" id="contact-email">
          Email: {contact.email}
        </div>
      </Link>
      <button type="button" onClick={handleClose} className="styledButton">
        Remove contact
      </button>
    </div>
  );
};
