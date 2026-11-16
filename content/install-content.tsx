import type { ReactNode } from 'react'
import { Download, Github, Shield, Terminal, ChevronDown, ArrowUpRight } from '../components/icons'

const STEPS: { number: string; title: string; body: ReactNode }[] = [
  { number: '01', title: 'Make it yours', body: <>Extract the ZIP. Move ROXY to a folder your user account can write, such as <code>%LOCALAPPDATA%\Programs\ROXY</code>. On Linux, run <code>chmod +x roxy-linux</code>.</> },
  { number: '02', title: 'Bring your models', body: <>Open <b>Models → API models</b> and add a key, or install an agent CLI. Keep your existing subscriptions and local workflows.</> },
  { number: '03', title: 'Pick up the thread', body: <>Start talking. Switch models whenever you need another perspective. Your full conversation follows you.</> },
]

export default function InstallContent() {
  return <div className="install-page">
    <header className="install-head">
      <p className="mono-label">Get started</p>
      <h1>Make yourself at home.</h1>
      <p className="install-lede">One executable, no installer, no runtime. Pick your platform and make ROXY yours in about two minutes.</p>
    </header>

    <div className="install-downloads">
      <article className="download-card">
        <div className="download-top"><span className="mono-label">Windows</span><span className="mono-label">x64 · Portable</span></div>
        <h2>Your new workspace.<br /><em>Ready when you are.</em></h2>
        <p className="download-spec">Windows 10 (1809+) or Windows 11, 64-bit.<br />No administrator rights required.</p>
        <a className="btn btn-primary" href="https://github.com/RoaraxAli/ROXY/releases/latest/download/roxy-windows-x64.zip"><Download size={16} /> Download for Windows <ArrowUpRight size={13} /></a>
        <a className="download-alt" href="https://github.com/RoaraxAli/ROXY/releases/latest/download/roxy.exe">Or download the standalone .exe <ArrowUpRight size={11} /></a>
        <span className="download-version">v0.2.0 · x64 · Portable ZIP</span>
      </article>

      <article className="download-card">
        <div className="download-top"><span className="mono-label">Linux</span><span className="mono-label">ARM64 · Binary</span></div>
        <h2>Native speed.<br /><em>Your kind of system.</em></h2>
        <p className="download-spec">Linux ARM64 with a desktop session and OpenGL.<br />A single, self-contained executable.</p>
        <a className="btn btn-primary" href="https://github.com/RoaraxAli/ROXY/releases/latest/download/roxy-linux"><Download size={16} /> Download for Linux <ArrowUpRight size={13} /></a>
        <a className="download-alt" href="#source">Build for Linux x86_64 from source <ArrowUpRight size={11} /></a>
        <span className="download-version">v0.2.0 · ARM64 · Binary</span>
      </article>
    </div>

    <div className="install-note"><Shield size={19} /><p><b>One thing to know.</b> Windows builds are unsigned, so SmartScreen may show “Unknown publisher”. Verify the SHA-256 checksum, then choose <b>More info → Run anyway</b>. <a href="#verify">How to verify your download →</a></p></div>

    <section className="install-steps">
      <h2>From download to first conversation.</h2>
      <div className="step-grid">{STEPS.map(({ number, title, body }) => <div key={number}><span className="mono-label">{number}</span><h3>{title}</h3><p>{body}</p></div>)}</div>
    </section>

    <details className="install-details"><summary><span><Terminal size={16} /> Linux: install from your terminal</span><ChevronDown size={15} /></summary><pre><code>curl -fL -o roxy https://github.com/RoaraxAli/ROXY/releases/latest/download/roxy-linux{`\n`}chmod +x roxy{`\n`}mkdir -p ~/.local/bin &amp;&amp; mv roxy ~/.local/bin/roxy{`\n`}roxy</code></pre><p>Your local data folder is <code>~/.config/roxy/</code>.</p></details>

    <details className="install-details" id="verify"><summary><span><Shield size={16} /> Verify the integrity of your download</span><ChevronDown size={15} /></summary><p>Every release includes <code>SHA256SUMS.txt</code>. Checksums catch a corrupted or substituted file; they do not replace an Authenticode signature.</p><pre><code># Windows PowerShell{`\n`}Get-FileHash .\roxy-windows-x64.zip -Algorithm SHA256{`\n\n`}# Linux{`\n`}sha256sum roxy-linux</code></pre><p>Compare the result with <a href="https://github.com/RoaraxAli/ROXY/releases">the checksums published on the release page</a>. If they differ, do not run the file.</p></details>

    <details className="install-details" id="windows-protected-your-pc-unknown-publisher"><summary><span><Shield size={16} /> Windows: “Protected your PC” / unknown publisher</span><ChevronDown size={15} /></summary><p>ROXY’s current Windows builds are <b>not code-signed</b>, because no trusted code-signing certificate is configured yet. SmartScreen therefore shows “Unknown publisher”; this does not mean the release is signed by an unknown third party.</p><p>Download only from the official <a href="https://github.com/RoaraxAli/ROXY/releases">GitHub Releases page</a> and verify the SHA-256 checksum above. If the checksum matches, select <b>More info → Run anyway</b>. Do not bypass this warning for builds from other sources.</p></details>

    <details className="install-details"><summary><span><ArrowUpRight size={16} /> Updates &amp; troubleshooting</span><ChevronDown size={15} /></summary><p>ROXY checks for updates at launch and downloads them in-app with a live progress bar. For a manual check, open <b>Settings → About → Check for updates</b>.</p><ul><li>Keep ROXY in a writable folder, not Windows Program Files.</li><li>Agent CLIs require Node.js LTS. Restart ROXY after installing it.</li><li>On Linux, launch from a graphical session with an OpenGL driver.</li><li>For 9Router, start the server and refresh its model list. It listens on <code>localhost:20128</code>.</li></ul></details>

    <section className="build-source" id="source">
      <div>
        <p className="mono-label">From source</p>
        <h2>Prefer to build it yourself?</h2>
        <p>Good. That is what open source is for. You’ll need Rust 1.80+ and a C toolchain.</p>
        <a className="text-link" href="https://github.com/RoaraxAli/ROXY"><Github size={14} /> View the repository <ArrowUpRight size={12} /></a>
      </div>
      <div className="source-code">
        <div className="code-head"><span className="mono-label">terminal</span><span className="code-dots"><i /><i /><i /></span></div>
        <pre><code>git clone https://github.com/RoaraxAli/ROXY.git{`\n`}cd ROXY{`\n`}cargo build --release{`\n`}./target/release/roxy</code></pre>
      </div>
    </section>
  </div>
}
