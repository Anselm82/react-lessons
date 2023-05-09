import React, { FC } from "react";

export const AddContactForm: FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <>
      <input type="text" id="contact-name" />
      <input type="text" id="contact-phone" />
      <input type="text" id="contact-email" />
      <button id="close" onClick={onClose}>
        Close
      </button>
    </>
  );
};
