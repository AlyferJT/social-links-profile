import React from "react";

function Avatar(props) {
  return (
    <img className="profile__avatar" src={props.image} alt="user avatar" />
  );
}

export default Avatar;
