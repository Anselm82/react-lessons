import { FC } from "react";
import { ContactCard } from "./ContactCard";

export const ContactList: FC<{ contacts: Contact[], remove: (id: number) => void, onEdit: (contact: Contact) => void}> = ({ contacts, remove, onEdit }) => {
  return (
    <>
      <h2 className="list-header">Contacts list</h2>
      <div className="list">
        {contacts.map((contact) => (
          <ContactCard key={contact.id} contact={contact} remove={() => remove(contact.id)} onCardClicked={() => onEdit(contact)} />
        ))}
      </div>
    </>
  );
};
