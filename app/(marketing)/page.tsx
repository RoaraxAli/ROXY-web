export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap">
          <div className="kicker">Native desktop · Rust · Open source</div>
          <h1>One session.<br /><em>Every model.</em></h1>
          <p className="lede">
            ROXY is a single native window for every model you already have access to:
            hosted APIs, local agent CLIs, and a priority router that falls through when
            one provider is busy. Switch mid-thread — the full transcript goes with you.
          </p>
          <div className="actions">
            <a className="btn primary" href="/install">Download ROXY <span className="sub">v0.2.0</span></a>
            <a className="btn" href="/docs">Read the docs</a>
            <a className="btn" href="https://github.com/RoaraxAli/ROXY" rel="noopener">View source</a>
          </div>
          <div className="meta-line">WINDOWS x64 · LINUX ARM64 · ~8 MB · NO TELEMETRY · NO ACCOUNT</div>

          <div className="mock" role="img" aria-label="ROXY window preview">
            <div className="titlebar"><span className="dot" /><span className="dot" /><span className="dot" /><span className="url">roxy — session · rust-auth-refactor</span></div>
            <div className="body">
              <div className="rail">
                <div className="row on" /><div className="row" /><div className="row" />
                <div className="row" style={{ height: 1, background: '#181820' }} />
                <div className="row" /><div className="row" />
              </div>
              <div className="chat">
                <div className="bubble user">Refactor the token store and keep the public API stable.</div>
                <div className="bubble">I’ll inventory the call sites first, then move the implementation behind the existing facade.</div>
                <div className="handoff">HANDOFF · CDX → GEM · CONTEXT CARRIED</div>
                <div className="bubble">The facade is preserved. Two call sites needed explicit lifetimes; tests pass locally.</div>
                <div className="composer"><span className="pill">9router · auto-fallback</span><span className="pill">⌘↵ send</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="block" id="why">
        <div className="wrap">
          <div className="eyebrow">Why ROXY</div>
          <h2>Stop re-explaining your work to a new model.</h2>
          <p className="section-lede">
            Every AI tool wants its own window, its own history and its own context.
            ROXY keeps one thread and lets the model behind it change. When a quota runs
            out or a provider is degraded, the conversation does not restart.
          </p>
          <div className="grid-3">
            <div className="card"><div className="icon-badge">01</div><h3>Shared context</h3><p>Switching model never drops a message. The whole transcript is replayed to whichever provider answers next.</p></div>
            <div className="card"><div className="icon-badge">02</div><h3>Priority routing</h3><p>Rank the models you trust. 9Router walks that order and falls through automatically when one is rate-limited or down.</p></div>
            <div className="card"><div className="icon-badge">03</div><h3>Bring your own keys</h3><p>40+ OpenAI-compatible providers from a built-in catalogue. Keys stay on your machine, in your own config folder.</p></div>
          </div>
        </div>
      </section>

      <section className="block" id="stack">
        <div className="wrap">
          <div className="eyebrow">Built on OpenCode &amp; 9Router</div>
          <h2>Two engines, one window.</h2>
          <p className="section-lede">
            ROXY is the interface. Under it, OpenCode runs as the agent runtime and
            9Router keeps model traffic flowing. You install a tool once; ROXY keeps
            using it for every session.
          </p>
          <div className="grid-2">
            <div className="card">
              <h3>OpenCode</h3>
              <p>The agent runtime ROXY drives headlessly. Install it from <b>Models → CLI agents</b>; hosted API turns are routed through OpenCode&apos;s own configuration without touching your saved auth files.</p>
              <p style={{ marginTop: 10 }}><a href="/docs/opencode">How OpenCode integration works →</a></p>
            </div>
            <div className="card">
              <h3>9Router</h3>
              <p>A local router on <code>localhost:20128</code> that exposes 40+ providers behind one OpenAI-compatible endpoint. ROXY reads its model list and lets you rank it.</p>
              <p style={{ marginTop: 10 }}><a href="/docs/router">Model priority and fallback →</a></p>
            </div>
          </div>
          <div className="callout" style={{ marginTop: 18 }}>
            <b>Local by default.</b> ROXY talks to <code>localhost</code> or straight to the
            provider you configured. There is no ROXY cloud, no relay, and no telemetry.
          </div>
        </div>
      </section>

      <section className="block" id="features">
        <div className="wrap">
          <div className="eyebrow">Features</div>
          <h2>Small binary. Real desktop app.</h2>
          <p className="section-lede">No Electron, no webview, no runtime to install. A single executable that draws its UI on the GPU.</p>
          <div className="grid-3">
            <div className="card"><h3>Streaming</h3><p>Server-sent tokens through your gateway, with a stop button that actually stops the process.</p></div>
            <div className="card"><h3>Local agents</h3><p>Codex, Claude Code, Gemini CLI, Qwen, Copilot, Amp, Crush, Grok — installed into ROXY&apos;s own folder, no admin rights.</p></div>
            <div className="card"><h3>Sessions that persist</h3><p>Every transcript is JSON on disk. Search, rename, pin, archive, delete — no account needed.</p></div>
            <div className="card"><h3>In-app updates</h3><p>A real progress bar, then ROXY swaps its binary and restarts. No terminal window, no manual download.</p></div>
            <div className="card"><h3>Markdown rendering</h3><p>Code fences, lists, bold and inline code rendered natively in the transcript.</p></div>
            <div className="card"><h3>Honest security</h3><p>Unsigned Windows builds are labelled as such, with SHA-256 checksums published for every release.</p></div>
          </div>
        </div>
      </section>

      <section className="block" id="start">
        <div className="wrap">
          <div className="eyebrow">Get started</div>
          <h2>Three steps to your first session.</h2>
          <ol className="steps" style={{ marginTop: 24 }}>
            <li><b>Download the build for your OS</b><p>Windows x64 or Linux ARM64. No installer, no admin rights — one executable.</p></li>
            <li><b>Connect a model</b><p>Install a CLI agent in one click, add an API key, or start 9Router and let it fan out to providers.</p></li>
            <li><b>Talk, then switch</b><p>Pick any model from the composer. The transcript follows you; priority fallback handles the rest.</p></li>
          </ol>
          <p style={{ marginTop: 26 }}><a className="btn primary" href="/install">Install ROXY</a></p>
        </div>
      </section>

      <section className="block" id="faq">
        <div className="wrap">
          <div className="eyebrow">Questions</div>
          <h2>Before you download.</h2>
          <div style={{ marginTop: 24 }}>
            <details className="faq"><summary>Is ROXY free?</summary><p>Yes. ROXY itself is open source and free. You pay only for the model providers you connect — or use the free tiers some of them offer.</p></details>
            <details className="faq"><summary>Does it send my data anywhere?</summary><p>No. ROXY has no telemetry and no backend. Requests go directly to the endpoint you configured, or to a router running on your own machine.</p></details>
            <details className="faq"><summary>Why does Windows warn about the download?</summary><p>The builds are not code-signed yet, so Windows cannot show a verified publisher. Every release publishes SHA-256 checksums so you can verify the file you downloaded. See <a href="/install#verify">verifying a download</a>.</p></details>
            <details className="faq"><summary>Do I need OpenCode or 9Router?</summary><p>No. ROXY works with plain API providers on its own. OpenCode adds the agent runtime; 9Router adds multi-provider priority fallback.</p></details>
          </div>
        </div>
      </section>
    </>
  )
}
