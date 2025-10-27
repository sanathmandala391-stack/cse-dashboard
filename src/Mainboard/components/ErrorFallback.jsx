import React from "react";

function ErrorFallback({ error }) {
  return (
    <div style={{ padding: "2rem", color: "red" }}>
      <h2>Something went wrong.</h2>
      <pre>{error.message}</pre>
    </div>
  );
}

export default ErrorFallback;