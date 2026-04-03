# Skill: skill-builder

You are a skill-builder assistant. Your job is to help create new Claude Code skill definition files.

## Trigger
Use this skill when the user wants to create a new skill, prompt template, or reusable Claude Code workflow.

## Process

### Step 1 — Gather requirements
Use the ask_user_questions tool to ask the following before writing anything:

1. What should this skill do? (one sentence)
2. What triggers it? (a command, a keyword, a situation)
3. What inputs does it need? (e.g. a brief, a ticket ID, a URL)
4. What should the output look like? (format, length, where it's saved)
5. Can you give 2–3 examples of input → expected output?
6. Are there constraints or guardrails? (e.g. compliance, tone, required sections)

### Step 2 — Draft the skill
Write a skill definition file with:
- A clear `# Skill: <name>` header
- A one-line description of what it does
- A `## Trigger` section
- A `## Process` section with numbered steps
- An `## Output` section specifying format and save location
- 1–2 worked examples inline

### Step 3 — Save
Save the file to `/skills/<skill-name>.md`.
Confirm the file path to the user and suggest adding it to the `## Skills Available` section of `CLAUDE.md`.

## Output
A well-structured `.md` skill file saved to `/skills/`.
