import { Download, Github, Shield, Terminal, ChevronDown, ArrowUpRight, Cpu, Globe } from '../components/icons'

const WinLogo = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M0 3.449L9.75 2.1v9.45H0m10.95-9.6L24 0v11.4H10.95M0 12.6h9.75v9.45L0 20.699M10.95 12.6H24V24l-12.9-1.8" /></svg>
const MacLogo = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" /></svg>
const LinuxLogo = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.504 0c-.155 0-.315.008-.48.021-4.227.333-3.106 3.42-3.106 3.42s.294-.353.886-.788c.48-.354 1.038-.58 1.62-.696.148-.029.27-.044.36-.05.14-.01.25.01.32.08.09.09.1.23.03.4-.07.17-.2.34-.35.5-.09.09-.18.17-.27.24-.99.78-2.2 1.4-2.78 2.45-.45.8-.68 1.7-.68 2.67 0 .3.02.6.06.9-.96-.05-1.8.1-2.46.5-.98.6-1.5 1.5-1.5 2.5 0 .42.08.83.23 1.2-.4.25-.7.58-.9.98-.35.7-.4 1.5-.1 2.2.3.7.9 1.2 1.7 1.4.1.03.2.05.3.07-.1.4-.1.8 0 1.2.15.6.5 1.1 1 1.4.5.3 1.1.4 1.7.3.4-.07.8-.2 1.1-.4.25.35.6.6 1 .75.5.2 1.1.2 1.6.05.3-.1.6-.25.8-.45.2.3.5.55.85.7.5.2 1.1.2 1.6 0 .35-.15.65-.35.9-.6.2.25.45.45.75.6.55.25 1.2.25 1.7 0 .35-.15.65-.4.85-.7.25.2.55.35.9.45.6.15 1.2.05 1.7-.2.45-.25.8-.6 1-1.05.1-.2.15-.4.18-.6.6-.1.95-.4 1.15-.9.25-.6.25-1.3-.05-1.9-.2-.4-.5-.7-.85-.9.15-.35.25-.75.25-1.15 0-1 .5-1.9 1.5-2.5.6-.35 1.4-.45 2.3-.4.04-.3.06-.6.06-.9 0-.95-.23-1.85-.68-2.65-.58-1.05-1.79-1.67-2.78-2.45-.09-.07-.18-.15-.27-.24-.15-.16-.28-.33-.35-.5-.07-.17-.06-.31.03-.4.07-.07.18-.09.32-.08.09.006.212.021.36.05.582.116 1.14.342 1.62.696.592.435.886.788.886.788s1.121-3.087-3.106-3.42c-.165-.013-.325-.021-.48-.021z" /></svg>

const WINDOWS = [
  { arch: 'x64', format: 'Portable ZIP', href: 'https://github.com/RoaraxAli/ROXY/releases/latest/download/roxy-windows-x64.zip', alt: 'https://github.com/RoaraxAli/ROXY/releases/latest/download/roxy.exe', note: 'Windows 10 (1809+) or 11, 64-bit. No admin rights.' },
  { arch: 'ARM64', format: 'Portable ZIP', href: 'https://github.com/RoaraxAli/ROXY/releases/latest/download/roxy-windows-arm64.zip', alt: 'https://github.com/RoaraxAli/ROXY/releases/latest/download/roxy-arm64.exe', note: 'Windows 11 on ARM devices (Surface Pro X, Snapdragon laptops).' },
]

const MACOS = [
  { arch: 'Apple Silicon', format: 'DMG', href: 'https://github.com/RoaraxAli/ROXY/releases/latest/download/roxy-macos-aarch64.dmg', note: 'macOS 12+ on M1/M2/M3/M4.' },
  { arch: 'Intel', format: 'DMG', href: 'https://github.com/RoaraxAli/ROXY/releases/latest/download/roxy-macos-x86_64.dmg', note: 'macOS 12+ on Intel Macs.' },
]

const LINUX_DEB = [
  { arch: 'x64', href: 'https://github.com/RoaraxAli/ROXY/releases/latest/download/roxy-linux-x86_64.deb' },
  { arch: 'ARM64', href: 'https://github.com/RoaraxAli/ROXY/releases/latest/download/roxy-linux-aarch64.deb' },
]

const LINUX_RPM = [
  { arch: 'x64', href: 'https://github.com/RoaraxAli/ROXY/releases/latest/download/roxy-linux-x86_64.rpm' },
  { arch: 'ARM64', href: 'https://github.com/RoaraxAli/ROXY/releases/latest/download/roxy-linux-aarch64.rpm' },
]

