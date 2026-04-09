# Weekly 10x-Setup Audit – Claude Code, Cursor, Codex (Last 14 Days)

## Gap summary (top-level)

- **No automated PR/code-review agent wired into this repo’s SDLC**, despite Codex and Cursor both pushing hard on agent-led reviews, plugins, and triggers for CI/PR events; this leaves review quality and speed on the table.[^1][^2]
- **No scheduled/looped agent runs for recurring tasks** (nightly PR triage, dependency sweeps, CI failure cleanup), while Cursor 3 and Codex now assume background agents and automations as a first-class pattern.[^3][^2]
- **MCP coverage is thin (Linear-only)** compared with Codex plugins and Cursor’s marketplace of MCP-backed plugins; GitHub and Slack are still handled via webhook/API glue instead of first-class tools.[^4][^5]
- **Claude Code’s newer hooks and context controls (PostCompact, StopFailure, sparse worktrees, effort frontmatter) are not reflected in your agent/skill definitions**, so your Claude harness is a strong v1 but not yet tuned to 2026-era best practices.[^6][^7]
- **Your workflow is still single-harness (Claude-only) on paper**, while practitioners are increasingly splitting work across Claude Code, Cursor 3, and Codex depending on task type (local dev, cloud agents, org-wide automations); this is an opportunity to be deliberate about where each tool sits rather than bolting them on ad hoc.[^2][^8][^4]

## Release list (last 14 days)

### Summary table

| Date | Age (vs 2026-04-09) | Tool | Feature / Release | Impact |
|------|---------------------|------|-------------------|--------|
| 2026-04-07 | 2 days ago | Codex | **Model availability update + GPT-5.4 / 5.4 mini rollout in Codex app/CLI/IDE** | Consolidates model lineup and makes GPT-5.4 mini the default “cheap, fast sub-agent” option while keeping GPT-5.4 for main orchestration. [^3] |
| 2026-04-02 | 7 days ago | Cursor | **Cursor 3.0 – Agents Window, Design Mode, Agent Tabs, /worktree, /best-of-n, Await tool, MCP improvements** | Cursor becomes an agent-first workspace with parallel agents across local/cloud/SSH, browser-guided UI editing, isolated worktree runs, and richer MCP/plugin surface. [^9][^10][^4][^2][^11] |
| 2026-03-31 | 9 days ago | Codex | **Codex 0.118.0 – stronger sandboxing, exec workflows, dynamic auth for model providers** | Tightens sandbox security (esp. Windows), improves `codex exec` ergonomics, and adds dynamic auth tokens so model providers can rotate credentials without restarts. [^1] |
| 2026-03-26 | 14 days ago | Codex | **Codex 0.117.0 – first-class plugin workflows, multi-agent v2 addressing, smoother image & app-server TUI** | Makes plugins a core workflow (product-scoped sync, `/plugins` browser, better install/uninstall), improves sub-agent addressing, and upgrades TUI prompt history & shell tools. [^1][^12] |
| 2026-03 (no exact date; latest entry) | ≈10–15 days ago | Claude Code | **v2.1.81 cluster – bare mode, channels permission relay, sparse worktrees, PostCompact hook, MCP OAuth update** | Optimises scripted `-p` runs, adds channels-based tool approvals and MCP updates, and improves worktree performance plus post-compaction hooks; changelog is current only “through March 2026”. [^6] |

**Notable non-dated but relevant context**

- The Claude Code changelog explicitly notes that it is current only “through March 2026” and recommends `claude --version` for the very latest changes, so there are no clearly dated April releases yet in public docs.[^6]
- Cursor’s own blog and third-party write-ups confirm that Cursor 3 shipped on April 2, 2026 with the agent-first interface, multi-repo layout, and improved local↔cloud handoff, aligning with the Releasebot entries.[^9][^11][^4][^2]

## Practitioner techniques (last ~14 days)

### Claude Code

