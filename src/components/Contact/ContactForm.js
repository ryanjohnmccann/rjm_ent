import styles from "./ContactForm.module.css";

export default function ContactForm() {
  return (
    <div className={styles.container}>
      <form
        name="contact"
        data-netlify="true"
        method="POST"
        netlify-honeypot="bot-field"
      >
        <label htmlFor="fname" className={styles.random}>
          First Name
        </label>
        <input
          className={styles.contactInput}
          type="text"
          name="firstname"
          placeholder="Your name"
        />
        <label className={styles.random} htmlFor="lname">
          Last Name
        </label>
        <input
          className={styles.contactInput}
          type="text"
          id="lname"
          name="lastname"
          placeholder="Your last name"
        />
        <label className={styles.random} htmlFor="email">
          Email
        </label>
        <input
          className={styles.contactInput}
          type="text"
          id="email"
          name="email"
          placeholder="Your email"
        />
        <label className={styles.random} htmlFor="message">
          Message
        </label>
        <textarea
          className={styles.contactInput}
          id="message"
          name="message"
          style={{ height: "140px" }}
          placeholder="Your message"
        ></textarea>
        <div className={styles.contactDiv}>
          <input
            className={styles.contactButton}
            type="submit"
            value="Submit"
          />
        </div>
      </form>
    </div>
  );
}
