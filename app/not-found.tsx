import Link from "next/link";

export default function NotFound() {
  return (
    <div className="page-shell py-24 text-center">
      <h1 className="display-voice text-heading text-ink-black">
        This page is not in the book
      </h1>
      <p className="mt-4 text-body-lg font-medium text-slate-600">
        The page you asked for does not exist. Try the contents page.
      </p>
      <div className="mt-8 flex justify-center gap-3">
        <Link href="/book" className="btn btn-primary">
          Contents
        </Link>
        <Link href="/" className="btn btn-secondary">
          Back to home
        </Link>
      </div>
    </div>
  );
}
