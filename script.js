
const prompts = [
  {
    title: "Full-Stack SaaS Product Blueprint",
    category: "Web Development",
    description: "Plan a SaaS product from user problem to architecture and launch.",
    featured: true,
    prompt: `Act as a principal product strategist and senior full-stack engineer. Plan a SaaS product for [target audience] that solves [core problem].

Deliver:
1. Problem statement, personas and jobs-to-be-done.
2. MVP features, priorities and non-goals.
3. User journeys and loading, empty, error and success states.
4. Responsive and accessible UX direction.
5. Recommended stack, architecture, data model and API examples.
6. Authentication, authorization, validation and security considerations.
7. Testing, deployment, risks and a four-week roadmap.

State assumptions, explain trade-offs, avoid overengineering, and ask critical questions before finalizing.`
  },
  {
    title: "Responsive Landing Page Architect",
    category: "Web Development",
    description: "Design a conversion-focused landing page for a product or service.",
    featured: true,
    prompt: `Act as a senior UI/UX designer and frontend engineer. Plan a premium landing page for [product/service], targeting [audience]. The conversion goal is [goal].

Provide page sections in order, headline options, CTA hierarchy, credible trust elements, responsive behavior, accessibility guidance, component breakdown, SEO title and meta description.

Use semantic HTML and maintainable CSS. Include empty, loading, error and success states where needed. Never invent testimonials, awards or business metrics. Finish with implementation steps and acceptance criteria.`
  },
  {
    title: "Debug a Difficult Frontend Issue",
    category: "Web Development",
    description: "Diagnose a coding problem methodically instead of guessing.",
    featured: false,
    prompt: `Act as a senior frontend debugging partner. Issue: [describe issue]. Expected behavior: [expected]. Actual behavior: [actual]. Environment: [browser/framework]. Code and logs: [paste here].

Rank the most likely causes, identify missing information, and propose diagnostic steps that distinguish between causes. Recommend the smallest safe fix, explain why it works, identify regression risks, and provide focused tests.

Do not assume APIs or code that are not shown. Clearly state uncertainty.`
  },
  {
    title: "REST API Design Review",
    category: "Web Development",
    description: "Design consistent, secure API endpoints and error responses.",
    featured: false,
    prompt: `Act as a staff backend engineer. Product: [product]. User roles: [roles]. Resources: [resources]. Constraints: [constraints].

Design a REST API with endpoint tables, methods, request/response JSON, pagination, filtering, validation, consistent error formats, authentication, authorization, rate limits and versioning.

Include edge cases, security risks and an OpenAPI-ready outline. Explain trade-offs and do not assume fields that were not provided.`
  },
  {
    title: "AI Coding Agent Master Plan",
    category: "Web Development",
    description: "Turn an app idea into manageable, testable implementation milestones.",
    featured: true,
    prompt: `Act as a pragmatic software tech lead. Build [project] using [tech stack] for [audience].

First inspect the existing project and summarize its structure. Propose small milestones with files to create, expected behavior, acceptance criteria and tests. Implement one milestone at a time.

Preserve working code, avoid unnecessary dependencies, create accessible responsive UI, validate inputs and handle loading, empty, error and success states. Explain how to run and test the app. Never claim a feature works without verifying it.`
  },
  {
    title: "Premium UI Design System",
    category: "Design & UX",
    description: "Create consistent design tokens and reusable component rules.",
    featured: true,
    prompt: `Act as a principal product designer. Create a design system for [brand/product] serving [audience].

Define design principles, color tokens with contrast guidance, typography scale, spacing, grid, radii, elevation, icon style, responsive breakpoints and component states.

Include buttons, forms, cards, navigation, alerts, empty states and motion rules. Provide reduced-motion alternatives and accessibility guidance. Explain token usage and common design mistakes.`
  },
  {
    title: "User Journey UX Audit",
    category: "Design & UX",
    description: "Find friction in a user flow and prioritize improvements.",
    featured: false,
    prompt: `Act as a UX researcher auditing [product/flow] for [user group]. User goal: [goal]. Available evidence: [feedback, analytics or observations].

Map the journey, identify friction points, separate facts from hypotheses, and explain user impact. Prioritize issues by impact, confidence and effort.

Recommend improvements, accessible alternatives and experiments with measurable success and guardrail metrics. Do not present assumptions as research findings.`
  },
  {
    title: "Accessibility Review",
    category: "Design & UX",
    description: "Review a screen for keyboard, contrast and assistive-technology barriers.",
    featured: false,
    prompt: `Act as an accessibility specialist reviewing [page/component]. Inspect the supplied markup or design: [details].

Review semantic structure, keyboard access, visible focus, labels, accessible names, errors, contrast, zoom/reflow, target sizes, motion and status announcements.

For every finding, give severity, evidence, user impact, recommended fix and verification steps. Distinguish confirmed issues from checks requiring manual testing. Do not claim conformance without evidence.`
  },
  {
    title: "SEO Content Brief",
    category: "Marketing & SEO",
    description: "Build a useful content outline around search intent and audience needs.",
    featured: true,
    prompt: `Act as an experienced SEO editor. Topic or keyword: [topic]. Audience: [audience]. Country and language: [market/language]. Business goal: [goal].

Provide search intent, reader questions, differentiated angle, title and meta description, H1/H2 outline, entities, internal links, credible source types and relevant CTA.

Avoid keyword stuffing, fabricated search volume and unsupported claims. Clearly mark research that needs current verification.`
  },
  {
    title: "30-Day Content Calendar",
    category: "Marketing & SEO",
    description: "Plan a realistic month of educational and promotional content.",
    featured: false,
    prompt: `Act as a content strategist for [brand], targeting [audience] on [platforms]. Goal: [goal]. Available time: [time]. Brand voice: [voice].

Create a 30-day calendar with topic, pillar, format, hook, takeaway, CTA, effort and repurposing idea. Balance education, proof, conversation and promotion.

Avoid repetition, engagement bait and unsupported claims. Mark content requiring original assets, permission or fact-checking.`
  },
  {
    title: "Social Media Carousel Writer",
    category: "Marketing & SEO",
    description: "Write a mobile-readable educational carousel with practical examples.",
    featured: false,
    prompt: `Act as an educational social content editor. Topic: [topic]. Audience level: [level]. Platform and slide count: [details]. Tone: [tone].

Create a truthful cover, one main idea per slide, clear explanations, practical examples and a useful ending. Suggest a visual direction for each slide and preserve mobile-safe margins.

Avoid repeating points, tiny text and unsupported statistics. Also provide a caption and alt-text summary.`
  },
  {
    title: "Startup Idea Validation",
    category: "Business & Strategy",
    description: "Test risky assumptions before spending time building a product.",
    featured: true,
    prompt: `Act as a skeptical startup advisor. Idea: [idea]. Target customer: [customer]. Market: [market]. Resources: [budget, skills, time].

Assess problem severity, existing alternatives, buyer/user differences, distribution challenges and willingness-to-pay hypotheses.

List the riskiest assumptions and design five low-cost validation experiments with target participants, questions, success thresholds and next steps. Do not fabricate market sizes or claim demand without evidence. Explain what evidence would invalidate the idea.`
  },
  {
    title: "Competitor Analysis Framework",
    category: "Business & Strategy",
    description: "Compare competitors using evidence and meaningful decision criteria.",
    featured: false,
    prompt: `Act as a market research analyst comparing [business] with [competitors] in [market]. Customer segment: [segment].

Compare positioning, audience, core job, pricing model, onboarding, features, trust signals, distribution, support and market gaps.

Use only supplied or verifiable facts. Mark unknowns instead of guessing. Separate direct competitors from substitutes. Finish with opportunity hypotheses, evidence needed and strategic options with risks.`
  },
  {
    title: "Freelance Project Proposal",
    category: "Business & Strategy",
    description: "Create a professional proposal with clear scope and deliverables.",
    featured: false,
    prompt: `Act as an experienced freelance consultant. Client type: [type]. Requested project: [project]. Budget range: [range]. Timeline: [timeline].

Draft the project context, goals, deliverables, exclusions, phases, client responsibilities, review rounds, assumptions, dependencies, pricing placeholders, payment milestones, change-request process, handover and success criteria.

Do not invent agreed prices or legal terms. Flag points that must be discussed before sending.`
  },
  {
    title: "Python Workflow Automation",
    category: "Productivity & Automation",
    description: "Plan a safe, testable automation for a repetitive workflow.",
    featured: false,
    prompt: `Act as a Python automation engineer. Task: [task]. Input: [input]. Output: [output]. Environment: [environment].

Map the workflow and failure modes. Propose the simplest reliable solution with dependencies, input validation, logging, retries, dry-run mode for risky actions and tests using sample data.

Explain how to run and troubleshoot it. Do not perform destructive actions without explicit confirmation.`
  },
  {
    title: "Weekly Priority Planner",
    category: "Productivity & Automation",
    description: "Create a realistic weekly plan with priorities and time buffers.",
    featured: false,
    prompt: `Act as a practical productivity coach. Goals, tasks, deadlines and available hours: [details]. Fixed commitments: [commitments]. Constraints: [constraints].

Choose a small number of outcomes, rank tasks by impact and urgency, identify dependencies, and estimate effort as ranges. Build a realistic weekly plan with buffers.

Identify what to defer, delegate or drop. Include a short daily shutdown routine and a weekly review. Do not schedule every minute.`
  },
  {
    title: "Data Analysis Report",
    category: "Data & Analytics",
    description: "Analyze a dataset while making limitations and assumptions explicit.",
    featured: true,
    prompt: `Act as a careful data analyst. Business question: [question]. Dataset schema or sample: [data]. Context: [context].

Check data quality, missing values, duplicates, definitions, sample size and bias. Propose suitable analyses and explain why they answer the question.

Present findings with units, uncertainty and caveats. Distinguish correlation from causation. Provide reproducible code in [Python/R/SQL]. Do not invent results.`
  },
  {
    title: "SQL Query Coach",
    category: "Data & Analytics",
    description: "Write a readable SQL query and validate edge cases.",
    featured: false,
    prompt: `Act as a senior SQL engineer. Database engine: [engine]. Schema: [tables and columns]. Desired result: [result]. Data size: [size].

Write a readable query, explain joins and filters, handle nulls and duplicates, and state assumptions about data grain. Suggest indexes or query-plan checks where appropriate.

Include edge cases and small test cases. Never assume columns that were not provided.`
  },
  {
    title: "Learn a New Skill",
    category: "Learning & Education",
    description: "Build a progressive learning roadmap with practice and checkpoints.",
    featured: false,
    prompt: `Act as an experienced learning designer. Skill: [skill]. Goal: [goal]. Current level: [level]. Available time: [hours per week].

Create a progressive roadmap with weekly outcomes, prerequisites, practice tasks, a mini-project, retrieval practice, review intervals and measurable checkpoints.

Include feedback methods, common misconceptions and a fallback for busy weeks. Keep the workload realistic.`
  },
  {
    title: "Explain a Complex Topic",
    category: "Learning & Education",
    description: "Learn a difficult concept through explanations, examples and self-testing.",
    featured: false,
    prompt: `Teach me [topic] at [knowledge level] for [purpose]. Explain the core idea in plain language, then build toward deeper mechanics step by step.

Use one analogy and explain its limitations. Include a worked example, common mistakes, glossary and five comprehension questions. Preserve important nuance and flag fast-changing facts that require verification.`
  },
  {
    title: "Portfolio Case Study",
    category: "Career & Freelancing",
    description: "Present a project through decisions, process and verifiable outcomes.",
    featured: false,
    prompt: `Act as a portfolio editor for a [role] applying to [opportunity]. Project details: [project, role, constraints, process and outcomes].

Structure a case study with context, problem, responsibilities, process, decisions, trade-offs, implementation, testing, results and lessons.

Make my contribution clear. Never invent metrics, clients or business impact. Suggest artifacts and screenshots that could substantiate the story.`
  },
  {
    title: "Freelance Discovery Call",
    category: "Career & Freelancing",
    description: "Ask the right questions before estimating a client project.",
    featured: false,
    prompt: `Act as an experienced freelance [service] consultant. Client request: [request]. Client type: [type].

Create a discovery agenda and open-ended questions covering goals, users, scope, content, integrations, accessibility, decision makers, timeline, budget, maintenance and success criteria.

Include red flags, follow-up questions, a call summary template and a next-step email. Identify which answers are necessary before estimating the work.`
  },
  {
    title: "AI Image Art Director",
    category: "Creative & Image AI",
    description: "Write a detailed image prompt with composition, lighting and constraints.",
    featured: true,
    prompt: `Act as an expert visual art director writing for [image model]. Purpose: [purpose]. Subject: [subject]. Style: [style]. Aspect ratio: [ratio].

Specify composition, viewpoint, lighting, palette, textures, background, mood, focal hierarchy and exact text if needed. Include safe margins, logo restrictions and unwanted-element constraints.

Keep the prompt internally consistent. Provide two alternative creative directions.`
  },
  {
    title: "Video Script with Retention",
    category: "Creative & Image AI",
    description: "Plan a concise video with a clear hook, visual beats and payoff.",
    featured: false,
    prompt: `Act as a video scriptwriter for [platform]. Topic: [topic]. Audience: [audience]. Duration: [duration]. Tone: [tone]. CTA: [CTA].

Write a truthful hook, clear promise, timestamped script, B-roll directions, on-screen text, transitions and a satisfying payoff. Keep spoken language natural and avoid filler or misleading claims.

Include a caption and subtitle-friendly version.`
  },
  {
    title: "Customer Support Reply",
    category: "Communication & Writing",
    description: "Respond empathetically without making promises you cannot verify.",
    featured: false,
    prompt: `Act as a thoughtful support specialist for [company]. Customer message: [message]. Verified policy: [policy]. Desired outcome: [outcome].

Write a concise response that acknowledges the specific concern, explains verified facts, states the next step and asks only necessary questions.

Do not blame the customer, promise unapproved refunds or deadlines, or disclose private information. Provide a shorter alternative.`
  },
  {
    title: "Rewrite for Clarity",
    category: "Communication & Writing",
    description: "Improve a draft without losing its meaning or original voice.",
    featured: false,
    prompt: `Act as an expert editor. Audience: [audience]. Purpose: [purpose]. Tone: [tone]. Desired length: [length]. Draft: [paste text].

Improve structure, clarity, grammar and flow while preserving intent and voice. Do not add facts or promises.

Return the polished draft first, then briefly explain important changes. Ask a question if ambiguity could change the meaning.`
  },
  {
    title: "Defensive Code Security Review",
    category: "Cybersecurity",
    description: "Review supplied code for likely vulnerabilities and practical fixes.",
    featured: false,
    prompt: `Act as a defensive application security reviewer. Code/configuration: [paste code]. Application context: [context]. Threat model: [details].

Identify potential vulnerabilities, severity, code evidence, realistic impact and mitigations. Consider validation, authentication, authorization, secrets, injection, logging and dependencies as relevant.

Distinguish confirmed findings from hypotheses. Do not claim the entire application is secure based on a limited review.`
  },
  {
    title: "Privacy-First Product Checklist",
    category: "Cybersecurity",
    description: "Identify unnecessary data collection and privacy risks early.",
    featured: false,
    prompt: `Act as a privacy-minded product reviewer. Product: [product]. Data collected: [data]. User regions: [regions]. Retention and vendors: [details].

Map data flows and purposes. Review necessity, minimization, access, retention, deletion, transparency, vendor sharing, security and user-rights workflows.

Identify unknowns and mitigations. Flag jurisdiction-specific questions for qualified counsel rather than giving definitive legal advice.`
  },
  {
    title: "Monthly Budget Planner",
    category: "Finance & Planning",
    description: "Organize income, expenses, savings and debt with transparent assumptions.",
    featured: false,
    prompt: `Act as a general financial education assistant. Currency and country: [details]. Monthly take-home income: [amount]. Expenses, debts and goals: [details].

Organize a monthly cash-flow budget, fixed and variable costs, irregular expenses, savings scenarios and debt trade-offs. Show formulas and assumptions. Do not assume missing numbers or promise investment returns. Flag local rules that require professional verification.`
  },
  {
    title: "Practical Travel Itinerary",
    category: "Travel & Lifestyle",
    description: "Balance activities, transport, meals and rest in a realistic itinerary.",
    featured: false,
    prompt: `Act as a detail-oriented travel planner. Destination: [place]. Dates: [dates]. Travelers and accessibility needs: [details]. Budget: [budget]. Interests: [interests].

Build a geographically sensible itinerary with time blocks, transit, meal breaks, rest and weather alternatives. Flag opening hours, prices, entry requirements and schedules that require current verification. Avoid overpacking each day and distinguish confirmed facts from suggestions.`
  },
  {
    title: "Product Requirements Document",
    category: "Business & Strategy",
    description: "Turn a product idea into testable requirements for a team.",
    featured: false,
    prompt: `Act as a senior product manager. Feature/product: [feature]. User problem: [problem]. Audience: [audience]. Business objective: [objective]. Constraints: [constraints].

Write context, goals, non-goals, user stories, functional and non-functional requirements, permissions, analytics events, edge cases, dependencies, risks, rollout and rollback plans, and acceptance criteria.

Make requirements testable. Mark assumptions and open questions explicitly.`
  }
];

