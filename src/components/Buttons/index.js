import React from "react";
import styles from "./styles.module.css";
export default class ButtonApp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <button {...this.props} className={styles.button_app}>{this.props.children}</button>
      </>
    );
  }
}
