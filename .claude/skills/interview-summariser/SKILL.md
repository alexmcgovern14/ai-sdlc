---
name: interview-summariser
description: Summarise raw stakeholder interview notes into a structured markdown document. Extracts pain points, AI opportunities, sentiment, themes, and saves to /outputs/interviews/. Use during Alex's discovery phase to process stakeholder interviews.
user-invocable: true
---

## Process

### Step 1 — Get the interview content
Use ask_user_questions to ask:
1. Paste the interview notes, or provide a file path to read from
2. Who was the interviewee? (name, role, department)
3. What was the interview date?
4. What was the main topic or focus area?

### Step 2 — Analyse the content
Extract:
- **Pain points** — frustrations, blockers, inefficiencies mentioned
- **AI opportunities** — where AI/automation could add value in their area
- **Sentiment** — enthusiastic / cautious / sceptical (with one-sentence rationale)
- **Key themes** — ranked by prominence in the conversation
- **Other notable points** — anything significant that doesn't fit above categories
- **Notable quotes** — verbatim quotes worth preserving

### Step 3 — Generate the summary

```markdown
# Interview Summary: <Interviewee Name>

| Field | Value |
|-------|-------|
| **Interviewee** | <Name>, <Role> |
| **Department** | <Department> |
| **Date** | <YYYY-MM-DD> |
| **Topic** | <Focus area> |

## Overall Sentiment
<Enthusiastic / Cautious / Sceptical> — <one-sentence rationale>

## Key Themes
1. <Theme 1> — most prominent
2. <Theme 2>
3. <Theme 3>

## Pain Points
| Pain Point | Impact | Frequency |
|------------|--------|-----------|
| <Issue> | High/Med/Low | Daily/Weekly/Occasional |

## AI Opportunities
| Opportunity | Potential Value | Feasibility |
|-------------|-----------------|-------------|
| <Opportunity> | High/Med/Low | High/Med/Low |

## Other Notable Points
- <anything significant not captured above>

## Notable Quotes
> "<Verbatim quote>"

---
<!-- The sections below are for Alex to complete -->

## My Thoughts
<!-- Alex's personal reflections — not AI-generated -->


## Actions
- [ ] <Action 1>
- [ ] <Action 2>
```

### Step 4 — Save
Save to `/outputs/interviews/YYYY-MM-DD-<interviewee-name>.md`.
Do not overwrite if the file already exists — prompt first.

## Output
Structured interview summary saved to `/outputs/interviews/`. "My Thoughts" and "Actions" sections left blank for Alex to complete.
