# Skill: interview-summariser

Summarise raw stakeholder interview notes into a structured markdown document with key insights, pain points, AI opportunities, and action items.

## Trigger
Use this skill when the user wants to summarise interview notes, stakeholder feedback, or user research transcripts.

## Process

### Step 1 — Get the interview content
Use the ask_user_questions tool to ask:

1. Paste the interview notes below, or provide a file path to read from.
2. Who was the interviewee? (name, role, department)
3. What was the interview date?
4. What was the main topic or focus area?

### Step 2 — Analyse the content
Read through the interview notes and extract:

- **Pain points**: frustrations, blockers, inefficiencies mentioned
- **AI opportunities**: places where AI/automation could add value
- **Sentiment**: overall tone (positive, neutral, negative, mixed)
- **Key themes**: recurring topics or concerns
- **Quotes**: notable verbatim quotes worth preserving

### Step 3 — Generate the summary
Output using this template:

```markdown
# Interview Summary: <Interviewee Name>

| Field | Value |
|-------|-------|
| **Interviewee** | <Name>, <Role> |
| **Department** | <Department> |
| **Date** | <YYYY-MM-DD> |
| **Interviewer** | <Name> |
| **Topic** | <Focus area> |

## Overall Sentiment
<Positive / Neutral / Negative / Mixed> — <one-sentence summary of tone>

## Key Themes
1. <Theme 1>
2. <Theme 2>
3. <Theme 3>

## Pain Points
| Pain Point | Impact | Frequency |
|------------|--------|-----------|
| <Issue> | <High/Med/Low> | <Daily/Weekly/Occasional> |

## AI Opportunities
| Opportunity | Potential Value | Feasibility |
|-------------|-----------------|-------------|
| <Opportunity> | <High/Med/Low> | <High/Med/Low> |

## Notable Quotes
> "<Verbatim quote 1>"

> "<Verbatim quote 2>"

## Summary
<2-3 paragraph synthesis of the interview>

---

## Personal Notes
<!-- Space for interviewer reflections -->


## Action Items
- [ ] <Action 1>
- [ ] <Action 2>
```

### Step 4 — Save the output
Save to `/outputs/interviews/interview-<interviewee>-<date>.md`.

If the `/outputs/interviews/` directory doesn't exist, create it.

## Output
A structured interview summary in markdown, saved to `/outputs/interviews/`.
