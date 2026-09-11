type CornerProps = {
  className?: string
}

export function CornerFrame({ className = '' }: CornerProps) {
  return (
    <svg className={`corner-frame ${className}`} viewBox="0 0 64 64" aria-hidden="true">
      <path d="M8 56V20c0-6.627 5.373-12 12-12h36" />
      <path d="M8 48h10M16 8v10" />
    </svg>
  )
}

export function GoldDivider() {
  return (
    <div className="gold-divider" aria-hidden="true">
      <span />
      <svg viewBox="0 0 24 24">
        <path d="M12 2l2.2 6.8L21 12l-6.8 3.2L12 22l-2.2-6.8L3 12l6.8-3.2z" />
      </svg>
      <span />
    </div>
  )
}

export function CloudMotif({ className = '' }: CornerProps) {
  return (
    <svg className={`cloud-motif ${className}`} viewBox="0 0 200 40" aria-hidden="true">
      <path d="M10 28c8-14 22-14 30 0 8-16 24-16 32 0 8-14 22-14 30 0 8-16 24-16 32 0 8-14 22-14 30 0 6-10 16-10 26 0" />
    </svg>
  )
}
