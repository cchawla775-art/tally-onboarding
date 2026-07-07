# Tally — onboarding flow

A small onboarding flow (Welcome → Create account → Log in → Account settings)
for a fictional freelance invoicing app, built with React, React Router, Vite,
and Tailwind CSS v4.

## Run it

```bash
npm install
npm run dev
```

Then open the printed `localhost` URL in your browser.

## Pages

- `/` — Welcome screen
- `/create-account` — Sign-up form (name, phone, email, password, studio name,
  solo/team question) with client-side validation
- `/login` — Log in against the account stored in `localStorage`
- `/account` — Account settings, shown after login/signup

## Structure

```
src/
  ui/            Reusable Button, Input, Wordmark components
  components/    Composed form field groups
  pages/         One file per route
  routes/        React Router configuration
```
