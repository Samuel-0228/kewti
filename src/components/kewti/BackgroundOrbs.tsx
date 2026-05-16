export function BackgroundOrbs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div
        className="absolute -left-[100px] -top-[100px] size-[500px] animate-kewti-drift rounded-full opacity-100"
        style={{
          background: "radial-gradient(circle, rgba(46,204,113,0.12), transparent 70%)",
          filter: "blur(80px)",
          animationDelay: "0s",
        }}
      />
      <div
        className="absolute bottom-0 right-[200px] size-[400px] animate-kewti-drift rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(230,168,23,0.1), transparent 70%)",
          filter: "blur(80px)",
          animationDelay: "-3s",
        }}
      />
      <div
        className="absolute left-1/2 top-1/2 size-[300px] animate-kewti-drift rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(232,54,42,0.08), transparent 70%)",
          filter: "blur(80px)",
          animationDelay: "-5s",
        }}
      />
    </div>
  )
}
