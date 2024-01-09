import { useRef, useEffect } from "react";
import CustomInputFiled from "./CustomInputFiled";

const UseRefExample = () => {
  const myRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    myRef.current?.focus();
  }, []);

  return (
    <div>
      <CustomInputFiled
        className="border border-b-sky-500"
        ref={myRef}
      ></CustomInputFiled>
    </div>
  );
};

export default UseRefExample;
