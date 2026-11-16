import { Download, Github, Shield, Terminal, ChevronDown, ArrowUpRight } from '../components/icons'

const BUILDS = [
  { platform: 'Windows', arch: 'x64', format: 'Portable ZIP', href: 'https://github.com/RoaraxAli/ROXY/releases/latest/download/roxy-windows-x64.zip', alt: 'https://github.com/RoaraxAli/ROXY/releases/latest/download/roxy.exe', note: 'Windows 10 (1809+) or 11, 64-bit. No admin rights. SHA256: 4bcc4e77…', sha: '4bcc4e77e8da926bb23e7da6bfd235f9341d0331a9ed4cdb8d427eeabc97b3d0' },
  { platform: 'Linux', arch: 'x64', format: 'Binary', href: 'https://github.com/RoaraxAli/ROXY/releases/latest/download/roxy-linux', note: 'Any modern 64-bit distro with a graphical session and OpenGL. SHA256: aa548da3…', sha: 'aa548da30f6fab3b95588ae5599abefd8ccec8a77c991a91571b1f317e58bc30' },
]

const COMING = [
  { platform: 'Windows', arch: 'ARM64', note: 'Windows 11 on ARM. Build from source for now.' },
  { platform: 'macOS', arch: 'Apple Silicon', note: 'macOS 12+ on M-series. Build from source for now.' },
  { platform: 'macOS', arch: 'Intel', note: 'macOS 12+ on Intel Macs. Build from source for now.' },
  { platform: 'Linux', arch: 'ARM64', note: 'Raspberry Pi, ARM servers. Build from source for now.' },
  { platform: 'Linux', arch: 'x86 .deb / .rpm / AppImage', note: 'Packaged formats. Use the raw binary above, or build from source.' },
]

const STEPS = [
  { number: '01', title: 'Make it yours', body: <>Extract or run the binary. On Linux, run <code>chmod +x roxy-linux</code>. Keep ROXY in a writable folder.</> },
  { number: '02', title: 'Bring your models', body: <>Open <b>Models → API models</b> and add a key, or install an agent CLI. Keep your existing subscriptions and local workflows.</> },
  { number: '03', title: 'Pick up the thread', body: <>Start talking. Switch models whenever you need another perspective. Your full conversation follows you.</> },
]