// PromptVault library expansion: maintain exactly 100 prompts per category.
// Existing hand-written prompts are kept; missing entries are generated from
// category-specific topics and focus areas so the library stays easy to extend.
const promptLibraryBlueprints = {
  "Web Development": {
    role: "senior full-stack web developer",
    topics: ["Responsive Landing Page", "Portfolio Website", "E-commerce Experience", "Dashboard Interface", "Authentication Flow", "REST API Integration", "Performance Optimization", "SEO-Friendly Page", "Reusable Component Library", "Web App Debugging"],
    focuses: ["beginner-friendly implementation", "production readiness", "accessibility and keyboard use", "mobile-first layout", "clean component architecture", "performance and Core Web Vitals", "security and validation", "testing and edge cases", "maintainability and documentation", "conversion and usability"],
    task: "Create an implementation plan and practical deliverable with semantic HTML, maintainable CSS, appropriate JavaScript, responsive states, validation, error handling, and clear acceptance criteria."
  },
  "AI & Machine Learning": {
    role: "responsible AI and machine-learning engineer",
    topics: ["AI Chatbot", "Retrieval-Augmented Generation", "Text Classification Model", "Recommendation System", "Image Recognition Pipeline", "Data Preparation Workflow", "Model Evaluation Plan", "AI Product MVP", "Prompt Evaluation Suite", "Responsible AI Review"],
    focuses: ["problem framing and feasibility", "dataset quality and leakage prevention", "baseline-first experimentation", "evaluation metrics and thresholds", "privacy and data minimization", "deployment and monitoring", "cost and latency optimization", "human review and fallback", "bias and failure analysis", "reproducibility and documentation"],
    task: "Define assumptions, data requirements, baseline approaches, evaluation methods, failure cases, human oversight, privacy safeguards, deployment constraints, and measurable success criteria. Do not invent benchmark results."
  },
  "Design & UX": {
    role: "principal product designer and UX researcher",
    topics: ["Design System", "Mobile App Onboarding", "Checkout Flow", "Dashboard UX", "Navigation Architecture", "User Research Plan", "Wireframe Specification", "Accessibility Audit", "Usability Test", "Product Redesign"],
    focuses: ["first-time user clarity", "accessibility and inclusive design", "mobile usability", "trust and confidence", "reducing cognitive load", "error prevention and recovery", "visual hierarchy", "design consistency", "evidence-based prioritization", "measurable usability outcomes"],
    task: "Provide user goals, key journeys, information hierarchy, interaction states, accessibility considerations, rationale, risks, and validation steps. Separate observed evidence from hypotheses and avoid unsupported user-research claims."
  },
  "Marketing & SEO": {
    role: "senior content strategist and ethical SEO specialist",
    topics: ["SEO Content Brief", "Blog Article", "Content Calendar", "Landing Page Copy", "Email Campaign", "Keyword Cluster Plan", "Brand Messaging", "Product Launch Campaign", "Lead Magnet", "Content Refresh Audit"],
    focuses: ["search intent alignment", "helpful and original content", "clear conversion path", "audience-specific messaging", "fact checking and source quality", "organic distribution", "brand voice consistency", "measurable campaign goals", "repurposing across channels", "accessibility and readability"],
    task: "Deliver a clear strategy, audience assumptions, messaging options, channel-specific assets, calls to action, measurement plan, and fact-checking notes. Do not fabricate search volume, rankings, testimonials, or performance claims."
  },
  "Business & Strategy": {
    role: "pragmatic business strategist",
    topics: ["Startup Validation", "Business Model Canvas", "Competitor Analysis", "Product Requirements Document", "Go-to-Market Plan", "Pricing Strategy", "Customer Interview Plan", "Operations Improvement", "Risk Register", "Quarterly Strategy"],
    focuses: ["low-cost validation", "customer value and differentiation", "evidence quality", "resource constraints", "revenue and cost assumptions", "execution milestones", "risk mitigation", "decision criteria", "stakeholder alignment", "clear success metrics"],
    task: "State assumptions, distinguish facts from hypotheses, compare realistic options, identify risks and dependencies, and finish with prioritized actions, owners, evidence needed, and measurable decision gates. Never invent market data."
  },
  "Productivity & Automation": {
    role: "workflow designer and automation engineer",
    topics: ["Personal Workflow", "Team Task Automation", "Email Triage System", "File Organization", "Recurring Report", "Meeting Follow-up", "No-Code Automation", "Python Utility", "Knowledge Management", "Weekly Planning System"],
    focuses: ["simple and reliable setup", "error recovery", "privacy and permissions", "time saved and effort", "maintainability", "human approval checkpoints", "clear documentation", "edge cases", "low-cost tooling", "adoption by a small team"],
    task: "Map the current and proposed workflow, specify triggers and inputs, handle failures and duplicates, include a safe test mode, document setup, and define how to measure whether the automation helps. Require confirmation before destructive actions."
  },
  "Data & Analytics": {
    role: "careful data analyst",
    topics: ["Exploratory Data Analysis", "SQL Reporting Query", "Business KPI Dashboard", "Data Cleaning Pipeline", "Experiment Analysis", "Customer Cohort Analysis", "Forecasting Plan", "Survey Analysis", "Data Visualization", "Analytics Instrumentation"],
    focuses: ["data quality and missingness", "clear metric definitions", "reproducibility", "uncertainty and caveats", "bias and representativeness", "stakeholder-friendly reporting", "performance at scale", "appropriate statistical methods", "privacy-safe handling", "actionable recommendations"],
    task: "Clarify the business question and data grain, inspect quality and assumptions, select appropriate methods, show reproducible steps, and report findings with units and caveats. Do not invent results or imply causation from correlation."
  },
  "Learning & Education": {
    role: "experienced learning designer and patient tutor",
    topics: ["Personal Learning Roadmap", "Concept Explanation", "Practice Worksheet", "Flashcard Set", "Project-Based Lesson", "Exam Revision Plan", "Coding Exercise Set", "Skill Assessment", "Study Group Session", "Learning Reflection"],
    focuses: ["absolute beginners", "step-by-step scaffolding", "active recall", "worked examples", "common misconceptions", "real-world practice", "feedback and self-assessment", "spaced review", "inclusive learning", "measurable milestones"],
    task: "Define learning outcomes, prerequisites, sequenced explanations, examples, practice activities, feedback, review prompts, and a way to check understanding. Adapt the difficulty to the stated learner level and avoid pretending the learner has mastered untested skills."
  },
  "Career & Freelancing": {
    role: "career coach and practical freelance consultant",
    topics: ["Resume Improvement", "Portfolio Case Study", "Freelance Proposal", "Client Discovery Call", "Interview Preparation", "Professional Bio", "Project Estimation", "Client Onboarding", "Networking Message", "Career Development Plan"],
    focuses: ["truthful evidence of skills", "clear value proposition", "role-specific tailoring", "scope and boundaries", "professional communication", "measurable accomplishments", "risk and expectation management", "confident but natural tone", "actionable next steps", "beginner-friendly positioning"],
    task: "Create a practical draft or plan using only supplied experience and facts. Mark placeholders clearly, avoid fabricated credentials or results, explain important trade-offs, and include a checklist for tailoring before use."
  },
  "Creative & Image AI": {
    role: "visual art director and generative-image prompt specialist",
    topics: ["Editorial Hero Image", "Product Photography", "Character Concept", "Brand Campaign Visual", "Architectural Visualization", "Educational Illustration", "Album or Poster Artwork", "Food Photography", "Minimal Icon Set", "Visual Moodboard"],
    focuses: ["composition and focal hierarchy", "lighting and atmosphere", "palette and material detail", "camera and viewpoint", "brand consistency", "readable negative space", "realistic textures", "stylized art direction", "aspect ratio and framing", "unwanted-element constraints"],
    task: "Write a coherent image-generation prompt specifying subject, composition, viewpoint, lighting, palette, materials, mood, background, aspect ratio, and constraints. Keep instructions internally consistent and avoid asking the model to reproduce a living artist's exact style."
  },
  "Video & Content Creation": {
    role: "video producer and audience-first content strategist",
    topics: ["Short-Form Video Script", "YouTube Tutorial", "Explainer Video", "Product Demo", "Interview Episode", "Documentary Outline", "Video Ad Concept", "Educational Reel", "Screen-Recording Tutorial", "Repurposing Plan"],
    focuses: ["strong truthful hook", "clear narrative structure", "retention without clickbait", "visual beats and B-roll", "subtitle readability", "accessible pacing", "platform-specific framing", "credible sourcing", "efficient production", "useful audience takeaway"],
    task: "Deliver a structured script or production plan with hook, beats, spoken lines, visual directions, on-screen text, pacing, accessibility notes, and a clear payoff. Avoid misleading hooks, unsupported claims, and unnecessary filler."
  },
  "Communication & Writing": {
    role: "expert editor and thoughtful communication specialist",
    topics: ["Professional Email", "Customer Support Reply", "Project Update", "Difficult Conversation", "Executive Summary", "Proposal Draft", "Clear Rewrite", "Meeting Agenda", "Feedback Message", "Announcement"],
    focuses: ["concise and direct language", "warm and empathetic tone", "clear next actions", "audience-appropriate formality", "preserving the original meaning", "conflict de-escalation", "scannable structure", "plain-language accessibility", "fact-safe wording", "multiple tone options"],
    task: "Produce a ready-to-use draft tailored to the audience and goal. Preserve the facts provided, make the next action explicit, avoid invented commitments, and briefly flag placeholders or sensitive details that need review."
  },
  "Cybersecurity": {
    role: "defensive application security specialist",
    topics: ["Secure Code Review", "Threat Model", "Authentication Review", "Access Control Audit", "Dependency Risk Review", "Incident Response Plan", "Privacy Checklist", "Security Logging Plan", "Secure Deployment Checklist", "Security Awareness Lesson"],
    focuses: ["risk-based prioritization", "least privilege", "safe validation and testing", "secrets management", "privacy and data minimization", "logging without sensitive data", "recovery and containment", "clear evidence and uncertainty", "secure defaults", "defensive remediation"],
    task: "Focus on authorized defensive work. Identify assets, trust boundaries, likely threats, evidence, severity, mitigations, and verification steps. Avoid destructive testing or instructions to compromise third-party systems; clearly separate confirmed findings from hypotheses."
  },
  "Finance & Planning": {
    role: "general financial planning educator",
    topics: ["Monthly Budget", "Savings Goal Plan", "Debt Repayment Comparison", "Emergency Fund Plan", "Freelance Cash Flow", "Subscription Audit", "Major Purchase Comparison", "Financial Habit Review", "Expense Categorization", "Annual Money Checklist"],
    focuses: ["transparent assumptions", "realistic scenarios", "cash-flow visibility", "trade-offs and opportunity cost", "irregular expenses", "risk and uncertainty", "simple tracking", "goal prioritization", "country-specific verification", "plain-language explanations"],
    task: "Organize the supplied figures, show calculations and assumptions, compare reasonable scenarios, and identify questions or risks. Do not guarantee returns or assume missing figures. Flag tax, legal, credit, and investment decisions that need qualified local advice."
  },
  "Travel & Lifestyle": {
    role: "detail-oriented travel and lifestyle planner",
    topics: ["Weekend Itinerary", "Family Travel Plan", "Budget Trip", "Accessible Travel Checklist", "Local Food Exploration", "Packing System", "Slow Travel Plan", "Outdoor Day Trip", "Remote Work Travel Routine", "Cultural Visit Plan"],
    focuses: ["realistic pacing and rest", "budget transparency", "accessibility and traveler needs", "weather alternatives", "local cultural respect", "geographically sensible routes", "family-friendly options", "low-waste choices", "current-fact verification", "flexible backup plans"],
    task: "Create a practical plan with timing, transport considerations, rest breaks, budget categories, alternatives, and traveler-specific needs. Flag opening hours, prices, entry rules, and schedules that require current verification; do not invent bookings or availability."
  }
};

