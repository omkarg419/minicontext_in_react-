import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) return <div>Please login to see profile</div>;
  return (
    <div>
      <h2>Profile</h2> 
      {`User: ${user?.username}`} <br />{" "}
      {`Password: ${user?.password}`}
    </div>
  );
}

export default Profile;
