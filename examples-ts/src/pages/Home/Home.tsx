import { FC } from "react";
import { Link } from "react-router-dom";

export const Home: FC<{}> = () => {
  return (
    <div className="home">
      <img src="logo.webp" alt="MacContacts" />
        <Link to={"contacts"}>Contactos</Link>
        <Link to={"/"}>Home</Link>
    </div>
  );
};
