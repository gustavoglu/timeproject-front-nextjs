import React from "react";
import styles from "./styles.module.css"

export default class VectorBackground extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.page_background}>
      
        <img className={styles.vector_l} src="/img/vector-l.svg" />
        <img className={styles.vector_r} src="/img/vector-r.svg" />
        <div className={styles.children_content}>{this.props.children}</div>
      </div>
    );
  }
}
