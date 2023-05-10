import { FC } from "react";

export const SearchBar: FC<{ onSearch: (value: string) => void }> = ({
  onSearch,
}) => {
  return (
    <input
      className="search"
      type="search"
      placeholder="Search contact by name..."
      onChange={(e) => {
        onSearch(e.target.value);
      }}
    />
  );
};
