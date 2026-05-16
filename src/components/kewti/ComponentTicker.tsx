const ITEMS = [
  { name: "KewtiInput", color: "var(--kewti-green)" },
  { name: "KewtiLocationSelector", color: "var(--kewti-gold)" },
  { name: "KewtiPassword", color: "var(--kewti-red)" },
  { name: "EthiopianCalendar", color: "var(--kewti-green)" },
  { name: "KewtiMap", color: "var(--kewti-gold)" },
  { name: "KewtiFonts", color: "var(--kewti-red)" },
  { name: "TransactionValidator", color: "var(--kewti-green)" },
  { name: "EthiopianDatePicker", color: "var(--kewti-gold)" },
]

function TickerRow({ suffix = "" }: { suffix?: string }) {
  return (
    <>
      {ITEMS.map((item) => (
        <div
          key={`${item.name}${suffix}`}
          className="flex shrink-0 items-center gap-3 font-display text-sm font-bold uppercase tracking-[0.1em] text-[var(--kewti-muted)]"
        >
          <span
            className="size-1.5 rounded-full"
            style={{ background: item.color }}
          />
          {item.name}
        </div>
      ))}
    </>
  )
}

export function ComponentTicker() {
  return (
    <div className="overflow-hidden border-y border-[var(--kewti-border)] py-8">
      <div className="flex w-max animate-kewti-ticker gap-12">
        <TickerRow />
        <TickerRow suffix="-dup" aria-hidden />
      </div>
    </div>
  )
}
