import { useEffect, useState } from "react";

const UserEffectExample = () => {
  const [width, setWidth] = useState(window.screen.width);
  const actualWidth = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", actualWidth);
    return () => {
      //clean up function

      window.removeEventListener("resize", actualWidth);
    };
  });
  return (
    <div>
      <h1 className="text-6xl">This is my screen size now</h1>
      <h2 className="text-7xl">Size: {width}</h2>
    </div>
  );
};

export default UserEffectExample;
