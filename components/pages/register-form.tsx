"use client";

import { useState } from "react";
import { useLanguage } from "@/components/language-provider";
import { branches } from "@/lib/content/tree";
import { districts } from "@/lib/content/society";

type Status = "idle" | "sending" | "sent" | "error";

export function RegisterForm() {
  const { t, b } = useLanguage();
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="page-shell py-24">
        <div className="card mx-auto max-w-xl p-8 text-center">
          <span className="badge-new">{t("nav.register")}</span>
          <h1 className="display-voice mt-5 text-heading-sm text-ink-black">
            {t("register.success")}
          </h1>
          <button
            type="button"
            className="btn btn-secondary mt-8"
            onClick={() => setStatus("idle")}
          >
            {t("register.another")}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="page-shell py-16 lg:py-24">
      <div className="mx-auto max-w-[720px]">
        <span className="eyebrow">{t("section.manage.eyebrow")}</span>
        <h1 className="display-voice mt-6 text-heading text-ink-black lg:text-heading-lg">
          {t("register.title")}
        </h1>
        <p className="mt-4 text-body-lg font-medium text-slate-600">
          {t("register.subtitle")}
        </p>

        <form onSubmit={onSubmit} className="card mt-10 p-6 lg:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label className="label" htmlFor="fullName">
                {t("register.fullName")}
              </label>
              <input id="fullName" name="fullName" required className="field" />
            </div>

            <div>
              <label className="label" htmlFor="houseName">
                {t("register.houseName")}
              </label>
              <input id="houseName" name="houseName" className="field" />
            </div>

            <div>
              <label className="label" htmlFor="phone">
                {t("register.phone")}
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                inputMode="tel"
                className="field"
              />
            </div>

            <div>
              <label className="label" htmlFor="branch">
                {t("register.branch")}
              </label>
              <select id="branch" name="branch" required className="field" defaultValue="">
                <option value="" disabled>
                  —
                </option>
                {branches.map((branch) => (
                  <option key={branch.id} value={branch.code ?? branch.id}>
                    {branch.code} · {b(branch.name)}
                    {branch.place ? ` — ${b(branch.place)}` : ""}
                  </option>
                ))}
                <option value="unknown">{t("register.branchUnknown")}</option>
              </select>
            </div>

            <div>
              <label className="label" htmlFor="ancestor">
                {t("register.ancestor")}
              </label>
              <input id="ancestor" name="ancestor" className="field" />
              <p className="mt-2 text-[12px] font-medium text-slate-600">
                {t("register.ancestorHelp")}
              </p>
            </div>

            <div>
              <label className="label" htmlFor="district">
                {t("register.district")}
              </label>
              <select id="district" name="district" required className="field" defaultValue="">
                <option value="" disabled>
                  —
                </option>
                {districts.map((district) => (
                  <option key={district} value={district}>
                    {district}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="label" htmlFor="panchayat">
                {t("register.panchayat")}
              </label>
              <input id="panchayat" name="panchayat" className="field" />
            </div>

            <div>
              <label className="label" htmlFor="email">
                {t("register.email")}
              </label>
              <input id="email" name="email" type="email" className="field" />
            </div>

            <div>
              <label className="label" htmlFor="members">
                {t("register.members")}
              </label>
              <input
                id="members"
                name="members"
                type="number"
                min={1}
                max={99}
                className="field"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="label" htmlFor="notes">
                {t("register.notes")}
              </label>
              <textarea id="notes" name="notes" rows={4} className="field resize-y" />
            </div>
          </div>

          {status === "error" ? (
            <p className="mt-6 rounded-[10px] border border-mist-50 bg-paper p-4 text-[14px] font-medium text-carbon">
              {t("register.error")}
            </p>
          ) : null}

          <div className="mt-8 flex items-center gap-4">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={status === "sending"}
            >
              {status === "sending" ? t("register.submitting") : t("register.submit")}
            </button>
            <span className="text-[13px] font-medium text-slate-600">
              {t("register.required")}: {t("register.fullName")}, {t("register.phone")},{" "}
              {t("register.branch")}, {t("register.district")}
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
