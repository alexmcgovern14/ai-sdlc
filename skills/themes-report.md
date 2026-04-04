# Skill: themes-report

Generate an aggregate cross-interview themes report by analysing all interview summaries. Synthesises patterns across stakeholder interviews to surface common pain points, recurring AI opportunities, and overall sentiment trends.

## Trigger
Use this skill when the user wants to:
- Aggregate themes across multiple interviews
- Generate a cross-interview analysis
- Summarise discovery findings from stakeholder research
- Create an executive summary of interview insights

## Prerequisites
- Interview summaries must exist in `/outputs/interviews/` (created by the `interview-summariser` skill)
- At least 2 interview summaries required for meaningful cross-analysis

## Process

### Step 1 — Scan available interviews
Read all markdown files in `/outputs/interviews/`. For each file, extract:
- Interviewee name and role
- Department
- Date
- Key themes (ranked list)
- Pain points (with impact and frequency)
- AI opportunities (with potential value and feasibility)
- Overall sentiment

If fewer than 2 interviews are found, inform the user and suggest running more interviews first.

### Step 2 — Ask for report parameters
Use the ask_user_questions tool to ask:

1. Include all interviews, or filter by date range / department?
2. What is the primary audience for this report? (exec team, product, engineering)
3. Any specific themes or topics to emphasise?
4. Should the report include individual interview details, or only aggregated insights?

### Step 3 — Aggregate and analyse
Cross-reference all interviews to identify:

**Theme frequency**: Count how often each theme appears across interviews. Rank by prevalence.

**Pain point patterns**: Group similar pain points. Note which are mentioned by multiple stakeholders and which are department-specific.

**AI opportunity clusters**: Group related AI opportunities. Score by combined potential value and feasibility.

**Sentiment distribution**: Calculate overall sentiment breakdown (enthusiastic / cautious / sceptical).

**Department-level insights**: Where patterns differ by department, call this out.

### Step 4 — Generate the report

```markdown
# Cross-Interview Themes Report

| Field | Value |
|-------|-------|
| **Report Date** | <YYYY-MM-DD> |
| **Interviews Analysed** | <n> |
| **Date Range** | <earliest> to <latest> |
| **Departments Covered** | <list> |

## Executive Summary
<2-3 paragraph summary of key findings, suitable for exec audience>

## Sentiment Overview
| Sentiment | Count | Percentage |
|-----------|-------|------------|
| Enthusiastic | <n> | <x%> |
| Cautious | <n> | <x%> |
| Sceptical | <n> | <x%> |

<1-2 sentences interpreting the sentiment distribution>

## Top Themes (by frequency)
| Rank | Theme | Mentions | Departments |
|------|-------|----------|-------------|
| 1 | <theme> | <n> | <depts> |
| 2 | <theme> | <n> | <depts> |
| 3 | <theme> | <n> | <depts> |

### Theme Deep Dive
For each top theme:
- **<Theme Name>**: <synthesis of what stakeholders said about this theme>

## Pain Points Analysis
| Pain Point | Stakeholders | Avg Impact | Avg Frequency |
|------------|--------------|------------|---------------|
| <issue> | <n> | High/Med/Low | Daily/Weekly/Occasional |

### Cross-cutting Pain Points
<Pain points mentioned by 2+ stakeholders — highest priority for action>

### Department-Specific Pain Points
<Pain points unique to certain departments>

## AI Opportunities
| Opportunity | Stakeholders | Avg Value | Avg Feasibility | Priority Score |
|-------------|--------------|-----------|-----------------|----------------|
| <opportunity> | <n> | High/Med/Low | High/Med/Low | <1-9> |

*Priority Score = Value (1-3) x Feasibility (1-3)*

### Quick Wins (High feasibility, High value)
<Opportunities to pursue first>

### Strategic Bets (High value, Lower feasibility)
<Opportunities requiring more investment>

### Low Priority
<Opportunities with lower combined scores>

## Recommendations
Based on this analysis:
1. <Recommendation 1>
2. <Recommendation 2>
3. <Recommendation 3>

## Appendix: Interviews Included
| Date | Interviewee | Role | Department | Sentiment |
|------|-------------|------|------------|-----------|
| <date> | <name> | <role> | <dept> | <sentiment> |

---
<!-- The section below is for Alex to complete -->

## My Thoughts
<!-- Alex's personal reflections and strategic implications — not AI-generated -->


## Next Steps
- [ ] <Action 1>
- [ ] <Action 2>
```

### Step 5 — Save
Save to `/outputs/themes-report-<YYYY-MM-DD>.md`.

If a report for today already exists, ask before overwriting or append a version number.

## Output
A comprehensive cross-interview themes report in markdown, saved to `/outputs/`. Includes executive summary, theme rankings, pain point analysis, AI opportunity prioritisation, and recommendations. "My Thoughts" and "Next Steps" sections left blank for Alex to complete.
