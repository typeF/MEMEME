import React from "react";
import { Query } from "react-apollo";
import LoginStatusQuery from "../../graphQL/LoginStatusQuery";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

const Login = () => {
  const loginInfo = {
    username: "Alice",
    email: "alice@mememe.com",
    password: "1"
  };

  return (
    <Query query={LoginStatusQuery}>
      {({ data }) =>
        data.isLoggedIn ? (
          <LogoutButton />
        ) : (
          <LoginButton loginInfo={loginInfo} />
        )
      }
    </Query>
  );
};

export default Login;
