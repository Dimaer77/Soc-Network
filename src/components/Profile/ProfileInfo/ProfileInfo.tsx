import stl from "../Profile.module.css";
import React from "react";

type ProfileInfoType = {
  description: string;
};

export const ProfileInfo = (props: ProfileInfoType) => {
  return (
    <div>
      <div>
        <img
          className={stl.image}
          src="https://i.ytimg.com/vi/xrdVMaUaaYQ/maxresdefault.jpg"
          alt="img"
        />
      </div>
      <div className={stl.descriptionBlock}>{props.description}</div>
    </div>
  );
};
