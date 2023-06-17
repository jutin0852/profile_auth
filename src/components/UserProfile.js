import { useParams } from "react-router-dom";

const UserProfile = ({profiles}) => {
  const { id } = useParams();
  const user = profiles.find(profile => profile.email === id)

  return (
    <>
      <p>welcome {user.firstName} {user.lastName}</p>
      <p>the following users have been registered</p>
      <ul>{profiles.map(profile => <li key={profile.email}>{profile.firstName}</li>)}</ul>
    </>
  );
};

export default UserProfile;
