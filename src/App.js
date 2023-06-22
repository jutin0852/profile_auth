import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import HomePage from "./components/HomePage";
import PageLayout from "./components/PageLayout";
import ErrorPage from "./components/ErrorPage";
import SignInPage from "./components/SignInPage";
import SignUpPage from "./components/SignUpPage";
import ProfilePage from "./components/ProfilePage";
import UserProfile from "./components/UserProfile";
import EditProfile from "./components/EditProfile";
import ChangePasswordPage from "./components/ChangePasswordPage";
import EditProfileLayout from "./components/EdithProfilePage";
import ChangePassword from "./components/ChangePassword";

const initialProfiles = [];

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<PageLayout />}>
      <Route index element={<HomePage />} />
      <Route
        path="signIn"
        element={<SignInPage profiles={initialProfiles} />}
      />
      <Route
        path="signUp"
        element={<SignUpPage profiles={initialProfiles} />}
      />
      <Route path="profile" errorElement={<ErrorPage />} element={<ProfilePage />}>
        <Route
          path=":id"
          element={<UserProfile profiles={initialProfiles} />}
        />
        <Route path="editProfile" element={<EditProfileLayout />}>
          <Route
            path=":id"
            element={<EditProfile profiles={initialProfiles} />}
          />
        </Route>
        <Route path="changePassword" element={<ChangePasswordPage />}>
          <Route
            path=":id"
            element={<ChangePassword profiles={initialProfiles} />}
          />
        </Route>


      </Route>

      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
