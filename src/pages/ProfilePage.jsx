import { useContext } from "react";
import LogIn from "../components/LogIn";
import Profile from "../components/Profile";
import Context from "../Context";

function ProfilePage() {
  const { user } = useContext(Context);

  return (
    <>
      <h1>Profile</h1>
      {user.isLoggedIn ? <Profile /> : <LogIn />}
    </>
  );
}

export default ProfilePage;
