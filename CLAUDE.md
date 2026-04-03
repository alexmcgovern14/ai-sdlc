# AI SDLC — Alex McGovern, Head of AI, Midnite

## Role & Context
Head of AI at Midnite, a fast-growing next-gen betting platform (~150 people, Series C).
Reporting to CPO. Remit: AI strategy, org-wide adoption, internal tooling, AI standards.
Team: Alex + 2 engineers.

## Current Focus
- Weeks 0–4: stakeholder interviews, baseline survey, tooling audit, compliance alignment
- Standing up adoption infrastructure: Champions network, training, Slack channel, show-and-tell
- First internal tools and agents targeted for weeks 8–12

## Constraints
- Regulated industry (betting) — compliance and auditability non-negotiable
- Data infrastructure still maturing — some AI workflows may not yet sign-off

## SDLC Workflow
For idea → implementation, follow this chain:

1. **Requirements** — use `ask_user_questions` to gather: goal, users, scope, constraints, priority
2. **Product agent** — invoke `/product-agent` skill to create a Linear Project (Epic) + child issues
3. **Coding agent** — invoke `/coding-agent` skill with an issue identifier to implement in a worktree and open a PR

The product-agent handles all Linear writes. The coding-agent handles all code and PR creation.

## How I Like to Work
- Use sub-agents for any task involving multiple tool calls or web research
- Keep main session context lean — delegate heavy lifting to sub-agents
- All document outputs go in /outputs or the relevant /projects subfolder
- Use the ask_user_questions tool before starting any document, spec, or analysis
- Format all outputs in markdown unless told otherwise
- When creating Linear issues, use the product-agent skill (for epics + breakdown) or story-writer (for single issues)

## Sub-Agents
- research-agent: use for any web research. Runs searches in isolation, returns summary only.
- linear-agent: use for Linear read/write operations.
- writer-agent: use for long-form document creation (PRDs, reports, plans).

## Skills Available
- skill-builder: for creating new skills
- prd-writer: for writing PRDs
- epic-writer: for writing epics (document only, no Linear write)
- story-writer: for writing single user stories / Linear issues
- product-agent: for full SDLC Epic → creates Linear Project + child issues
- coding-agent: for picking up a Linear issue and implementing it in a worktree
- research: for web research tasks

## Tools Connected
- Google Workspace MCP
- Linear MCP
- Slack MCP

## UI / Front-End Work
When building any UI or front-end output, always reference knowledge/design-system.md for design tokens, components, and visual conventions before writing any code or markup.
