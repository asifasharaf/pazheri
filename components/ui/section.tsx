"use client";

import type { ReactNode } from "react";

export function Eyebrow({ children }: { children: ReactNode }) {
  return <span className="eyebrow">{children}</span>;
}

export function SectionHead({
  eyebrow,
  title,
  body,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  body?: string;
  align?: "left" | "center";
}) {
  const centered = align === "center";
  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2
        className={[
          "display-voice text-heading-sm text-ink-black lg:text-heading",
          eyebrow ? "mt-5" : "",
        ].join(" ")}
      >
        {title}
      </h2>
      {body ? (
        <p className="mt-4 text-body-lg font-medium text-slate-600">{body}</p>
      ) : null}
    </div>
  );
}
