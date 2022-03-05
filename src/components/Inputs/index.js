import React from "react";
import styles from "./styles.module.css";
export default class InputApp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    if(this.props.required) {
      return (   
      <div className={styles.container}>
        <label className={styles.input_app_label}>{this.props.label} <span className={styles.input_app_label_required}>*</span></label> 
        <input className={styles.input_app} {...this.props} ></input>
      </div>)
    }

    return (
      <div className={styles.container}>
        <label className={styles.input_app_label}>{this.props.label}</label>
        <input className={styles.input_app} {...this.props} ></input>
      </div>
    );
  }
}
