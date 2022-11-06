import React from "react";
import notFound from "../image/not-found.svg";

export default function NotFound() {
  return (
    <div className="not-found container">
      <h1>404: Page Not Found</h1>
      <img src={notFound} alt="not found" />
    </div>
  );
}
