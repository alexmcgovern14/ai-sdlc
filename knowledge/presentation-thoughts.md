# Presentation thoughts

This file should be kept up to date. It's a place for noting down my thoughts on the presentation.

# Hero section

### Hero Section
- Uses **Midnite’s bright green** background as opening screen.  
- Midnite logo centrally placed with **Job Title: Head of AI** and **Alex McGovern** below.  
- This opening screen **holds position on scroll** (sticky) while the next content pushes over from bottom.

### Scroll Transitions
- Opening screen should remain in place initially.  
- On scroll, the hero transitions into a dark theme (Midnite’s primary content background).  
- Use scroll-triggered transitions (CSS + small JS) without heavy frameworks.  
- The transition should feel natural and product-like, not gimmicky.

------------------------------------

00/
# In 12 months' time 

---
## Adoption
- **Ceiling of AI adoption has grown to advanced, complex, multi-step and methodical use cases**, primarily through growing network of **AI Champions** and their halo effect
- **Floor of AI adoption has risen**, with all staff understanding the fundamentals of how and when to use, what 'good' looks like, and how it can be applied to their role. 
- **Frequency of use:** Multiple days ~95% of company
---
## Building
- **Internal tooling driving measurable efficiencies** — driving down task time and reducing need for headcount growth — across majority of departments 
- **Measurable cost savings** through internal builds
- Repeated ***successful handoff** of internal builds to BAU
- **Verified Agents** are widespread across the business for repeatable tasks and access to knowledge, with staff in different departments building their own
---
## + more
- Enablement: **teams have access to the tooling they need**
- **Zero significant compliance or other risk incidents**
- Product and Engineering delivering **customer-facing functionality** leveraging AI  
- **Operating model clarity** across org
---

01/
# Discovery

---

## Initial sprint: 0-4 weeks

In treating internal tooling and adoption like a product, the opportunities, challenges and risks must be understood. Not doing this research will mean focusing efforts in the wrong direction. 

- **Stakeholder interviews:** Map org and meet with C-level and heads of verticals to understand their areas' opportunities and challenges, and surface the highest-friction workflows.
- **Baseline survey:** Reserch self-reported AI literacy, sentiment, frequency of use, what tasks AI is used for and if there are areas where staff think AI can help but don't know how to implement. This will be all-company and sliced by department, allowing us to see baseline metrics and heatmap of where metrics are high/low. AI analysis of survey results will cluster use cases and opportunities. 
- **Tooling + budget:** Catalogue approved tools and distribution, shadow AI, who owns procurement and appetite for enterprise/team solutions. 
- **Ongoing initiatives:** Identify existing workflows which involve AI, such as the recent TVC.
- **Technical limitations:** Understand immature data stack and existing platform, support and infrastructure capabilities.
- **Risk:** Align with Compliance/Legal on policy for AI and data use, and risks which must be adhered to/managed.

## Continuous discovery: 4-12 weeks

- Interviews with executional staff to identify opportunities not visible to senior management
- Recurring senior stakeholder meetings to keep finger on the pulse of strategic priorities and identify next problems to solve
- Budget and tool use monitoring
- Quarterly survey to observe metric variation 

## Previous success: 3-month sprint
- AI literacy (rated 1-5) average increased from **3.07 to 3.58**, with high-confidence users doubling. 
- Staff using AI in work ‘most days’ increased from **64.3% to 75%, +10.7pp**. 
- Use outside work most days increased from **42.9% to 66.7%, +23.8pp**, indicating greater curiosity and engagement with AI overall.
- Use cases included data analysis and insight extraction, prototyping features, ideating designs, optimising tooling, copywriting and editing, Jira ticket preparation and image/video asset creation.  
- All Product staff completed at least one AI training course 
- Time surfaced as primary limiting factor for deeper adoption

---

# Adoption

---
## 50% use AI weekly
- **Current status is very low:** There are probably zero roles in the company which would not benefit from leveraging AI, but this is a learned behaviour.
- **Most use ChatGPT:** The mose common start, but immature, inherently inconsistent and, if *shadow AI*, limtited in use and carries risk. Two people might do the same marketing copy generation with different prompts and contexts, and get very different outputs. **Formalise and structure repeatable processes through agents to drive efficiences and consistency.**
---
## Primary metrics
- **AI literacy:** Meaningful increase in self-reported metric from baseline survey.  *LiveScore Product org increased from 3.07 to 3.58 in 3 months, with high confidence users doubling*
- **Frequency of use:** WAU 50% → 75% → 95%. *LiveScore Product org 'most days': 64.3% → 75%, +10.7pp*
- **Depth of use:** Increased variety of complex and structured tasks, incl. AI-powered coding, prototying, data analysis, user research, legal research
- **AI Champions upskilling:** Training course completion rate 80%
---

