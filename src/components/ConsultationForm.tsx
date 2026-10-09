import { useState } from "react";
import { budgetRanges, projectTypes } from "@/lib/site-content";

const fieldClass =
  "w-full border-b border-input bg-transparent px-0 py-3 text-sm font-light text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-charcoal";
const labelClass = "eyebrow block mb-2";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mnpqveqp";

type ConsultationData = {
  fullName: string;
  email: string;
  phone: string;
  date: string;
  projectType: string;
  budget: string;
  message: string;
};

async function submitToWeb3Forms(data: ConsultationData, _withCc: boolean) {
  const payload: Record<string, string> = {
    _subject: "New Starr Decor Luxe Consultation Request",
    name: data.fullName,
    email: data.email,
    phone: data.phone,
    "Preferred Consultation Date": data.date,
    "Project Type": data.projectType,
    "Budget Range": data.budget,
    message: data.message,
    _gotcha: "",
  };
  const res = await fetch(FORMSPREE_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(payload),
  });
  return res.ok;
}

type FormStatus = "idle" | "submitting" | "error";

export function ConsultationForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setStatus("submitting");
    try {
      const values: ConsultationData = {
        fullName: String(data.get("fullName") ?? ""),
        email: String(data.get("email") ?? ""),
        phone: String(data.get("phone") ?? ""),
        date: String(data.get("date") ?? ""),
        projectType: String(data.get("projectType") ?? ""),
        budget: String(data.get("budget") ?? ""),
        message: String(data.get("message") ?? ""),
      };
      const ok = await submitToWeb3Forms(values, false);
      if (ok) {
        setSubmitted(true);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (submitted) {
    return (
      <div className="border border-border bg-card p-10 text-center">
        <span className="rule-champagne mx-auto" />
        <h3 className="display-md mt-6">Thank you.</h3>
        <p className="body-lg mx-auto mt-3 max-w-sm">
          Your consultation request has been received. We'll be in touch within two
          business days to schedule your discovery call.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setStatus("idle");
          }}
          className="btn-base btn-outline mt-8"
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form className="grid gap-8 sm:grid-cols-2" onSubmit={handleSubmit}>
      <div>
        <label className={labelClass} htmlFor="fullName">
          Full Name
        </label>
        <input id="fullName" name="fullName" required className={fieldClass} placeholder="Jane Doe" />
      </div>
      <div>
        <label className={labelClass} htmlFor="email">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className={fieldClass}
          placeholder="you@email.com"
        />
      </div>
      <div>
        <label className={labelClass} htmlFor="phone">
          Phone Number
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          className={fieldClass}
          placeholder="(555) 000-0000"
        />
      </div>
      <div>
        <label className={labelClass} htmlFor="date">
          Preferred Consultation Date
        </label>
        <input id="date" name="date" type="date" className={fieldClass} />
      </div>
      <div>
        <label className={labelClass} htmlFor="projectType">
          Project Type
        </label>
        <select id="projectType" name="projectType" required className={fieldClass}>
          <option value="">Select a service</option>
          {projectTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className={labelClass} htmlFor="budget">
          Budget Range
        </label>
        <select id="budget" name="budget" required className={fieldClass}>
          <option value="">Select a range</option>
          {budgetRanges.map((range) => (
            <option key={range} value={range}>
              {range}
            </option>
          ))}
        </select>
      </div>
      <div className="sm:col-span-2">
        <label className={labelClass} htmlFor="message">
          Tell us about your project
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className={fieldClass}
          placeholder="Rooms, timeline, style you're drawn to…"
        />
      </div>
      {status === "error" ? (
        <p className="sm:col-span-2 text-sm font-light text-destructive">
          Something went wrong and your request couldn't be sent. Please try again, or
          email us directly and we'll get back to you.
        </p>
      ) : null}
      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="btn-base btn-dark w-full sm:w-auto disabled:opacity-60"
        >
          {status === "submitting" ? "Sending…" : "Request a Consultation"}
        </button>
      </div>
    </form>
  );
}
