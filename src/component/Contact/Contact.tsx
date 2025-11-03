import { useTranslation } from "react-i18next";
import styles from "./Contact.module.scss";
import { Input } from "./Input/Input";
import { useState } from "react";
import { ReactFormState } from "react-dom/client";
import { toast, ToastContainer } from "react-toastify";
export const Contact = () => {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [messange, setMessange] = useState("");

  const isValidEmail = (email: string) => {
    return /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu.test(
      email
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      toast.error("Please enter your name");
      return;
    }

    if (!email.trim()) {
      toast.error("Please enter your email");
      return;
    }

    if (!isValidEmail(email)) {
      toast.error("Invalid email format");
      return;
    }

    if (!messange.trim()) {
      toast.error("Please enter your messange");
      return;
    }

    console.log({ name, email, messange });
    toast.success("Message sent successfully", { icon: <span>🚀</span> });

    setName("");
    setEmail("");
    setMessange("");
  };

  return (
    <section className={styles.ContactCon} id="contact">
      <h2 className={styles.title}>START your PROJECT</h2>
      <div className={styles.conform}>
        <p className={styles.des}>{t("formdes")}</p>
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.WrapNameEmeil}>
          <Input
            id="name"
            label="Name *"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            id="email"
            label="Email *"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.messange}>
          <Input
            id="messange"
            label="Message *"
            type="text"
            value={messange}
            onChange={(e) => setMessange(e.target.value)}
          />
        </div>
        <button className={styles.button}>{t("submit")}</button>
      </form>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        theme="light"
        toastClassName="custom-toast"
      />
    </section>
  );
};
