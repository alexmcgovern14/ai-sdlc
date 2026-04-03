# Skill: research

Run a focused web research task using Tavily for search and Firecrawl CLI for page scraping. Returns a structured summary only — keeps main session context lean.

## Trigger
Use this skill when the user asks for research, market analysis, competitor review, or any task requiring web sources.

## Prerequisites
- **Tavily API key** required — sign up at https://tavily.com (free tier available). Set as `TAVILY_API_KEY` env var.
- **Firecrawl CLI** for scraping full page content — install via `npm install -g firecrawl-cli` and set `FIRECRAWL_API_KEY`.

## Process

### Step 1 — Scope the research
Use the ask_user_questions tool to ask:

1. What is the research question or topic?
2. What do you already know / what can be skipped?
3. How many sources do you need? (default: 5–8)
4. What format should the output be? (summary, bullet list, comparison table)
5. Is there a deadline or specific angle? (e.g. UK market only, post-2024 only)

### Step 2 — Run research via sub-agent
Delegate to the `research-agent` sub-agent. Pass:
- The scoped question
- Number of sources
- Any filters (date, region, domain)

The sub-agent should:
1. Use Tavily search: `curl -X POST https://api.tavily.com/search -H "Content-Type: application/json" -d '{"api_key":"$TAVILY_API_KEY","query":"<query>","max_results":8}'`
2. For key pages, scrape with Firecrawl CLI: `firecrawl scrape <url>`
3. Synthesise findings into a structured summary

### Step 3 — Return summary
The sub-agent returns a summary only — no raw search dumps. Format:

```
## Research: <Topic>
Date: <YYYY-MM-DD>
Sources: <n>

### Key Findings
1. <finding>
2. <finding>

### Caveats & Gaps
- <what wasn't found or is uncertain>

### Sources
- [Title](url)
```

### Step 4 — Save
Save to `/outputs/research-<topic>-<date>.md`.

## Output
A structured research summary in markdown, saved to `/outputs/`.
