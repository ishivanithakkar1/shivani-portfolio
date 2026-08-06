export function Noise() {
    return (
        <div
            className="
      pointer-events-none
      absolute
      inset-0
      opacity-[0.03]
      mix-blend-multiply
      "
            style={{
                backgroundImage:
                    "radial-gradient(circle, black 1px, transparent 1px)",
                backgroundSize: "12px 12px",
            }}
        />
    );
}