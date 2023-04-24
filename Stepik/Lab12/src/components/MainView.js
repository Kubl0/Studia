import React from "react";
import { useSelector } from "react-redux";
import UserList from "../components/UserList";

function MainView() {
  const users = useSelector((state) => state.users);

  return (
    <>
      <UserList users={users} key={Math.random()} />
    </>
  );
}

export default MainView;
