import { forwardRef } from "react";

const SizePicker = forwardRef((props, ref) => {
  const defaultSizes = ["select", ...props.availableSize];
  const mappedSize = defaultSizes.map((size) => (
    <option value={size} defaultInputVaule="select">
      {size}
    </option>
  ));

  return (
    <>
      <label htmlFor={props.labelFor}>{props.labelText}</label>
      <select ref={ref} className={props.selectStyles}>
        {mappedSize}
      </select>
      {props.wrongSize && (
        <p className={props.wrongSizeStyles}>Please choose a valid size.</p>
      )}
    </>
  );
});

export default SizePicker;
