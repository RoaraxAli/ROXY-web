'use client'

import { useEffect, useState } from 'react'
import { Moon, Sun } from './icons'

type Theme = 'dark' | 'light'

function readTheme(): Theme {
  if (typeof document === 'undefined') return 'dark'
  if (document.documentElement.dataset.theme === 'light') return 'light'
  return 'dark'
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('dark')

  useEffect(() => {
    setTheme(readTheme())
    // Nextra's own switch (docs) also changes the theme; stay in sync with it.
    const observer = new MutationObserver(() => setTheme(readTheme()))
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })
    return () => observer.disconnect()
  }, [])

  const toggle = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark'
    const root = document.documentElement
    setTheme(next)
    root.dataset.theme = next
    root.style.colorScheme = next
    root.classList.remove('light', 'dark')
    root.classList.add(next)
    try {
      localStorage.setItem('roxy-theme', next)
      // Shared with next-themes so the docs subdomain opens in the same theme.
      localStorage.setItem('theme', next)
    } catch {}
  }

  const next = theme === 'dark' ? 'light' : 'dark'
  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${next} theme`}
      title={`Switch to ${next} theme`}
    >
      {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
    </button>
  )
}
