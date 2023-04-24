import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteUser } from "../actions/actions";
import EditUser from "./EditUser";

function UserList({ users }) {
  const [search, setSearch] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(users);

  const dispatch = useDispatch();

  useEffect(() => {
    setFilteredUsers(
      users.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, users]);

  return (
    <div>
      <form>
        <input
          type="text"
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <ul>
        {filteredUsers.map((user) => (
          <>
            <li key={Math.random()}>{user.name}</li>
            <button onClick={() => dispatch(deleteUser(user.name))}>
              Delete
            </button>
            <EditUser user={user} key={Math.random()} />
          </>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
