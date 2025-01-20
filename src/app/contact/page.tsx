"use client";

import { FormEvent, useState } from "react";

import { AnimatedLink } from "../components/animated-link";
import { Footer } from "../components/footer";

export default function Contact() {
  const [body, setBody] = useState({ name: "", email: "", message: "" });
  const [isSent, setIsSent] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await fetch("/api/email", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setBody({ name: "", email: "", message: "" });
    setIsSent(true);
  };

  return (
    <div>
      <h4 className="text-black dark:text-white font-black text-5xl">
        Contact.
      </h4>
      <p className="mt-4">
        Reach out or email me directly at{" "}
        <a
          href="mailto:ryannadiputraa@gmail.com"
          className="text-black dark:text-white font-semibold"
        >
          ryannadiputraa@gmail.com
        </a>
      </p>
      <form className="mt-8 flex flex-col gap-4" onSubmit={onSubmit}>
        <div className="flex flex-col gap-1 sm:max-w-80">
          <label>Name</label>
          <input
            required
            type="text"
            placeholder="e.g. John Doe"
            value={body.name}
            onChange={(e) =>
              setBody((prev) => ({
                ...prev,
                name: e.target.value,
              }))
            }
            className="py-2 px-4 outline-none rounded-lg bg-transparent border-slate-700 border-2 focus:bg-slate-200 dark:focus:bg-slate-950 focus:text-black dark:focus:text-white"
          />
        </div>
        <div className="flex flex-col gap-1 sm:max-w-80">
          <label>Email</label>
          <input
            required
            type="email"
            placeholder="e.g. johndoe@mail.com"
            value={body.email}
            onChange={(e) =>
              setBody((prev) => ({
                ...prev,
                email: e.target.value,
              }))
            }
            className="py-2 px-4 outline-none rounded-lg bg-transparent border-slate-700 border-2 focus:bg-slate-200 dark:focus:bg-slate-950 focus:text-black dark:focus:text-white"
          />
        </div>
        <div className="flex flex-col gap-1 sm:max-w-[32rem]">
          <label>Message</label>
          <textarea
            required
            placeholder="Leave your message here..."
            rows={6}
            value={body.message}
            onChange={(e) =>
              setBody((prev) => ({
                ...prev,
                message: e.target.value,
              }))
            }
            className="py-2 px-4 outline-none rounded-lg bg-transparent border-slate-700 border-2 focus:bg-slate-200 dark:focus:bg-slate-950 focus:text-black dark:focus:text-white"
          />
        </div>
        <button
          disabled={isSent}
          className="self-start bg-slate-950 dark:bg-slate-200 text-slate-200 dark:text-slate-950 py-3 px-8 rounded-lg"
        >
          {isSent ? "Sent" : "Send Message"}
        </button>
      </form>
      <AnimatedLink label="Go Back Home" href="/" className="mt-12" />
      <Footer className="mt-24" />
    </div>
  );
}
