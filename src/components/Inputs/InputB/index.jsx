import { useRef } from "react";
// import InputBmasked from "./masked";
import InputBnormal from "./normal";
// import InputBSelect from "./select";

export default function InputB({
  index,
  state,
  onChange,
  categorias,
  onSubmit,
  style
}) {
  // const inputRef = useRef();
  let type = state[index].type;

  let defaultProps = {
    state: state,
    setValue: onChange,
    index: index,
    type: type,
    style: style
    // onSubmit: onSubmit ? onSubmit : handleSubmit,
  };


  // state[index].ref = inputRef;

  // const handleSubmit = () => {
  //   state[index + 1].ref.current.focus();
  // };

  const inputSelector = () => {
    return (
      <InputBnormal
        {...defaultProps}
      />
    )
  };

  return (
    <>
      {inputSelector()}
      {state[index].errorMessage && <p>{state[index].errorMessage}</p>}
    </>
  );
}
