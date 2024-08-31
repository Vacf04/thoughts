"use client";
import Button from "../form/Button";
import styles from "./SendThought.module.css";

export default function SendThought() {
  return (
    <div className={styles.sendThoughtContent}>
      <h1 className={styles.title}>Share Your Thought</h1>
      <form>
        <textarea
          name="thought"
          id="thought"
          className={styles.textArea}
        ></textarea>
        <Button>Send</Button>
      </form>
    </div>
  );
}
