"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import Starfield from "./Starfield";
import { CONTACT } from "@/lib/data";
import { ArrowRight, Mail, Phone, LinkedIn, Globe, Pin } from "./Icons";
import { Email } from "@/lib/email";

type Status = { msg: string; kind: "" | "ok" | "err" };

export default function Contact() {
  const [invalid, setInvalid] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<Status>({ msg: "", kind: "" });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = (data.get("name") as string)?.trim() ?? "";
    const email = (data.get("email") as string)?.trim() ?? "";
    const subject = (data.get("subject") as string)?.trim() ?? "";
    const message = (data.get("message") as string)?.trim() ?? "";

    const errs: Record<string, boolean> = {};
    if (!name) errs.name = true;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = true;
    if (!message) errs.message = true;
    setInvalid(errs);

    if (Object.keys(errs).length) {
      setStatus({
        msg: "Please fill in your name, a valid email and a message.",
        kind: "err",
      });
      return;
    }

    let response = await Email({ name, email, subject, message });

    setStatus(response);
    form.reset();
  }

  const clear = (field: string) =>
    setInvalid((p) => ({ ...p, [field]: false }));

  return (
    <section id="contact" className="section contact">
      <Starfield dense />
      <div className="wrap">
        <Reveal>
          <span className="eyebrow" style={{ color: "var(--on-dark-muted)" }}>
            <span className="dot" /> Contact
          </span>
          <h2>
            Let&apos;s build your
            <br />
            next application.
          </h2>
          <p className="lead">
            Have a role, project, or an idea? I&apos;m open to full time,
            contract and freelance work — remote or on site.
          </p>
        </Reveal>
        <div className="contact-grid">
          <Reveal>
            <div className="contact-cards">
              <a href={`mailto:${CONTACT.email}`} className="c-card">
                <span className="ic">
                  <Mail />
                </span>
                <div>
                  <div className="k">EMAIL</div>
                  <div className="v">{CONTACT.email}</div>
                </div>
              </a>
              <a href={`tel:${CONTACT.phoneHref}`} className="c-card">
                <span className="ic">
                  <Phone />
                </span>
                <div>
                  <div className="k">PHONE</div>
                  <div className="v">{CONTACT.phone}</div>
                </div>
              </a>
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noopener"
                className="c-card"
              >
                <span className="ic">
                  <LinkedIn />
                </span>
                <div>
                  <div className="k">LINKEDIN</div>
                  <div className="v">{CONTACT.linkedinLabel}</div>
                </div>
              </a>
              <a
                href={CONTACT.website}
                target="_blank"
                rel="noopener"
                className="c-card"
              >
                <span className="ic">
                  <Globe />
                </span>
                <div>
                  <div className="k">WEBSITE</div>
                  <div className="v">{CONTACT.websiteLabel}</div>
                </div>
              </a>
              <div className="c-card" style={{ cursor: "default" }}>
                <span className="ic">
                  <Pin />
                </span>
                <div>
                  <div className="k">LOCATION</div>
                  <div className="v">{CONTACT.location}</div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal
            as="form"
            delay={1}
            className="contact-form"
            noValidate
            onSubmit={handleSubmit}
          >
            <div className="cf-head">
              <h3>Send a message</h3>
              <p>I&apos;ll get back to you within a day.</p>
            </div>
            <div className="cf-grid">
              <label className={`cf-field${invalid.name ? " cf-invalid" : ""}`}>
                <span>Name</span>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  onInput={() => clear("name")}
                />
              </label>
              <label
                className={`cf-field${invalid.email ? " cf-invalid" : ""}`}
              >
                <span>Email</span>
                <input
                  type="email"
                  name="email"
                  placeholder="you@email.com"
                  onInput={() => clear("email")}
                />
              </label>
            </div>
            <label className="cf-field">
              <span>Subject</span>
              <input
                type="text"
                name="subject"
                placeholder="What's this about?"
              />
            </label>
            <label
              className={`cf-field${invalid.message ? " cf-invalid" : ""}`}
            >
              <span>Message</span>
              <textarea
                name="message"
                rows={4}
                placeholder="Tell me about your project, role or idea…"
                onInput={() => clear("message")}
              />
            </label>
            <button type="submit" className="btn btn-accent cf-submit">
              Send message
              <ArrowRight />
            </button>
            <p
              className={`cf-status ${status.kind}`}
              role="status"
              aria-live="polite"
            >
              {status.msg}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
