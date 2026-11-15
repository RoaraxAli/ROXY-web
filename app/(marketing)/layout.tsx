import Link from 'next/link'

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="site">
        <div className="wrap bar">
          <Link href="/" className="brand">
            <span className="mark" aria-hidden="true">
              <svg viewBox="0 0 32 32">
                <path d="M9 26V6h9.5a6 6 0 0 1 0 12H9m8 0 8 8" fill="none" stroke="#07070a" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span><b>ROXY</b><span>one session · every model</span></span>
          </Link>
          <nav className="main">
            <Link href="/">Overview</Link>
            <Link href="/install">Install</Link>
            <a href="https://roaraxali.github.io/ROXY-docs/" rel="noopener">Docs</a>
            <a href="https://github.com/RoaraxAli/ROXY" rel="noopener">Source</a>
            <Link href="/install" className="cta">Download</Link>
          </nav>
        </div>
      </header>
      <main>{children}</main>
      <footer className="site">
        <div className="wrap">
          <div className="cols">
            <div>
              <div className="brand" style={{ marginBottom: 8 }}>
                <span className="mark" aria-hidden="true">
                  <svg viewBox="0 0 32 32">
                    <path d="M9 26V6h9.5a6 6 0 0 1 0 12H9m8 0 8 8" fill="none" stroke="#07070a" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span><b>ROXY</b><span>one session · every model</span></span>
              </div>
              <div>Open source desktop AI client, built in Rust.</div>
            </div>
            <div>
              <div style={{ color: 'var(--text)', marginBottom: 8 }}>Product</div>
              <div><Link href="/">Overview</Link></div>
              <div><Link href="/install">Install</Link></div>
              <div><a href="https://roaraxali.github.io/ROXY-docs/" rel="noopener">Docs</a></div>
            </div>
            <div>
              <div style={{ color: 'var(--text)', marginBottom: 8 }}>Project</div>
              <div><a href="https://github.com/RoaraxAli/ROXY" rel="noopener">Source code</a></div>
              <div><a href="https://github.com/RoaraxAli/ROXY/issues" rel="noopener">Issues</a></div>
              <div><a href="https://github.com/RoaraxAli/ROXY/blob/main/LICENSE" rel="noopener">License</a></div>
            </div>
          </div>
          <div className="fine">ROXY · BUILT ON OPENCODE &amp; 9ROUTER · NO TELEMETRY</div>
        </div>
      </footer>
    </>
  )
}
