import Link from 'next/link'
import { ArrowUpRight, Github, Logo } from '../../components/icons'
import { ThemeToggle } from '../../components/theme-toggle'

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return <div className="marketing-shell">
    <header className="site"><div className="wrap bar">
      <Link href="/" className="brand" aria-label="ROXY home"><Logo /></Link>
      <nav className="main" aria-label="Main navigation"><a href="/#product">Product</a><a href="/#routing">Routing</a><a href="/#open-source">Open source</a><a href="https://docs.roxy.theali.app">Docs</a></nav>
      <div className="header-actions"><ThemeToggle /><a className="github-link" href="https://github.com/RoaraxAli/ROXY" aria-label="ROXY on GitHub"><Github size={18} /></a><Link href="/install" className="nav-download">Download <span>↗</span></Link></div>
    </div></header>
    <main>{children}</main>
    <footer className="site"><div className="wrap">
      <div className="footer-main"><div className="footer-brand"><Logo /><p>One session. Every model.<br/>Your AI workspace, without the lock-in.</p><span className="footer-local"><i /> No telemetry. No account. Just you.</span></div>
        <div className="footer-links"><div><b>PRODUCT</b><a href="/#product">Overview</a><Link href="/install">Download</Link><a href="https://docs.roxy.theali.app">Documentation</a></div><div><b>RESOURCES</b><a href="https://github.com/RoaraxAli/ROXY">Source code <ArrowUpRight size={11}/></a><a href="https://github.com/RoaraxAli/ROXY/releases">Releases <ArrowUpRight size={11}/></a><a href="https://github.com/RoaraxAli/ROXY/issues">Report an issue <ArrowUpRight size={11}/></a></div><div><b>BUILT WITH</b><a href="https://opencode.ai">OpenCode <ArrowUpRight size={11}/></a><a href="https://docs.roxy.theali.app/router">9Router <ArrowUpRight size={11}/></a><a href="https://www.rust-lang.org">Rust <ArrowUpRight size={11}/></a></div></div>
      </div><div className="footer-bottom"><span>© {new Date().getFullYear()} ROXY. Open source, always.</span><span>MADE FOR THE WAY YOU WORK <span className="lime">↗</span></span></div>
    </div></footer>
  </div>
}
