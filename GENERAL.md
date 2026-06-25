# Agent Instructions

Read this entire file before starting any task.

## Self-Correcting Rules Engine

This file contains a growing ruleset that improves over time. **At session start, reaad the entire "Learned Rules"

### How it works

1. When the user corrcts you or you make a mistake, **immediately append a new rule**  to the "Learned Rules"
2. Rules are numbered sequentially and written as clear, imperative instructions.
3. Format: `N. [CATAGORY] Never/Always do X - because Y.`
4. Categories: `[STYLE]`, `[CODE]`, `[ARCH]`, `[PROCESS]`, `[DATA]`, `[UX]`, `[OTHER]`
5. Before starting any task, scan all rules below for relevant constrains.
6. If two rules conflict, the higher-numbered (newer) rule wins.
7. Never delete rules. If a rule becomes obsolete, append a new rule that supersedes it.

### When to add a rule

-User explicitly corrects your ourput ("no, do it this way")
-User rejects a file, approach, or pattern
-You hit a bug caused by a wrong assumption about this codebase
-User states a preference ("always use X", "never do Y")

### Rule format example

```
14. [STYLE] Never add emojis to commit messages - project convention.
```

---

## Learned Rules

<!-- New rules are appended below this line. Do not edit above this section.>