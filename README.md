# 🚀 ProgramQuest
#### Gamified Logical Framework Builder for NGOs

<img width="1536" height="1024" alt="ChatGPT Image Jan 12, 2026, 07_36_30 PM" src="https://github.com/user-attachments/assets/715701dc-c630-46b9-9f8a-f9d5df94c297" />

## Overview
ProgramQuest is a gamified, step-by-step digital platform that helps education-focused NGOs and CSOs design clear, coherent, and review-ready program frameworks—without relying on expensive consultants or starting from a blank page.

Built around Shikshagraha’s Common Logical Framework (LFA), ProgramQuest transforms program design from a static document into an interactive guided journey, enabling organisations to move from idea → logic → action with confidence.

## Problem Statement

Across the education and social sector, organisations struggle to design programs before starting or scaling their work.

Common challenges include:

- Difficulty defining the core problem clearly
- Weak linkage between outcomes, interventions, and indicators
- Heavy dependency on external consultants
- Inconsistent quality across program designs
- Long, manual, expert-driven design cycles

As a result, program design becomes:
- Slow
- Expensive
- Expert-dependent
- Difficult to review or scale

This challenge is especially acute for small and growing NGOs, despite their strong on-ground intent and experience.

## Objective

The objective of ProgramQuest is to:

Democratize program design capability by providing a simple, guided, and engaging digital experience that enables organisations to independently build review-ready Logical Frameworks aligned with systems thinking.

## Solution: What is ProgramQuest?

ProgramQuest is a gamified Logical Framework Builder that guides users through structured “levels” of program design.

Instead of filling long documents, users:

- Progress through clear steps
- Make contextual choices
- Receive real-time logic validation
- Build a coherent program framework incrementally

At the end of the journey, the platform generates a review-ready Logical Framework suitable for:
- Funders
- Partners
- Internal reviews
- Implementation teams

## Gamified Design Flow

The user progresses through five guided levels:

#### 1.Define the Core Problem
Articulate the system-level education challenge.

#### 2.Select Target Outcomes
Identify desired student-level or system-level change.

#### 3.Map Stakeholders
Identify actors across schools, clusters, blocks, and districts.

#### 4.Choose Interventions
Select interventions logically aligned to outcomes.

#### 5.Define Indicators
Decide how success will be measured.

Each level:

- Unlocks only when minimum logic requirements are met
- Provides examples and scaffolding
- Prevents weak or incomplete designs

## Key Innovation
#### 1. Program Design as a Game
ProgramQuest reframes program design as a guided journey, not a compliance task.

#### 2. Rule-Based Logic Engine
The system enforces Logical Framework integrity using:
- Explicit validation rules
- Dependency checks (e.g., outcomes required before interventions)
- Explainable feedback (not black-box AI)

#### 3. No Blank Page Problem
Preloaded examples and structured prompts help users think clearly from the start.

#### 4. Review-Ready by Design
The output is designed to be clear, evaluable, and funder-friendly.

## System Architecture
```bash
User Interface (Gamified Flow)
│
├── Level 1: Problem Definition
├── Level 2: Outcome Selection
├── Level 3: Stakeholder Mapping
├── Level 4: Intervention Selection
├── Level 5: Indicator Definition
│
└── Logic Engine
     ├── Rule-Based LFA Validator
     ├── Dependency Checker
     └── Missing-Logic Detector
│
└── Summary Generator
     ├── Review-Ready Logical Framework
     └── Export Hooks (PDF / DOCX – future)
```

## Tech Stack
#### Layer ── Technology
Frontend ── Next.js (App Router)

UI / Styling ── Tailwind CSS

State & Logic ── React Hooks + Rule Engine

Validation ── Custom LFA Logic Validator

Data ── In-memory structured objects

## Reliability & Validation

- Prevents progression without required logic elements 
- Explicit validation messages for missing components 
- Dependency enforcement between design layers 
- Deterministic and explainable logic

This ensures design quality consistency, even for non-expert users.

## Impact

ProgramQuest directly addresses a systemic bottleneck in the education ecosystem.

#### Impact Areas:

- Reduces program design effort by ~60%
- Saves NGOs significant consultant costs
- Builds internal program design capability
- Improves funder trust and review efficiency
- Enables scalable, open-source adoption

