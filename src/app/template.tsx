// A template re-mounts on every navigation, so each page fades in as you move
// around the site. Opacity only (no transform) so fixed-position elements inside
// pages keep working.
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-transition">{children}</div>;
}
