# Claude Video Brief — ROXY intro animation

> Drop this entire file into a fresh Claude session (with the `remotion-video-creation` skill,
> or your preferred motion tool) together with the five screenshots listed below.
> The goal: a 15-second product intro that can ship as a hero video on the site and as
> social cuts.

## 0. What ROXY is

ROXY is a native desktop AI client written in Rust. One conversation, every model:
the user switches which model answers **mid-thread** and the full transcript is
replayed to whichever provider serves the next turn. It bundles a 9Router
priority fallback (ranked models, automatic fall-through on failure), agent CLIs
(Codex, Claude Code, Gemini, OpenCode, …) and 40+ OpenAI-compatible providers.
Built on OpenCode & 9Router. No account, no telemetry, no backend.

**Tagline:** "One session. Every model."
**Brand line:** "BUILT ON OPENCODE & 9ROUTER"

## 1. Deliverables

1. `roxy-intro-16x9.mp4` — 1920×1080, 15.0s, 30fps, H.264 + AAC, ≤ 12 MB.
2. `roxy-intro-9x16.mp4` — 1080×1920, same content reframed for vertical (TikTok/Reels/Shorts).
3. `roxy-intro-1x1.mp4` — 1080×1080 (LinkedIn/X).
4. A Remotion project (or After Effects project) so the copy and timings can be edited.
5. A 6-second silent GIF loop of the hero moment (model switch) for the README.

All cuts share one storyboard; only framing and pacing change.

## 2. Brand system (use exactly)

**Palette (dark, single accent):**
- Background deep: `#07070a`
- Background soft: `#0b0b10`
- Panel: `#101015`
- Border: `#23232c` / soft `#1a1a21`
- Text: `#ececf1`
- Text dim: `#9c9caa`
- Text faint: `#6b6b7a`
- Accent (lime): `#c8f751` — the only saturated colour. Use it for the mark, the
  handoff line, progress, and the final CTA. Never for large fills.
- Danger/warn exist (`#ec6a60`, `#ffb84d`) but are not part of this spot.

**Typography:**
- UI sans: Inter (400/500/600/700). Use 600 for headings, 400 for body.
- Mono: JetBrains Mono. Use for model names, tokens, code, the "BUILT ON …" line,
  and the handoff marker. Letter-spacing +1.2 to +3px on uppercase mono labels.
- Wordmark: `ROXY` in 700, letter-spacing 6–8px, uppercase.

**Logo mark:** rounded square (corner radius ~8px on a 32px grid), lime fill
`#c8f751`, containing a single white/near-black monoline glyph — a stylised
"R" drawn as one continuous stroke (vertical stem, bowl, then a leg that exits
bottom-right). See `assets/logo.svg` and `assets/roxy-brand.svg`.

**Motion language (match the app):**
- Easing: `cubic-bezier(0.22, 1, 0.36, 1)` for entrances (ease-out-expo-ish),
  `cubic-bezier(0.4, 0, 0.2, 1)` for exits.
- Springs: stiffness 180, damping 22 for UI elements; stiffness 120, damping 18
  for the window/brand.
- Durations: micro 120ms, element 240ms, scene 400–600ms. Nothing slower than 700ms.
- Stagger: 40–60ms between siblings.
- Reduced motion: every animated element must have a static fallback; honour
  `prefers-reduced-motion`.
- No bouncy overshoot on text. Subtle overshoot (≤ 4px) is allowed on the mark
  and on the progress bar fill only.

## 3. Assets to use

All under `assets/` of the ROXY-web repo (and the app repo):
- `assets/logo.svg`, `assets/roxy-brand.svg`
- `assets/shots/01-splash.png` — the loader: dark field, centred lime mark,
  "ROXY", "one session · every model", stage text "INITIALISING RUNTIME", and
  the line "BUILT ON OPENCODE & 9ROUTER".
- `assets/shots/02-chat.png` — the main window: rail (Chat/Models/Settings),
  session list, transcript with a user bubble, an assistant bubble, a centred
  handoff marker "HANDOFF · CLAUDE-SONNET-4.5 → GPT-5-CODEX · CONTEXT CARRIED",
  composer with the model chip, token counter.
- `assets/shots/03-models-router.png` — Models page scrolled to the 9Router
  card: ranked model list 01–06 with ↑/↓, "online" pill, "MODEL PRIORITY"
  header, "Rank your models once…".
- `assets/shots/04-picker.png` — the model picker overlay: search field,
  grouped providers, "No 'Auto' entry — you always see what will answer".
- `assets/shots/05-about.png` — Settings → About: version pill, update status,
  "Check for updates" / "Install update" buttons, provider credits.

Do not invent UI. If a needed state isn't in a screenshot, animate the existing
screenshot (pan/zoom/crop) rather than redrawing chrome.

## 4. Storyboard (15.0s @ 30fps = 450 frames)

