    "use client";

    import Link from "next/link";

    export default function Banner() {
    return (
        <>
        <style>{`
            @keyframes fadeUp {
            from { opacity: 0; transform: translateY(24px); }
            to   { opacity: 1; transform: translateY(0); }
            }
            @keyframes shimmer {
            0%   { transform: translateX(-100%); }
            100% { transform: translateX(300%); }
            }
            @keyframes pulse-ring {
            0%   { transform: scale(1);   opacity: 0.7; }
            100% { transform: scale(1.9); opacity: 0; }
            }
            @keyframes floatY {
            0%, 100% { transform: translateY(0px) rotate(-2deg); }
            50%       { transform: translateY(-12px) rotate(-2deg); }
            }
            @keyframes floatY2 {
            0%, 100% { transform: translateY(0px) rotate(3deg); }
            50%       { transform: translateY(-10px) rotate(3deg); }
            }
            .fade-1 { animation: fadeUp 0.65s ease forwards; opacity: 0; animation-delay: 0.05s; }
            .fade-2 { animation: fadeUp 0.65s ease forwards; opacity: 0; animation-delay: 0.2s;  }
            .fade-3 { animation: fadeUp 0.65s ease forwards; opacity: 0; animation-delay: 0.35s; }
            .fade-4 { animation: fadeUp 0.65s ease forwards; opacity: 0; animation-delay: 0.5s;  }
            .shimmer-btn::after {
            content: '';
            position: absolute;
            inset: 0;
            width: 35%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.28), transparent);
            animation: shimmer 2.2s ease-in-out infinite;
            }
            .book-left  { animation: floatY  4.2s ease-in-out infinite; }
            .book-right { animation: floatY2 3.8s ease-in-out infinite 0.5s; }
            .live-dot::before {
            content: '';
            position: absolute;
            inset: -3px;
            border-radius: 50%;
            border: 1.5px solid #fbbf24;
            animation: pulse-ring 1.8s ease-out infinite;
            }
        `}</style>

        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#0f1117]">

            {/* ── Background ─────────────────────────────────────────────────── */}

            {/* Soft grid */}
            <div
            className="absolute inset-0 pointer-events-none opacity-[0.035]"
            style={{
                backgroundImage: `
                linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)
                `,
                backgroundSize: "52px 52px",
            }}
            />

            {/* Center amber glow */}
            <div
            className="absolute inset-0 pointer-events-none"
            style={{
                background:
                "radial-gradient(ellipse 65% 50% at 50% 50%, rgba(251,191,36,0.09) 0%, transparent 70%)",
            }}
            />

            {/* Corner accents */}
            <div
            className="absolute -top-24 -left-24 w-72 h-72 rounded-full pointer-events-none opacity-20"
            style={{ background: "radial-gradient(circle, rgba(251,191,36,0.5) 0%, transparent 65%)" }}
            />
            <div
            className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full pointer-events-none opacity-15"
            style={{ background: "radial-gradient(circle, rgba(249,115,22,0.5) 0%, transparent 65%)" }}
            />

            {/* ── Floating book cards (desktop only) ─────────────────────────── */}

            {/* Left book — tall */}
            <div className="book-left absolute left-[6%] top-1/2 -translate-y-1/2 hidden xl:block pointer-events-none select-none">
            <div
                className="w-[78px] h-[108px] rounded-r-lg rounded-l-sm flex flex-col justify-end p-2.5 relative overflow-hidden"
                style={{
                background: "linear-gradient(135deg, #fbbf2422, #fbbf2444)",
                border: "1px solid #fbbf2455",
                boxShadow: "6px 6px 24px rgba(251,191,36,0.2), inset -4px 0 8px rgba(0,0,0,0.25)",
                }}
            >
                <div className="absolute left-[11px] top-0 bottom-0 w-[2px] rounded-full bg-amber-400 opacity-40" />
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                <p className="text-[7px] font-bold text-amber-400 leading-tight z-10">Dune</p>
                <p className="text-[5.5px] text-white/40 z-10 mt-0.5">Frank Herbert</p>
            </div>
            </div>

            {/* Left book — small lower */}
            <div
            className="absolute left-[9%] hidden xl:block pointer-events-none select-none"
            style={{ top: "62%", animation: "floatY2 5s ease-in-out infinite 1.2s" }}
            >
            <div
                className="w-[60px] h-[84px] rounded-r-lg rounded-l-sm flex flex-col justify-end p-2 relative overflow-hidden"
                style={{
                background: "linear-gradient(135deg, #6366f122, #6366f144)",
                border: "1px solid #6366f155",
                boxShadow: "4px 4px 16px rgba(99,102,241,0.2), inset -3px 0 6px rgba(0,0,0,0.25)",
                transform: "rotate(6deg)",
                }}
            >
                <div className="absolute left-[9px] top-0 bottom-0 w-[1.5px] rounded-full bg-indigo-400 opacity-40" />
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                <p className="text-[6.5px] font-bold text-indigo-400 leading-tight z-10">1984</p>
                <p className="text-[5px] text-white/40 z-10 mt-0.5">G. Orwell</p>
            </div>
            </div>

            {/* Right book — tall */}
            <div className="book-right absolute right-[6%] top-1/2 -translate-y-1/2 hidden xl:block pointer-events-none select-none">
            <div
                className="w-[78px] h-[108px] rounded-r-lg rounded-l-sm flex flex-col justify-end p-2.5 relative overflow-hidden"
                style={{
                background: "linear-gradient(135deg, #10b98122, #10b98144)",
                border: "1px solid #10b98155",
                boxShadow: "6px 6px 24px rgba(16,185,129,0.2), inset -4px 0 8px rgba(0,0,0,0.25)",
                }}
            >
                <div className="absolute left-[11px] top-0 bottom-0 w-[2px] rounded-full bg-emerald-400 opacity-40" />
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                <p className="text-[6.5px] font-bold text-emerald-400 leading-tight z-10">Sapiens</p>
                <p className="text-[5px] text-white/40 z-10 mt-0.5">Yuval Harari</p>
            </div>
            </div>

            {/* Right book — small upper */}
            <div
            className="absolute right-[9%] hidden xl:block pointer-events-none select-none"
            style={{ top: "28%", animation: "floatY 4.6s ease-in-out infinite 0.8s" }}
            >
            <div
                className="w-[60px] h-[82px] rounded-r-lg rounded-l-sm flex flex-col justify-end p-2 relative overflow-hidden"
                style={{
                background: "linear-gradient(135deg, #ec489922, #ec489944)",
                border: "1px solid #ec489955",
                boxShadow: "4px 4px 16px rgba(236,72,153,0.2), inset -3px 0 6px rgba(0,0,0,0.25)",
                transform: "rotate(-5deg)",
                }}
            >
                <div className="absolute left-[9px] top-0 bottom-0 w-[1.5px] rounded-full bg-pink-400 opacity-40" />
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                <p className="text-[6px] font-bold text-pink-400 leading-tight z-10">Cosmos</p>
                <p className="text-[5px] text-white/40 z-10 mt-0.5">C. Sagan</p>
            </div>
            </div>

            {/* ── Main content ───────────────────────────────────────────────── */}
            <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-2xl mx-auto">

            {/* Eyebrow pill */}
            <div className="fade-1 flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-amber-400/20 bg-amber-400/5">
                <span className="relative w-2 h-2 flex-shrink-0">
                <span className="live-dot absolute inset-0 rounded-full bg-amber-400" />
                </span>
                <span className="text-amber-400/90 text-[11px] font-semibold tracking-[0.18em] uppercase">
                Digital Library Platform
                </span>
            </div>

            {/* ── Heading: "Find Your Next Read" ── */}
            <h1 className="fade-2 text-5xl sm:text-6xl lg:text-[4.5rem] font-extrabold text-white leading-[1.07] tracking-tight mb-6">
                Find Your{" "}
                <span className="relative inline-block whitespace-nowrap">
                <span
                    className="relative z-10 text-transparent bg-clip-text"
                    style={{
                    backgroundImage: "linear-gradient(135deg, #fbbf24 0%, #f97316 100%)",
                    }}
                >
                    Next Read
                </span>
                {/* Squiggle underline */}
                <svg
                    className="absolute -bottom-2 left-0 w-full"
                    height="8"
                    viewBox="0 0 220 8"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                >
                    <path
                    d="M2 6 Q28 1 55 5.5 Q82 10 110 5.5 Q138 1 165 5.5 Q192 10 218 5.5"
                    fill="none"
                    stroke="#f97316"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    opacity="0.65"
                    />
                </svg>
                </span>
            </h1>

            {/* Sub-text */}
            <p className="fade-3 text-slate-400 text-lg sm:text-xl leading-relaxed max-w-lg mb-10">
                Thousands of books across every genre — borrow digitally, read
                instantly, no late fees.
            </p>

            {/* ── "Browse Now" button → /books ── */}
            <div className="fade-4">
                <Link
                href="/books"
                className="shimmer-btn relative overflow-hidden inline-flex items-center gap-3 px-9 py-4 rounded-xl font-bold text-slate-900 text-base transition-all duration-200 hover:scale-[1.04] active:scale-[0.98]"
                style={{
                    background: "linear-gradient(135deg, #fbbf24 0%, #f97316 100%)",
                    boxShadow: "0 8px 28px rgba(251,191,36,0.28)",
                }}
                >
                {/* Book icon */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M4 19.5A2.5 2.5 0 016.5 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 7h7M9 11h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                Browse Now
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                </Link>
            </div>
            </div>

            {/* Bottom fade */}
            <div
            className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none"
            style={{ background: "linear-gradient(to bottom, transparent, #0f1117)" }}
            />
        </section>
        </>
    );
    }