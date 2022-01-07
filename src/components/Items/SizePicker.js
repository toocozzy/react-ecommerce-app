import { forwardRef } from "react";

const SizePicker = forwardRef((props, ref) => {
  const mappedSize = props.availableSize.map((size) => (
    <option value={size}>{size}</option>
  ));

  return (
    <>
      <label htmlFor={props.labelFor}>{props.labelText}</label>
      <select ref={ref}>{mappedSize}</select>
    </>
  );
});

export default SizePicker;
