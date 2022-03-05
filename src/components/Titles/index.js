import React from "react";

import styles from "./styles.module.css";

export default class Title extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <section className={styles.title_section}>
          <h1 {...this.props} className={styles.title}>
            {this.props.children}
          </h1>
        </section>
      </>
    );
  }
}