const LINUX_APPIMAGE = [
  { arch: 'x64', href: 'https://github.com/RoaraxAli/ROXY/releases/latest/download/roxy-linux-x86_64.AppImage' },
  { arch: 'ARM64', href: 'https://github.com/RoaraxAli/ROXY/releases/latest/download/roxy-linux-aarch64.AppImage' },
]

const STEPS = [
  { number: '01', title: 'Make it yours', body: <>Extract or install the package. On Linux, run <code>chmod +x roxy-*</code> for the AppImage or binary. Keep ROXY in a writable folder.</> },
  { number: '02', title: 'Bring your models', body: <>Open <b>Models → API models</b> and add a key, or install an agent CLI. Keep your existing subscriptions and local workflows.</> },
  { number: '03', title: 'Pick up the thread', body: <>Start talking. Switch models whenever you need another perspective. Your full conversation follows you.</> },
]

export default function InstallContent() {
  return <div className="install-page">
    <header className="install-head">
      <p className="mono-label">Get started</p>
      <h1>Make yourself at home.</h1>
      <p className="install-lede">One executable, no installer, no runtime. Pick your platform, architecture, and package format — or install from a package manager in one line.</p>
    </header>

    <section className="install-group">
      <div className="group-head"><WinLogo /><span className="mono-label">Windows</span><h2>Windows</h2></div>
      <div className="build-grid">
        {WINDOWS.map(({ arch, format, href, alt, note }) => (
          <article className="build-card" key={arch}>
            <div className="build-top"><div><p className="mono-label">Windows · {format}</p><h3>{arch}</h3></div></div>
            <p className="build-note">{note}</p>
            <div className="build-actions">
              <a className="btn btn-primary" href={href}><Download size={15} /> Download</a>
              {alt && <a className="build-alt" href={alt}>Standalone .exe <ArrowUpRight size={11} /></a>}
            </div>
            <span className="build-version">v0.2.0 · {arch}</span>
          </article>
        ))}
      </div>
    </section>

    <section className="install-group">
      <div className="group-head"><MacLogo /><span className="mono-label">macOS</span><h2>macOS</h2></div>
      <div className="build-grid">
        {MACOS.map(({ arch, format, href, note }) => (
          <article className="build-card" key={arch}>
            <div className="build-top"><div><p className="mono-label">macOS · {format}</p><h3>{arch}</h3></div></div>
            <p className="build-note">{note}</p>
            <div className="build-actions"><a className="btn btn-primary" href={href}><Download size={15} /> Download</a></div>
            <span className="build-version">v0.2.0 · {arch}</span>
          </article>
        ))}
      </div>
    </section>

    <section className="install-group">
      <div className="group-head"><LinuxLogo /><span className="mono-label">Linux</span><h2>Linux</h2><p className="group-lede">Choose the package format your distribution prefers.</p></div>
      <div className="linux-matrix">
        <div className="matrix-col">
          <p className="mono-label">.deb — Debian / Ubuntu</p>
          <div className="matrix-rows">{LINUX_DEB.map(({ arch, href }) => <a className="matrix-row" key={arch} href={href}><span>{arch}</span><Download size={13} /></a>)}</div>
        </div>
        <div className="matrix-col">
          <p className="mono-label">.rpm — Fedora / RHEL / openSUSE</p>
          <div className="matrix-rows">{LINUX_RPM.map(({ arch, href }) => <a className="matrix-row" key={arch} href={href}><span>{arch}</span><Download size={13} /></a>)}</div>
        </div>
        <div className="matrix-col">
          <p className="mono-label">AppImage — any distro</p>
          <div className="matrix-rows">{LINUX_APPIMAGE.map(({ arch, href }) => <a className="matrix-row" key={arch} href={href}><span>{arch}</span><Download size={13} /></a>)}</div>
        </div>
        <div className="matrix-col">
          <p className="mono-label">Raw binary</p>
          <div className="matrix-rows">
            <a className="matrix-row" href="https://github.com/RoaraxAli/ROXY/releases/latest/download/roxy-linux-x86_64"><span>x64</span><Download size={13} /></a>
            <a className="matrix-row" href="https://github.com/RoaraxAli/ROXY/releases/latest/download/roxy-linux-aarch64"><span>ARM64</span><Download size={13} /></a>
          </div>
        </div>
      </div>
    </section>

    <section className="install-group">
      <div className="group-head"><span className="mono-label">Package managers</span><h2>One line, any platform</h2></div>
      <div className="pkg-grid">
        <div className="pkg-card">
          <div className="pkg-head"><span className="mono-label">Homebrew · macOS &amp; Linux</span><span className="pkg-badge">brew</span></div>
          <pre><code>brew install --cask roxy</code></pre>
          <p className="pkg-note">Requires Homebrew. Updates with <code>brew upgrade --cask roxy</code>.</p>
        </div>
        <div className="pkg-card">
          <div className="pkg-head"><span className="mono-label">npm · Windows, macOS &amp; Linux</span><span className="pkg-badge">npm</span></div>
          <pre><code>npm install -g @roxy/cli</code></pre>
          <p className="pkg-note">Requires Node.js LTS. The CLI downloads the matching binary on first run.</p>
        </div>
        <div className="pkg-card">
          <div className="pkg-head"><span className="mono-label">Cargo · build from source</span><span className="pkg-badge">cargo</span></div>
          <pre><code>cargo install roxy</code></pre>
          <p className="pkg-note">Requires Rust 1.80+. Builds locally; slower first install.</p>
        </div>
      </div>
    </section>

    <div className="install-note">
      <Shield size={18} />
      <p><b>One thing to know.</b> Windows builds are unsigned and macOS builds are not notarized yet, so SmartScreen / Gatekeeper may warn. Verify the SHA-256 checksum, then choose <b>More info → Run anyway</b> (Windows) or right-click → Open (macOS). <a href="#verify">How to verify →</a></p>
    </div>

    <section className="install-steps">
      <h2>From download to first conversation.</h2>
      <div className="step-grid">{STEPS.map(({ number, title, body }) => <div key={number}><span className="mono-label">{number}</span><h3>{title}</h3><p>{body}</p></div>)}</div>
    </section>

    <details className="install-details"><summary><span><Terminal size={15} /> Linux: install from your terminal</span><ChevronDown size={14} /></summary><pre><code>curl -fL -o roxy https://github.com/RoaraxAli/ROXY/releases/latest/download/roxy-linux-x86_64{`\n`}chmod +x roxy{`\n`}mkdir -p ~/.local/bin && mv roxy ~/.local/bin/roxy{`\n`}roxy</code></pre><p>Your local data folder is <code>~/.config/roxy/</code>.</p></details>

    <details className="install-details" id="verify"><summary><span><Shield size={15} /> Verify the integrity of your download</span><ChevronDown size={14} /></summary><p>Every release includes <code>SHA256SUMS.txt</code>. Checksums catch a corrupted or substituted file; they do not replace a code signature.</p><pre><code># Windows PowerShell{`\n`}Get-FileHash .\roxy-windows-x64.zip -Algorithm SHA256{`\n\n`}# macOS / Linux{`\n`}sha256sum roxy-*{`\n`}shasum -a 256 roxy-*</code></pre><p>Compare the result with <a href="https://github.com/RoaraxAli/ROXY/releases">the checksums published on the release page</a>. If they differ, do not run the file.</p></details>

    <details className="install-details"><summary><span><Shield size={15} /> Windows &amp; macOS: “unidentified developer” warnings</span><ChevronDown size={14} /></summary><p>ROXY’s current builds are <b>not code-signed</b> yet, because no trusted signing certificate is configured. SmartScreen (Windows) and Gatekeeper (macOS) therefore warn; this does not mean the release is signed by an unknown third party.</p><p>Download only from the official <a href="https://github.com/RoaraxAli/ROXY/releases">GitHub Releases page</a> and verify the SHA-256 checksum above. If it matches, choose <b>More info → Run anyway</b> on Windows, or right-click → Open on macOS. Do not bypass this warning for builds from other sources.</p></details>

    <details className="install-details"><summary><span><ArrowUpRight size={15} /> Updates &amp; troubleshooting</span><ChevronDown size={14} /></summary><p>ROXY checks for updates at launch and downloads them in-app with a live progress bar. For a manual check, open <b>Settings → About → Check for updates</b>.</p><ul><li>Keep ROXY in a writable folder, not Windows Program Files or <code>/Applications</code> without write access.</li><li>Agent CLIs require Node.js LTS. Restart ROXY after installing it.</li><li>On Linux, launch from a graphical session with an OpenGL driver.</li><li>For 9Router, start the server and refresh its model list. It listens on <code>localhost:20128</code>.</li></ul></details>

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
