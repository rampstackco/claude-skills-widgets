#!/usr/bin/env python3
"""
Lint pattern files in the claude-skills-widgets catalog.

Validates:
- Required section headings per SCHEMA.md
- Minimum content thresholds (3+ examples, archetype refs)
- Discipline rules (no em-dashes, no forbidden phrases, no real-firm leaks)
- Word count within 500-1500 band

Run: python tools/lint_patterns.py

Exit codes:
- 0: all files pass
- 1: at least one file failed
"""

import os
import re
import sys
from pathlib import Path


REPO_ROOT = Path(__file__).parent.parent
PATTERNS_DIR = REPO_ROOT / "patterns"

REQUIRED_HEADINGS = [
    "## What it is",
    "## Why it works",
    "## When to use",
    "## When NOT to use",
    "## Variations",
    "## Real-world examples",
    "## Implementation notes",
    "## Archetype compatibility",
    "## Related patterns",
]

REQUIRED_METADATA = [
    r"\*\*Category\*\*:",
    r"\*\*Subcategory\*\*:",
    r"\*\*Conversion intent\*\*:",
]

VALID_CATEGORIES = {
    "CTA",
    "Lead Capture",
    "Social Proof",
    "Urgency",
    "Interactive Tooling",
}

CANONICAL_ARCHETYPES = {
    "Editorial Restrained",
    "Technical Precise",
    "Warm Conversational",
    "Bold Confident",
    "Playful Energetic",
    "Luxe Considered",
    "Clinical Trustworthy",
    "Rugged Utilitarian",
    "Retro Nostalgic",
    "Minimal Essentialist",
    "Vibrant Saturated",
    "Documentary Honest",
}

FORBIDDEN_PHRASES = [
    "leverage", "leveraging",
    "robust",
    "best practices",
    "seamless", "seamlessly",
    "streamlined", "streamline",
    "empower", "empowering",
    "game-changer", "game-changing",
    "cutting-edge",
    "revolutionary",
    "unlock the power",
    "harness the power",
    "in this guide",
    "let's dive in",
    "let's explore",
    "in conclusion",
    "to wrap up",
    "in today's fast-paced world",
    "at the end of the day",
    "plays a crucial role",
    "from the ground up",
    "take it to the next level",
]

# Real-firm watchlist. Any case-insensitive substring hit is an error.
#
# The roster itself is NOT stored in this public repo: it lives in the private
# rampstack/lint-config repo, and CI fetches it into the path named by
# REAL_FIRM_WATCHLIST_FILE. Keeping the list inline here published the very
# names this check exists to keep out.
#
# Fail closed: if the file is not provided, is missing, or is empty, the run
# FAILS. The one exception is the fork-pull-request path, where repository
# secrets are unavailable by design; those runs set
# ALLOW_MISSING_REAL_FIRM_WATCHLIST, the check is skipped loudly, and the
# push-to-main run is the enforcing backstop.

REAL_FIRM_WATCHLIST_ENV = "REAL_FIRM_WATCHLIST_FILE"
ALLOW_MISSING_ENV = "ALLOW_MISSING_REAL_FIRM_WATCHLIST"


def load_real_firm_watchlist():
    """Load the watchlist named by REAL_FIRM_WATCHLIST_FILE.

    Returns the token list, or None when the check is explicitly skipped on a
    fork PR. Exits non-zero rather than silently passing.
    """
    path = os.environ.get(REAL_FIRM_WATCHLIST_ENV, "").strip()
    if not path:
        if os.environ.get(ALLOW_MISSING_ENV, "").strip():
            print(
                f"WARNING: {REAL_FIRM_WATCHLIST_ENV} is not set; real-firm watchlist "
                "check SKIPPED. Expected on fork pull requests, where repository "
                "secrets are unavailable. The push-to-main run enforces this check."
            )
            return None
        print(
            f"ERROR: {REAL_FIRM_WATCHLIST_ENV} is not set. The watchlist could not be "
            "loaded, so the check cannot run. CI fetches it from "
            "rampstack/lint-config; see .github/workflows/lint.yml.",
            file=sys.stderr,
        )
        sys.exit(1)

    if not os.path.isfile(path):
        print(f"ERROR: real-firm watchlist file not found: {path}", file=sys.stderr)
        sys.exit(1)

    with open(path, encoding="utf-8") as fh:
        tokens = [
            line.strip()
            for line in fh
            if line.strip() and not line.strip().startswith("#")
        ]
    if not tokens:
        print(f"ERROR: real-firm watchlist at {path} is empty.", file=sys.stderr)
        sys.exit(1)
    return tokens

# Filename pattern: NN-kebab-case-name.md
FILENAME_PATTERN = re.compile(r"^\d{2}-[a-z][a-z0-9-]*\.md$")

# Pattern for em-dash (U+2014) and en-dash (U+2013), both forbidden.
# Written as escapes so this file itself contains no literal dash characters.
DASH_PATTERN = re.compile("[\u2014\u2013]")


class LintIssue:
    def __init__(self, severity, message):
        self.severity = severity  # "error" or "warning"
        self.message = message

    def __repr__(self):
        return f"[{self.severity.upper()}] {self.message}"


