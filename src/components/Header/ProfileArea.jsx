import React, { useContext } from "react";

import "./ProfileArea.css";
import { UserContext } from "../../hooks/UserContext";
import { IMAGE_URL } from "../../utils/API";

export default function ProfileArea() {
  const { user: userHeader } = useContext(UserContext);
 // console.log("user do header", userHeader);
  return (
    <div className="user-profile-content">
      <img
        src={
          userHeader.profile_image == null
            ? "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHVzZXJ8ZW58MHx8fHwxNjcxMjUyMjk4&ixlib=rb-1.2.1&q=80&w=400"
            : `${IMAGE_URL}${userHeader.profile_image}`
        }
        className="image-user-header"
      />
      <div className="header-user-dtails">
        <div className="user-profile-name">
          <strong>{userHeader.name}</strong>
        </div>
        <div className="user-type">{userHeader.user_title}</div>
      </div>
    </div>
  );
}
