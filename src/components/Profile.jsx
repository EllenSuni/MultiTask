import { useContext } from "react";
import Context from "../Context";

function Profile() {
  const { setIsLoggedIn, setUser } = useContext(Context);

  function handleLogOut() {
    setIsLoggedIn(false);
    setUser({ email: null, password: null });
  }

  return (
    <>
      <h1>Logged in!</h1>
      <button onClick={handleLogOut}>Log out</button>
    </>
  );
}

export default Profile;
