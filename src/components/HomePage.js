import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <>
      <h1>Home</h1>
      <Link to="signIn">Sign in</Link><br/>
      <Link to="signUp">Sign up</Link>
    </>
  );
};

export default HomePage;
