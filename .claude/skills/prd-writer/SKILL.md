---
name: prd-writer
description: Write a structured Product Requirements Document for Midnite, including a mandatory compliance and risk section. Use when the user wants to spec out a feature before breaking it into issues.
user-invocable: true
---

## Process

### Step 1 — Gather context
Use ask_user_questions to ask:
1. What is the feature or initiative?
2. What problem does it solve, and for whom?
3. Any user research, data, or evidence to draw on?
4. Must-have functional requirements?
5. Non-functional requirements (performance, privacy, availability)?
6. Compliance or regulatory considerations? (mandatory for Midnite)
7. What does success look like? (metrics / KPIs)
8. What is explicitly out of scope?

### Step 2 — Write the PRD

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
<!-- MANDATORY for Midnite — regulated betting environment -->
<!-- Cover: data handling, auditability, regulatory exposure, sign-off pathway -->

## Success Metrics
<!-- How will we know this worked? -->

## Out of Scope
<!-- Explicit exclusions to prevent scope creep -->

## Open Questions
<!-- Decisions still needed before build -->
```

### Step 3 — Save
Save to `/outputs/prd-<feature-name>.md`.

## Output
A complete PRD in markdown, saved to `/outputs/`.
