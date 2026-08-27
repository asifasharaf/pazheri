"use client";

import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/components/language-provider";
import { branches } from "@/lib/content/tree";
import { districts } from "@/lib/content/society";
import { bookMeta } from "@/lib/content/book";
import {
  fromMarkdown,
  registrationFilename,
  saveLocalHousehold,
  toMarkdown,
  type HouseholdInput,
} from "@/lib/registrations";

/** Order and labels used when writing the details out as a message. */
const FIELDS: { name: string; label: { en: string; ml: string } }[] = [
  { name: "fullName", label: { en: "Name", ml: "പേര്" } },
  { name: "houseName", label: { en: "House", ml: "വീട്ടുപേര്" } },
  { name: "branch", label: { en: "Branch", ml: "ശാഖ" } },
  { name: "ancestor", label: { en: "Known ancestor", ml: "അറിയാവുന്ന പൂർവ്വികൻ" } },
  { name: "phone", label: { en: "Mobile", ml: "മൊബൈൽ" } },
  { name: "email", label: { en: "Email", ml: "ഇ-മെയിൽ" } },
  { name: "district", label: { en: "District", ml: "ജില്ല" } },
  { name: "panchayat", label: { en: "Panchayat / town", ml: "പഞ്ചായത്ത് / നഗരം" } },
  { name: "members", label: { en: "Members", ml: "അംഗങ്ങൾ" } },
  { name: "notes", label: { en: "Notes", ml: "മറ്റ് വിവരങ്ങൾ" } },
];

export function RegisterForm() {
  const { t, b } = useLanguage();
  const [form, setForm] = useState<HTMLFormElement | null>(null);
  const [saved, setSaved] = useState(false);

  function readInput(): HouseholdInput | null {
    if (!form || !form.reportValidity()) return null;
    const data = new FormData(form);
    const value = (key: string) => String(data.get(key) ?? "").trim();
    return {
      name: value("fullName"),
      house: value("houseName"),
      branch: value("branch"),
      ancestor: value("ancestor"),
      district: value("district"),
      panchayat: value("panchayat"),
      members: value("members"),
      notes: value("notes"),
    };
  }

  /**
   * "Saving" on a site with no server means two things at once: the entry is
   * written into this browser so the family sees itself in the tree
   * immediately, and the same entry is downloaded as the markdown file that
   * publishes it once committed.
   */
  function save() {
    const input = readInput();
    if (!input) return;

    const markdown = toMarkdown(input);
    const filename = registrationFilename(input);

    const household = fromMarkdown(markdown, `local-${Date.now()}`, "local");
    if (household) saveLocalHousehold(household);

    const blob = new Blob([markdown], { type: "text/markdown;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = filename;
    anchor.click();
    URL.revokeObjectURL(url);

    setSaved(true);
  }

  /**
   * There is no server behind this site, so the form composes the details
   * into a message and hands them to the reader's own mail app or WhatsApp.
   */
  function compose(): string | null {
    if (!form || !form.reportValidity()) return null;
    const data = new FormData(form);
    return FIELDS.map(({ name, label }) => {
      const value = String(data.get(name) ?? "").trim();
      return value ? `${b(label)}: ${value}` : null;
    })
      .filter(Boolean)
      .join("\n");
  }

  function sendByEmail() {
    const body = compose();
    if (body === null) return;
    const subject = encodeURIComponent(t("register.mailSubject"));
    window.location.href = `mailto:${bookMeta.contact.email}?subject=${subject}&body=${encodeURIComponent(body)}`;
  }

  function sendByWhatsApp() {
    const body = compose();
    if (body === null) return;
    const number = bookMeta.contact.phone.replace(/[^0-9]/g, "");
    const text = `${t("register.mailSubject")}\n\n${body}`;
    window.open(
      `https://wa.me/${number}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <div className="page-shell py-16 lg:py-24">
      <div className="mx-auto max-w-[720px]">
        <span className="eyebrow">{t("section.manage.eyebrow")}</span>
        <h1 className="super-heading mt-6 text-ink-black">
          {t("register.title")}
        </h1>
        <p className="mt-4 text-body-lg font-medium text-slate-600">
          {t("register.subtitle")}
        </p>

        <p className="mt-6 rounded-[12px] border border-mist-50 bg-paper p-4 text-[14px] font-medium text-slate-600">
          {t("register.howItWorks")}
        </p>

        <form
          ref={setForm}
          onSubmit={(event) => event.preventDefault()}
          className="card mt-10 p-6 lg:p-8"
        >
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

          {saved ? (
            <div className="mt-8 rounded-[12px] border border-periwinkle bg-ice-wash p-4">
              <p className="text-[15px] font-medium text-ink-black">
                {t("register.saved")}
              </p>
              <p className="mt-2 text-[14px] font-medium text-carbon">
                {t("register.savedNext")}
              </p>
              <Link
                href="/family-tree"
                className="link-accent mt-3 inline-block text-[14px]"
              >
                {t("register.viewInTree")} →
              </Link>
            </div>
          ) : null}

          <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap sm:items-center">
            <button type="button" className="btn btn-primary" onClick={save}>
              {t("register.save")}
            </button>
            <button type="button" className="btn btn-secondary" onClick={sendByEmail}>
              {t("register.submit")}
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={sendByWhatsApp}
            >
              {t("register.whatsapp")}
            </button>
          </div>
          <p className="mt-4 text-[13px] font-medium text-slate-600">
            {t("register.privacy")}
          </p>
          <p className="mt-4 text-[13px] font-medium text-slate-600">
            {t("register.required")}: {t("register.fullName")}, {t("register.phone")},{" "}
            {t("register.branch")}, {t("register.district")}
          </p>
          <p className="mt-2 text-[13px] font-medium text-slate-600">
            {t("register.orCall")}{" "}
            <a
              className="link-accent"
              href={`tel:${bookMeta.contact.phone.replace(/\s/g, "")}`}
            >
              {bookMeta.contact.phone}
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