## AI leadership and adoption

**Becoming AI-native requires learning how to use the technology, having the vision of how to apply it to role, the capacity to explore, access to tooling, and an understanding of what is/isn't acceptable.**

**Key hurdles: trying out ChatGPT → working out how to apply to role → applying in a repeatable, structured way**

- **Public face of AI**, giving everyone across the org a place to turn
- Build **curiosity, excitement and willingness to explore.**
- Build in public and **share lessons/wins/challenges**
- Contribute at **org-wide meetings**, such as All Hands to build awareness and momentum
- **Open access** with office hours** and Slack channel to solve problems, steer people towards a solution, or just give a helping hand

---
## 0-2 weeks

- **AI Champions:** identify and build **cross-departmental network**. Motivate team to become evangelists: give them the space and remit to push with AI, thereby raising the ceiling and providing a halo effect for those around them to become inspired by the wins they see their teammates achieve. Biweekly session with this group to network, discuss learnings, share knowledge and build cross-functional collaboration
- **Training programme (fundamentals):** 0→1 course to raise floor-level capabilities — **Previous success:** multiple courses onboarded, both foundational and vertical-specific, resulting in 500+ hours of AI training completed
- **Internal knowledge base:** recommended courses, available tooling and documented process for new products — **Previous success** creating company-wide hub using Confluence
- **AI office hours and Slack channel:** weekly session where people can drop in with any problems they are trying to overcome, could be as basic as struggling with prompting or have a particular thing they are trying to build and don't know how
---
## 3-6 weeks

- **Launch AI stand up:** biweekly show-and-tell session; important to build momentum and enthusiasm, starting with AI Champions or a specific high-value department 
- **First hackathon:** focused — and fun! — sessions ideate solutions to a Product goal/initiative or Marketing problem, great way to build collaboration and excitement.
- **Help people stay informed + curious:** automation to deliver the latest news in AI to Slack channel, encourage sharing
---
## 8-12 weeks
- **Ship first Agents** to build consistency in repeated processes, such as copywriting or ticket creation.
- **Training programmes (advanced):** create training programme to boost upskilling and momentum for **AI Champions** and a **high-value department**, e.g. AI Product Management course.
- **Coach Product Managers** on delivery of productionised features and best practice for evals, observability, guardrails and other elements of system design. 
**Previous success:** coached PMs through delivery of multiple productionised translation and BE AI-powered features, meeting eval criteria, e.g. BLEU.
---
#### Enablement
**Evaluate org-wide enterprise solution:**
- Platform for team-wide and org-wide Agents and Skills for repeatability
- Increase adoption as use isn't limited by free tiers or staff paying for themselves (shadow AI)
- Staff feel safe to use and know what can be input
- Consistency of use

Engage with IT, Procurement and evaluate budget.

- **Previous success** in contributing towards implementation of Gemini Enterprise and prioritising data connectors, working directly with Google and Datatonic (consultancy).
- **Previous success** with building AI Agents for repeatable tasks, such as research analysis, research script creation, Epic writing, marketing copywriting.
- **Lessons:** To gain adoption, enterprise solution must be of comparable quality to shadow AI. Focus on rollout, engagement and onboarding.

Ensure teams have access to tools which add value to their vertical, such as:
- Product, Engineering: **Lovable, Cursor, Claude Code** 
- Marketing Design: **Veo 3, Nano Banana, Sora**
- **Self-hosted n8n instance** for no-code automations

---


# Build

---

## Build philosophy

- **Discovery** will inform what builds to commit resources to, by mapping effort vs value to balance prioritisation of highest-value opportunities and quick wins, according to capacity. 
- Jira backlog will be maintained for a constant flow of tasks for 2x Engineers
- **System design > AI model:** An AI product must not treat LLM as a silver bullet. AI products are system design, comprising input data, observability, multi-agent workflows, determinism through constraints, guardrails, output shape and evals.
- **Reusable:** Shared platform and services allowing repeated use cases, not single-use work.
- **Flexibility:** Building should be custom to business and user needs.

