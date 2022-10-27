import React, { useContext } from "react";
import { AuthContext } from "../../UserContext/UserContext";

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <div className="mt-5 text-start mb-5">
        <h1>Name: {user.displayName}</h1>
        <h3>Email: {user.email}</h3>
        <img src={user?.photoURL} alt="user" title="User Profile" />
      </div>
    </div>
  );
};

export default UserProfile;
