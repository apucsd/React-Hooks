import { ChangeEvent, useReducer } from "react";

const initialState = {
  email: "",
  password: "",
};
type TAction = {
  type: string;
  payload: string;
};
const reducer = (currentState: typeof initialState, action: TAction) => {
  switch (action.type) {
    case "addEmail":
      return { ...currentState, email: action.payload };

    case "addPassword":
      return { ...currentState, password: action.payload };

    default:
      return currentState;
  }
};
const UseReducerExample = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(state);
  };
  return (
    <div className=" max-w-xl container mx-auto ">
      <div className=" w-full">
        <div className="">
          <form onSubmit={handleSubmit} className="px-10">
            <div className="mt-2 ">
              <label
                htmlFor=""
                className="text-neutral-600 text-base font-normal"
              >
                Email Id :
              </label>
              <div className="flex my-3 items-center justify-between bg-zinc-100 rounded-lg  ">
                <input
                  onChange={(e) =>
                    dispatch({ type: "addEmail", payload: e.target.value })
                  }
                  type="text"
                  name="email"
                  placeholder="info@provistechnologies.com"
                  className="w-full text-neutral-600 placeholder:text-neutral-600 px-4 bg-transparent outline-none"
                />
              </div>
            </div>
            <div className="mt-6 ">
              <label
                htmlFor=""
                className="text-neutral-600 text-base font-normal"
              >
                Password :
              </label>
              <div className="flex my-3 items-center justify-between bg-zinc-100 rounded-lg  ">
                <input
                  onChange={(e) =>
                    dispatch({ type: "addPassword", payload: e.target.value })
                  }
                  type="password"
                  name="password"
                  placeholder="****"
                  className="w-full text-neutral-600 placeholder:text-neutral-600 px-4 bg-transparent outline-none"
                />
              </div>
            </div>
            <a
              href="forget-password.html"
              className="mt-6 text-indigo-900 flex justify-end text-sm font-normal underline"
            >
              Forgot password?
            </a>
            <button className="bg-indigo-900 rounded-lg shadow text-center text-white text-base font-semibold w-full py-3 mt-9">
              Login now
            </button>

            <div className="relative flex items-center mt-8">
              <div className="border h-0 w-2/4 border-stone-300"></div>
              <div className=" text-stone-300 px-4 text-sm font-normal">OR</div>
              <div className=" border h-0 w-2/4 border-stone-300"></div>
            </div>
            <button className="border border-indigo-900 rounded-lg  text-center  text-indigo-900 bg-white text-base font-semibold w-full py-3 mt-9">
              Signup now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UseReducerExample;
