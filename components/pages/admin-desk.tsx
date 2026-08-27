"use client";

import { useCallback, useEffect, useState } from "react";
import { useLanguage } from "@/components/language-provider";
import type { Registration } from "@/lib/store";

const TOKEN_KEY = "pazheri.admin.token";

type Tab = "registrations" | "announcements";

export function AdminDesk() {
  const { b } = useLanguage();
  const [token, setToken] = useState("");
  const [authorised, setAuthorised] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [rows, setRows] = useState<Registration[]>([]);
  const [tab, setTab] = useState<Tab>("registrations");
  const [posted, setPosted] = useState(false);

  const load = useCallback(async (value: string) => {
    setError(null);
    const response = await fetch("/api/admin", {
      headers: { "x-admin-token": value },
      cache: "no-store",
    });
    if (!response.ok) {
      setAuthorised(false);
      setError(
        response.status === 401
          ? b({
              en: "That token was not accepted. ADMIN_TOKEN must be set in the deployment environment.",
              ml: "ടോക്കൺ സ്വീകരിച്ചില്ല. ഡിപ്ലോയ്മെന്റിൽ ADMIN_TOKEN സെറ്റ് ചെയ്തിരിക്കണം.",
            })
          : b({ en: "Could not load the desk.", ml: "ഡെസ്ക് ലോഡ് ചെയ്യാനായില്ല." }),
      );
      return;
    }
    const data = (await response.json()) as { registrations: Registration[] };
    setRows(data.registrations);
    setAuthorised(true);
  }, [b]);

  useEffect(() => {
    try {
      const stored = window.sessionStorage.getItem(TOKEN_KEY);
      if (stored) {
        setToken(stored);
        void load(stored);
      }
    } catch {
      /* storage unavailable — sign in each time */
    }
  }, [load]);

  async function signIn(event: React.FormEvent) {
    event.preventDefault();
    try {
      window.sessionStorage.setItem(TOKEN_KEY, token);
    } catch {
      /* ignore */
    }
    await load(token);
  }

  async function publish(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const response = await fetch("/api/announcements", {
      method: "POST",
      headers: { "content-type": "application/json", "x-admin-token": token },
      body: JSON.stringify({ ...data, pinned: data.pinned === "on" }),
    });
    if (response.ok) {
      form.reset();
      setPosted(true);
      setError(null);
    } else {
      setPosted(false);
      setError(
        b({
          en: "The announcement could not be published.",
          ml: "അറിയിപ്പ് പ്രസിദ്ധീകരിക്കാനായില്ല.",
        }),
      );
    }
  }

  if (!authorised) {
    return (
      <div className="page-shell py-24">
        <form onSubmit={signIn} className="card mx-auto max-w-md p-8">
          <h1 className="display-voice text-heading-sm text-ink-black">
            {b({ en: "Family desk", ml: "കുടുംബ ഡെസ്ക്" })}
          </h1>
          <p className="mt-3 text-[15px] font-medium text-slate-600">
            {b({
              en: "For the state secretariat. Enter the desk token to see registrations and publish announcements.",
              ml: "സംസ്ഥാന സെക്രട്ടേറിയറ്റിനുള്ളത്. രജിസ്ട്രേഷനുകൾ കാണാനും അറിയിപ്പുകൾ പ്രസിദ്ധീകരിക്കാനും ടോക്കൺ നൽകുക.",
            })}
          </p>
          <label className="label mt-6" htmlFor="token">
            {b({ en: "Desk token", ml: "ഡെസ്ക് ടോക്കൺ" })}
          </label>
          <input
            id="token"
            type="password"
            value={token}
            onChange={(event) => setToken(event.target.value)}
            className="field"
            autoComplete="current-password"
          />
          {error ? (
            <p className="mt-4 text-[14px] font-medium text-carbon">{error}</p>
          ) : null}
          <button type="submit" className="btn btn-primary mt-6 w-full">
            {b({ en: "Open the desk", ml: "ഡെസ്ക് തുറക്കുക" })}
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="page-shell py-16 lg:py-24">
      <h1 className="display-voice text-heading text-ink-black">
        {b({ en: "Family desk", ml: "കുടുംബ ഡെസ്ക്" })}
      </h1>

      <div className="mt-8 flex gap-6 border-b border-mist-50">
        {(
          [
            ["registrations", { en: "Registrations", ml: "രജിസ്ട്രേഷനുകൾ" }],
            ["announcements", { en: "Publish an announcement", ml: "അറിയിപ്പ് പ്രസിദ്ധീകരിക്കുക" }],
          ] as const
        ).map(([key, label]) => (
          <button
            key={key}
            type="button"
            onClick={() => setTab(key)}
            className={[
              "-mb-px border-b-2 pb-3 text-[15px] font-medium transition-colors",
              tab === key
                ? "border-ink-black text-ink-black"
                : "border-transparent text-slate-600 hover:text-ink-black",
            ].join(" ")}
          >
            {b(label)}
          </button>
        ))}
      </div>

      {tab === "registrations" ? (
        <div className="mt-10">
          <p className="text-[14px] font-medium text-slate-600">
            {rows.length} {b({ en: "entries", ml: "എൻട്രികൾ" })}
          </p>
          {rows.length === 0 ? (
            <p className="mt-6 text-[15px] font-medium text-slate-600">
              {b({
                en: "No registrations have been received on this server yet.",
                ml: "ഈ സെർവറിൽ ഇതുവരെ രജിസ്ട്രേഷനുകളൊന്നും ലഭിച്ചിട്ടില്ല.",
              })}
            </p>
          ) : (
            <div className="card mt-6 overflow-x-auto">
              <table className="w-full min-w-[820px] text-left">
                <thead>
                  <tr className="border-b border-mist-50 text-[12px] font-medium text-slate-700">
                    <th className="px-4 py-3">{b({ en: "Name", ml: "പേര്" })}</th>
                    <th className="px-4 py-3">{b({ en: "Branch", ml: "ശാഖ" })}</th>
                    <th className="px-4 py-3">{b({ en: "District", ml: "ജില്ല" })}</th>
                    <th className="px-4 py-3">{b({ en: "Phone", ml: "ഫോൺ" })}</th>
                    <th className="px-4 py-3">{b({ en: "Members", ml: "അംഗങ്ങൾ" })}</th>
                    <th className="px-4 py-3">{b({ en: "Received", ml: "ലഭിച്ചത്" })}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-mist-50 text-[14px] font-medium text-carbon">
                  {rows.map((row) => (
                    <tr key={row.id}>
                      <td className="px-4 py-3">
                        {row.fullName}
                        {row.houseName ? (
                          <span className="block text-[12px] text-slate-600">
                            {row.houseName}
                          </span>
                        ) : null}
                      </td>
                      <td className="px-4 py-3">{row.branch}</td>
                      <td className="px-4 py-3">{row.district}</td>
                      <td className="px-4 py-3">{row.phone}</td>
                      <td className="px-4 py-3">{row.members ?? "—"}</td>
                      <td className="px-4 py-3 text-slate-600">
                        {row.receivedAt.slice(0, 10)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      ) : (
        <form onSubmit={publish} className="card mt-10 max-w-3xl p-6 lg:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="label" htmlFor="categoryEn">
                {b({ en: "Category (English)", ml: "വിഭാഗം (ഇംഗ്ലീഷ്)" })}
              </label>
              <input id="categoryEn" name="categoryEn" className="field" />
            </div>
            <div>
              <label className="label" htmlFor="categoryMl">
                {b({ en: "Category (Malayalam)", ml: "വിഭാഗം (മലയാളം)" })}
              </label>
              <input id="categoryMl" name="categoryMl" lang="ml" className="field" />
            </div>
            <div>
              <label className="label" htmlFor="titleEn">
                {b({ en: "Title (English)", ml: "തലക്കെട്ട് (ഇംഗ്ലീഷ്)" })}
              </label>
              <input id="titleEn" name="titleEn" required className="field" />
            </div>
            <div>
              <label className="label" htmlFor="titleMl">
                {b({ en: "Title (Malayalam)", ml: "തലക്കെട്ട് (മലയാളം)" })}
              </label>
              <input id="titleMl" name="titleMl" required lang="ml" className="field" />
            </div>
            <div>
              <label className="label" htmlFor="bodyEn">
                {b({ en: "Body (English)", ml: "വിവരണം (ഇംഗ്ലീഷ്)" })}
              </label>
              <textarea id="bodyEn" name="bodyEn" rows={5} className="field resize-y" />
            </div>
            <div>
              <label className="label" htmlFor="bodyMl">
                {b({ en: "Body (Malayalam)", ml: "വിവരണം (മലയാളം)" })}
              </label>
              <textarea id="bodyMl" name="bodyMl" rows={5} lang="ml" className="field resize-y" />
            </div>
            <div>
              <label className="label" htmlFor="date">
                {b({ en: "Date", ml: "തീയതി" })}
              </label>
              <input id="date" name="date" type="date" className="field" />
            </div>
            <label className="flex items-center gap-2.5 self-end pb-2.5 text-[14px] font-medium text-carbon">
              <input type="checkbox" name="pinned" className="h-4 w-4 accent-[#266df0]" />
              {b({ en: "Pin to the top", ml: "മുകളിൽ പിൻ ചെയ്യുക" })}
            </label>
          </div>

          {error ? (
            <p className="mt-6 text-[14px] font-medium text-carbon">{error}</p>
          ) : null}
          {posted ? (
            <p className="mt-6 text-[14px] font-medium text-carbon">
              {b({ en: "Published.", ml: "പ്രസിദ്ധീകരിച്ചു." })}
            </p>
          ) : null}

          <button type="submit" className="btn btn-primary mt-8">
            {b({ en: "Publish", ml: "പ്രസിദ്ധീകരിക്കുക" })}
          </button>
        </form>
      )}
    </div>
  );
}