- **Technique: Stage-based Plan Mode pipeline (search → /plan → implement → verify)**  
  **Source:** “Claude Code Leaks: Professional Codebase Workflows (2026)” article summarising internal workflows and best practices.[^13]
  **Why it matters:** Emphasises breaking work into explicit stages—first search and inspect the relevant code, then use `/plan` to create a multi-step plan, then implement and finally verify via tests—rather than dumping everything into one mega-prompt; this reduces context bloat and makes it easier to reason about failures.

- **Technique: Three-layer memory plus background “Kairos”-style agent**  
  **Source:** Same Claude Code leaks piece, describing an internal background agent that watches the codebase and metadata, plus distinct short-, medium-, and long-term memories.[^13]
  **Why it matters:** Moves Claude from reactive chat into proactive maintenance—an always-on agent that scans logs/PRs/issues for patterns and feeds structured memories back into interactive sessions, improving recall of conventions, flaky tests, and recurring bugs.

- **Technique: Treat CLAUDE.md and Plan Mode as the “constitution” of the repo**  
  **Source:** Claude Code leaks article and Q1 Claude update guides, which stress environment setup, permissions, and CLAUDE.md/Plan Mode structure as the main levers for reliability.[^7][^14][^6][^13]
  **Why it matters:** Reinforces that most quality gains come from conditioning (CLAUDE.md, rules, hooks, memory layout) rather than clever prompts; the model is assumed to be strong, so work flows should encode team constraints and review expectations explicitly.

### Cursor 3

- **Technique: Use Cursor 3’s Agents Window as an “agent control tower”**  
  **Source:** Cursor’s own launch blog, DataCamp explainer, and independent AI-roundup post.[^11][^4][^2]
  **Why it matters:** Practitioners now run fleets of agents—front-end, back-end, migrations, infra—across multiple repos and environments simultaneously, using the Agents Window to monitor, hand off, and review; the engineer spends their time breaking problems down and curating outputs instead of handholding a single agent.

- **Technique: Run isolated /worktree and /best-of-n experiments for risky changes**  
  **Source:** Cursor changelog describing new `/worktree` and `/best-of-n` commands.[^10][^4]
  **Why it matters:** Big refactors or migrations are handled by spinning up multiple worktrees in parallel—each running a different model or approach—then comparing diffs, which reduces risk and makes it easier to pick the best patch set.

- **Technique: Self-hosted cloud agents for enterprise-grade CI/test workflows**  
  **Source:** Cursor release notes and DataCamp article describing self-hosted cloud agents on March 25 and their capabilities.[^9][^4]
  **Why it matters:** Heavy tests, complex infra, and compliance-sensitive codebases are delegated to self-hosted agents that live entirely inside the company network, while the Cursor UI still orchestrates tasks and reviews results; this is becoming a default pattern for regulated teams.

### OpenAI Codex

- **Technique: Repository- and org-wide plugins bundling skills, apps, and MCP servers**  
  **Source:** Codex March 2026 plugin update summary, Codex changelog, and official plugin docs.[^12][^15][^5][^1]
  **Why it matters:** Teams are packaging skills, app integrations (GitHub, Slack, Figma, Notion), and MCP configuration into versioned plugins that can be installed per-user (`~/.codex/plugins`) or per-repo, turning recurring workflows into reusable, shareable bundles instead of ad hoc config in each project.

- **Technique: Event-driven “Triggers” for CI/PR automation**  
  **Source:** Codex March 2026 update (Triggers) and practitioner write-ups.[^15][^12]
  **Why it matters:** Codex can now automatically respond to GitHub events—new issues, PR review comments, CI failures, or @mentions—by starting tasks, proposing fixes, and updating PRs; this shifts from manual invocations to always-on automation linked to the team’s existing GitHub workflow.

- **Technique: Model tiering—GPT-5.4 for orchestration, GPT-5.4 mini as the sub-agent workhorse**  
  **Source:** April Codex changelog describing GPT-5.4 and GPT-5.4 mini availability in the app, CLI, and IDE, plus guidance on when to use each.[^3]
  **Why it matters:** Practitioners are increasingly treating the main model as a planner/reviewer and running cheaper, faster variants (like 5.4 mini) for context-heavy but less reasoning-intensive tasks such as codebase exploration, large-file review, and helper subagents.

