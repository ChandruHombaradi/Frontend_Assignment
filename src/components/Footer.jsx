import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p>© {new Date().getFullYear()} Parikshe Clone. All rights reserved.</p>
        <p className="muted">Built using React.js + JSON Server API</p>
      </div>
    </footer>
  );
}
