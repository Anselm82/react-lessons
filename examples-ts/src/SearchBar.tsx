import { FC } from "react";

export const SearchBar : FC<{onSearch: (value: string) => void}> = ({onSearch}) => {
    return (
        <input type="search" onChange={(e) => {
            onSearch(e.target.value)
        }}/>
    )
}