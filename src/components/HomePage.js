import { Link } from "react-router-dom";
const HomePage = ({loggedIn}) => {
  return (
    <>
      <h1>Home</h1>
      <Link to="signIn">Sign in</Link>
      <br />
      <Link to="signUp">Sign up</Link>
      <br />
      <Link
        to={
          loggedIn.length === 0 ? "signIn": `/profile/${loggedIn[0].email}`
        }
      >
        profile
      </Link>
    </>
  );
};

export default HomePage;
