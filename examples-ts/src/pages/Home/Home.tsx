import { FC } from "react";
import { Link } from "react-router-dom";

export const Home: FC<{}> = () => {
  return (
    <div className="home">
        <div className="homeTitle">MacContactos</div>
        <Link to={"contacts"}>
            <img src="logo.webp" alt="MacContacts" height={200} width={200} />
        </Link>
    </div>
  );
};
