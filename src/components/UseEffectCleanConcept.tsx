import { useEffect } from "react";

const UseEffectCleanConcept = () => {
  const controller = new AbortController();
  const signal = controller.signal;

  useEffect(() => {
    console.log("fetched");
    fetch("https://jsonplaceholder.typicode.com/todos/1", { signal })
      .then((response) => response.json())
      .then((json) => alert(json.title));

    return () => controller.abort();
  }, []);
  return <div>fetched dat</div>;
};

export default UseEffectCleanConcept;
