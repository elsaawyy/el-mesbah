/**
 * Accessibility: lets keyboard users skip past the nav.
 * Visually hidden until focused.
 */
export function SkipLink() {
  return (
    <a href="#main" className="skip-link">
      Skip to content
    </a>
  );
}