## Your current setup (from repo)

- **Claude-centric SDLC harness** – CLAUDE.md defines an AI-native SDLC with requirements handled via `ask_user_questions`, a product-agent that creates Linear projects/issues and posts to Slack, a coding-agent that works in an isolated git worktree and opens PRs, and a QA step that relies on CI plus REVIEW.md before human approval and merge. 
- **Agents** – `.claude/agents/` contains product-agent, coding-agent, research-agent, linear-agent, and slack-pulse-agent, each with their own prompts and tool responsibilities (product/PM, implementation, research, Linear operations, Slack sentiment mining). 
- **Skills** – `.claude/skills/` currently provides `story-writer`, `prd-writer`, `interview-summariser`, `meeting-notes`, `research`, `skill-builder`, and `slack-pulse`, triggered by slash commands for structured workflows, all running in the main session. 
- **MCP configuration** – `.mcp.json` only registers a `linear` HTTP MCP server; Slack is wired via a webhook in `.env` rather than MCP, and there are no GitHub or other app MCP servers declared. 
- **Operating assumptions** – CLAUDE.md strongly emphasises: use sub-agents for multi-tool or web tasks, always call `ask_user_questions` before documents/specs, store outputs in `/outputs/` or `/knowledge/projects/`, and never edit CLAUDE.md without explicit approval. 

## Gap analysis (relative to releases + techniques)

- **Gap:** No first-class, automated PR/code-review agent integrated into the SDLC (only CI + manual review).  
  **Tool:** Primarily Claude Code (with optional Codex/Cursor reinforcement).  
  **Source:** Claude Code leaks article on internal multi-agent PR review; your own desire to add CC code review; Codex triggers and Cursor’s Bugbot-style automations.[^16][^12][^1][^13]
  **Effort:** Medium – requires defining a new agent or skill, wiring it into GitHub/CI, and updating CLAUDE.md.  
  **Priority:** High – immediately raises PR quality and consistency with limited process change.

- **Gap:** No scheduled or loop-based workflows (nightly PR sweeps, dependency checks, CI triage) using Claude’s `/loop`/cron features or external orchestrators, despite ecosystems moving toward always-on agents.  
  **Tool:** Claude Code (loop/cron), with conceptual parity to Cursor 3’s cloud agents and Codex automations.  
  **Source:** Claude Code release notes for `/loop` and cron, Cursor 3 launch and self-hosted agents, Codex automations and triggers.[^17][^1][^4][^2][^16][^6][^3]
  **Effort:** Medium – design 1–2 recurring tasks, implement as scripts plus CC slash commands, and schedule via OS or external runner.  
  **Priority:** High – compounds over time by reducing backlog and manual triage work.

- **Gap:** MCP coverage limited to Linear; GitHub and Slack are not first-class MCP servers in this repo, even though all three tools now treat deep app integrations (plugins, MCP, apps) as core.  
  **Tool:** Claude Code + Codex + Cursor.  
  **Source:** `.mcp.json` (Linear-only), Claude Code MCP support, Codex plugin/MCP docs, Cursor’s marketplace of MCP-backed plugins.[^5][^1][^4][^16][^6]
  **Effort:** Medium – add GitHub and Slack MCP entries, configure auth, and update agents/skills to use them.  
  **Priority:** High – unlocks code-review automation, Slack digests, and cross-tool workflows without bespoke HTTP calls.

- **Gap:** Claude Code hooks and effort controls underused (no explicit PostCompact/StopFailure hooks, no effort frontmatter on agents/skills, limited use of sparse worktrees and session naming).  
  **Tool:** Claude Code.  
  **Source:** Claude Code v2.1.78–2.1.81 release notes; your agent definitions and CLAUDE.md.[^6]
  **Effort:** Low–Medium – editing YAML/frontmatter and adding a few hook files/scripts.  
  **Priority:** Medium – mostly stability and throughput improvements, but important as the system scales.