def lint_pattern_file(filepath: Path) -> list[LintIssue]:
    """Run all lint checks against a single pattern file."""
    issues = []
    content = filepath.read_text(encoding="utf-8")

    # Filename
    if not FILENAME_PATTERN.match(filepath.name):
        issues.append(LintIssue("error", f"Filename does not match NN-kebab-case-name.md: {filepath.name}"))

    # H1 title (line 1)
    lines = content.split("\n")
    if not lines or not lines[0].startswith("# "):
        issues.append(LintIssue("error", "File must start with an H1 title"))

    # Required metadata
    for pattern in REQUIRED_METADATA:
        if not re.search(pattern, content):
            issues.append(LintIssue("error", f"Missing required metadata field: {pattern}"))

    # Category must be valid
    category_match = re.search(r"\*\*Category\*\*:\s*(.+?)(?:\n|$)", content)
    if category_match:
        category_value = category_match.group(1).strip()
        if category_value not in VALID_CATEGORIES:
            issues.append(LintIssue("error", f"Invalid category '{category_value}'. Must be one of: {sorted(VALID_CATEGORIES)}"))

    # Required headings
    for heading in REQUIRED_HEADINGS:
        if heading not in content:
            issues.append(LintIssue("error", f"Missing required heading: {heading}"))

    # Real-world examples: count bullets in that section
    examples_section = extract_section(content, "## Real-world examples")
    if examples_section:
        bullet_count = sum(1 for line in examples_section.split("\n") if line.strip().startswith("- "))
        if bullet_count < 3:
            issues.append(LintIssue("error", f"Real-world examples section has {bullet_count} bullets; minimum 3 required"))

    # Variations: count subsection headings
    variations_section = extract_section(content, "## Variations")
    if variations_section:
        subsection_count = sum(1 for line in variations_section.split("\n") if line.strip().startswith("### "))
        if subsection_count < 2:
            issues.append(LintIssue("warning", f"Variations section has {subsection_count} subsections; 2-4 recommended"))

    # Archetype compatibility: must reference at least one canonical archetype
    archetype_section = extract_section(content, "## Archetype compatibility")
    if archetype_section:
        found_archetypes = [a for a in CANONICAL_ARCHETYPES if a in archetype_section]
        if not found_archetypes:
            issues.append(LintIssue("error", "Archetype compatibility section references no canonical archetypes"))
        # Check for non-canonical archetypes mentioned (potential typos or fabrications)
        non_canonical = re.findall(r"\*\*([A-Z][a-zA-Z ]+)\*\*:", archetype_section)
        for nc in non_canonical:
            if nc not in CANONICAL_ARCHETYPES:
                issues.append(LintIssue("warning", f"Possibly non-canonical archetype name '{nc}' in archetype-compatibility section"))

    # Word count
    word_count = len(content.split())
    if word_count < 500:
        issues.append(LintIssue("warning", f"Word count {word_count} below recommended 500"))
    elif word_count > 1500:
        issues.append(LintIssue("warning", f"Word count {word_count} above recommended 1500; review for trim opportunities"))

    # Em-dash / en-dash audit
    if DASH_PATTERN.search(content):
        positions = [m.start() for m in DASH_PATTERN.finditer(content)]
        issues.append(LintIssue("error", f"Em-dash or en-dash found at character positions: {positions}"))

    # Forbidden phrases
    content_lower = content.lower()
    for phrase in FORBIDDEN_PHRASES:
        if phrase in content_lower:
            issues.append(LintIssue("error", f"Forbidden phrase found: '{phrase}'"))

    # Real-firm scrub
    watchlist = load_real_firm_watchlist()
    if watchlist is not None:
        for term in watchlist:
            if term in content_lower:
                issues.append(LintIssue("error", f"Watchlist term found: '{term}'"))

    return issues


def extract_section(content: str, heading: str) -> str:
    """Extract content between a heading and the next heading at the same level."""
    pattern = re.compile(
        rf"{re.escape(heading)}\n(.+?)(?=\n## |\Z)",
        re.DOTALL,
    )
    match = pattern.search(content)
    return match.group(1) if match else ""


def main():
    print(f"Linting pattern files in {PATTERNS_DIR}\n")

    pattern_files = []
    for category_dir in PATTERNS_DIR.iterdir():
        if not category_dir.is_dir():
            continue
        for pattern_file in category_dir.glob("[0-9]*-*.md"):
            pattern_files.append(pattern_file)

    if not pattern_files:
        print("No pattern files found.")
        sys.exit(1)

    total_errors = 0
    total_warnings = 0
    files_with_issues = 0

    for filepath in sorted(pattern_files):
        rel_path = filepath.relative_to(REPO_ROOT)
        issues = lint_pattern_file(filepath)

        if not issues:
            continue

        files_with_issues += 1
        print(f"\n{rel_path}:")
        for issue in issues:
            print(f"  {issue}")
            if issue.severity == "error":
                total_errors += 1
            else:
                total_warnings += 1

    print(f"\n{'='*60}")
    print(f"Linted {len(pattern_files)} pattern files")
    print(f"Files with issues: {files_with_issues}")
    print(f"Errors: {total_errors}")
    print(f"Warnings: {total_warnings}")
    print(f"{'='*60}\n")

    sys.exit(1 if total_errors > 0 else 0)


if __name__ == "__main__":
    main()
