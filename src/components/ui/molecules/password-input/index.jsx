import Input from "@/components/ui/atoms/input";
import Label from "@/components/ui/atoms/label";
import styles from "./password-input.module.css";
import EyeIcon from "@/assets/icons/eye-icon";
import EyeOffIcon from "@/assets/icons/eye-off-icon";
import { useState } from "react";

const PasswordInput = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => setShow((prevShow) => !prevShow);

  return (
    <div className={styles.inputContainer}>
      <Label htmlFor="password">Password</Label>
      <Input
        id="password"
        type={show ? "text" : "password"}
        placeholder="Password"
      />
      <button
        onClick={handleClick}
        className={styles.inputIcon}
        type="button"
      >
        {show ? <EyeIcon /> : <EyeOffIcon />}
      </button>
    </div>
  );
};

export default PasswordInput;