- **Gap:** No explicit multi-model or multi-tool tiering strategy (when to use Claude vs Cursor vs Codex; when to use heavier vs lighter models) despite Codex and Cursor now shipping distinct orchestration vs sub-agent models.  
  **Tool:** All three.  
  **Source:** Codex GPT-5.4/5.4 mini guidance, Cursor 3 + Composer 2 articles, Claude model guides.[^14][^8][^7][^4][^2][^17][^3]
  **Effort:** Medium – requires design decisions plus minor config in each tool.  
  **Priority:** Medium – big upside on cost and latency once your basic automation gaps are closed.

- **Gap:** Cross-repo / multi-repo workflows are not explicit in your Claude harness, whereas Cursor 3 is explicitly optimised for multi-repo, multi-agent work and Codex plugins can standardise behaviours across repos.  
  **Tool:** Cursor + Codex + Claude Code.  
  **Source:** Cursor 3 docs and blogs, Codex Team Config and plugins, your CLAUDE.md (single-repo focus).[^1][^4][^2][^11]
  **Effort:** Investigative – depends on whether you actually need multi-repo orchestration day-to-day.  
  **Priority:** Low–Medium – important if/when you run multiple services in parallel.

## Prioritised actions

### Quick wins (do these first)

- **Add a Claude Code PR/code-review agent and wire it into the SDLC**  
  **What to do:**  
  - Create a new `.claude/agents/code-review-agent.md` that focuses on reviewing diffs against intent, running targeted tests, and leaving structured review comments.  
  - Add a lightweight `/code-review` skill that takes a PR URL or branch and delegates to this agent.  
  - Update CLAUDE.md to insert “Code review agent” between QA and human review, clarifying when to run it.[^16][^13][^6]
  **Why it matters:** Mirrors Codex/Cursor practice of treating code review as an AI-first workflow, catching regressions earlier and standardising review depth while keeping humans focused on architecture and product trade-offs.[^12][^4][^2][^1]
  **Where to change:** `CLAUDE.md`, `.claude/agents/`, `.claude/skills/`.

- **Introduce one scheduled looped workflow (nightly PR/CI sweep) using Claude Code**  
  **What to do:**  
  - Define a `/nightly-ci-sweep` slash skill that: lists failing CI runs and open PRs, asks the coding-agent to propose fixes or triage notes, and posts a summary to Slack.  
  - Trigger it nightly via a simple cron + `claude -p` + `--bare` invocation on your runner, using the new `--bare` flag to avoid extra overhead.[^1][^3][^6]
  **Why it matters:** Converts Codex-style Triggers and Cursor’s background agents into a concrete Claude pattern for this repo—reducing noisy manual CI triage and keeping the queue clean.[^4][^2][^12][^1]
  **Where to change:** `.claude/skills/` (new skill folder), CLAUDE.md (document the nightly workflow), plus your CI/cron config outside the repo.

- **Expand MCP configuration to include GitHub and Slack**  
  **What to do:**  
  - Add `github` and `slack` entries to `.mcp.json` with appropriate URLs and auth, mirroring how the Linear MCP server is defined.[^5][^1]
  - Update the coding-agent to prefer MCP tools (GitHub issues/PRs, comments, labels) over ad hoc HTTP or manual copy-paste.  
  - Update slack-pulse-agent to read conversations via MCP instead of relying solely on webhook outputs.[^6]
  **Why it matters:** Aligns your Claude harness with the Codex plugin/MCP and Cursor marketplace world—agents can fetch PR context, post comments, and mine Slack without custom glue, making it easier to port workflows across tools.[^2][^4][^5][^1]
  **Where to change:** `.mcp.json`, `.claude/agents/coding-agent.md`, `.claude/agents/slack-pulse-agent.md`.

### Medium-term changes

- **Refine agents and skills with modern Claude features (effort, hooks, memory)**  
  **What to do:**  
  - Add `effort` frontmatter to key agents (coding-agent high, research-agent medium, linear-agent low) and skills that need more or less reasoning.[^6]
  - Attach `StopFailure` and `PostCompact` hooks around coding-agent runs to ensure tests/linters run and logs are captured when turns fail or compaction happens.[^16][^6]
  - Ensure auto-memory and manual memory (`/memory`) are explicitly used in agents that benefit from long-running context, such as slack-pulse-agent.[^14][^13][^6]
  **Why it matters:** Brings your Claude harness in line with current best practice—agents become more predictable, less brittle under compaction, and better at reusing past context.  
  **Where to change:** `.claude/agents/*.md`, `.claude/skills/*/SKILL.md`, plus hook definitions and any `settings.json` where hooks are registered.

