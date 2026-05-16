import { useTheme } from "@/components/theme-provider"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const toggle = () => {
    const isDark =
      theme === "dark" ||
      (theme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    setTheme(isDark ? "light" : "dark")
  }

  return (
    <button
      type="button"
      onClick={toggle}
      className="kewti-theme-toggle"
      title="Toggle theme (D)"
    >
      <span className="flex size-[18px] items-center justify-center rounded bg-[rgba(245,240,235,0.06)] font-mono-kewti text-[10px] text-[var(--kewti-muted)]">
        D
      </span>
      Toggle theme
    </button>
  )
}
