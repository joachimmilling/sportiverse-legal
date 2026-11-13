# sportiverse.no

The public Sportiverse website, served by GitHub Pages.

- `index.html`, `no/index.html`: the homepage (English, Norwegian). Same markup, different text.
- `assets/site/`: homepage styles and script, the design tokens, and the Sportiverse design system bundle (`sportiverse-ds.*`, copied unchanged from the design system; replace both files to update).
- `assets/vendor/`: React 18, which the design system components need.
- `terms.html`, `privacy.html`, `delete-account.html`, `faq.html` (+ `no/`): legal and support pages. Their URLs are referenced from the App Store and Google Play; do not move them.
- `club/`, `league/`, `match/`, `profile/`, `session/`, `.well-known/`: deep-link landing pages and app association files.

No build step: edit the files and push.
