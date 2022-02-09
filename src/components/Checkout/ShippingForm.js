import styles from "./ShippingForm.module.css";
import { useRef, useState } from "react";

const ShippingForm = (props) => {
  const nameInputRef = useRef();
  const surnameInputRef = useRef();
  const addressInputRef = useRef();
  const cityInputRef = useRef();
  const postalCodeInputRef = useRef();
  const regionInputRef = useRef();
  const phoneInputRef = useRef();
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    surname: true,
    address: true,
    city: true,
    postalCode: true,
    region: true,
    phone: true,
  });

  const confirmHandler = (e) => {
    e.preventDefault();

    const isEmpty = (value) => value.trim() === "";
    const isDefault = (value) => value === "default";

    const enteredName = nameInputRef.current.value;
    const enteredSurname = surnameInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredCity = cityInputRef.current.value;
    const enteredPostalCode = postalCodeInputRef.current.value;
    const enteredRegion = regionInputRef.current.value;
    const enteredPhone = phoneInputRef.current.value;

    const nameIsValid = !isEmpty(enteredName);
    const surnameIsValid = !isEmpty(enteredSurname);
    const addressIsValid = !isEmpty(enteredAddress);
    const cityIsValid = !isEmpty(enteredCity);
    const postalCodeIsValid = !isEmpty(enteredPostalCode);
    const regionIsValid = !isDefault(enteredRegion);
    const phoneIsValid = !isEmpty(enteredPhone);

    setFormInputsValidity({
      name: nameIsValid,
      surname: surnameIsValid,
      address: addressIsValid,
      city: cityIsValid,
      postalCode: postalCodeIsValid,
      region: regionIsValid,
      phone: phoneIsValid,
    });

    const formIsValid =
      nameIsValid &&
      surnameIsValid &&
      addressIsValid &&
      cityIsValid &&
      postalCodeIsValid &&
      regionIsValid &&
      phoneIsValid;

    if (!formIsValid) {
      return;
    }

    props.onConfirm({
      name: enteredName,
      surname: enteredSurname,
      address: enteredAddress,
      city: enteredCity,
      postalCode: enteredPostalCode,
      region: enteredRegion,
      phoneNumber: enteredPhone,
    });
  };

  return (
    <form className={styles.form} id="shipping_form" onSubmit={confirmHandler}>
      <div className={styles.form__control}>
        <label htmlFor="name" className={styles["form__control-label"]}>
          First name
        </label>
        <input
          type="text"
          id="name"
          className={styles["form__control-input"]}
          ref={nameInputRef}
        />
        {!formInputsValidity.name && (
          <p className={styles["form__control-invalid"]}>
            Please enter a valid name.
          </p>
        )}
      </div>
      <div className={styles.form__control}>
        <label htmlFor="surname" className={styles["form__control-label"]}>
          Last name
        </label>
        <input
          type="text"
          id="surname"
          className={styles["form__control-input"]}
          ref={surnameInputRef}
        />
        {!formInputsValidity.surname && (
          <p className={styles["form__control-invalid"]}>
            Please enter a valid last name.
          </p>
        )}
      </div>
      <div className={styles.form__control}>
        <label htmlFor="address" className={styles["form__control-label"]}>
          Street address
        </label>
        <input
          type="text"
          id="address"
          className={styles["form__control-input"]}
          ref={addressInputRef}
        />
        {!formInputsValidity.address && (
          <p className={styles["form__control-invalid"]}>
            Please enter a valid street address.
          </p>
        )}
      </div>
      <div className={styles.form__control}>
        <label htmlFor="surname" className={styles["form__control-label"]}>
          City
        </label>
        <input
          type="text"
          id="city"
          className={styles["form__control-input"]}
          ref={cityInputRef}
        />
        {!formInputsValidity.city && (
          <p className={styles["form__control-invalid"]}>
            Please enter a valid city.
          </p>
        )}
      </div>
      <div className={styles.form__control}>
        <label htmlFor="zipcode" className={styles["form__control-label"]}>
          ZIP Code
        </label>
        <input
          type="text"
          id="city"
          className={styles["form__control-input"]}
          ref={postalCodeInputRef}
        />
        {!formInputsValidity.postalCode && (
          <p className={styles["form__control-invalid"]}>
            Please enter a valid postal code.
          </p>
        )}
      </div>
      <div className={styles.form__control}>
        <label htmlFor="region" className={styles["form__control-label"]}>
          State/Province
        </label>
        <select
          name="region"
          id="region"
          className={styles["form__control-input--select"]}
          ref={regionInputRef}
        >
          <option value="default">select</option>
          <option value="poland">Poland</option>
        </select>
        {!formInputsValidity.region && (
          <p className={styles["form__control-invalid"]}>
            Please enter a valid region.
          </p>
        )}
      </div>
      <div className={styles.form__control}>
        <label htmlFor="phonenumber" className={styles["form__control-label"]}>
          Phone number
        </label>
        <input
          type="phone"
          id="phone"
          className={styles["form__control-input"]}
          ref={phoneInputRef}
        />
        {!formInputsValidity.phone && (
          <p className={styles["form__control-invalid"]}>
            Please enter a valid phone number.
          </p>
        )}
      </div>
    </form>
  );
};

export default ShippingForm;
