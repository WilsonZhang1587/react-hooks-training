import React, { useContext } from "react";
import { UserContext } from "../UserContext";
import { login } from "../utils/login";

export function Index() {
  const { user, setUser } = useContext(UserContext); // app.js的 useState 透過 useMemo 整合起來成一個 func

  return (
    <div>
      <h2>Home</h2>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      {user ? (
        <button
          onClick={() => {
            setUser(null);
          }}
        >
          logout
        </button>
      ) : (
        <button
          onClick={async () => {
            const user = await login();
            setUser(user);
          }}
        >
          login
        </button>
      )}
    </div>
  );
}
