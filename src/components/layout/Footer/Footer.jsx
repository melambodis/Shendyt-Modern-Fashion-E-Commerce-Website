import styles from "./Footer.module.css";
import Input from "../../ui/Input/Input";
import Button from "../../ui/Button/Button";
import { NavLink } from "react-router-dom";
import FotterLink from "../../../data/data/FooterItem";

export default function Footer({
  brandName = "ShandYt",
  socialLinks = [
    { name: "Facebook", href: "#" },
    { name: "Instagram", href: "#" },
    { name: "Twitter", href: "#" },
  ],

  className = "",
}) {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={`${styles.footer} ${className}`}>
      <div className={styles.top}>
        <img src={"/logo.svg"} alt="Logo" />
      </div>

      {/* Navigation Links */}
      <div className={styles.navSection}>
        {FotterLink.map((item ,i ) => (
          <nav key={i} className={styles.navColumn}>
            <h3>{item.title}</h3>
            <ul>
              {item.links.map((link ,i ) => (
                <li className={styles.menu} key={i}>
                  <NavLink
                    to={ link.href}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        ))}
        {/* Newsletter Form */}
        <div className={styles.newsletter}>
          <form noValidate>
            <label htmlFor="newsletter-email" className="sr-only">
              Email
            </label>
            <Input
              placeholder={"Enter your email"}
              id="newsletter-email"
              type="email"
              disabled={false}
            />
            <Button variant={"info"} size={"large"}>
              {"Subscripe"}
            </Button>
          </form>
          <div className={styles.social}>
        {socialLinks.map((s, idx) => (
          <a
            key={idx}
            href={s.href}
            aria-label={s.name}
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* Simple inline SVG icons */}
            {s.name === "Facebook" && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                role="img"
              >
                <path d="M22 12a10 10 0 1 0-11.6 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.3l-.4 3h-1.9v7A10 10 0 0 0 22 12" />
              </svg>
            )}
            {s.name === "Instagram" && (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm0 2h10c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3zm5 2.5A5.5 5.5 0 1 0 17.5 12 5.5 5.5 0 0 0 12 6.5zm0 2A3.5 3.5 0 1 1 8.5 12 3.5 3.5 0 0 1 12 8.5zm5.8-.9a1.1 1.1 0 1 0 1.1 1.1 1.1 1.1 0 0 0-1.1-1.1z" />
              </svg>
            )}
            {s.name === "TikTok" && (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M16 8.2V14a5.9 5.9 0 1 1-5-5.9v2.2a3.7 3.7 0 1 0 3 3.6V2h2a4.9 4.9 0 0 0 4 4v2a6.9 6.9 0 0 1-4-1.8z" />
              </svg>
            )}
            {s.name === "Twitter" && (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M22 5.9c-.8.4-1.6.6-2.5.8a4.3 4.3 0 0 0 1.9-2.4c-.9.6-1.9 1-3 1.2a4.3 4.3 0 0 0-7.4 3v.5a12 12 0 0 1-9-4.6s-4 9 5 13c-2.6 1.8-6 1.9-8.9.7 9 6 20 0 20-11.4v-.5a8 8 0 0 0 2-2.3z" />
              </svg>
            )}
            {s.name === "YouTube" && (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M21.6 7.2s-.2-1.6-.8-2.3c-.8-.9-1.7-.9-2.1-1-3-.2-7.5-.2-7.5-.2s-4.5 0-7.5.2c-.4.1-1.3.1-2.1 1-.6.7-.8 2.3-.8 2.3S1 9.2 1 11.2v1.6c0 2 .2 4 0 6 0 0 .2 1.6.8 2.3.8.9 1.9.9 2.3 1 1.7.2 7.2.2 7.2.2s4.5 0 7.5-.2c.4-.1 1.3-.1 2.1-1 .6-.7.8-2.3.8-2.3.2-2 .2-4 .2-6v-1.6c0-2-.2-4-.2-4zM10 15V9l5.5 3-5.5 3z" />
              </svg>
            )}
          </a>
        ))}
      </div>
        </div>
      </div>
      {/* Bottom line */}
      <div className={styles.bottom}>
        <p>
          &copy; {currentYear} {brandName}. All rights reserved.
        </p>
        <div>
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
        </div>
      </div>
    </footer>
  );
}
