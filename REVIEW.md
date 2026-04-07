# Code Review Instructions

This file is read by Claude Code Review on every PR. It defines what to check, what to flag, and what to skip.

---

## Always flag (Important)

- Any skill file that is missing required sections: Trigger, Process, Output
- Acceptance criteria in the Linear issue that are not addressed by the changes
- Hardcoded secrets, tokens, API keys, or webhook URLs committed to the repo
- Files saved to the wrong output path (interview summaries must go in `/outputs/interviews/`, not root)
- A `.env` file committed to the repo (should be gitignored)
- New functions or features with no accompanying tests
- AI-generated code files missing the `[AI-Generated]` comment at the top
- PRs where the test plan section is empty or says "visual review only"

## Always flag (Nit)

- Skill files that don't follow the existing format and section structure
- Missing or broken markdown (unclosed code blocks, broken links)
- Inconsistent naming conventions (file names should be kebab-case)

## Acceptance criteria check

For every PR, read the linked Linear issue (URL will be in the PR description). Check each acceptance criterion is demonstrably met by the changes. Flag any criterion that is not addressed.

## Skip

- Stylistic preferences that don't affect function
- Comments or whitespace in markdown files
- TODOs that are explicitly deferred to a future issue

---

## Repo context

This is a Claude Code configuration repo (`ai-sdlc`). It contains:
- `skills/` — Claude skill files (markdown prompt guides)
- `knowledge/` — context files about the product, role, and design system
- `outputs/` — generated outputs (interview summaries, reports)
- `.mcp.json` — MCP server config for cloud Claude Code sessions
- `CLAUDE.md` — primary instructions for Claude Code

Changes to `CLAUDE.md` or `.mcp.json` should be reviewed carefully — they affect all Claude Code sessions.
