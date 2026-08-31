import { useState } from "react";
import { budgetRanges, projectTypes } from "@/lib/site-content";

const fieldClass =
  "w-full border-b border-input bg-transparent px-0 py-3 text-sm font-light text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-charcoal";
const labelClass = "eyebrow block mb-2";

export function ConsultationForm() {
  const [submitted, setSubmitted] = useState(false);

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
          onClick={() => setSubmitted(false)}
          className="btn-base btn-outline mt-8"
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form
      className="grid gap-8 sm:grid-cols-2"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
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
      <div className="sm:col-span-2">
        <button type="submit" className="btn-base btn-dark w-full sm:w-auto">
          Request a Consultation
        </button>
      </div>
    </form>
  );
}
