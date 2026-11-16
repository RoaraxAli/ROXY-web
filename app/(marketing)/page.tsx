import Link from 'next/link'
import { ProductWindow } from '../../components/product-window'
import { Reveal } from '../../components/reveal'
import { ArrowRight, ArrowUpRight, Check, ChevronDown, Cpu, Download, Github, Globe, Layers, Lock, Shield, Sparkles, Terminal, Zap } from '../../components/icons'

const FACTS = [
  ['40+', 'Providers'],
  ['9', 'Agent CLIs'],
  ['1', 'Executable'],
  ['0', 'Servers'],
]

export default function Home() {
  return <>
    <section className="hero"><div className="wrap">
      <div className="hero-copy">
        <div className="hero-meta"><span>Desktop app</span><i aria-hidden="true" /><span>Windows &amp; Linux</span><i aria-hidden="true" /><span>Open source</span></div>
        <h1><span className="line">Many models.</span><span className="line line-soft">One <em>clear</em> train of thought.</span></h1>
      </div>
      <div className="hero-support">
        <div className="hero-pitch">
          <p className="hero-lede">Move between the models you trust without leaving the conversation behind. Every message, every tool call, and every answer stays in one readable transcript.</p>
          <div className="hero-actions">
            <Link className="btn btn-primary" href="/install"><Download size={16} /> Download ROXY</Link>
            <a className="btn btn-ghost" href="https://github.com/RoaraxAli/ROXY"><Github size={16} /> Star on GitHub <ArrowUpRight size={13} /></a>
          </div>
        </div>
        <aside className="hero-aside" aria-label="At a glance">
          <dl>{FACTS.map(([value, label]) => <div key={label}><dt>{value}</dt><dd>{label}</dd></div>)}</dl>
          <p className="hero-aside-note">Everything runs on your machine. No account, no cloud, no telemetry.</p>
        </aside>
      </div>
      <figure className="hero-figure">
        <ProductWindow />
        <figcaption>Illustrative preview — a designed impression of the ROXY workspace, not a live screenshot.</figcaption>
      </figure>
      <ul className="trust-line"><li><Check size={13} /> No account needed</li><li><Check size={13} /> No telemetry</li><li><Check size={13} /> Your keys stay yours</li></ul>
    </div></section>

    <section className="section" id="product"><div className="wrap">
      <Reveal><header className="section-head">
        <p className="mono-label"><span>01</span> The workspace</p>
        <div className="section-head-row">
          <h2>Different models.<br />The same <em>you</em>.</h2>
          <p>Stop starting over. ROXY keeps your full conversation intact when you switch models, so every new perspective starts exactly where the last one left off.</p>
        </div>
      </header></Reveal>

      <div className="panel-grid">
        <Reveal className="panel-wrap"><article className="panel">
          <div className="panel-head"><span className="panel-icon"><Layers size={17} /></span><div><h3>A continuous conversation</h3><p>Pick the right model for the moment — not the right window.</p></div></div>
          <div className="handoff">
            <div className="handoff-model"><span className="model-chip">S</span><div><span className="mono-label">Start with</span><b>Claude Sonnet</b><small>Deep reasoning &amp; architecture</small></div><Check size={15} /></div>
            <div className="handoff-bridge"><span className="bridge-rule" /><span className="mono-label"><ArrowRight size={12} /> Context handoff · 12 messages</span><span className="bridge-rule" /></div>
            <div className="handoff-model"><span className="model-chip">G</span><div><span className="mono-label">Continue with</span><b>Gemini Pro</b><small>Fast implementation &amp; iteration</small></div><ArrowUpRight size={15} /></div>
            <p className="handoff-note"><Check size={12} /> Full history, attachments, and tool results travel with you.</p>
          </div>
        </article></Reveal>

        <Reveal className="panel-wrap" delay={90}><article className="panel">
          <div className="panel-head"><span className="panel-icon"><Terminal size={17} /></span><div><h3>Agents, already at home</h3><p>Install and run the CLIs you already trust. No setup maze.</p></div></div>
          <div className="agent-list">
            <div className="agent-list-head"><span className="mono-label">Available agents</span><span className="mono-label">9 installed</span></div>
            {['Codex CLI', 'Claude Code', 'Gemini CLI', 'OpenCode'].map(name => <div className="agent-row" key={name}><span className="agent-mark">{name[0]}</span><b>{name}</b><span className="agent-state"><i /> Ready</span><ArrowUpRight size={12} /></div>)}
            <p className="agent-more">Plus Qwen, Copilot, Amp, Crush &amp; Grok.</p>
          </div>
        </article></Reveal>
      </div>

      <Reveal><div className="spec-table">
        <article><span className="mono-label">Providers</span><h3>Every provider. One place.</h3><p>OpenAI, Anthropic, Google, Groq, OpenRouter, and 40+ OpenAI-compatible providers. Bring your keys; keep your freedom.</p><Globe size={18} /></article>
        <article><span className="mono-label">Privacy</span><h3>Private by default.</h3><p>Your keys and conversations stay on your device. Requests go directly to your provider, never through a ROXY server.</p><Lock size={18} /></article>
        <article><span className="mono-label">Engine</span><h3>Light on your machine.</h3><p>Native Rust. One executable. No Electron, no bundled browser, no runtime. Just a fast, focused workspace.</p><Cpu size={18} /></article>
      </div></Reveal>
    </div></section>

    <section className="section" id="routing"><div className="wrap">
      <Reveal><header className="section-head">
        <p className="mono-label"><span>02</span> Intelligent routing</p>
        <div className="section-head-row">
          <h2>A busy model<br />shouldn&rsquo;t stop <em>you</em>.</h2>
          <p>Rank your models once. When a provider is busy, rate-limited, or offline, ROXY moves to your next choice automatically. Your flow stays uninterrupted.</p>
        </div>
      </header></Reveal>
      <Reveal><div className="route-layout">
        <div className="route-copy">
          <div className="route-points">
            <div><span className="mono-label">01</span><p><b>Rank once.</b>Set the order you want, per provider.</p></div>
            <div><span className="mono-label">02</span><p><b>Fail over early.</b>Fallback happens before the first token — never mid-response.</p></div>
            <div><span className="mono-label">03</span><p><b>Stay local.</b>Routing runs on your machine through 9Router.</p></div>
          </div>
          <a className="text-link" href="https://docs.roxy.theali.app/router">Explore model priority <ArrowRight size={14} /></a>
        </div>
        <div className="route-demo">
          <div className="route-top"><span className="mono-label">Your model priority</span><span className="route-live"><i /> Auto-fallback</span></div>
          <div className="route-item"><span className="route-index">01</span><span className="model-chip">S</span><div><b>Claude Sonnet</b><small>anthropic / claude-sonnet</small></div><span className="route-status"><i /> Connected</span></div>
          <div className="route-gap"><ChevronDown size={13} /><span className="mono-label">If unavailable</span></div>
          <div className="route-item"><span className="route-index">02</span><span className="model-chip">G</span><div><b>Gemini Pro</b><small>google / gemini-pro</small></div><span className="route-status"><i /> Ready</span></div>
          <div className="route-gap"><ChevronDown size={13} /><span className="mono-label">If unavailable</span></div>
          <div className="route-item muted"><span className="route-index">03</span><span className="model-chip">O</span><div><b>GPT</b><small>openai / gpt</small></div><span className="route-status">Standby</span></div>
          <p className="route-foot"><Shield size={12} /> Fallback resolves before the first token.</p>
        </div>
      </div></Reveal>
    </div></section>

    <section className="section" id="open-source"><div className="wrap">
      <Reveal><header className="section-head">
        <p className="mono-label"><span>03</span> Yours to build on</p>
        <div className="section-head-row">
          <h2>No black box.<br /><em>Just good software.</em></h2>
          <p>ROXY is open source and built on tools the community already trusts. Read the source, shape the roadmap, or build something of your own.</p>
        </div>
      </header></Reveal>
      <Reveal><div className="source-layout">
        <div className="source-copy">
          <div className="source-actions"><a className="btn btn-ghost" href="https://github.com/RoaraxAli/ROXY"><Github size={16} /> Explore the source <ArrowUpRight size={13} /></a><a className="text-link" href="https://docs.roxy.theali.app">Read the documentation <ArrowUpRight size={13} /></a></div>
          <ul className="source-facts"><li><span className="mono-label">Language</span>Rust</li><li><span className="mono-label">License</span>MIT</li><li><span className="mono-label">Built on</span>OpenCode &amp; 9Router</li></ul>
        </div>
        <div className="source-code">
          <div className="code-head"><span className="mono-label">terminal</span><span className="code-dots"><i /><i /><i /></span></div>
          <pre><code><span className="code-muted">$</span> cargo build --release{`\n`}<span className="code-muted"># And make it entirely yours.</span></code></pre>
        </div>
      </div></Reveal>
    </div></section>

    <section className="closing"><div className="wrap">
      <Reveal><div className="closing-inner">
        <span className="closing-mark"><Sparkles size={22} /></span>
        <h2>Less switching.<br /><em>More thinking.</em></h2>
        <p>Your next idea doesn&rsquo;t care which model helps you build it.</p>
        <Link href="/install" className="btn btn-primary"><Download size={16} /> Get ROXY for free <ArrowRight size={14} /></Link>
        <span className="mono-label closing-meta"><Zap size={11} /> Open source · One executable · No account</span>
      </div></Reveal>
    </div></section>
  </>
}
