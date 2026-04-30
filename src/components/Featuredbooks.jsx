    "use client";

    import { useEffect, useState } from "react";
    import Link from "next/link";

    const categoryStyles = {
    Story:   { bg: "rgba(249,115,22,0.12)",  color: "#fb923c", border: "rgba(249,115,22,0.3)"  },
    Tech:    { bg: "rgba(99,102,241,0.12)",  color: "#818cf8", border: "rgba(99,102,241,0.3)"  },
    Science: { bg: "rgba(16,185,129,0.12)", color: "#34d399", border: "rgba(16,185,129,0.3)"  },
    };

    function FeaturedCard({ book }) {
    const style = categoryStyles[book.category] || categoryStyles["Story"];

    return (
        <div
        className="group flex flex-col rounded-2xl overflow-hidden transition-all duration-300"
        style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.07)",
        }}
        onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-6px)";
            e.currentTarget.style.borderColor = "rgba(251,191,36,0.3)";
            e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.4)";
        }}
        onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
            e.currentTarget.style.boxShadow = "none";
        }}
        >
        {/* Image */}
        <div className="relative overflow-hidden" style={{ height: "220px" }}>
            <img
            src={book.image_url}
            alt={book.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={(e) => { e.target.src = "https://placehold.co/300x220/1e2130/475569?text=No+Image"; }}
            />
            <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to top, rgba(15,17,23,0.75) 0%, transparent 55%)" }}
            />
            {/* Category badge */}
            <span
            className="absolute top-3 left-3 text-[11px] font-semibold px-2.5 py-1 rounded-full"
            style={{ background: style.bg, color: style.color, border: `1px solid ${style.border}` }}
            >
            {book.category}
            </span>
            {/* Quantity */}
            <span
            className="absolute top-3 right-3 text-[11px] font-semibold px-2.5 py-1 rounded-full"
            style={{
                background: book.available_quantity > 0 ? "rgba(16,185,129,0.15)" : "rgba(239,68,68,0.15)",
                color: book.available_quantity > 0 ? "#34d399" : "#f87171",
                border: `1px solid ${book.available_quantity > 0 ? "rgba(16,185,129,0.3)" : "rgba(239,68,68,0.3)"}`,
            }}
            >
            {book.available_quantity > 0 ? `${book.available_quantity} left` : "Unavailable"}
            </span>
        </div>

        {/* Body */}
        <div className="flex flex-col flex-1 p-5">
            <h3 className="font-bold text-base leading-snug mb-1 line-clamp-2" style={{ color: "#e2e8f0" }}>
            {book.title}
            </h3>
            <p className="text-sm font-medium mb-3" style={{ color: "#f97316" }}>
            {book.author}
            </p>
            <p className="text-xs leading-relaxed mb-5 flex-1 line-clamp-3" style={{ color: "#475569" }}>
            {book.description}
            </p>

            {/* View Details button */}
            <Link
            href={`/books/${book.id}`}
            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-bold transition-all duration-200 hover:opacity-90 hover:scale-[1.01]"
            style={{ background: "linear-gradient(135deg,#fbbf24,#f97316)", color: "#0f1117" }}
            >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="currentColor" strokeWidth="2"/>
                <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
            </svg>
            View Details
            </Link>
        </div>
        </div>
    );
    }

    export default function FeaturedBooks() {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/data.json")
        .then((r) => r.json())
        .then((data) => {
            setBooks(data.slice(0, 4)); // top 4 books
            setLoading(false);
        })
        .catch(() => setLoading(false));
    }, []);

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: "#0f1117" }}>
        <div className="max-w-7xl mx-auto">

            {/* Section header */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
                {/* Eyebrow */}
                <span
                className="inline-block text-[11px] font-semibold tracking-widest uppercase mb-3 px-3 py-1 rounded-full"
                style={{
                    background: "rgba(251,191,36,0.08)",
                    color: "#fbbf24",
                    border: "1px solid rgba(251,191,36,0.15)",
                }}
                >
                ✦ Handpicked For You
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Featured{" "}
                <span
                    className="text-transparent bg-clip-text"
                    style={{ backgroundImage: "linear-gradient(135deg,#fbbf24,#f97316)" }}
                >
                    Books
                </span>
                </h2>
                <p className="mt-2 text-sm" style={{ color: "#475569" }}>
                Our top picks across every genre — curated just for you.
                </p>
            </div>

            <Link
                href="/books"
                className="inline-flex items-center gap-2 text-sm font-semibold transition-colors whitespace-nowrap"
                style={{ color: "#fbbf24" }}
                onMouseEnter={(e) => e.currentTarget.style.color = "#f97316"}
                onMouseLeave={(e) => e.currentTarget.style.color = "#fbbf24"}
            >
                View All Books
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </Link>
            </div>

            {/* Loading */}
            {loading && (
            <div className="flex justify-center py-16">
                <div
                className="w-10 h-10 rounded-full border-2"
                style={{
                    borderColor: "rgba(251,191,36,0.2)",
                    borderTopColor: "#fbbf24",
                    animation: "spin 0.8s linear infinite",
                }}
                />
            </div>
            )}

            {/* Cards grid */}
            {!loading && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {books.map((book) => (
                <FeaturedCard key={book.id} book={book} />
                ))}
            </div>
            )}
        </div>
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        </section>
    );
    }