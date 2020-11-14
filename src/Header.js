import React from "react";
import SearchEngine from "./SearchEngine";
import Conversion from "./Conversion";

import "./header.css";

export default function Header() {
  return (
    <div className="Header">
      <form>
        <button type="button" className="btn btn-outline-light">
          <i class="fas fa-map-marker-alt"></i>
          Location
        </button>
        <Conversion />
      </form>
        <SearchEngine/>
    </div>
  );
}
