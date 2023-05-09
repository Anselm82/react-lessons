import { FC } from "react";
import { ContactList } from "./ContactList";
import { SearchBar } from "./SearchBar";

export const Contacts: FC<{search: (value: string) => void, contacts: Contact[]}> = ({search, contacts}) => {
  
  return (
    <>
      <SearchBar onSearch={search} />
      <ContactList contacts={contacts} />
    </>
  );
};
