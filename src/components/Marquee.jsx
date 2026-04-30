    "use client";

    const MARQUEE_ITEMS = [
    "📖 New Arrivals: The Midnight Library",
    "⭐ Special Discount on Memberships",
    "📗 New Arrivals: Clean Code",
    "🎉 Free Borrowing This Weekend",
    "📘 New Arrivals: Sapiens",
    "🔖 New Arrivals: 1984",
    "💡 Special Discount on Memberships",
    "📙 New Arrivals: The Alchemist",
    "🚀 New Arrivals: Designing Data-Intensive Applications",
    "🎁 Special Discount on Memberships",
    ];

    export default function Marquee() {
    const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS]; // duplicate for seamless loop

    return (
        <>
        <style>{`
            @keyframes marquee {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
            }
            .marquee-track {
            animation: marquee 30s linear infinite;
            display: flex;
            width: max-content;
            }
            .marquee-track:hover {
            animation-play-state: paused;
            }
        `}</style>

        <div
            className="w-full overflow-hidden py-3"
            style={{
            background: "linear-gradient(135deg, rgba(251,191,36,0.08), rgba(249,115,22,0.08))",
            borderTop: "1px solid rgba(251,191,36,0.12)",
            borderBottom: "1px solid rgba(251,191,36,0.12)",
            }}
        >
            {/* Left fade */}
            <div
            className="pointer-events-none absolute left-0 z-10 h-full w-24"
            style={{
                background: "linear-gradient(to right, #0f1117, transparent)",
                position: "absolute",
            }}
            />

            <div className="marquee-track">
            {items.map((item, i) => (
                <span
                key={i}
                className="flex items-center gap-2 px-6 text-sm font-medium whitespace-nowrap"
                style={{ color: "#fbbf24" }}
                >
                {item}
                <span style={{ color: "rgba(251,191,36,0.3)", marginLeft: "8px" }}>•</span>
                </span>
            ))}
            </div>

            {/* Right fade */}
            <div
            className="pointer-events-none absolute right-0 z-10 h-full w-24"
            style={{
                background: "linear-gradient(to left, #0f1117, transparent)",
                position: "absolute",
            }}
            />
        </div>
        </>
    );
    }