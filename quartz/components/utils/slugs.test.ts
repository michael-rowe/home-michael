import test, { describe } from "node:test"
import assert from "node:assert"
import { FullSlug } from "../../util/path"
import { comparableSlug, isSectionIndex, isInSection } from "./slugs"

const s = (x: string) => x as FullSlug

describe("comparableSlug", () => {
  test("drops the trailing slash simplifySlug leaves on folder pages", () => {
    assert.strictEqual(comparableSlug(s("Newsletters/index")), "Newsletters")
    assert.strictEqual(comparableSlug(s("abc/index")), "abc")
  })

  test("leaves ordinary page slugs alone", () => {
    assert.strictEqual(comparableSlug(s("Newsletters/2026-07")), "Newsletters/2026-07")
    assert.strictEqual(comparableSlug(s("newsletter")), "newsletter")
    assert.strictEqual(comparableSlug(s("abc/def")), "abc/def")
  })

  test("root index collapses to empty rather than a bare slash", () => {
    assert.strictEqual(comparableSlug(s("index")), "")
  })
})

describe("isSectionIndex", () => {
  test("matches the folder page, which is the case a bare === misses", () => {
    assert(isSectionIndex(s("Newsletters/index"), "Newsletters"))
  })

  test("does not match issues inside the section", () => {
    assert(!isSectionIndex(s("Newsletters/2026-07"), "Newsletters"))
  })

  test("does not match a different section, or the root index", () => {
    assert(!isSectionIndex(s("Essays/index"), "Newsletters"))
    assert(!isSectionIndex(s("index"), ""))
  })
})

describe("isInSection", () => {
  test("covers the index and everything beneath it", () => {
    assert(isInSection(s("Newsletters/index"), "Newsletters"))
    assert(isInSection(s("Newsletters/2026-07"), "Newsletters"))
  })

  test("does not match a section that merely shares a prefix", () => {
    assert(!isInSection(s("NewslettersArchive/2026-07"), "Newsletters"))
    assert(!isInSection(s("Essays/index"), "Newsletters"))
  })
})
