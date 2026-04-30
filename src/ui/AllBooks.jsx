    "use client";

    import { useState, useMemo, useEffect } from "react";  
    import BooksCard from "@/ui/BooksCard";

    const CATEGORIES = ["All", "Story", "Tech", "Science"];

    const AllBooks = () => {
    const [data, setData] = useState([]);       
    const [search, setSearch] = useState("");
    const [activeCategory, setActiveCategory] = useState("All");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/data.json")
        .then((res) => res.json())
        .then((json) => {
            setData(json);
            setLoading(false);
        })
        .catch(() => setLoading(false));
    }, []);

    const filtered = useMemo(() => {
        return data.filter((book) => {
        const matchSearch =
            book.title.toLowerCase().includes(search.toLowerCase()) ||
            book.author.toLowerCase().includes(search.toLowerCase());
        const matchCat =
            activeCategory === "All" || book.category === activeCategory;
        return matchSearch && matchCat;
        });
    }, [search, activeCategory, data]);  

    return (
        <section className="min-h-screen py-14 px-4 sm:px-6 lg:px-8" style={{ background: "#0f1117" }}>
        <div className="max-w-7xl mx-auto">

            {/* Heading */}
            <div className="text-center mb-10">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-2">
                All{" "}
                <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: "linear-gradient(135deg,#fbbf24,#f97316)" }}
                >
                Books
                </span>
            </h1>
            <p className="text-sm" style={{ color: "#475569" }}>
                {filtered.length} book{filtered.length !== 1 ? "s" : ""} available
            </p>
            </div>

            {/* Search bar */}
            <div className="relative max-w-xl mx-auto mb-7">
            <svg
                className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none"
                width="16" height="16" viewBox="0 0 24 24" fill="none"
                style={{ color: "#475569" }}
            >
                <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
                <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <input
                type="text"
                placeholder="Search by title or author..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-11 pr-10 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.09)",
                color: "#e2e8f0",
                }}
                onFocus={(e) => {
                e.target.style.borderColor = "rgba(251,191,36,0.45)";
                e.target.style.background = "rgba(251,191,36,0.03)";
                }}
                onBlur={(e) => {
                e.target.style.borderColor = "rgba(255,255,255,0.09)";
                e.target.style.background = "rgba(255,255,255,0.04)";
                }}
            />
            {search && (
                <button
                onClick={() => setSearch("")}
                style={{ position:"absolute", right:"14px", top:"50%", transform:"translateY(-50%)", background:"none", border:"none", cursor:"pointer", color:"#475569" }}
                onMouseEnter={(e) => e.currentTarget.style.color = "#e2e8f0"}
                onMouseLeave={(e) => e.currentTarget.style.color = "#475569"}
                >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
                </svg>
                </button>
            )}
            </div>

            {/* Category tabs */}
            <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
            {CATEGORIES.map((cat) => (
                <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer"
                style={{
                    background: activeCategory === cat
                    ? "linear-gradient(135deg,#fbbf24,#f97316)"
                    : "rgba(255,255,255,0.04)",
                    color: activeCategory === cat ? "#0f1117" : "#64748b",
                    border: activeCategory === cat
                    ? "1px solid transparent"
                    : "1px solid rgba(255,255,255,0.08)",
                }}
                >
                {cat}
                </button>
            ))}
            </div>

            {/* Loading state */}
            {loading && (
            <div className="flex items-center justify-center py-24">
                <div
                className="w-10 h-10 rounded-full border-2 border-t-transparent"
                style={{
                    borderColor: "rgba(251,191,36,0.3)",
                    borderTopColor: "#fbbf24",
                    animation: "spin 0.8s linear infinite",
                }}
                />
            </div>
            )}

            {/* Book grid */}
            {!loading && filtered.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filtered.map((book) => (
                <BooksCard key={book.id} data={book} />
                ))}
            </div>
            )}

            {/* Empty state */}
            {!loading && filtered.length === 0 && (
            <div className="flex flex-col items-center justify-center py-24 gap-3">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" style={{ color: "#1e293b" }}>
                <path d="M4 19.5A2.5 2.5 0 016.5 17H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 9l6 6M15 9l-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                <p className="font-semibold text-lg" style={{ color: "#334155" }}>No books found</p>
                <button
                onClick={() => { setSearch(""); setActiveCategory("All"); }}
                className="mt-1 px-5 py-2 rounded-xl text-sm font-semibold cursor-pointer"
                style={{ background:"rgba(251,191,36,0.1)", color:"#fbbf24", border:"1px solid rgba(251,191,36,0.2)" }}
                >
                Clear filters
                </button>
            </div>
            )}

        </div>

        {/* Spinner keyframe */}
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        </section>
    );
    };

    export default AllBooks;