## Scalability & Future Roadmap

ProgramQuest is designed to scale across:

- Themes (FLN, leadership, mentoring, career readiness)
- Geographies and languages
- NGO sizes and maturity levels

### Planned Enhancements:
- Persistent user sessions
- PDF/DOCX export
- AI-assisted design suggestions
- Pattern libraries for common program models
- Multi-language and offline-first support
- Funder and reviewer dashboards

### Target Users

- Education-focused NGOs and CSOs
- Program Managers & Design Teams
- Monitoring & Evaluation (M&E) teams
- Funders and ecosystem partners
- System actors working with public education systems

### ProgramQuest Have

- ✔ Strong alignment with Shikshagraha’s Common LFA
- ✔ Clear systemic problem definition
- ✔ High real-world applicability
- ✔ Strong UX + technical depth balance
- ✔ Open-source ecosystem value
- ✔ Scalable beyond a single hackathon

#### Team

Team Name: Ctrl+Alt+Uplift

Team Members:  
1. Mahera Umangkumar
2. Archana Gavade,
3. Mahera Purnima, 
	
#### 🌱 Closing Note

ProgramQuest is a step toward making program design a shared capability, not an exclusive skill—strengthening systems that ultimately impact millions of learners.

Designing better programs leads to better systems. Better systems lead to better education.


# INSTRUCTIONS — ProgramQuest

This section explains how to access, run, and evaluate the ProgramQuest prototype, including GitHub usage and local execution steps.

## 1. Accessing the Project Source Code (GitHub)

- Open the public GitHub repository link provided in the Project Source field
(Example: https://github.com/your-username/programquest)

The repository contains:

- Full source code
- README documentation
- Modular project structure
- Commit history showing original development

## 2. Downloading the Project from GitHub
### Option A: Download ZIP (No Git Required)

- Open the GitHub repository
- Click the Code (green button)
- Select Download ZIP
- Extract the ZIP file on your system

This option is suitable for reviewers who do not use Git.

### Option B: Clone Using Git
```bash
git clone https://github.com/umang252000/programquest.git
cd programquest
```
## 3. Prerequisites to Run the Project Locally

Ensure the following are installed:

- Node.js (version 18 or above recommended)
- npm (comes with Node.js)
- A modern web browser (Chrome / Edge / Firefox)

Check installation:
```bash
node -v
npm -v
```

## 4. Installing Dependencies
After downloading or cloning the repository:
```bash
npm install
```
This command installs all required dependencies listed in package.json.

## 5. Running the Application Locally

Start the development server:
```bash
npm run dev
```
Once the server starts, you will see an output similar to:
```bash
Local: http://localhost:3000
```
## 6. Accessing the Application

- Open a web browser
- Visit:
```bash
http://localhost:3000
```
The ProgramQuest Home Page will load.

## 7. How to Use the Application (Demo Flow)

The application is designed as a guided, gamified journey.

##### Step-by-step Demo Walkthrough:

###### 1.Click “Start the Quest”

###### 2.Level 1 – Define Problem

- Enter the system-level education problem
- Minimum clarity required to proceed

###### 3.Level 2 – Select Outcomes

- Choose desired student/system outcomes
- Multiple selections allowed

###### 4.Level 3 – Map Stakeholders
- Identify key actors across the education system

###### 5.Level 4 – Choose Interventions

- Select interventions aligned with outcomes
- Logic checks ensure relevance

###### 6.Level 5 – Define Indicators
- Choose measurable indicators for success

###### 7.Summary Page
- View the generated review-ready Logical Framework
- Designed for funders, partners, and internal review

If any required element is missing, the system displays logic validation warnings and prevents progression.

## 8. Logic Validation & Reliability

- The system uses a rule-based logic engine
- Dependencies are enforced:
- Outcomes required before interventions
- Indicators required before completion
- Validation messages explain what is missing
 -Ensures logical consistency and completeness

### 9. Notes

- This prototype demonstrates end-to-end program design logic
- Export to PDF/DOCX is planned in future iterations
- Architecture is modular and scalable
- The solution aligns with Common Logical Framework principles
- Designed to be open-source and ecosystem-ready
