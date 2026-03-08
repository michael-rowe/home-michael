#!/usr/bin/env python3
"""
Transform nested linkedin: YAML frontmatter to flat linkedin-status / linkedin-date fields.

Current format:
  linkedin:
    status: posted
    date: 2026-03-06

or:
  linkedin:
    status: "—"

New format:
  linkedin-status: posted
  linkedin-date: 2026-03-06

or:
  linkedin-status: "—"
"""

import re
import sys
from pathlib import Path

CONTENT_ROOT = Path("/home/michael/sharing/content")
SKIP_DIRS = {"templates", "personas"}


def find_md_files(root: Path) -> list[Path]:
    files = []
    for path in root.rglob("*.md"):
        # Skip excluded directories
        parts = path.relative_to(root).parts
        if any(part in SKIP_DIRS for part in parts):
            continue
        files.append(path)
    return sorted(files)


def transform_linkedin_block(content: str) -> tuple[str, bool]:
    """
    Find and replace the nested linkedin: block with flat fields.
    Returns (new_content, was_changed).
    """
    # Pattern matches the linkedin block inside YAML frontmatter.
    # Handles:
    #   linkedin:\n  status: posted\n  date: 2026-03-06\n
    #   linkedin:\n  status: "—"\n
    # The block ends at the next non-indented line or end of frontmatter.
    pattern = re.compile(
        r'^linkedin:\n'
        r'  status: (?P<status>.+?)\n'
        r'(?:  date: (?P<date>\S+)\n)?',
        re.MULTILINE
    )

    def replacer(m: re.Match) -> str:
        status = m.group("status")
        date = m.group("date")
        result = f"linkedin-status: {status}\n"
        if date:
            result += f"linkedin-date: {date}\n"
        return result

    new_content, count = pattern.subn(replacer, content)
    return new_content, count > 0


def process_file(path: Path, dry_run: bool = False) -> bool:
    """Process a single file. Returns True if the file was (or would be) changed."""
    original = path.read_text(encoding="utf-8")

    if "linkedin:" not in original:
        return False

    transformed, changed = transform_linkedin_block(original)

    if not changed:
        return False

    if not dry_run:
        path.write_text(transformed, encoding="utf-8")

    return True


def main():
    dry_run = "--dry-run" in sys.argv

    files = find_md_files(CONTENT_ROOT)
    updated = []
    skipped_no_block = 0

    for f in files:
        try:
            if process_file(f, dry_run=dry_run):
                updated.append(f)
            else:
                skipped_no_block += 1
        except Exception as e:
            print(f"ERROR processing {f}: {e}", file=sys.stderr)

    mode = "DRY RUN — " if dry_run else ""
    print(f"{mode}Files updated: {len(updated)}")
    print(f"Files unchanged (no matching block): {skipped_no_block}")
    if updated:
        print("\nUpdated files:")
        for f in updated:
            print(f"  {f}")


if __name__ == "__main__":
    main()
