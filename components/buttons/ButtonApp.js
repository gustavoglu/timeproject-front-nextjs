import React from "react";
import styles from "../../styles/components/buttons/ButtonApp.module.css";
export default class ButtonApp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <button className={styles.button_app}>{this.props.children}</button>
      </>
    );
  }
}
