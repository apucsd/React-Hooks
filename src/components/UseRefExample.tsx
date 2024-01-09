import { useRef, useEffect } from "react";

const UseRefExample = () => {
  const myRef = useRef(null);

  useEffect(() => {
    // Access the DOM element using the ref
    console.log(myRef.current);
  }, []);

  return <div ref={myRef}>Hello, useRef!</div>;
};

export default UseRefExample;
