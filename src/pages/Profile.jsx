import React from "react";
import UserProfile from "../components/Main/Profile/UserProfile";
/* import userImage from "../assets/image/user.webp"; */

const userData = {
  name: "Maria Silva",
  email: "maria.silva@example.com",
  avatar:
    "https://images.unsplash.com/photo-1595152769006-2b3b60e49122?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDg0MjN8MHwxfGFsbHwxfHx8fHx8fHwxNjcwMjE0NzUy&ixlib=rb-1.2.1&q=80&w=400",
  position: "Desenvolvedora Front-end",
  bio: "Maria é uma desenvolvedora apaixonada por criar interfaces dinâmicas e eficientes usando React.",
  phone: "+244 912 345 678",
};

export default function Profile() {
  return (
    <section className="section-area">
      <div id="profile">
        <UserProfile user={userData} />
      </div>
    </section>
  );
}
