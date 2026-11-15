'use client'

import { useEffect, useState } from 'react'
import { Moon, Sun } from './icons'

export function ThemeToggle() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === 'light' ? 'light' : 'dark')
  }, [])

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    document.documentElement.dataset.theme = next
    document.documentElement.style.colorScheme = next
    try { localStorage.setItem('roxy-theme', next) } catch {}
  }

  const next = theme === 'dark' ? 'light' : 'dark'
  return <button className="theme-toggle" type="button" onClick={toggle} aria-label={`Switch to ${next} theme`} title={`Switch to ${next} theme`}>
    {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
  </button>
}
