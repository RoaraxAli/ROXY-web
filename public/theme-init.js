(() => {
  try {
    // Read either key so the marketing shell and Nextra docs agree on one theme.
    const saved = localStorage.getItem('roxy-theme') || localStorage.getItem('theme')
    const theme = saved === 'light' ? 'light' : 'dark'
    const root = document.documentElement
    root.dataset.theme = theme
    root.style.colorScheme = theme
    // next-themes (Nextra docs) toggles a `dark` class; keep it in sync from first paint.
    root.classList.remove('light', 'dark')
    root.classList.add(theme)
  } catch {}
})()
