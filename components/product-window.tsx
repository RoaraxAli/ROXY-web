import { ArrowUp, Check, ChevronDown, Command, Cpu, Folder, MessageSquare, Moon, MoreHorizontal, Plus, Search, Settings2, Sparkles, Zap } from './icons'

export function ProductWindow({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`product-window${compact ? ' compact' : ''}`}>
      <div className="window-bar">
        <div className="window-dots"><i /><i /><i /></div>
        <div className="window-title"><span className="mini-roxy">R</span> ROXY <span className="window-separator">/</span> Workspace</div>
        <div className="window-tools"><Search size={13} /><Command size={13} /><MoreHorizontal size={16} /></div>
      </div>
      <div className="workspace">
        <aside className="workspace-rail">
          <button className="new-chat"><Plus size={13} /> New session <kbd>⌘ N</kbd></button>
          <div className="rail-search"><Search size={12} /> Search sessions</div>
          <div className="rail-label">WORKSPACE <span>4</span></div>
          <div className="session active"><MessageSquare size={13} /><div><b>Auth system refactor</b><span>Just now · 12 messages</span></div></div>
          <div className="session"><MessageSquare size={13} /><div><b>Desktop navigation</b><span>Yesterday · 8 messages</span></div></div>
          <div className="session"><MessageSquare size={13} /><div><b>Release checklist</b><span>Monday · 24 messages</span></div></div>
          <div className="session"><MessageSquare size={13} /><div><b>Explore provider APIs</b><span>Last week · 6 messages</span></div></div>
          <div className="rail-label pinned">PINNED</div>
          <div className="session"><Folder size={13} /><div><b>ROXY launch</b><span>Product workspace</span></div></div>
          <div className="rail-bottom"><div className="avatar">RA</div><div><b>Local workspace</b><span>Everything on your device</span></div><Settings2 size={15} /></div>
        </aside>
        <div className="conversation">
          <div className="conversation-header"><div><h3>Auth system refactor</h3><span><i className="live-dot" /> Local session · Saved</span></div><div className="conversation-actions"><span>12 messages</span><MoreHorizontal size={17} /></div></div>
          <div className="thread">
            <div className="user-message"><div className="message-meta">YOU <span>10:41</span></div><p>Refactor the token store and keep the public API stable. Check the existing tests before making changes.</p></div>
            <div className="assistant-message"><div className="model-label"><span className="model-glyph"><Sparkles size={12} /></span><b>Claude Sonnet</b><span>via Anthropic</span></div><p>I’ll map the call sites first, then move the implementation behind the existing facade. The public API won’t change.</p><div className="tool-call"><span><Check size={12} /> Read 8 files</span><span><Check size={12} /> Found 14 call sites</span><span className="running"><Zap size={12} /> Running tests</span></div></div>
            <div className="context-handoff"><span /><Sparkles size={12} /><b>CONTEXT HANDOFF</b><span>Claude Sonnet → Gemini Pro</span><span /></div>
            <div className="assistant-message last"><div className="model-label"><span className="model-glyph gemini">G</span><b>Gemini Pro</b><span>via 9Router · Priority 02</span></div><p>Context received. The facade is preserved and all tests pass. Two call sites needed explicit lifetimes; here’s the cleanest path forward.</p><div className="code-snippet"><div><span /><span /><span /><code>auth.rs</code><span className="code-lang rust">RUST</span></div><pre><span className="code-purple">impl</span> TokenStore {'{'}{`\n`}  <span className="code-purple">pub fn</span> <span className="code-blue">refresh</span>(&amp;<span className="code-orange">self</span>) -&gt; Result&lt;Token&gt; {'{'}{`\n`}    <span className="code-comment">// Existing API stays exactly the same</span>{`\n`}    <span className="code-orange">self</span>.inner.refresh(){`\n`}  {'}'}{`\n`}{'}'}</pre></div></div>
          </div>
          <div className="composer-wrap"><div className="composer-input">Ask anything. Your context stays here.<ArrowUp size={18} /></div><div className="composer-bottom"><button><span className="provider-dot" /> Gemini Pro <ChevronDown size={11} /></button><span className="context-meter"><i /><i /><i /><i /><i /><span>48k context</span></span><span><Command size={11} /> ↵</span></div></div>
        </div>
      </div>
    </div>
  )
}
