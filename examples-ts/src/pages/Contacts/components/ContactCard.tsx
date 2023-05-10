import { FC } from "react";

export const ContactCard: FC<{ contact: Contact }> = ({ contact }) => {
  return (
    <div className="listItem">
      <div className="infoField" id="contact-name">Name: {contact.name}</div>
      <div className="infoField" id="contact-phone">Phone: {contact.phone}</div>
      <div className="infoField" id="contact-email">Email: {contact.email}</div>
    </div>
  );
};
