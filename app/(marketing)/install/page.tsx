export default function Install() {
  return (
    <>
      <section className="hero" style={{ paddingBottom: 26 }}>
        <div className="wrap">
          <div className="kicker">Install</div>
          <h1 style={{ fontSize: 'clamp(32px, 4.6vw, 46px)' }}>Download ROXY</h1>
          <p className="lede">
            One executable, no installer and no runtime. Pick your platform, verify the
            checksum if you want, and launch. The whole flow takes about two minutes.
          </p>
          <div className="meta-line">LATEST RELEASE · v0.2.0 · UPDATES IN-APP</div>
        </div>
      </section>

      <section className="block" id="downloads" style={{ paddingTop: 20 }}>
        <div className="wrap">
          <div className="anchor-nav">
            <a href="#windows">Windows</a><a href="#linux">Linux</a><a href="#first-run">First run</a>
            <a href="#verify">Verify download</a><a href="#update">Updating</a><a href="#troubleshoot">Troubleshooting</a>
            <a href="#source">Build from source</a>
          </div>
          <div className="dl">
            <div className="card" id="windows">
              <div className="os"><span className="glyph">WIN</span><h3>Windows 10 / 11 · x64</h3></div>
              <p className="req">64-bit Windows 10 (1809+) or Windows 11. No admin rights required.</p>
              <div className="links">
                <a href="https://github.com/RoaraxAli/ROXY/releases/latest/download/roxy-windows-x64.zip">Download .zip →</a>
                <a href="https://github.com/RoaraxAli/ROXY/releases/latest/download/roxy.exe">Download .exe →</a>
              </div>
              <div className="sum">zip contains roxy.exe + README. The bare .exe is the same binary.</div>
            </div>
            <div className="card" id="linux">
              <div className="os"><span className="glyph">LNX</span><h3>Linux · ARM64</h3></div>
              <p className="req">aarch64 Linux with a desktop session (X11 or Wayland) and OpenGL.</p>
              <div className="links">
                <a href="https://github.com/RoaraxAli/ROXY/releases/latest/download/roxy-linux">Download binary →</a>
              </div>
              <div className="sum">x86_64 Linux builds from source — see below.</div>
            </div>
          </div>
          <div className="callout warn" style={{ marginTop: 18 }}>
            <b>“Windows protected your PC — unknown publisher”.</b> ROXY builds are not
            code-signed yet, so Windows has no publisher identity to show and treats the
            file as unrecognized. That message is about identity, not detection: a brand-new
            unsigned binary has no SmartScreen reputation at all. Click <b>More info → Run
            anyway</b>, or clear the download mark first. Verify the checksum below if you
            want proof the file is the one published here.
          </div>
        </div>
      </section>

      <section className="block" id="windows-steps">
        <div className="wrap">
          <div className="eyebrow">Windows</div>
          <h2>Install on Windows</h2>
          <ol className="steps" style={{ marginTop: 22 }}>
            <li><b>Download the ZIP</b><p>Use the Windows card above. Your browser may keep it in <code>Downloads</code>.</p></li>
            <li><b>Extract it</b><p>Right-click the ZIP → <b>Extract All</b>. Running ROXY from inside the ZIP will not work.</p></li>
            <li><b>Clear the “downloaded from the internet” block (optional)</b><p>In PowerShell: <code>Unblock-File .\roxy.exe</code>. This removes the SmartScreen prompt entirely.</p></li>
            <li><b>Move it somewhere permanent</b><p>For example <code>%LOCALAPPDATA%\Programs\ROXY\</code>. The updater needs write access to this folder.</p></li>
            <li><b>Run roxy.exe</b><p>If SmartScreen appears, choose <b>More info</b> and confirm only if you verified the checksum or trust the source.</p></li>
            <li><b>Connect a model</b><p>Open <b>Models → API models</b> and add a provider, or install a CLI agent in one click.</p></li>
          </ol>
          <h3>Where Windows puts your data</h3>
          <p style={{ color: 'var(--dim)', fontSize: 14 }}>Config, sessions and the log live in <code>%APPDATA%\roxy\</code>. Delete that folder for a clean slate. Settings also have a <b>Data folder</b> button that opens it.</p>
        </div>
      </section>

      <section className="block" id="linux-steps">
        <div className="wrap">
          <div className="eyebrow">Linux</div>
          <h2>Install on Linux</h2>
          <ol className="steps" style={{ marginTop: 22 }}>
            <li><b>Download the binary</b><p>Use the Linux card above.</p></li>
            <li><b>Make it executable</b><p><code>chmod +x roxy-linux</code></p></li>
            <li><b>Move it onto your PATH</b><p>For example <code>mkdir -p ~/.local/bin &amp;&amp; mv roxy-linux ~/.local/bin/roxy</code>.</p></li>
            <li><b>Launch it</b><p>Run <code>roxy</code> from a terminal once so you can see any graphics-driver message.</p></li>
            <li><b>Connect a model</b><p>Same as Windows: Models → API models, or install an agent CLI.</p></li>
          </ol>
          <pre><code>{`curl -fL -o roxy https://github.com/RoaraxAli/ROXY/releases/latest/download/roxy-linux
chmod +x roxy
mkdir -p ~/.local/bin && mv roxy ~/.local/bin/roxy
roxy`}</code></pre>
          <p style={{ color: 'var(--dim)', fontSize: 14 }}>Data lives in <code>~/.config/roxy/</code>.</p>
        </div>
      </section>

      <section className="block" id="first-run">
        <div className="wrap">
          <div className="eyebrow">First run</div>
          <h2>What happens when ROXY starts</h2>
          <p className="section-lede">The loader checks your machine, restores sessions, and looks for update and gateway state. Then you land in a chat with one empty session.</p>
          <div className="grid-3">
            <div className="card"><h3>1 · Connect a model</h3><p>Models → <b>API models</b> for a key-based provider, or <b>CLI agents</b> to install Codex, Claude Code, Gemini CLI and friends.</p></div>
            <div className="card"><h3>2 · Pick it in the composer</h3><p>The model button above the message box opens a searchable picker grouped by provider.</p></div>
            <div className="card"><h3>3 · Switch whenever</h3><p>Pick another model mid-thread. The transcript is replayed, so context carries over.</p></div>
          </div>
          <div className="callout" style={{ marginTop: 18 }}>
            <b>ChatGPT / Codex sign-in.</b> Some agents need an interactive login. ROXY opens
            your own terminal for that command — it never asks for your CLI password.
          </div>
        </div>
      </section>

      <section className="block" id="verify">
        <div className="wrap">
          <div className="eyebrow">Integrity</div>
          <h2>Verify a download</h2>
          <p className="section-lede">Every release publishes SHA-256 checksums. They catch a corrupted or swapped file; they do not replace a code signature.</p>
          <h3>Windows (PowerShell)</h3>
          <pre><code>Get-FileHash .\roxy-windows-x64.zip -Algorithm SHA256</code></pre>
          <h3>Linux</h3>
          <pre><code>sha256sum roxy-linux</code></pre>
          <p style={{ color: 'var(--dim)', fontSize: 14 }}>Compare the printed hash with the value on the release page or the bundled <code>SHA256SUMS.txt</code>. If they differ, do not run the file — download it again.</p>
          <div className="callout" style={{ marginTop: 16 }}>
            <b>Why no publisher name?</b> Windows shows a verified publisher only for
            signed binaries. A code-signing certificate is a paid, identity-verified
            process; until ROXY ships signed builds, the checksum is the strongest
            verification available.
          </div>
        </div>
      </section>

      <section className="block" id="update">
        <div className="wrap">
          <div className="eyebrow">Updates</div>
          <h2>Updating ROXY</h2>
          <p className="section-lede">
            ROXY checks for a new release when it starts. If one exists, a window appears
            with a live progress bar: it downloads, swaps the binary after ROXY closes, and
            restarts. No terminal opens, and no manual download is needed.
          </p>
          <ul className="checks">
            <li><b>Manual check:</b> Settings → About → Check for updates.</li>
            <li><b>Requirements:</b> <code>curl</code> (built into Windows 10+, present on Linux) and write access to ROXY&apos;s folder.</li>
            <li><b>Portable install:</b> keep roxy.exe somewhere your user account can write, not <code>Program Files</code>.</li>
          </ul>
        </div>
      </section>

      <section className="block" id="troubleshoot">
        <div className="wrap">
          <div className="eyebrow">Troubleshooting</div>
          <h2>If something goes wrong</h2>
          <div style={{ marginTop: 22 }}>
            <details className="faq" open><summary>The window does not open</summary><p>On Linux, make sure you are in a graphical session and have an OpenGL driver. Running from a terminal shows the exact error. On Windows, extract the ZIP before running.</p></details>
            <details className="faq"><summary>“Needs Node.js” when installing an agent</summary><p>Agent CLIs are npm packages. Install Node.js LTS, restart ROXY, then press Install again. 9Router has the same requirement.</p></details>
            <details className="faq"><summary>Models list is empty for a provider</summary><p>Press <b>Refresh</b> in Models. For a local server, confirm it is running — 9Router listens on <code>localhost:20128</code>. A key-based provider needs a valid key before its <code>/models</code> endpoint answers.</p></details>
            <details className="faq"><summary>The update downloads but nothing changes</summary><p>The updater needs write access to the folder holding the executable. Move ROXY out of a read-only location and retry from Settings → About.</p></details>
            <details className="faq"><summary>“Windows protected your PC” — unknown publisher</summary><p>Windows shows this for every executable that is not Authenticode-signed, because it has no publisher identity to display. Choose <b>More info → Run anyway</b>, or run <code>Unblock-File .\roxy.exe</code> before launching. Removing the message for everyone requires a code-signing certificate issued to a verified publisher; ROXY does not have one yet, which is why every release publishes SHA-256 checksums instead.</p></details>
            <details className="faq"><summary>Antivirus flags roxy.exe</summary><p>Reputation warnings are common for new unsigned binaries. Verify the checksum; if you would rather compile it yourself, the source and build steps are below.</p></details>
          </div>
        </div>
      </section>

      <section className="block" id="source">
        <div className="wrap">
          <div className="eyebrow">From source</div>
          <h2>Build ROXY yourself</h2>
          <p className="section-lede">Rust 1.80+ and a C toolchain. The Windows cross-build additionally needs <code>gcc-mingw-w64-x86-64</code>.</p>
          <pre><code>{`git clone https://github.com/RoaraxAli/ROXY.git
cd ROXY

# native build (Linux x86_64 / ARM64)
cargo build --release
./target/release/roxy

# Windows x64 cross-compile from Linux
rustup target add x86_64-pc-windows-gnu
cargo build --release --target x86_64-pc-windows-gnu`}</code></pre>
          <p style={{ color: 'var(--dim)', fontSize: 14 }}>A self-hosted build can point the updater at its own manifest with <code>ROXY_MANIFEST=https://…/update.json cargo build --release</code>.</p>
        </div>
      </section>
    </>
  )
}
