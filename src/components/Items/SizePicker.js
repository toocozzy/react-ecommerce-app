const SizePicker = (props) => {
  const DUMMY_SIZES = [46, 32, 42, "l", "xxl"];

  const mappedSize = props.availableSize.map((size) => (
    <option value={size}>{size}</option>
  ));

  return (
    <>
      <label htmlFor={props.labelFor}>{props.labelText}</label>
      <select>{mappedSize}</select>
    </>
  );
};

export default SizePicker;
