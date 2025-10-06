# Troubleshooting Log

## Issue

- **Symptom:** Toggling the theme switch updated the page background but the product card kept the light styling.
- **Root Cause:** The card relied on Tailwind's `dark:` variants, but the generated CSS from the current Tailwind setup didn't respond to the `dark` class applied on the `<html>` element.

## Fix

- Introduced the theme context inside `src/components/Card.jsx` and conditionally applied light or dark class sets based on the current theme.
- Adjusted the toggle label in `src/components/ThemeBtn.jsx` to switch text color alongside the global theme.
- Added a short helper message inside the card to confirm the theme toggle is active.

## Verification

- Manual check in the running dev server confirmed the card now changes appearance together with the global theme switch.
