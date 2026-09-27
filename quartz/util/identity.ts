import fs from "node:fs"
import path from "node:path"
import { ColorScheme } from "./theme"

// Identity tokens from the Publication Format Library (PFL-9). The tokens file
// is the single source of truth for the house identity across decks, one-pagers
// and this site; it is read here at build time so the Quartz colour config, and
// the OG images rendered from it, never hold a second copy of the values.
// Spec: identity-michael.md in the PFL project folder (planning vault).
const TOKENS = path.join(process.cwd(), "formats", "identities", "michael.css")

export type IdentityTokens = Record<string, string>

// Parse `--mr-*: value;` declarations out of one CSS block. The tokens file is
// a flat list of custom properties, so a regex is enough; no CSS parser needed.
function parseBlock(block: string): IdentityTokens {
  const tokens: IdentityTokens = {}
  for (const [, name, value] of block.matchAll(/--mr-([\w-]+)\s*:\s*([^;]+);/g)) {
    tokens[name] = value.trim()
  }
  return tokens
}

// The first block is the light identity (`:root, section`); the block whose
// selector names `[data-theme="dark"]` holds the dark overrides.
export function loadIdentity(): { light: IdentityTokens; dark: IdentityTokens } {
  const css = fs.readFileSync(TOKENS, "utf8").replace(/\/\*[\s\S]*?\*\//g, "")
  const blocks = [...css.matchAll(/([^{}]+)\{([^}]*)\}/g)]
  const light = blocks.find(([, sel]) => sel.includes(":root"))
  const dark = blocks.find(([, sel]) => sel.includes('data-theme="dark"'))
  if (!light) throw new Error(`No :root block in ${TOKENS}`)
  const lightTokens = parseBlock(light[2])
  return { light: lightTokens, dark: { ...lightTokens, ...parseBlock(dark?.[2] ?? "") } }
}

// Map identity tokens onto Quartz's nine colour slots. `secondary` carries
// links, so it takes the text-safe deep accent; `tertiary` (hover, active
// states) takes the accent itself, which passes AA at 5.7:1 on the ground.
export function identityColors(t: IdentityTokens): ColorScheme {
  return {
    light: t["bg"],
    lightgray: t["line"],
    gray: t["label"],
    darkgray: t["ink-2"],
    dark: t["ink"],
    secondary: t["accent-deep"],
    tertiary: t["accent"],
    highlight: t["surface"],
    textHighlight: t["accent-tint"],
  }
}