- **Design a cross-tool model-tiering plan (Claude vs Cursor vs Codex)**  
  **What to do:**  
  - Decide which tool owns which layer: e.g., Claude Code for local repo-centric dev, Cursor 3 for multi-repo agent orchestration and enterprise self-hosted agents, Codex for org-wide automations and GitHub/CI triggers.[^3][^4][^2][^1]
  - Within each, define when to use heavyweight vs lightweight models (e.g., GPT-5.4 for planning, GPT-5.4 mini for subagents; Opus vs Sonnet vs Haiku tiers in Claude; Composer vs other models in Cursor).[^8][^17][^14][^4][^3]
  **Why it matters:** Prevents tool sprawl and model chaos; ensures each agent run happens in the environment that best matches its cost, latency, and capability requirements.  
  **Where to change:** Per-tool config files (`config.toml` for Codex, Cursor settings, Claude Code config/CLAUDE.md), plus internal docs.

- **Prototype Codex plugins that mirror your Claude skills**  
  **What to do:**  
  - Take one or two high-value workflows (e.g., story/PRD generation or Slack pulse analysis) and implement them as Codex skills + plugins with a `.codex-plugin/plugin.json` manifest and supporting scripts.[^5][^1]
  - Install repo-local plugins (`./plugins/`) that mirror what `.claude/skills/` does, and test them via the Codex CLI and IDE extension.  
  **Why it matters:** Positions this repo as a reference implementation for cross-platform workflows—Claude skills on one side, Codex plugins on the other—so you can compare behaviour and decide where each tool shines.[^15][^12][^1][^5]
  **Where to change:** New `plugins/` directory in the repo (for Codex), plus any needed mapping docs in `knowledge/`.

### Investigate further

- **Evaluate Cursor 3 as the “agent control plane” over Claude/Codex workers**  
  **What to do:**  
  - Run a small experiment where Cursor 3’s Agents Window manages a mix of local agents (pointing at this repo) and cloud/self-hosted agents (for heavier CI/test work), while Claude Code remains the primary local harness and Codex handles GitHub/CI automation.[^11][^17][^4][^2]
  **Why it matters:** Many practitioners are converging on a pattern where Cursor coordinates fleets of agents, even when underlying model providers differ; this could give you a cleaner top-level view without rewriting your Claude harness.  
  **Where to change:** No repo changes initially—just Cursor configuration and a short internal runbook documenting how it interacts with your existing Claude/Codex setup.

- **Explore richer background agents inspired by Claude’s “Kairos” pattern**  
  **What to do:**  
  - Design a background Claude agent that periodically scans logs, Slack threads, and Linear issues (via MCP) to produce a “risk and debt” digest, pushing into `/knowledge/projects/` and/or Slack.[^13]
  **Why it matters:** Moves you closer to the internal Claude workflows described in leaks—proactive detection of problems and opportunities rather than purely reactive prompts.  
  **Where to change:** New agent definition in `.claude/agents/`, updates to `.mcp.json`, and possibly a scheduled runner.

- **Consider adopting Codex Triggers for a subset of GitHub-driven workflows**  
  **What to do:**  
  - Pick one high-friction path—e.g., CI failures on `main`—and prototype a Codex Trigger that responds automatically with diagnosis and a candidate patch.[^12][^15][^1]
  **Why it matters:** Lets you benchmark Codex’s event-driven model against Claude’s scheduled/loop-based patterns and Cursor’s automations, informing where to invest deeper in 2026.  
  **Where to change:** Codex configuration (Triggers), plus minimal notes in `knowledge/` to record how this interacts with your Claude SDLC.

---

## References

