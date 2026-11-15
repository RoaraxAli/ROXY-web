(() => {
  try {
    const saved = localStorage.getItem('roxy-theme')
    const theme = saved === 'light' || saved === 'dark' ? saved : 'dark'
    document.documentElement.dataset.theme = theme
    document.documentElement.style.colorScheme = theme
  } catch {}
})()
