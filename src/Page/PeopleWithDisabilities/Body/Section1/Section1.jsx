import React from "react";
import "./style.css";

function Section1() {
  return (
    <div className="PeopleWithDisabilitiesS1">
      <img
        src="https://images.ctfassets.net/ywowj8d94i8y/2AOBXUvoUdxJBytRB0ENwk/056490aa09417a1e1d8bb80bb3cefc95/People_with_Disabilities_-_Hero_Banner_crop.jpg?fm=webp"
        alt=""
        className="PeopleWithDisabilitiesS1-image"
      />
      <div className="PeopleWithDisabilitiesS1-icon">
        <img
          src="https://images.ctfassets.net/ywowj8d94i8y/3NvOzTgSOuvPvmQOolNqLK/4c571d5137b25e29f00b753d9bfac4a9/Icon_Choice.png?fm=webp"
          alt=""
          width={30}
        />
      </div>
    </div>
  );
}

export default Section1;
