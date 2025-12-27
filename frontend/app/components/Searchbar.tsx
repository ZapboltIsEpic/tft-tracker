import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

import { KeyboardEventHandler } from "react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onSearch: (value: string) => void;
  placeholder?: string;
}

export default function SearchBar({
  value,
  onChange,
  onSearch,
  placeholder = "Search Riot ID",
}: SearchBarProps) {
  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      onSearch(value);
    }
  };

  const handleSearchClick = () => {
    onSearch(value);
  };

  return (
    <Paper
      component="form"
      sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
    >
      <InputBase
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        sx={{ ml: 1, flex: 1 }}
        placeholder={placeholder}
      />
      <IconButton
        type="button"
        sx={{ p: "10px" }}
        aria-label="search"
        onClick={handleSearchClick}
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