---

## AI Platform context

AI Platform is **shared AI infrastructure** — the fundamentals of system design — reused across multiple use cases, making each build faster and more consistent.

Only **AI Platform** and **Agentic Customer Support** are production-grade critical. Everything else is intentionally MVP scope to validate use cases and prove platform reuse.

- Ingestion of unstructured or structured data (tickets, PDFs, emails)
- Model-agnostic execution layer, allowing all LLM providers
- Schemas for structured outputs
- AI extraction mapped to schemas
- Confidence flags and missing-field detection
- Observability: logging, evaluation and audit
- Prompt, model and guardrail configuration 
- MCP template setup
- Simple internal review surfaces
- Early phases prioritise code-defined config, operational interfaces introduced as ownership shifts to non-technical teams

**Previous success** delivering LiveScore AI Service as engine and infrastructure for 12+ productionised features for user-facing products.
**Lesson:** Shared AI service is highly valuable in scaling builds, but can be taken too far, for example a prototyping platform, which can be easily handled in n8n or AI-powered IDE.
---

## Build plan: how engineering time is spent

<!-- NOTE: Split the two sections below into side-by-side containers  -->

---
### Engineering allocation (90 days)

- **Shared AI Platform ~30%:** Core capability used by all builds.
- **Support automation (flagship) ~50%:** High-value delivery with measurable business impact.
- **Compliance platform phase 1 (MVP): 10–15%:** AI-native MVP build of aggregation platform, initial testing
- **Game configuration assistant (quick win MVP):** 10–15%: Narrow scope, internal-only.

Product count is viable since:
- Ingestion, schemas, extraction, observability, evals are built once
- Products differ by schema, data in/out and output controls
- No new data platform or ML infrastructure is introduced
---
### Engineer roles

Split stays consistent across all use cases.

**Engineer A: systems, data, rollout**
- Data ingestion (Intercom, PDFs, APIs)
- Model-agnostic access layer
- Observability and audit
- Rollout controls and kill switches
- Business metrics and dashboards

**Engineer B: extraction, quality, evaluation**
- Schema-based extraction
- Confidence scoring and missing-field detection
- Golden sets and regression tests
- Prompt and pattern reuse
---

# Roadmap
<!-- NOTE: Convert 'Roadmap' to H1 styling  -->

<!-- NOTE: Labels mentioned on below components should be pills with fully circular corners. Use green to red gradient for small to XL. Use green to red for P1 to P3  -->
<!-- NOTE: Headers on below components should have h2 component header styling -->


---
## AI Platform

Labels: P1, Medium

Shared, reusable capability for roadmap items 
- Ingestion of unstructured data (tickets, PDFs, emails)
- Canonical schemas for structured outputs
- Schema-based AI extraction
- Confidence flags and missing-field detection
- Logging, evaluation, and audit
- Thin internal review surfaces

**Success metrics**
- Platform successfully reused across majority of builds 

---

## AI-powered compliance platform

Labels: P2, medium

**Problem statement** 
Compliance analysts spend more time gathering and reconstructing customer context across multiple systems than performing actual risk analysis. This bottleneck creates long queues for reviews across RG, affordability, AML and withdrawals for both new and existing users.

## Phase 1: Compliance platform

Compliance platform which aggregates and normalises all relevant customer data into a unified, structured view.
Compliance analyst has ability to review all key information in a single screen, with access to original files.

**Value:** Removes context-gathering bottleneck 

**Success metrics**
- Analysis completion time -50%

---

## Phase 2: Compliance platform / AI assistant

Labels: P1, medium

**Decision support, not decision making**, AI system which identifies high-confidence anomalies, produces structured summaries and notifies Compliance of cases worth attention. 

What it does not do: provide binding recommendations, trigger actions, override analysts.

**Success metrics**
- Analysis completion time -10%
- High-profile issue awareness speed: -25%


---

## AI-powered customer support: 

Labels: P1, medium

**Problem statement**
Midnite receives 500 inbound support tickets per day, consuming large amounts of manual resource across 70 staff.

