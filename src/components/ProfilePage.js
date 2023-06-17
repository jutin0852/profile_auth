import { Outlet } from "react-router-dom";

const ProfilePage = () => {
  return (
    <>
      <h2>profile</h2>
      <Outlet />
    </>
  );
};

export default ProfilePage;
