@AGENTS.md

# Project Conventions

## UI & Components
- Use **shadcn** for all UI components
- Use **lucide** for icons
- If shadcn does not have the needed component, build a custom one with its own state management
- Shared/reusable components live in `components/shared/`

## State Management
- All stateful logic (useState, useEffect, custom hooks) goes in `lib/hooks/`
- Sub-folders inside `lib/hooks/` per feature/concern — keep each hook isolated so edits are scoped
- **No logic in UI components** — UI files are for rendering only

## Content / Wording
- Text content and copy for each interview section lives in its own dedicated folder (co-located with that section, not scattered)
