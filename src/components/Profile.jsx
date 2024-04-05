import { useContext } from "react";
import Context from "../Context";

function Profile() {
  const { setUser } = useContext(Context);

  function handleLogOut() {
    setUser({ isLoggedIn: false });
    localStorage.setItem("user", JSON.stringify({ isLoggedIn: false }));
  }

  return (
    <>
      <h1>Logged in!</h1>
      <button onClick={handleLogOut}>Log out</button>
    </>
  );
}

export default Profile;
