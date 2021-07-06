import styles from "./ContactForm.module.css";
import React from "react";

export default function ContactForm() {
  return (
    <div className={styles.container}>
      <form>
        <label for="fname" className={styles.random}>
          First Name
        </label>
        <input
          className={styles.contactInput}
          type="text"
          name="firstname"
          placeholder="Your name"
        />
        <label className={styles.random} for="lname">
          Last Name
        </label>
        <input
          className={styles.contactInput}
          type="text"
          id="lname"
          name="lastname"
          placeholder="Your last name"
        />
        <label className={styles.random} for="email">
          Email
        </label>
        <input
          className={styles.contactInput}
          type="text"
          id="email"
          name="email"
          placeholder="Your email"
        />
        <label className={styles.random} for="message">
          Message
        </label>
        <textarea
          className={styles.contactInput}
          id="message"
          name="message"
          style={{ height: "140px" }}
          placeholder="Your message"
        ></textarea>

        <input className={styles.contactButton} type="submit" value="Submit" />
      </form>
    </div>
  );
}