**Engineer tasks: wrapping Fin in safety, measurement and controls**
- Integrate Intercom data into Midnite observability and reporting
- Success metrics, observability and evaluation
- Rollout controls and feature gating (e.g. not high-risk users)

## Support analysis and issue automation

Labels: P2, medium

With 500 tickets per day, handled by 40 different agents across multiple shifts, **clustering issues and detecting spikes will be inaccurate** and **escalation and reporting can drain capacity.**

Different issue types require different owners. By ingesting every ticket, enriching it with Intercom metadata, clustering semantically similar issues, and tracking rolling baselines by category, we automatically route incidents to the right team: technical spikes to Engineering/Incidents, UX regressions to Product, promotion anomalies to Trading, and responsible-gambling signals to Compliance/RG. 

Output transforms from *Support says there’s an issue* to *2.3x increase in withdrawal-related tickets over 48 hours, clustered around iOS users on v2.4.*

**Benefits**
- Reduce capacity spend on reporting 
- Identify incidents as soon as count spikes
- Reduce reliance on human pattern-spotting, comparing tickets across agents and shifts 
- Identify issues with persistent low-volumes which don’t spike but persist for weeks and are never prioritised 
- Extension to agentic customer service where not all conversations are monitored in detail

**Success metrics**
Successful routing of issues: 95%
Incident alert speed: +10% 

**Previous success**: Fetch user feedback from Zendesk via BigQuery → automated summaries to Teams channel raising issues. Not structured, but still brings Product closer to user feedback.

## Game configuration (quick win)

Labels: P3, small

**Problem statement**
Configuration of games is a labour-intensive manual process, where Ops team gather and input information from a number of fragmented sources: PDFs and emails from supplier, copying config from existing games, T&C information.

**Solution**
AI system to translate natural-language sources into structured data. System receives documentation from suppliers via email (or API if available) and existing games via MCP server → structures data → prefills new game config → notifies Ops → QA/manual addition of missing fields. Flag when field is low confidence.

**Success metrics**
Game configuration time: -40% 
Post-process changes: <5 fields per game 

**Previous success** with quick wins: n8n workflow which converted legal T&Cs into required HTML format for website, turning a non-technical team's 3-day job into 10 minutes.

---

<!-- NOTE: Backlog is Single container which has 3 columns: one for each item within. Each items header is shown as H3 (not a pill). Clicking the chevron expands component and full details per item is seen below header. -->
<!-- NOTE: The chevron is poorly designed. Copy the one from the hero section -->

## Backlog

### Research repo

Labels: P2, Large

**Problem statement** 
Product Managers and Designers have limited capacity and do not spend enough time talking to users. User research has taken place, but is fragmented across the business and outputs are not easily accessible.

**Proposed solution**
Retrieval-augmented generation (RAG) system which writes validated research output into vector database, allowing Product to ask questions and receive answers searched semantically and grounded in user research. 

**Targeted outcome**
- Bring Product closer to the customer
- Prevent duplication of research


---

## Phase 3: Compliance platform / Models and automation


Labels: P1, XL 

3x models built for **RG**, **affordability** and **AML** risk analysis
Each model:
- Factors in relevant datapoints as markers
- Applies weightings to each marker
- Places user into risk levels

Customer moving up risk tier or displaying specific behaviours triggers report, alert to Compliance and automated proportionate interaction for user according to predefined ruleset.

Example RG markers: number of days played, number of games played, times played, impulsive transition behaviour, escalation, monetary consumption, repeated loss of winnings, binge gambling, failed deposits, multiple payment methods, increasing deposit limit.

**Success metrics**
- 75% decrease in manual analysis tasks.


---

### Personalised CRM 

Labels: P2, XL

**Problem statement** 
Users receive templated campaigns due to lack of personalisation. Generic communications and offers result in lower-than-desired conversion and engagement. 

**Proposed solution**
AI-powered recommendation system to:
1. Aggregate user's bet history and behavioural data: when they bet, what they bet on, what their last winners were.
2. Generate personalised boosts and CRM campaigns, triggered at user's optimal times and focused on preferred topics. 

**Targeted outcome**
Success metrics: Increased CTR on campaign push notifications and emails

---

# Delivery plan 


## Foundations: weeks 0-2

**Goal:** define AI Platform, remove ambiguity early and set delivery constraints.

