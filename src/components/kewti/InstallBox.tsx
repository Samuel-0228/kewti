import { useEffect, useState } from "react"
import { Check, Copy } from "lucide-react"
import { cn } from "@/lib/utils"

const INSTALL_CMD = "npm install kewti_components"

export function InstallBox({ className }: { className?: string }) {
  const [displayText, setDisplayText] = useState("")
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    let index = 0
    let timeout: ReturnType<typeof setTimeout>

    const type = () => {
      if (index < INSTALL_CMD.length) {
        setDisplayText(INSTALL_CMD.slice(0, index + 1))
        index += 1
        timeout = setTimeout(type, 60)
      }
    }

    const start = setTimeout(type, 1200)
    return () => {
      clearTimeout(start)
      clearTimeout(timeout)
    }
  }, [])

  const copyCommand = () => {
    navigator.clipboard.writeText(INSTALL_CMD)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className={cn("kewti-install-box", className)}>
      <div className="mb-3.5 flex gap-1.5">
        <span className="size-2.5 rounded-full bg-[var(--kewti-red)]" />
        <span className="size-2.5 rounded-full bg-[var(--kewti-gold)]" />
        <span className="size-2.5 rounded-full bg-[var(--kewti-green)]" />
      </div>
      <div className="flex items-center gap-2.5 pr-20 font-mono-kewti text-[13px]">
        <span className="text-[var(--kewti-green)]">›</span>
        <span className="text-[var(--kewti-cream)]">{displayText}</span>
        <span className="inline-block h-3.5 w-2 animate-[kewti-blink-cursor_1s_step-end_infinite] bg-[var(--kewti-green)] align-middle" />
      </div>
      <button
        type="button"
        onClick={copyCommand}
        className="absolute right-5 top-1/2 -translate-y-1/2 rounded-lg border border-[var(--kewti-border)] bg-[rgba(245,240,235,0.08)] px-3 py-1.5 font-mono-kewti text-[11px] text-[var(--kewti-muted)] transition-all hover:border-[rgba(46,204,113,0.3)] hover:bg-[rgba(46,204,113,0.1)] hover:text-[var(--kewti-green)]"
        aria-label="Copy install command"
      >
        {copied ? (
          <span className="inline-flex items-center gap-1 text-[var(--kewti-green)]">
            <Check className="size-3" />
            copied!
          </span>
        ) : (
          <span className="inline-flex items-center gap-1">
            <Copy className="size-3" />
            copy
          </span>
        )}
      </button>
      <span className="sr-only" aria-live="polite">
        {copied ? "Copied to clipboard" : ""}
      </span>
    </div>
  )
}
