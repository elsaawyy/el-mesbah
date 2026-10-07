"use client";

import { useState } from "react";
import { services } from "@/lib/content/services";
import { cn } from "@/lib/utils/cn";

export function ServicesPreview() {
  const [active, setActive] = useState(0);

  return (
    <section className="services dark wrap" id="services">
      <h2 className="sv-head">What we build</h2>
      <div className="sv">
        <ol id="svlist">
          {services.map((s, i) => (
            <li key={s.slug} className={cn(i === active && "on")}>
              <button
                data-i={i}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                aria-pressed={i === active}
              >
                <span>{s.index}</span>
                {s.title}
              </button>
            </li>
          ))}
        </ol>

        <div className="sv-panel" aria-live="polite">
          <div className="sv-art on">
            <svg
              viewBox="0 0 300 340"
              fill="none"
              stroke="#4a463f"
              aria-hidden="true"
            >
              <rect x="40" y="60" width="220" height="150" />
              <path
                d="M40 90h220M70 120h90M70 140h60"
                stroke="#e9a53b"
              />
              <path d="M40 250h220" />
            </svg>
          </div>
          <small>Currently offered</small>
          <p>{services[active].summary}</p>
        </div>
      </div>
    </section>
  );
}