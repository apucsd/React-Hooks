import { forwardRef } from "react";
type TCustomInputProps = {
  className: string;
};
const CustomInputFiled = forwardRef<HTMLInputElement, TCustomInputProps>(
  ({ className }, myRef) => {
    console.log(myRef);
    return (
      <input
        className={className}
        ref={myRef}
        type="text"
        name="name"
        placeholder="Name"
      />
    );
  }
);

export default CustomInputFiled;
