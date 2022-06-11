import { useSelector } from "react-redux";

import { Fragment } from "react";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";

function App() {
  const show = useSelector((state) => state.authentication.isAuthenticated);

  return (
    <Fragment>
      <Header />
      {show && <UserProfile />}
      {!show && <Auth />}
      <Counter />
    </Fragment>
  );
}

export default App;
