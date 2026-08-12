import sanitizeHtml from 'sanitize-html';

/**
 * Rich text is stored as HTML (produced by Tiptap on the client) and later
 * rendered with dangerouslySetInnerHTML on the display screen. Sanitise on
 * the way IN (when saving via the API) so nothing unsafe ever reaches
 * storage, and it's safe to render everywhere it's read.
 *
 * Uses sanitize-html rather than isomorphic-dompurify: this route runs
 * server-side only (Node), and isomorphic-dompurify drags in jsdom, whose
 * html-encoding-sniffer dependency now ships an ESM-only package
 * (@exodus/bytes) that Next's CommonJS require() in route handlers can't
 * load (ERR_REQUIRE_ESM). sanitize-html is pure JS with no DOM dependency,
 * so this class of failure can't come back.
 */
const ALLOWED_TAGS = [
  'p',
  'br',
  'strong',
  'em',
  'u',
  's',
  'ul',
  'ol',
  'li',
  'a',
  'h1',
  'h2',
  'h3',
  'blockquote',
];

const ALLOWED_ATTR: Record<string, string[]> = {
  a: ['href', 'target', 'rel'],
};

export function sanitizeRichText(html: string): string {
  return sanitizeHtml(html, {
    allowedTags: ALLOWED_TAGS,
    allowedAttributes: ALLOWED_ATTR,
    transformTags: {
      a: sanitizeHtml.simpleTransform('a', { rel: 'noopener noreferrer' }),
    },
  });
}