const promptFocusLabels = [
  "with a step-by-step plan", "with a reusable template", "with a quality checklist",
  "with realistic examples", "with an implementation roadmap", "with risk analysis",
  "with testing and validation", "with beginner-friendly explanations",
  "with advanced trade-offs", "with measurable success criteria"
];

for (const [category, blueprint] of Object.entries(promptLibraryBlueprints)) {
  const existingInCategory = prompts.filter(item => item.category === category);
  const existingTitles = new Set(prompts.map(item => item.title.toLowerCase()));
  let added = 0;

  for (let topicIndex = 0; topicIndex < blueprint.topics.length && existingInCategory.length + added < 100; topicIndex++) {
    for (let focusIndex = 0; focusIndex < blueprint.focuses.length && existingInCategory.length + added < 100; focusIndex++) {
      const topic = blueprint.topics[topicIndex];
      const focus = blueprint.focuses[focusIndex];
      const title = `${topic} — ${promptFocusLabels[focusIndex]}`;
      if (existingTitles.has(title.toLowerCase())) continue;

      prompts.push({
        title,
        category,
        description: `${topic}: a practical guide focused on ${focus}.`,
        featured: added < 3,
        prompt: `Act as a ${blueprint.role}.\n\nContext: [describe your project, audience, goals, constraints, available resources, and any relevant examples].\nTask: Create a ${topic.toLowerCase()} ${promptFocusLabels[focusIndex]}. Focus specifically on ${focus}.\n\nRequirements:\n1. Start by stating assumptions and asking only essential clarifying questions.\n2. Give a clear, structured deliverable tailored to the context rather than generic advice.\n3. ${blueprint.task}\n4. Include practical examples, edge cases, and a short quality checklist where relevant.\n5. Prioritize the most valuable actions; explain trade-offs and what to do first.\n6. Mark unknowns and facts that require verification. Never fabricate data, credentials, results, sources, or commitments.\n\nOutput format: concise overview, detailed deliverable, risks or limitations, next steps, and a final checklist. Adapt the level of detail to the complexity of the task.`
      });
      existingTitles.add(title.toLowerCase());
      added++;
    }
  }
}

