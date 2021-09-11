import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import {  FiX } from "react-icons/fi";

import styles from "./styles.module.scss";

export function SigninButton() {
  const [isUserLogged, setIsUserLogged] = useState(false);

  return isUserLogged ? (
    <button
      type="button"
      className={styles.signInButton}
    >
      <FaGithub color="#04d361"/>
      João Vitor
      <FiX color="#737388" className={styles.closeIcon} />
    </button>
  ) : (
    <button
      type="button"
      className={styles.signInButton}
    >
      <FaGithub color="#eba417"/>
      Sign in with Github
    </button>
  )
}