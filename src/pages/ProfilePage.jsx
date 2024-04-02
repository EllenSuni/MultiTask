import LogIn from "../components/LogIn";

function ProfilePage() {
  return (
    <>
      <h1>Profile</h1>
      <LogIn />
      {/* if logged in show profile, else show login */}
    </>
  );
}

export default ProfilePage;