const categoryIcons = {
  "AI & Machine Learning": "✦",
  "Video & Content Creation": "▶",
  "Web Development": "⌘",
  "Design & UX": "◈",
  "Marketing & SEO": "↗",
  "Business & Strategy": "◇",
  "Productivity & Automation": "⚙",
  "Data & Analytics": "▥",
  "Learning & Education": "✦",
  "Career & Freelancing": "↗",
  "Creative & Image AI": "✧",
  "Communication & Writing": "✎",
  "Cybersecurity": "⌑",
  "Finance & Planning": "◌",
  "Travel & Lifestyle": "⌖"
};

const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");
const categoryList = document.getElementById("categoryList");
const promptGrid = document.getElementById("promptGrid");
const emptyState = document.getElementById("emptyState");
const modal = document.getElementById("modal");
const promptText = document.getElementById("promptText");

let activeCategory = "All";
let selectedPrompt = null;
let toastTimer;

const categories = [...new Set(prompts.map(prompt => prompt.category))];

document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("totalPrompts").textContent = `${prompts.length}+`;
document.getElementById("totalCategories").textContent = categories.length;
document.getElementById("allCount").textContent = prompts.length;

function wordCount(text) {
  return text.trim() ? text.trim().split(/\s+/).length : 0;
}

function createCategoryButton(category, count) {
  const button = document.createElement("button");
  button.className = "category";
  button.dataset.category = category;

  const icon = categoryIcons[category] || "✳";
  button.innerHTML = `
    <span>${icon} ${category}</span>
    <span>${count}</span>
  `;

  button.addEventListener("click", () => setCategory(category));
  return button;
}