export default function InstallContent() {
  return <div className="install-page">
    <header className="install-head">
      <p className="mono-label">Get started</p>
      <h1>Make yourself at home.</h1>
      <p className="install-lede">One executable, no installer, no runtime. Download a verified build for your platform, or install from a package manager in one line.</p>
    </header>

    <section className="install-group">
      <div className="group-head"><span className="mono-label">Available now</span><h2>Ready to download</h2></div>
      <div className="build-grid">
        {BUILDS.map(({ platform, arch, format, href, alt, note }) => (
          <article className="build-card" key={`${platform}-${arch}`}>
            <div className="build-top"><div><p className="mono-label">{platform} · {format}</p><h3>{arch}</h3></div></div>
            <p className="build-note">{note}</p>
            <div className="build-actions">
              <a className="btn btn-primary" href={href}><Download size={15} /> Download</a>
              {alt && <a className="build-alt" href={alt}>Standalone .exe <ArrowUpRight size={11} /></a>}
            </div>
          </article>
        ))}
      </div>
    </section>

    <section className="install-group">
      <div className="group-head"><span className="mono-label">Coming soon</span><h2>Other platforms</h2><p className="group-lede">Not shipped yet — build from source in the meantime.</p></div>
      <div className="coming-grid">
        {COMING.map(({ platform, arch, note }) => (
          <div className="coming-row" key={`${platform}-${arch}`}>
            <div><span className="mono-label">{platform}</span><b>{arch}</b></div>
            <span className="coming-note">{note}</span>
          </div>
        ))}
      </div>
    </section>

    <section className="install-group">
      <div className="group-head"><span className="mono-label">Package managers</span><h2>One line, any platform</h2></div>
      <div className="pkg-grid">
        <div className="pkg-card">
          <div className="pkg-head"><span className="mono-label">Homebrew · macOS &amp; Linux</span><span className="pkg-badge">brew</span></div>
          <pre><code>brew install --cask roxy</code></pre>
          <p className="pkg-note">Requires a Homebrew tap (in progress). Updates with <code>brew upgrade --cask roxy</code>.</p>
        </div>
        <div className="pkg-card">
          <div className="pkg-head"><span className="mono-label">npm · Windows, macOS &amp; Linux</span><span className="pkg-badge">npm</span></div>
          <pre><code>npm install -g @roxy/cli</code></pre>
          <p className="pkg-note">CLI wrapper (in progress) downloads the matching binary on first run. Requires Node.js LTS.</p>
        </div>
        <div className="pkg-card">
          <div className="pkg-head"><span className="mono-label">Cargo · build from source</span><span className="pkg-badge">cargo</span></div>
          <pre><code>cargo install roxy</code></pre>
          <p className="pkg-note">Requires Rust 1.80+. Builds locally; slower first install. Works today if the crate is published.</p>
        </div>
      </div>
    </section>

    <div className="install-note">
      <Shield size={18} />
      <p><b>Verify your download.</b> The release ships <code>SHA256SUMS.txt</code>. Windows zip: <code>4bcc4e77e8da926bb23e7da6bfd235f9341d0331a9ed4cdb8d427eeabc97b3d0</code>. Linux binary: <code>aa548da30f6fab3b95588ae5599abefd8ccec8a77c991a91571b1f317e58bc30</code>. Standalone exe: <code>a83469f9d147d7c9e78b4c29d155ebbbdf09a73428280b61d6417fdb4a86499e</code>. <a href="https://github.com/RoaraxAli/ROXY/releases">Full checksums →</a></p>
    </div>

    <section className="install-steps">
      <h2>From download to first conversation.</h2>
      <div className="step-grid">{STEPS.map(({ number, title, body }) => <div key={number}><span className="mono-label">{number}</span><h3>{title}</h3><p>{body}</p></div>)}</div>
    </section>

    <details className="install-details"><summary><span><Terminal size={15} /> Linux: install from your terminal</span><ChevronDown size={14} /></summary><pre><code>curl -fL -o roxy https://github.com/RoaraxAli/ROXY/releases/latest/download/roxy-linux{`\n`}chmod +x roxy{`\n`}mkdir -p ~/.local/bin && mv roxy ~/.local/bin/roxy{`\n`}roxy</code></pre><p>Your local data folder is <code>~/.config/roxy/</code>.</p></details>

    <details className="install-details"><summary><span><Shield size={15} /> Windows: “Protected your PC” / unknown publisher</span><ChevronDown size={14} /></summary><p>ROXY’s Windows builds are <b>not code-signed</b> yet. SmartScreen may warn; this does not mean the release is signed by an unknown third party.</p><p>Download only from the official <a href="https://github.com/RoaraxAli/ROXY/releases">GitHub Releases page</a> and verify the SHA-256 checksum above. If it matches, choose <b>More info → Run anyway</b>. Do not bypass this warning for builds from other sources.</p></details>

    <details className="install-details"><summary><span><ArrowUpRight size={15} /> Updates &amp; troubleshooting</span><ChevronDown size={14} /></summary><p>ROXY checks for updates at launch and downloads them in-app with a live progress bar. For a manual check, open <b>Settings → About → Check for updates</b>.</p><ul><li>Keep ROXY in a writable folder, not Windows Program Files.</li><li>Agent CLIs require Node.js LTS. Restart ROXY after installing it.</li><li>On Linux, launch from a graphical session with an OpenGL driver.</li><li>For 9Router, start the server and refresh its model list. It listens on <code>localhost:20128</code>.</li></ul></details>

    <section className="build-source" id="source">
      <div>
        <p className="mono-label">From source</p>
        <h2>Prefer to build it yourself?</h2>
        <p>Good. That is what open source is for. You’ll need Rust 1.80+ and a C toolchain. This is also how to get ROXY on macOS and other platforms today.</p>
        <a className="text-link" href="https://github.com/RoaraxAli/ROXY"><Github size={14} /> View the repository <ArrowUpRight size={12} /></a>
      </div>
      <div className="source-code">
        <div className="code-head"><span className="mono-label">terminal</span><span className="code-dots"><i /><i /><i /></span></div>
        <pre><code>git clone https://github.com/RoaraxAli/ROXY.git{`\n`}cd ROXY{`\n`}cargo build --release{`\n`}./target/release/roxy</code></pre>
      </div>
    </section>
  </div>
}
