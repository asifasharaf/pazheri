/**
 * The family desk is gated by a single shared token held by the state
 * secretariat, set as ADMIN_TOKEN in the deployment environment. With no
 * token configured the desk stays closed rather than open.
 */
export function isAuthorised(request: Request): boolean {
  const expected = process.env.ADMIN_TOKEN;
  if (!expected) return false;
  const provided = request.headers.get("x-admin-token");
  return provided === expected;
}
