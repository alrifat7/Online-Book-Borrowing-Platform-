    "use client";

    import Link from "next/link";

    // ─────────────────────────────────────────────
    // EXTRA SECTION 1 — Browse by Category
    // ─────────────────────────────────────────────
    const CATEGORIES = [
    {
        name: "Story",
        slug: "Story",
        desc: "Fiction, novels & timeless narratives",
        icon: "📖",
        color: "#f97316",
        bg: "rgba(249,115,22,0.08)",
        border: "rgba(249,115,22,0.2)",
        count: "4 Books",
    },
    {
        name: "Technology",
        slug: "Tech",
        desc: "Programming, software & engineering",
        icon: "💻",
        color: "#818cf8",
        bg: "rgba(99,102,241,0.08)",
        border: "rgba(99,102,241,0.2)",
        count: "4 Books",
    },
    {
        name: "Science",
        slug: "Science",
        desc: "Physics, biology & the cosmos",
        icon: "🔬",
        color: "#34d399",
        bg: "rgba(16,185,129,0.08)",
        border: "rgba(16,185,129,0.2)",
        count: "4 Books",
    },
    ];

    export function BrowseByCategory() {
    return (
        <section
        className="py-20 px-4 sm:px-6 lg:px-8"
        style={{
            background: "#0a0d13",
            borderTop: "1px solid rgba(255,255,255,0.05)",
            borderBottom: "1px solid rgba(255,255,255,0.05)",
        }}
        >
        <div className="max-w-7xl mx-auto">

            {/* Header */}
            <div className="text-center mb-12">
            <span
                className="inline-block text-[11px] font-semibold tracking-widest uppercase mb-3 px-3 py-1 rounded-full"
                style={{
                background: "rgba(251,191,36,0.08)",
                color: "#fbbf24",
                border: "1px solid rgba(251,191,36,0.15)",
                }}
            >
                ✦ Explore by Genre
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                Browse by{" "}
                <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: "linear-gradient(135deg,#fbbf24,#f97316)" }}
                >
                Category
                </span>
            </h2>
            <p className="mt-2 text-sm" style={{ color: "#475569" }}>
                Find your next read in the genre you love most.
            </p>
            </div>

            {/* Category cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {CATEGORIES.map((cat) => (
                <Link
                key={cat.slug}
                href={`/books?category=${cat.slug}`}
                className="group flex flex-col items-center text-center p-8 rounded-2xl transition-all duration-300"
                style={{
                    background: cat.bg,
                    border: `1px solid ${cat.border}`,
                    textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-5px)";
                    e.currentTarget.style.boxShadow = `0 20px 40px ${cat.color}20`;
                    e.currentTarget.style.borderColor = cat.color + "55";
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.borderColor = cat.border;
                }}
                >
                <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-5 transition-transform duration-300 group-hover:scale-110"
                    style={{
                    background: `${cat.color}18`,
                    border: `1px solid ${cat.color}30`,
                    }}
                >
                    {cat.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{cat.name}</h3>
                <p className="text-sm mb-4" style={{ color: "#475569" }}>{cat.desc}</p>
                <span
                    className="text-xs font-semibold px-3 py-1 rounded-full"
                    style={{
                    background: `${cat.color}15`,
                    color: cat.color,
                    border: `1px solid ${cat.color}30`,
                    }}
                >
                    {cat.count}
                </span>
                </Link>
            ))}
            </div>
        </div>
        </section>
    );
    }


    // ─────────────────────────────────────────────
    // EXTRA SECTION 2 — Why Choose BookNest
    // ─────────────────────────────────────────────
    const FEATURES = [
    {
        icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        ),
        title: "Secure & Private",
        desc: "Your data is protected with industry-standard encryption. Read with complete peace of mind.",
        color: "#34d399",
    },
    {
        icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.8"/>
            <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        </svg>
        ),
        title: "Borrow Anytime",
        desc: "Available 24/7. Borrow a book at midnight or noon — the library never closes.",
        color: "#818cf8",
    },
    {
        icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M4 19.5A2.5 2.5 0 016.5 17H20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9 7h7M9 11h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        </svg>
        ),
        title: "12,000+ Books",
        desc: "A massive collection spanning fiction, tech, science, history and dozens more genres.",
        color: "#fbbf24",
    },
    {
        icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
            <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.8"/>
            <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        </svg>
        ),
        title: "3,000+ Readers",
        desc: "Join a growing community of readers who share reviews, recommendations, and reading lists.",
        color: "#f97316",
    },
    ];

    export function WhyChooseUs() {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: "#0f1117" }}>
        <div className="max-w-7xl mx-auto">

            {/* Header */}
            <div className="text-center mb-14">
            <span
                className="inline-block text-[11px] font-semibold tracking-widest uppercase mb-3 px-3 py-1 rounded-full"
                style={{
                background: "rgba(251,191,36,0.08)",
                color: "#fbbf24",
                border: "1px solid rgba(251,191,36,0.15)",
                }}
            >
                ✦ Why BookNest
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                Why Readers{" "}
                <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: "linear-gradient(135deg,#fbbf24,#f97316)" }}
                >
                Love Us
                </span>
            </h2>
            <p className="mt-2 text-sm max-w-md mx-auto" style={{ color: "#475569" }}>
                Everything you need for a seamless, enjoyable digital reading experience.
            </p>
            </div>

            {/* Feature grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES.map((f, i) => (
                <div
                key={i}
                className="flex flex-col p-7 rounded-2xl transition-all duration-300"
                style={{
                    background: "rgba(255,255,255,0.025)",
                    border: "1px solid rgba(255,255,255,0.07)",
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = f.color + "44";
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.background = `${f.color}06`;
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.background = "rgba(255,255,255,0.025)";
                }}
                >
                {/* Icon */}
                <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{
                    background: `${f.color}15`,
                    border: `1px solid ${f.color}25`,
                    color: f.color,
                    }}
                >
                    {f.icon}
                </div>
                <h3 className="text-base font-bold text-white mb-2">{f.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#475569" }}>{f.desc}</p>
                </div>
            ))}
            </div>
        </div>
        </section>
    );
    }