import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <p>
      page not found go to <Link to="/">Homepage</Link>
    </p>
  );
};

export default ErrorPage;
