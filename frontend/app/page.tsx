"use client";

import { useState } from "react";
import SearchBar from "./components/Searchbar";

export default function Home() {
  const [searchUser, setSearchUser] = useState("");

  const handleSearch = (value: string) => {
    console.log("Input Value:", value);
  };

  return (
    <div className="bg-gray-400 h-screen grid place-content-center">
      <div>
        TFTracker has the best personalised stats and advice to improve your
        gameplay
      </div>
      <SearchBar
        value={searchUser}
        onChange={setSearchUser}
        onSearch={handleSearch}
      />
    </div>
  );
}
