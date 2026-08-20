"use client";

import { useState, type FormEvent } from "react";

import styles from "@/app/web-design/maison-tsu/maison.module.css";

const email = "ShawnXiaTsu@outlook.com";

export function MaisonReservationForm() {
  const [drafted, setDrafted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const value = (key: string) => String(form.get(key) ?? "").trim();
    const body = [
      `Name: ${value("name")}`,
      `Email: ${value("email")}`,
      `Date: ${value("date")}`,
      `Guests: ${value("guests")}`,
      `Notes: ${value("notes")}`,
    ].join("\n");
    const subject = encodeURIComponent("Reservation request - Maison Tsu");

    setDrafted(true);
    window.location.href = `mailto:${email}?subject=${subject}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={handleSubmit} className={styles.reservationForm}>
      <h2>Request a table</h2>
      <p className={styles.formIntro}>
        Sending prepares an email to <a href={`mailto:${email}`}>{email}</a>.
      </p>

      <div className={styles.formGrid}>
        <label className={styles.field}>
          <span>Name</span>
          <input name="name" type="text" required placeholder="Your name" />
        </label>
        <label className={styles.field}>
          <span>Email</span>
          <input
            name="email"
            type="email"
            required
            placeholder="you@example.com"
          />
        </label>
        <label className={styles.field}>
          <span>Date</span>
          <input name="date" type="date" />
        </label>
        <label className={styles.field}>
          <span>Guests</span>
          <input name="guests" type="number" min="1" max="12" defaultValue="2" />
        </label>
      </div>

      <label className={`${styles.field} ${styles.notesField}`}>
        <span>Anything we should know</span>
        <input name="notes" type="text" placeholder="Allergies, wine, occasion" />
      </label>

      <div className={styles.formAction}>
        <button type="submit" className={styles.primaryButton}>
          Send request
        </button>
        {drafted ? <span>Mail draft prepared.</span> : null}
      </div>
    </form>
  );
}
