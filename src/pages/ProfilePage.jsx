import { useContext } from "react";
import LogIn from "../components/LogIn";
import Profile from "../components/Profile";
import Context from "../Context";

function ProfilePage() {
  const { isLoggedIn } = useContext(Context);

  return (
    <>
      <h1>Profile</h1>
      {isLoggedIn ? <Profile /> : <LogIn />}
    </>
  );
}

export default ProfilePage;
