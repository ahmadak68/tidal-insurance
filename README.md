# Tidal customer journey public host (stable URL for WhatsApp)

Static GitHub Pages front door for Phase-1 secure browser handoff.

Customer links look like:

`https://ahmadak68.github.io/tidal-insurance/j/<opaque-token>`

The address bar never shows trycloudflare / localhost. The page embeds the premium ENGAGE secure journey from a configurable API origin (`config.js`).

Swap later to `https://tidal-insurance.pages.dev` or `https://insurance.tidal-waves.com` by changing ENGAGE `InsuranceDemo:CustomerPublicBaseUrl` only.
