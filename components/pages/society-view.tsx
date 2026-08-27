"use client";

import Link from "next/link";
import { useLanguage } from "@/components/language-provider";
import { bookMeta } from "@/lib/content/book";
import { society } from "@/lib/content/society";

export function SocietyView() {
  const { t, b } = useLanguage();

  return (
    <div className="page-shell py-16 lg:py-24">
      <div className="max-w-2xl">
        <span className="eyebrow">
          {t("society.registration")} {society.registrationNo}
        </span>
        <h1 className="super-heading mt-6 text-ink-black">
          {b(society.name)}
        </h1>
        <p className="mt-4 text-body-lg font-medium text-slate-600">
          {b(society.formed)}
        </p>
      </div>

      <section className="mt-16">
        <h2 className="display-voice text-subheading text-ink-black">
          {t("society.structure")}
        </h2>
        <ol className="mt-6 grid gap-4 lg:grid-cols-5">
          {society.tiers.map((tier, index) => (
            <li key={tier.title.en} className="card p-6">
              <span className="text-[12px] font-medium text-fog-400">
                {index + 1}
              </span>
              <h3 className="display-voice mt-2 text-[19px] tracking-[-0.017em] text-ink-black">
                {b(tier.title)}
              </h3>
              <p className="mt-3 text-[14px] font-medium text-slate-600">
                {b(tier.detail)}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-16">
        <h2 className="display-voice text-subheading text-ink-black">
          {t("society.bearers")}
        </h2>
        <ul className="mt-6 grid gap-4 sm:grid-cols-3">
          {society.bearers.map((bearer) => (
            <li key={bearer.role.en} className="card p-6">
              <span className="eyebrow py-1">{b(bearer.role)}</span>
              <p className="display-voice mt-4 text-subheading text-ink-black">
                {b(bearer.name)}
              </p>
              {bearer.contact ? (
                <a
                  href={`tel:${bearer.contact.replace(/\s/g, "")}`}
                  className="link-accent mt-2 inline-block text-[14px]"
                >
                  {bearer.contact}
                </a>
              ) : null}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16 card p-6 lg:p-8">
        <h2 className="display-voice text-subheading text-ink-black">
          {t("footer.contact")}
        </h2>
        <p className="mt-3 max-w-2xl text-[15px] font-medium text-slate-600">
          {b({
            en: "Corrections to the genealogy, registration queries and scholarship applications all reach the general secretary.",
            ml: "വംശാവലിയിലെ തിരുത്തലുകൾ, രജിസ്ട്രേഷൻ സംബന്ധമായ സംശയങ്ങൾ, സ്കോളർഷിപ്പ് അപേക്ഷകൾ — എല്ലാം ജനറൽ സെക്രട്ടറിക്ക്.",
          })}
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href={`tel:${bookMeta.contact.phone.replace(/\s/g, "")}`} className="btn btn-primary">
            {bookMeta.contact.phone}
          </a>
          <a href={`mailto:${bookMeta.contact.email}`} className="btn btn-secondary">
            {bookMeta.contact.email}
          </a>
          <Link href="/register" className="btn btn-secondary">
            {t("nav.register")}
          </Link>
        </div>
      </section>
    </div>
  );
}
