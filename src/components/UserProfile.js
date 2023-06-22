import { Link, useParams } from "react-router-dom";

const UserProfile = ({profiles}) => {
  const { id } = useParams();
  const user = profiles.find(profile => profile.email === id)

  return (
    <>
      <Link to={`/profile/editProfile/${user.email}`}>Edit profile</Link><br/>
      <Link to={`/profile/changePassword/${user.email}`}>Change password</Link>

      <p>
        welcome {user.firstName} {user.lastName}
      </p>
      <p>the following users have been registered</p>
      <ul>
        {profiles.map((profile) => (
          <li key={profile.email}>{profile.firstName}</li>
        ))}
      </ul>
    </>
  );
};


export default UserProfile;
