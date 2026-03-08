#!/usr/bin/env python3
"""
Add linkedin frontmatter field to Markdown content files.
"""

import os
import re
from pathlib import Path

BASE = Path("/home/michael/sharing/content")

# Directories to process
TARGET_DIRS = [
    BASE / "Posts",
    BASE / "Essays",
    BASE / "Notes",
    BASE / "Courses",
    BASE / "Presentations",
    BASE / "Bibliography",
]

# Files with specific posted status
POSTED = {
    BASE / "Posts/2026-03-05-ai-agents-lecture-slides.md": "2026-03-06",
    BASE / "Posts/2026-03-03-ai-agent-governance-higher-education.md": "2026-03-04",
}

# Files that get status: "—" explicitly (also catches the third special case)
NOT_POSTED_EXPLICIT = {
    BASE / "Posts/2026-03-08-automate-weekly-reading-review-claude-code.md",
}

LINKEDIN_POSTED_TMPL = 'linkedin:\n  status: posted\n  date: {date}\n'
LINKEDIN_NOT_POSTED_TMPL = 'linkedin:\n  status: "—"\n'

stats = {
    "updated": 0,
    "skipped_already_has_field": 0,
    "skipped_no_frontmatter": 0,
    "errors": 0,
}

skipped_files = []
error_files = []
updated_files = []


def process_file(filepath: Path) -> None:
    try:
        text = filepath.read_text(encoding="utf-8")
    except Exception as e:
        stats["errors"] += 1
        error_files.append((str(filepath), str(e)))
        return

    # Must start with ---
    if not text.startswith("---"):
        stats["skipped_no_frontmatter"] += 1
        skipped_files.append((str(filepath), "no frontmatter"))
        return

    # Find closing ---
    # The opening --- is at position 0; we need the next --- on its own line
    rest = text[3:]  # skip the opening ---
    match = re.search(r'\n---\s*\n', rest)
    if not match:
        # Try end of file variant (closing --- at very end without trailing newline)
        match = re.search(r'\n---\s*$', rest)
    if not match:
        stats["skipped_no_frontmatter"] += 1
        skipped_files.append((str(filepath), "no closing frontmatter delimiter"))
        return

    # Extract frontmatter content
    frontmatter_content = rest[:match.start()]

    # Check if linkedin field already exists
    if re.search(r'^\s*linkedin\s*:', frontmatter_content, re.MULTILINE):
        stats["skipped_already_has_field"] += 1
        skipped_files.append((str(filepath), "already has linkedin field"))
        return

    # Determine what to insert
    if filepath in POSTED:
        date = POSTED[filepath]
        insert_block = LINKEDIN_POSTED_TMPL.format(date=date)
    else:
        insert_block = LINKEDIN_NOT_POSTED_TMPL

    # Build new content: everything up to (but not including) the closing ---
    # then insert the linkedin block, then the closing ---
    closing_start = 3 + match.start()  # position in original text
    closing_end = 3 + match.end()      # end of the closing --- line (including newline)

    # Get the closing delimiter as it appears
    closing_delim = text[closing_start:closing_end]

    new_text = text[:closing_start] + insert_block + text[closing_start:]

    try:
        filepath.write_text(new_text, encoding="utf-8")
        stats["updated"] += 1
        updated_files.append(str(filepath))
    except Exception as e:
        stats["errors"] += 1
        error_files.append((str(filepath), str(e)))


def collect_files() -> list[Path]:
    files = []
    for d in TARGET_DIRS:
        if not d.exists():
            print(f"  WARNING: Directory does not exist: {d}")
            continue
        for f in sorted(d.rglob("*.md")):
            files.append(f)
    return files


def main():
    files = collect_files()
    print(f"Found {len(files)} .md files across target directories.\n")

    for f in files:
        process_file(f)

    print("=== Results ===")
    print(f"Updated:                    {stats['updated']}")
    print(f"Skipped (already has field): {stats['skipped_already_has_field']}")
    print(f"Skipped (no frontmatter):   {stats['skipped_no_frontmatter']}")
    print(f"Errors:                     {stats['errors']}")

    if updated_files:
        print(f"\nUpdated files ({len(updated_files)}):")
        for f in updated_files:
            print(f"  {f}")

    skipped_with_reason = [(f, r) for f, r in skipped_files if r != "already has linkedin field"]
    if skipped_with_reason:
        print(f"\nSkipped files (non-trivial):")
        for f, reason in skipped_with_reason:
            print(f"  [{reason}] {f}")

    if error_files:
        print(f"\nError files:")
        for f, err in error_files:
            print(f"  {f}: {err}")

    # Verify the three special cases
    print("\n=== Verification of special cases ===")
    for special_path, expected_date in POSTED.items():
        if special_path.exists():
            content = special_path.read_text()
            if f"status: posted" in content and expected_date in content:
                print(f"  OK (posted {expected_date}): {special_path.name}")
            else:
                print(f"  FAIL: {special_path.name}")

    not_posted_path = BASE / "Posts/2026-03-08-automate-weekly-reading-review-claude-code.md"
    if not_posted_path.exists():
        content = not_posted_path.read_text()
        if 'status: "—"' in content:
            print(f'  OK (status: "—"): {not_posted_path.name}')
        else:
            print(f"  FAIL: {not_posted_path.name}")


if __name__ == "__main__":
    main()
