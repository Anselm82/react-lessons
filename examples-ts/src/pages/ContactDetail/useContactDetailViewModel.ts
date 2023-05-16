import { useEffect, useState } from "react";

const defaultContact: Contact = {
  id: 0,
  name: "",
  username: "",
  email: "",
  phone: "",
  website: "",
};

export const useContactDetailViewModel = (id: number) => {
    
  const [contact, setContact] = useState<Contact>(defaultContact);

  useEffect(() => {
    const load = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      const result = await response.json();
      setContact(result);
    };
    load();
  }, [id]);

  return { contact };
};
