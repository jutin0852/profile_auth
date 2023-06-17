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

const initialProfiles = [
  {
    firstName: "chinwe",
    lastName: "jutin",
    email: "jutindikonu8@gmail.com",
    passWord: "jutin12345#",
  },
];

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
      <Route path="profile" element={<ProfilePage />}>
        <Route
          path=":id"
          element={<UserProfile profiles={initialProfiles} />}
        />
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
