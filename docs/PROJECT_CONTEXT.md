# Project Resonance

> "An experience where technology meets creativity."

---

# Purpose

Project Resonance is not a traditional portfolio website.

It is a carefully crafted digital experience that introduces ideas before introducing the person behind them.

The goal is not to impress visitors with animations or technology.

The goal is to leave them with a memorable feeling.

Every decision in this project should support that objective.

---

# Product Vision

Visitors should not feel like they are browsing a résumé.

They should feel like they are exploring someone's creative world.

The experience should create curiosity first, trust second, and connection last.

---

# Core Philosophy

Technology should disappear behind the experience.

Whitespace is part of the design.

Typography should do most of the talking.

Motion should feel like breathing.

Curiosity should always be rewarded.

Nothing appears before it is needed.

Every element must have a purpose.

---

# Engineering Philosophy

We optimize for clarity before cleverness.

Architecture should reduce future complexity.

Components should have a single responsibility.

Content should be separated from presentation.

Reusable components should exist only after a real need appears.

Code should be readable before it is impressive.

---

# Design Philosophy

The interface should feel:

- Calm
- Premium
- Human
- Intentional
- Timeless

It should never feel:

- Flashy
- Over-designed
- Noisy
- Trend-driven
- Distracting

---

# User Experience Principles

The website follows the philosophy of **Progressive Revelation**.

Instead of presenting everything immediately, information is revealed naturally as visitors explore.

The experience should feel like a conversation rather than a presentation.

---

# Motion Principles

Motion communicates.

Motion never entertains for its own sake.

Animations should guide attention.

Animations should reinforce hierarchy.

If removing an animation does not weaken the experience, it probably should not exist.

---

# Architecture Principles

The project separates responsibilities clearly.

- `/content` stores words.
- `/components` stores UI.
- `/components/ui` contains reusable building blocks.
- `/components/home` contains homepage-specific components.
- `/lib` contains utilities.
- `/hooks` contains reusable React logic.
- `/types` contains shared TypeScript definitions.

Framework-specific code should stay inside `app/`.

---

# Git Workflow

Commits represent milestones.

Every commit should describe a meaningful improvement.

Avoid committing unfinished ideas.

Examples:

- feat: establish Project Resonance foundation
- feat: create initial arrival hero section

---

# Documentation

Every major architectural or design decision should be documented.

Future contributors should understand *why* a decision exists, not only *what* was implemented.

---

# Quality Standard

Every feature is evaluated on four pillars:

1. Architecture
2. Design
3. Performance
4. Accessibility

Visual appearance alone is never enough.

---

# Decision Filter

Before implementing any feature, ask:

- Does this improve the visitor's experience?
- Does this align with our philosophy?
- Does this simplify or complicate the project?
- Would we still build this one year from now?

If the answer is "no", reconsider the implementation.

---

# Current Status

Current Phase:

Foundation complete.

Current Sprint:

Arrival Experience.

Next Objectives:

- Atmosphere
- Progressive Reveal
- Identity
- Navigation
- Studio

---

This document is intended to evolve with the project.

It is the single source of truth for how Project Resonance should be built.