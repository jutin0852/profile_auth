import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

const PageLayout = () => {
    return (
      <>
      <Link to="/">Home</Link>
        <Outlet />
      </>
    );
}
 
export default PageLayout;