1. [Codex by OpenAI - Release Notes - March 2026 Latest Updates](https://releasebot.io/updates/openai/codex) - Codex releases stronger sandboxing, more flexible sign-in and exec workflows, and dynamic auth for m...

2. [Cursor 3, Gemma 4, Free Qwen 3.6, and the Agent Push](https://paddo.dev/blog/ai-roundup-april-2026/) - Cursor shipped a complete redesign on April 2nd. The editor is still there, but the new default inte...

3. [Codex changelog - OpenAI Developers](https://developers.openai.com/codex/changelog) - Performance improvements and bug fixes. Additional performance improvements and bug fixes. 2026-03-1...

4. [What Is Cursor 3? Agents, Worktrees, and What's New | DataCamp](https://www.datacamp.com/blog/cursor-3) - Released on April 2, 2026, it ships a new interface built around AI agents rather than files. The co...

5. [Plugins – Codex - OpenAI Developers](https://developers.openai.com/codex/plugins) - Plugins bundle skills, app integrations, and MCP servers into reusable workflows for Codex. Extend w...

6. [Claude Code Changelog: All Release Notes (2026)](https://claudefa.st/blog/guide/changelog) - This changelog documents Claude Code's version history through March 2026. For the most current upda...

7. [The Complete Guide to Every Claude Update in Q1 2026 (Tested by ...](https://aimaker.substack.com/p/anthropic-claude-updates-q1-2026-guide) - In this post, Ilia is covering Claude Code features. I'm covering everything else: the Cowork featur...

8. [OpenAI Codex Review 2026 — Updated from Daily Use](https://zackproser.com/blog/openai-codex-review-2026) - Fast-forward to March 2026, and I'm using Codex as a core part of my development workflow both perso...

9. [Cursor Release Notes - April 2026 Latest Updates - Releasebot](https://releasebot.io/updates/cursor) - Cursor 3 now brings the new Agents Window, letting users run many agents in parallel across local, c...

10. [Changelog - Cursor](https://cursor.com/changelog) - Changelog. Apr 8, 2026 · Changelog · Bugbot Learned Rules and MCP Support. This release introduces u...

11. [Meet the new Cursor](https://cursor.com/blog/cursor-3) - We're introducing Cursor 3, a unified workspace for building software with agents. The new Cursor in...

12. [OpenAI Codex March 2026 Update Summary: Plugins, Triggers, and ...](https://help.apiyi.com/en/openai-codex-march-2026-updates-summary-plugins-triggers-security-en.html) - GPT-5.4 mini is now available across the entire Codex platform (App, CLI, IDE extensions, and Web). ...

13. [Claude Code Leaks: Professional Codebase Workflows (2026)](https://www.aifire.co/p/claude-code-leaks-professional-codebase-workflows-2026) - TL;DR BOX. In April 2026, a look at Claude Code's internal files showed that most people only use 10...

14. [Claude AI 2026: Complete Guide to Models, Pricing, Features & Use ...](https://www.nxcode.io/resources/news/claude-ai-complete-guide-models-pricing-features-2026) - Multi-file editing: It can refactor a data model and update every file that references it — controll...

15. [OpenAI Adds Codex Plugins to Automate Workflows and Expand ...](https://www.ghacks.net/2026/03/29/openai-adds-codex-plugins-to-automate-workflows-and-expand-beyond-coding/) - OpenAI has introduced plugins for Codex, bundling skills and app integrations into shareable package...

16. [ill write a list of the things i want to try. Respond with a markdown codeblock which lists the items i wrote + a description of them and your optimisaion proposal for each item (don'tneed to rewrite, just copy what's int he report). 
Output as a table w/ 3 columns  


CC Code review
CC scheduled tasks and loop patterns, eg nightly PR review, and cursor automations (they seem similar)
hooks for running tests and liners at end of coding-agent runs
MCPs: Github and slack](https://www.perplexity.ai/search/414345e5-440d-444a-bcf8-f9c52196a00e) - Item  Description  Optimisation proposal 

 CC Code review  Claude Code’s multi-agent PR review flow...

17. [The third era of AI software development - Cursor](https://cursor.com/blog/third-era) - A third era of AI software development is emerging as autonomous cloud agents take on larger tasks o...