- Define canonical schemas for support ticket summaries, compliance case overviews, casino game configuration
- Define required vs optional fields, confidence indicators, human override markers
- Observability: establish a shared logging format for all AI outputs

### Engineer A
- Set up ingestion for Intercom conversations, PDF uploads (provider specs)
- Define a normalised event model across use cases
- Store outputs in existing infrastructure only

### Engineer B
- Build first extraction prompts against schemas
- Create initial golden sets from historical data
- Define baseline quality thresholds

**Output**
- Schemas agreed and versioned  
- Extraction working in sandbox  
- No UI polish  
- No live usage  

---

## Integration, extraction, reporting: weeks 3-4

**Goal:** validate approach without customer impact.

### Engineer A
- Integrate with Intercom APIs: ticket events, resolution and escalation signals
- Build basic dashboards: volume, resolution hypothesis, escalation rate
- Implement rollout controls: channel-based, percentage-based, kill switch

### Engineer B
- Refine extraction for: intent classification, escalation signals, conversation summaries
- Validate performance against golden sets
- Add regression checks for prompt changes

**Output**
- Support AI running in shadow mode  
- Performance measurable against baseline  
- Clear go / no-go criteria defined  

---

## Controlled live pilot: weeks 5-6

**Goal:** deliver measurable business impact safely.

### Engineer A
- Enable limited live exposure:
  - low-risk intents only
  - non-VIP users
  - defined time windows
- Join Intercom data with:
  - SLA definitions
  - staffing assumptions
- Produce weekly leadership report:
  - tickets handled
  - time saved
  - incidents (expected zero)

### Engineer B
- Monitor live quality:
  - escalation accuracy
  - false positives / negatives
- Capture agent feedback
- Feed learnings back into prompts and schemas

**Output**
- Support automation live in a tightly scoped way  
- Capacity unlocked and measured  
- Clear evidence of safety and control  

---

## Compliance visibility (MVP): weeks 7–8

**Goal:** demonstrate reuse of the same capability.

### Both engineers
- Reuse ingestion and extraction layers
- Apply `ComplianceCaseOverview` schema
- Aggregate signals into a read-only internal view
- Generate AI summaries for analysts

**Explicit non-goals**
- No automated decisions  
- No risk scoring  
- No workflow enforcement  

**Output**
- Compliance analysts see context faster  
- Same platform, different schema  
- Clear reuse demonstrated  

---

## Game configuration assistant (quick win): weeks 9–10

**Goal:** ship a visible internal productivity win.

### Engineer A
- Ingest provider PDFs and basic API data
- Map extracted data to `CasinoGameConfig` schema
- Pre-fill configuration fields

### Engineer B
- Add confidence scoring per field
- Compare against similar existing games
- Flag missing or inconsistent data

**Scope constraints**
- 1–2 providers only  
- Slots only  
- Manual upload  
- Ops review required for all outputs  

**Output**
- Internal tool drafts majority of configuration  
- Ops completes final step  
- Setup time materially reduced  

---

## Stabilisation and handover: weeks 11-12

**Goal:** engineers step back without losing capability.



---



# 2. IMPLEMENTATION: AGENTIC AI CUSTOMER SUPPORT

<!-- NOTE: Row of 4 containers -->

**Current status**
- 500 inbound support tickets per day
- 40 support agents
- 30 compliance analysts.

**AI risks**
- Inaccurate answers
- Hallucination of financial or legal information
- Poor user satisfaction on responses
- User manipulation (prompt injection)

**Potential gains**
40 agents x 40hrs x 0.8 focus = 1280hrs/week. 
40% autonomous resolution rate = 512 hours per week saved, equivalent to 12-13 FTE. 
Enables greater focus on high-value and complex CS operations and new system maintenance. 

**Measures of success**
- Support tickets resolved autonomously: 40%
- User satisfaction: equivalent to human agent responses
- Resolution speed: X%+ vs existing value
- Escalation logic accuracy: 95%+
- Accurate citation of required documentation: 95%+ 

<!-- NOTE: Row of 2 containers -->

**Requirements**
- Do not answer questions outside of capabilities/knowledge base, 
- Ability to escalate to human agents (HITL) 
- Low downtime
- Cost-effective
- Midnite tone of voice