categories.forEach(category => {
  const count = prompts.filter(prompt => prompt.category === category).length;
  categoryList.appendChild(createCategoryButton(category, count));
});

document.querySelector('[data-category="All"]').addEventListener("click", () => {
  setCategory("All");
});

function setCategory(category) {
  activeCategory = category;

  document.querySelectorAll(".category").forEach(button => {
    button.classList.toggle("active", button.dataset.category === category);
  });

  renderPrompts();
}

function getFilteredPrompts() {
  const query = searchInput.value.trim().toLowerCase();

  let filtered = prompts.filter(prompt => {
    const matchesCategory =
      activeCategory === "All" || prompt.category === activeCategory;

    const searchableText = [
      prompt.title,
      prompt.category,
      prompt.description,
      prompt.prompt
    ].join(" ").toLowerCase();

    return matchesCategory && searchableText.includes(query);
  });

  if (sortSelect.value === "az") {
    filtered.sort((a, b) => a.title.localeCompare(b.title));
  } else {
    filtered.sort((a, b) => Number(b.featured) - Number(a.featured));
  }

  return filtered;
}

function renderPrompts() {
  const filtered = getFilteredPrompts();
  promptGrid.innerHTML = "";

  filtered.forEach(prompt => {
    const card = document.createElement("article");
    card.className = "prompt-card";

    const tag = document.createElement("span");
    tag.className = "card-tag";
    tag.textContent = prompt.category;

    const title = document.createElement("h3");
    title.textContent = prompt.title;

    const description = document.createElement("p");
    description.textContent = prompt.description;

    const footer = document.createElement("div");
    footer.className = "card-footer";

    const count = document.createElement("small");
    count.textContent = `${wordCount(prompt.prompt)} words`;

    const actions = document.createElement("div");
    actions.className = "card-actions";

    const viewButton = document.createElement("button");
    viewButton.type = "button";
    viewButton.textContent = "View ↗";
    viewButton.addEventListener("click", () => openPrompt(prompt));

    const copyButton = document.createElement("button");
    copyButton.type = "button";
    copyButton.textContent = "▣ Copy";
    copyButton.addEventListener("click", () => copyPrompt(prompt.prompt));

    actions.append(viewButton, copyButton);
    footer.append(count, actions);
    card.append(tag, title, description, footer);
    promptGrid.appendChild(card);
  });

  document.getElementById("resultCount").textContent =
    `${filtered.length} prompt${filtered.length === 1 ? "" : "s"}`;

  document.getElementById("activeCategory").textContent =
    activeCategory === "All"
      ? "Showing all prompts"
      : `Showing ${activeCategory}`;

  emptyState.hidden = filtered.length > 0;
  promptGrid.hidden = filtered.length === 0;
}

