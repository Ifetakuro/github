import * as React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function ErrorFallback({ error }) {
  const navigate = useNavigate();
  return (
    <div role="alert">
      <p>Invalid. Please go back to home and refresh your page</p>
      <button onClick={() => navigate("./")}>Back to home</button>
      <pre style={{ color: "red" }}>{error.message}</pre>
    </div>
  );
}