**Escalation logic**
- `userType` is `VIP`
- Attribute `sentiment` is `negative`
- Detected `issueType` is `bug`
- Issue `value` is greater than threshold
- Conversation is stuck in loop x3
- Conversation length is greater than threshold
- User explicitly requests escalation 


### Case studies

Underdog Fantasy: Intercom
Fin autonomously handles **80% of peak-volume queries.** 2x resolution rate vs. previous workflow.  
https://fin.ai/customers/underdog-fantasy 

Betsson Group: Ada
**45% resolution success rate**, increased agents' time for high value tickets by 90%. Launched in under 30 days. 7 brands and languages.
https://www.ada.cx/customers/betsson-group

Superbet: Zendesk AI
**37% resolution success rate**, with all contacts resolved 63% faster. 24/7 access for users, first-response times cut by 74%. 
https://www.zendesk.co.uk/customer/superbet/

Swiss Casinos: Zendesk AI 
**40–50% resolution success rate.** Human agent productivity +30%, CSAT improved ~12% after implementation.
https://www.zendesk.co.uk/customer/swiss-casinos/



# Build vs. Buy

<!-- NOTE: Make the 'Buy' container Midnite blue #2563EB and remove the green outline -->
<!-- NOTE: Turn the recommended label into a label using the pill design from roadmap section  -->
<!-- NOTE: Add appropriate icons in front of 'Build' and 'Buy' container headers which represent them. -->
<!-- NOTE: Turn the two-column design into two rows instead so that Build and Buy are the same height.  -->
<!-- NOTE: Add dropdown chevrons (using earlier design) to build extension and buy alternative containers. Auto collapsed and user can click to expand.  -->

## Build

