import { FC } from "react";
import { ContactCard } from "./ContactCard";

export const ContactList: FC<{ contacts: Contact[] }> = ({ contacts }) => {
  return (
    <>
      <h2 className="list-header">Contacts list</h2>
      <div className="list">
        {contacts.map((contact) => (
          <ContactCard key={contact.id} contact={contact} />
        ))}
      </div>
    </>
  );
};