### Beat 1 — "The problem" (0.0–2.4s, frames 0–72)
Black field `#07070a`. Three small terminal-window silhouettes fade in, stacked
and offset, each labelled in mono: "chatgpt", "claude", "gemini". A fourth
label "context" drifts between them and dissolves. Voiceover (optional) or
on-screen caption: *"Every model wants its own window. Its own history."*
Exit: the three windows collapse to a single point of light.

### Beat 2 — "One session" (2.4–5.6s, frames 72–168)
The point of light becomes the ROXY mark (lime square, 58px → 96px, spring
stiffness 120/damping 18). Wordmark "ROXY" types in letter-by-letter
(40ms/char, mono 700, tracking 8px). Tagline fades up: "one session · every
model". The loader screenshot (`01-splash.png`) scales in behind the mark at
0.85× → 1.0× with a soft blur-to-sharp (8px → 0) over 400ms. The stage line
"INITIALISING RUNTIME" ticks to "PROBING GATEWAYS" to "READY". The
"BUILT ON OPENCODE & 9ROUTER" line lands last, in lime mono, +1.2 letter-spacing.
Hold 600ms.

### Beat 3 — "The switch" (5.6–9.2s, frames 168–276)  ← hero moment, also the GIF
Crossfade to `02-chat.png` (full window, 1280×800, centred, subtle drop shadow).
Caption (bottom-left, mono, dim): "Switch mid-thread. Nothing is lost."
At 6.4s: the model chip in the header pulses (scale 1.0→1.06→1.0, 240ms) and
the transcript scrolls up one turn. At 7.0s: the centred handoff marker
`HANDOFF · CLAUDE-SONNET-4.5 → GPT-5-CODEX · CONTEXT CARRIED` wipes in left-to-right
with a lime underline (300ms, ease-out-expo). At 7.6s: a new assistant bubble
types in at ~45 chars/s with a blinking caret. At 8.4s: the composer's model
chip swaps from "CLAUDE" to "GPT-5-CODEX" with a 180ms crossfade.

### Beat 4 — "Priority routing" (9.2–12.0s, frames 276–360)
Pan/zoom to `03-models-router.png` (scale 1.0→1.12, translate to centre the
9Router card). Caption: "Rank your models. ROXY walks the list." The ranked
list items 01–06 stagger in (50ms each) with a lime left-bar that grows
0→100% height. The "online" pill fades in. A small animated diagram overlays
the card: a request arrow enters from the left, hits item 01, bounces to 02
when 01 "fails" (red flash → grey), then lands on 03 with a green check — all
in 900ms. Sub-caption: "Falls through before any token streams."

### Beat 5 — "Ship it" (12.0–15.0s, frames 360–450)
Cut to a clean dark field. The mark returns, smaller (64px), top-centre. The
wordmark and tagline. Then three CTAs fade up staggered (80ms):
- "Download" (primary, lime fill) → https://github.com/RoaraxAli/ROXY/releases/latest
- "Read the docs" → https://roaraxali.github.io/ROXY-web/docs.html
- "Source" → https://github.com/RoaraxAli/ROXY
Below them, mono faint: "WINDOWS x64 · LINUX ARM64 · ~7 MB · NO TELEMETRY".
The "BUILT ON OPENCODE & 9ROUTER" line fades in last at the very bottom.
Fade to black over the last 400ms.

## 5. Audio

- 0.0–2.4s: low ambient drone (−24 LUFS), a single soft tick on each window
  collapse.
- 2.4s: a short, warm chime (two notes, ~240ms) on the mark landing.
- 5.6–9.2s: very subtle typing tick (−30 LUFS) synced to the assistant bubble;
  a soft whoosh on the handoff wipe.
- 9.2–12.0s: a light "ping" on the successful fall-through.
- 12.0–15.0s: music resolves to a tonic; final 400ms fade.
- Keep the whole mix at −16 LUFS integrated, −1 dBTP true peak.

## 6. Technical constraints

- Use the bundled screenshots as the only UI imagery. Do not redraw the app
  chrome in vector — animate the PNGs (scale, translate, crop, opacity, blur).
- Text overlays must be real text (not baked into images) so they stay crisp at
  4K if we upscale later.
- Respect `prefers-reduced-motion`: provide a static 15s version with no
  movement (crossfades only).
- All motion must be deterministic (no random seeds) so renders are reproducible.
- File size budget 12 MB for the 16:9 cut; use CRF 20, two-pass if needed.

## 7. Do not

- Do not show any IP address, hostname, or private path. The only URLs are
  github.com/RoaraxAli/ROXY, roaraxali.github.io/ROXY-web, and the releases page.
- Do not invent features. If something isn't in a screenshot or in §0, leave it out.
- Do not use the word "Auto" anywhere — ROXY deliberately has no Auto model.
- Do not make the lime accent dominate; it is a signal colour, not a theme.

## 8. Success check

Render at 30fps, watch once with sound off, then with sound on. The viewer
should be able to say, in one sentence, what ROXY does and why they'd switch
models mid-thread — without reading any caption twice.
