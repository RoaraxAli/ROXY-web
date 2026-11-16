import { Download, Github, Shield, Terminal, ChevronDown, ArrowUpRight, Cpu, Layers, Globe } from '../components/icons'

const BUILDS = [
  { platform: 'Windows', arch: 'x64', format: 'Portable ZIP', href: 'https://github.com/RoaraxAli/ROXY/releases/latest/download/roxy-windows-x64.zip', alt: 'https://github.com/RoaraxAli/ROXY/releases/latest/download/roxy.exe', note: 'Windows 10 (1809+) or 11, 64-bit. No admin rights.' },
  { platform: 'Windows', arch: 'x86', format: 'Portable ZIP', href: 'https://github.com/RoaraxAli/ROXY/releases/latest/download/roxy-windows-x86.zip', alt: 'https://github.com/RoaraxAli/ROXY/releases/latest/download/roxy-x86.exe', note: 'Windows 10 or 11, 32-bit. For older or smaller machines.' },
  { platform: 'Linux', arch: 'x86_64', format: 'Binary', href: 'https://github.com/RoaraxAli/ROXY/releases/latest/download/roxy-linux-x86_64', note: 'Most desktops and laptops. Requires a graphical session with OpenGL.' },
  { platform: 'Linux', arch: 'ARM64', format: 'Binary', href: 'https://github.com/RoaraxAli/ROXY/releases/latest/download/roxy-linux-aarch64', note: 'Raspberry Pi 4/5, Apple Silicon via Linux, ARM servers.' },
  { platform: 'Linux', arch: 'ARMv7', format: 'Binary', href: 'https://github.com/RoaraxAli/ROXY/releases/latest/download/roxy-linux-armv7', note: 'Older ARM boards and 32-bit ARM SBCs.' },
]

const STEPS = [
  { number: '01', title: 'Make it yours', body: <>Extract the archive. Move ROXY to a folder your user account can write, such as <code>%LOCALAPPDATA%\Programs\ROXY</code> on Windows or <code>~/.local/bin</code> on Linux. On Linux, run <code>chmod +x roxy-*</code>.</> },
  { number: '02', title: 'Bring your models', body: <>Open <b>Models → API models</b> and add a key, or install an agent CLI. Keep your existing subscriptions and local workflows.</> },
  { number: '03', title: 'Pick up the thread', body: <>Start talking. Switch models whenever you need another perspective. Your full conversation follows you.</> },
]

export default function InstallContent() {
  return <div className="install-page">
    <header className="install-head">
      <p className="mono-label">Get started</p>
      <h1>Make yourself at home.</h1>
      <p className="install-lede">One executable, no installer, no runtime. Pick your platform and architecture and make ROXY yours in about two minutes.</p>
    </header>

    <div className="build-grid">
      {BUILDS.map(({ platform, arch, format, href, alt, note }) => (
        <article className="build-card" key={`${platform}-${arch}`}>
          <div className="build-top">
            <div>
              <p className="mono-label">{platform} · {format}</p>
              <h3>{arch}</h3>
            </div>
          </div>
          <p className="build-note">{note}</p>
          <div className="build-actions">
            <a className="btn btn-primary" href={href}><Download size={15} /> Download {arch}</a>
            {alt && <a className="build-alt" href={alt}>Standalone .exe <ArrowUpRight size={11} /></a>}
          </div>
          <span className="build-version">v0.2.0 · {arch}</span>
        </article>
      ))}
    </div>

    <div className="install-note">
      <Shield size={18} />
      <p><b>One thing to know.</b> Windows builds are unsigned, so SmartScreen may show “Unknown publisher”. Verify the SHA-256 checksum, then choose <b>More info → Run anyway</b>. <a href="#verify">How to verify your download →</a></p>
    </div>

    <section className="install-steps">
      <h2>From download to first conversation.</h2>
      <div className="step-grid">{STEPS.map(({ number, title, body }) => <div key={number}><span className="mono-label">{number}</span><h3>{title}</h3><p>{body}</p></div>)}</div>
    </section>

    <details className="install-details"><summary><span><Terminal size={15} /> Linux: install from your terminal</span><ChevronDown size={14} /></summary><pre><code>curl -fL -o roxy https://github.com/RoaraxAli/ROXY/releases/latest/download/roxy-linux-x86_64{`\n`}chmod +x roxy{`\n`}mkdir -p ~/.local/bin && mv roxy ~/.local/bin/roxy{`\n`}roxy</code></pre><p>Your local data folder is <code>~/.config/roxy/</code>.</p></details>

    <details className="install-details" id="verify"><summary><span><Shield size={15} /> Verify the integrity of your download</span><ChevronDown size={14} /></summary><p>Every release includes <code>SHA256SUMS.txt</code>. Checksums catch a corrupted or substituted file; they do not replace an Authenticode signature.</p><pre><code># Windows PowerShell{`\n`}Get-FileHash .\roxy-windows-x64.zip -Algorithm SHA256{`\n\n`}# Linux{`\n`}sha256sum roxy-linux-x86_64</code></pre><p>Compare the result with <a href="https://github.com/RoaraxAli/ROXY/releases">the checksums published on the release page</a>. If they differ, do not run the file.</p></details>

    <details className="install-details"><summary><span><Shield size={15} /> Windows: “Protected your PC” / unknown publisher</span><ChevronDown size={14} /></summary><p>ROXY’s current Windows builds are <b>not code-signed</b>, because no trusted code-signing certificate is configured yet. SmartScreen therefore shows “Unknown publisher”; this does not mean the release is signed by an unknown third party.</p><p>Download only from the official <a href="https://github.com/RoaraxAli/ROXY/releases">GitHub Releases page</a> and verify the SHA-256 checksum above. If the checksum matches, select <b>More info → Run anyway</b>. Do not bypass this warning for builds from other sources.</p></details>

    <details className="install-details"><summary><span><ArrowUpRight size={15} /> Updates &amp; troubleshooting</span><ChevronDown size={14} /></summary><p>ROXY checks for updates at launch and downloads them in-app with a live progress bar. For a manual check, open <b>Settings → About → Check for updates</b>.</p><ul><li>Keep ROXY in a writable folder, not Windows Program Files.</li><li>Agent CLIs require Node.js LTS. Restart ROXY after installing it.</li><li>On Linux, launch from a graphical session with an OpenGL driver.</li><li>For 9Router, start the server and refresh its model list. It listens on <code>localhost:20128</code>.</li></ul></details>

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