function showToast(message = "✓ Prompt copied to clipboard!") {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2300);
}

async function copyPrompt(text) {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
    } else {
      const temporary = document.createElement("textarea");
      temporary.value = text;
      temporary.style.position = "fixed";
      temporary.style.opacity = "0";
      document.body.appendChild(temporary);
      temporary.select();

      const success = document.execCommand("copy");
      temporary.remove();

      if (!success) throw new Error("Copy failed");
    }

    showToast();
  } catch (error) {
    showToast("Copy blocked. Open the prompt and copy it manually.");
  }
}

function openPrompt(prompt) {
  selectedPrompt = prompt;

  document.getElementById("modalCategory").textContent = prompt.category;
  document.getElementById("modalTitle").textContent = prompt.title;
  document.getElementById("modalDescription").textContent = prompt.description;

  promptText.value = prompt.prompt;
  updateWordCount();

  modal.hidden = false;
  document.body.style.overflow = "hidden";
  document.getElementById("closeModal").focus();
}

function closeModal() {
  modal.hidden = true;
  document.body.style.overflow = "";
  selectedPrompt = null;
}

function updateWordCount() {
  document.getElementById("wordCount").textContent =
    `${wordCount(promptText.value)} words`;
}

searchInput.addEventListener("input", renderPrompts);
sortSelect.addEventListener("change", renderPrompts);

document.getElementById("resetButton").addEventListener("click", () => {
  searchInput.value = "";
  sortSelect.value = "featured";
  setCategory("All");
});

document.getElementById("closeModal").addEventListener("click", closeModal);

modal.addEventListener("click", event => {
  if (event.target === modal) closeModal();
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape" && !modal.hidden) closeModal();

  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    searchInput.focus();
  }
});

promptText.addEventListener("input", updateWordCount);

document.getElementById("copyModal").addEventListener("click", () => {
  copyPrompt(promptText.value);
});

renderPrompts();
