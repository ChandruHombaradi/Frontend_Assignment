import React from "react";

export default function ErrorBox({ message }) {
  return (
    <div className="error">
      <strong>Error:</strong> {message}
    </div>
  );
}
