import React from "react";

export default function Conversion() {
  return (
    <div className="btn-group btn-group-sm" role="group">
      <button
        type="button"
        className="btn btn-outline-dark temp active"
        data-toggle="button"
        aria-pressed="true"
        id="celsius-button"
      >
        °C
      </button>
      <button
        type="button"
        className="btn btn-outline-dark temp"
        data-toggle="button"
        aria-pressed="false"
        id="fahrenheit-button"
      >
        °F
      </button>
    </div>
  );
}
