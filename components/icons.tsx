import type { SVGProps } from 'react'

type P = SVGProps<SVGSVGElement> & { size?: number }
export function Icon({ size = 18, children, ...p }: P) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...p}>{children}</svg>
}
export const ArrowUp = (p: P) => <Icon {...p}><path d="m5 12 7-7 7 7M12 19V5" /></Icon>
export const ArrowRight = (p: P) => <Icon {...p}><path d="M5 12h14m-6-6 6 6-6 6" /></Icon>
export const ArrowUpRight = (p: P) => <Icon {...p}><path d="M7 17 17 7M7 7h10v10" /></Icon>
export const Check = (p: P) => <Icon {...p}><path d="m5 12 4 4L19 6" /></Icon>
export const ChevronDown = (p: P) => <Icon {...p}><path d="m6 9 6 6 6-6" /></Icon>
export const Command = (p: P) => <Icon {...p}><path d="M18 9a3 3 0 1 0-3-3v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12" /></Icon>
export const Cpu = (p: P) => <Icon {...p}><rect x="6" y="6" width="12" height="12" rx="2"/><path d="M9 1v3m6-3v3M9 20v3m6-3v3M20 9h3m-3 6h3M1 9h3m-3 6h3"/><rect x="10" y="10" width="4" height="4" rx=".5"/></Icon>
export const Download = (p: P) => <Icon {...p}><path d="M12 3v12m-4-4 4 4 4-4M4 15v5h16v-5" /></Icon>
export const Folder = (p: P) => <Icon {...p}><path d="M3 6h6l2 3h10v10H3z" /></Icon>
export const Github = (p: P) => <Icon {...p}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7.4A5.8 5.8 0 0 0 19.3 3 5.4 5.4 0 0 0 19.1 0S17.9-.4 15 1.5a13.4 13.4 0 0 0-7 0C5.1-.4 3.9 0 3.9 0a5.4 5.4 0 0 0-.2 3A5.8 5.8 0 0 0 2.2 7c0 5.8 3.5 7 6.8 7.4A4.8 4.8 0 0 0 8 18v4m0-3c-3 .9-3-1.5-4-2" /></Icon>
export const Globe = (p: P) => <Icon {...p}><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20" /></Icon>
export const Layers = (p: P) => <Icon {...p}><path d="m12 2 10 5-10 5L2 7zM2 12l10 5 10-5M2 17l10 5 10-5" /></Icon>
export const Lock = (p: P) => <Icon {...p}><rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V6a4 4 0 0 1 8 0v4M12 14v3" /></Icon>
export const MessageSquare = (p: P) => <Icon {...p}><path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" /></Icon>
export const Moon = (p: P) => <Icon {...p}><path d="M20.9 13A9 9 0 0 1 11 3.1 9 9 0 1 0 20.9 13" /></Icon>
export const MoreHorizontal = (p: P) => <Icon {...p}><circle cx="5" cy="12" r="1" fill="currentColor"/><circle cx="12" cy="12" r="1" fill="currentColor"/><circle cx="19" cy="12" r="1" fill="currentColor"/></Icon>
export const Plus = (p: P) => <Icon {...p}><path d="M12 5v14M5 12h14" /></Icon>
export const Search = (p: P) => <Icon {...p}><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4" /></Icon>
export const Settings2 = (p: P) => <Icon {...p}><path d="M20 7h-9m-4 0H4m16 10h-3m-4 0H4M14 4v6M7 14v6"/></Icon>
export const Shield = (p: P) => <Icon {...p}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></Icon>
export const Sparkles = (p: P) => <Icon {...p}><path d="m12 3-1.8 5.2L5 10l5.2 1.8L12 17l1.8-5.2L19 10l-5.2-1.8zM5 3 4.3 4.7 2.5 5.5l1.8.8L5 8l.7-1.7 1.8-.8-1.8-.8zM19 16l-.9 2.1L16 19l2.1.9L19 22l.9-2.1L22 19l-2.1-.9z"/></Icon>
export const Terminal = (p: P) => <Icon {...p}><path d="m4 6 5 5-5 5m8 0h8"/></Icon>
export const Zap = (p: P) => <Icon {...p}><path d="M13 2 3 14h8l-1 8 11-13h-8z"/></Icon>

export function Logo({ small = false }: { small?: boolean }) {
  return <span className={`roxy-logo${small ? ' small' : ''}`}><span className="roxy-mark" aria-hidden="true"><svg viewBox="0 0 32 32"><path d="M9 26V6h9.5a6 6 0 0 1 0 12H9m8 0 8 8" fill="none" stroke="#0a0b08" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"/></svg></span><b>ROXY</b></span>
}