Pill: "Example self-built RAG system" → [link to https://alex-mcgovern-portfolio.vercel.app/featured/rag-ai-system]

Retrieval-augmented generation (RAG) architecture which **grounds LLM knowledge and responses in Midnite's data**. Knowledge base may include help center articles, policy docs, T&Cs, user history and good/bad examples. System must contain guardrails and be extensively tested through many scenarios, since users can ask *literally* anything and it must give an appropriate response.
Always-on evals to continually validate performance, as well as on-demand evals following updates, before deploying to production.

Requirements:
- Define, observe and fine tune escalation control: which questions model cannot answer, measure success in escalating to human agent. 
- Systematically close knowledge gaps. 

Pros: 
- Increased flexibility: perform actions such as check bet status via tool use
- Rapid prototype
- Can be integrated to Intercom system through API

Cons: 
- Setup time including extensive evaluations to validate performance
- Need for continuous system changes as data/documentation changes
- Ongoing maintenance 
- Uptime risk
- All risks are fully on Midnite 
---
## Buy

Support agents are probably the single most delivered and productionised AI solution, implemented by many types of businesses, including within industry.

**Fin:** Intercom's built-in AI agent.

- Knowledge: Ingests documentation with minimal setup and flexible updating.
- Escalation: Configurable rules If question falls outside knowledge base or response is low confidence: hand off to human. Contains observability with logged attribute for escalation cause.
- Cost: Usage-based at $0.99 per resolved conversation, with no charge if escalated to human. ~500 tickets per day, with 50% success rate = ~$6-7k/mth.
- Low-effort test: Enable within account, test outcomes and continue/rollback 

Button: escalation configuration [https://www.intercom.com/help/en/articles/12396892-manage-fin-ai-agent-s-escalation-guidance-and-rules]

Pros: 
- Time-to-market: fastest path to deployment
- Proven and battle-tested in regulated domains
- Built-in observability 
- Strong escalation logic and configuration 
- Do not need to onboard new system, efficiencies within platform
- Minimal maintenance: only update documentation
- No extensive debugging, system tweaks
- Can be maintained by non-technical team with domain expertise
---
## Buy alternatives
**Forethought AI:** Trains agent on support ticket history, Intercom integration
**Ada:** Emphasises orchestration of conversation flows 
**Zendesk AI:** Backend integration enables actions

Cons:
- Onboarding staff to new platform
- Product integrations
- Setup time
- Multiple suppliers 
---
## Build extension

## Support analysis and issue escalation

With 500 tickets per day, handled by 40 different agents across multiple shifts, **clustering issues and detecting spikes will be inaccurate** and **escalation and reporting can drain capacity.**

Different issue types require different owners. By ingesting every ticket, enriching it with Intercom metadata, clustering semantically similar issues, and tracking rolling baselines by category, we automatically route incidents to the right team: technical spikes to Engineering/Incidents, UX regressions to Product, promotion anomalies to Trading, and responsible-gambling signals to Compliance/RG. 

Output transforms from *Support says there’s an issue* to *2.3x increase in withdrawal-related tickets over 48 hours, clustered around iOS users on v2.4.*

**Benefits:**
- Reduce capacity spend on reporting 
- Identify incidents as soon as count spikes
- Reduce reliance on human pattern-spotting, comparing tickets across agents and shifts 
- Identify issues with persistent low-volumes which don’t spike but persist for weeks and are never prioritised 
- Extension to agentic customer service where not all conversations are monitored in detail
---
## Implementation plan
<!-- NOTE: Update 'next steps' header to 'Implementation plan'-->

---


<!-- NOTE: Redesign this section as a stack of cards representing the 5 project phases.

- The cards should appear visually stacked, like a deck of cards.
- The top card (Phase 1 by default) is fully visible and expanded.
- All subsequent phases are partially visible behind it, showing only their title.
- Each card behind the top one should be slightly smaller and vertically offset, creating a layered effect.

Interaction:
- Only one card can be expanded at a time.
- Clicking on any partially visible card should bring it to the front of the stack.
- When a card is brought to the front, it expands to full size and reveals its full text content.
- The previously active card collapses and moves back into the stack, showing title-only view.

Visual & UX details:
- Cards should have rounded corners and subtle shadows.
- Size should decrease incrementally for each card behind the active one.
- Transitions between states should be animated (smooth scale/position changes, no hard jumps).

Accessibility:
- Cards should be keyboard focusable.
- Enter/Space should activate a card.
- The active card should be marked as expanded for screen readers.
-->
---
## Weeks 0-2: Stakeholder alignment, supplier engagement: 

**Output:** PRD which defines availability, scope, risk, dependencies, budget, metrics and alignment.
Who: Head of AI (lead), Customer Support, Compliance, Procurement 

**Engage Intercom team**
- Confirm low-cost test availability, long-term pricing, feature configuration, test/trial options, SLA, and support for regulated use cases.
- Access to sandbox test environment and configuration demo

**Align with stakeholders**
- Define pain points, objections, ticket taxonomy, SLA expectations, escalation boundaries (regulatory & product).

**Define success metrics & guardrails**
- Candidate metrics: resolution rate, escalation precision, CSAT threshold, escalation time, tickets handled.
- Formalise risk acceptance criteria that lists unacceptable outcomes (PII leakage, self-exclusion issues, regulatory categories).
---
## Week 3: Configuration
Who: Head of AI, Customer Support, Compliance
- Demo from Intercom and guidance to configure test rules and knowledge base in sandbox. 
- Engineering focus: event ingestion, rollout controls
- Stress testing and observability on logs, validate metrics work as expected.
---
## Week 4: Shadow run and validation 
Who: Head of AI, Customer Support, Compliance
- Run Fin in suggestion only mode. Agents review recommended responses but do not send to customers.
- Evals: Compare Fin suggestions vs. real answers sent according to rubric of evals. Examples:
    - ≥80 % correct answers on low-risk intents
    - ≥95 % correct escalation where required
    - No unacceptable risks flagged
---
## Weeks 5-6: Controlled pilot 
- Limited rollout: human agents monitor in real time and can interject if required.
    - Time: During shifts containing senior staff members
    - Scope: non-VIP or high-risk customers
- Measure & rollback logic:
    - Automatically compare Fin’s live performance against target thresholds.
    - If any threshold is breached, immediately pause / revert to HITL only.
---
## Weeks 7-12: Iteration & Scaling 
- As eval thresholds are met: increase rollout across user segments and shift times 
- Weekly KPI review with stakeholders.
- Ownership handoff: Customer Support becomes BAU owner of escalation rules, documentation and reporting.
---



## 3. Measuring success

#### Reporting

**Leadership biweekly → monthly report**
- Start at higher frequency and then reduce once established
- Executive summary with updates on builds, implementation, decisions, adoption news, plans and recent wins or challenges to unblock
- Provides automated success metrics on live products/recent deliveries
- Automated delivery to dedicated Slack channel #AI-leadership

**Monthly steering group** with above pre-read

**Live dashboard** with available metrics

**Quarterly survey**
- Measures AI literacy, adoption, sentiment and increased complexity of use cases
- Trends and causes analysed
- Results circulated with leadership

---

#### Adoption

- **AI literacy:** Meaningful increase in self-reported metric from baseline survey.  *LiveScore Product org increased from 3.07 to 3.58 in 3 months, with high confidence users doubling.*
- **Frequency of use:** WAU 50% → 75% → 95%. *LiveScore Product org 'most days': 64.3% → 75%, +10.7pp*
- **Depth of use:** Increased variety of complex and structured tasks, incl. AI-powered coding, prototying, data analysis, user research, legal research.
- **AI Champions upskilling:** Training course completion rate 80%

**Secondary measurements**
- AI stand up participation: ~50% demoing something achieved/built with AI
- Number of staff with an aha! moment
- Hackathon success: prototyped feature prioritised on roadmap
- Product managers delivering AI-powered features: X → Y

---

#### Risk

Monitoring **risk, safety and compliance metrics** is critical. Not only for meeting regulatory requirements, but also because failures undermine trust in team, AI technology and impact future use.

- **Data leakage:** Minimal access by default, expanded with permissions and controls
- **Incorrect** financial, legal, RG and other compliance/legal-related outputs. AI is held to the same standards as human decision making. 
- **Loss of control:** AI behaving in unexplainable ways. Handled by focus on system design and observability
- **Silent failure:** Quality regressions require regular evaluations and observability 
- **AI slop:** Poor-quality output can increase operational efforts in resolution
- **Uptime:** Reliable systems, especially during peak times.

### Evals
Evaluations are a critical element of AI system design and output validation. All builds must meet standards of bespoke eval rubric. 

<!-- Note: substack.jpg. Link: https://substack.com/home/post/p-185889656  -->

Clickable pill: "Full evals methodology →" [substack link] 



# Presentation website build

## Overview

Presentation is a live website built to display **AI-native thinking** and **product-building processes.** Cursor — an AI-powered IDE — acts as the hub of the project, playing both roles of **code generation** and **thought extension for content**, maintaining **persistent context** throughout of job description, task, my experiences, presentation thoughts and more.

## Tech stack
- Cursor: AI-powered IDE
  - Persistent context for content creation
  - AI-native building and code generation
- Models: 
  - Codex 5.2 (Open AI): tackling restructure
  - Claude Opus 4.5 (Anthropic): planning tasks
  - Composer (Cursor): most coding tasks
  - GPT 5.2 (OpenAI): content editor/thought extension
- ChatGPT: Deep research
- GitHub: Codebase source of truth
- Vercel: Hosting 


## Phases

### IDE setup and context 
Primary documents including job description, task, notes on key people, my CV and experiences are converted to markdown files, easily read by LLMs. Placed in the project folder, these act as persistent context throughout build.
<!-- NOTE: Related image: Instructing Cursor to fetch design system.png -->


### Site structure
Concept and primary scaffolding communicated to Claude Opus 4.5 to create initial plan and build site seen in localhost.
<!-- NOTE: Related image: Inspecting site to refine design system.png -->


### Design system
AI-powered Midnite site inspection to define `design-system.md`, including fonts (Gravity, Inter), colour scheme (e.g. midnite-green: #46FF33) and component design (corner radii, padding).
<!-- NOTE: Related image: Instructing Cursor to fetch design system.png -->

### Content writing
Agents act as thought extensions throughout as I write content for presentation in markdown file. With persistent context of task agent is able to act as an Editor, noting if a requirement is not met, and suggesting useful detail to add from my experience files.
<!-- NOTE: Related image: Content editor.png -->

### Deep research
Efficient research of external tooling capabilities for build vs. buy analysis and investigation of Compliance requirements.
<!-- NOTE: Related image: Deep research for AI chatbot case studies.png -->

### Site iteration
As content is added to the site design requirements change, with components split and sections rearranged. The same agents modify site design on the fly, according to instruction. 
<!-- NOTE: Related image: Design iteration.png -->

### GitHub
Source of truth for codebase, to which iterations are pushed from within Cursor.
<!-- NOTE: Related image: github.png -->


### Vercel
Hosting platform for sharable site link, handling automated deployment from GitHub versions.
<!-- NOTE: Related image: vercel.png -->


