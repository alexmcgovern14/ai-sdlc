# Skill: prd-writer

Write a structured Product Requirements Document (PRD) for Midnite, including a mandatory compliance and risk section.

## Trigger
Use this skill when the user asks to write a PRD, product spec, or requirements document.

## Process

### Step 1 — Gather context
Use the ask_user_questions tool to ask:

1. What is the feature or initiative? (one sentence)
2. What problem does it solve, and for whom?
3. Do you have any user research, data, or evidence to draw on?
4. What are the must-have functional requirements?
5. Are there non-functional requirements (performance, privacy, availability)?
6. Are there any compliance or regulatory considerations? (mandatory for Midnite)
7. What does success look like? (metrics / KPIs)
8. What is explicitly out of scope?

### Step 2 — Write the PRD
Structure:

```
# PRD: <Feature Name>

## Status
Draft | Review | Approved

## Problem Statement
<!-- Why does this exist? What pain does it solve? -->

## User Research & Evidence
<!-- Data, interviews, support tickets, analytics — cite sources -->

## Requirements

### Functional
<!-- What must the system do? -->

### Non-Functional
<!-- Performance, scalability, availability, privacy -->

## Compliance & Risk
<!-- MANDATORY — regulated industry -->
<!-- Cover: data handling, auditability, regulatory exposure, sign-off required -->

## Success Metrics
<!-- How will we know this worked? -->

## Out of Scope
<!-- Explicit exclusions to prevent scope creep -->

## Open Questions
<!-- Decisions still needed before build -->
```

### Step 3 — Save
Save to `/outputs/prd-<feature-name>.md` or the relevant `/knowledge/projects/` subfolder.

## Output
A complete PRD in markdown, saved to the correct location.
