import { useState } from 'react';

export const useToggleButton = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);
  return {
    open,
    toggle
  };
};
