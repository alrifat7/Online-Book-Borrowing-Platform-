    import Link from "next/link";

    const categoryStyles = {
    Story:   { bg: "rgba(249,115,22,0.12)",  color: "#fb923c", border: "rgba(249,115,22,0.3)"  },
    Tech:    { bg: "rgba(99,102,241,0.12)",  color: "#818cf8", border: "rgba(99,102,241,0.3)"  },
    Science: { bg: "rgba(16,185,129,0.12)", color: "#34d399", border: "rgba(16,185,129,0.3)"  },
    };

    const BooksCard = ({ data }) => {
    if (!data) return null;

    const { id, title, author, description, category, available_quantity, image_url } = data;
    const style = categoryStyles[category] || categoryStyles["Story"];

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
        {/* Cover image */}
        <div className="relative overflow-hidden" style={{ height: "220px" }}>
            <img
            src={image_url}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
                e.target.src = "https://placehold.co/300x220/1e2130/475569?text=No+Image";
            }}
            />
            {/* Gradient overlay */}
            <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to top, rgba(15,17,23,0.7) 0%, transparent 55%)" }}
            />
            {/* Category badge */}
            <span
            className="absolute top-3 left-3 text-[11px] font-semibold px-2.5 py-1 rounded-full"
            style={{ background: style.bg, color: style.color, border: `1px solid ${style.border}` }}
            >
            {category}
            </span>
            {/* Quantity badge */}
            <span
            className="absolute top-3 right-3 text-[11px] font-semibold px-2.5 py-1 rounded-full"
            style={{
                background: available_quantity > 0 ? "rgba(16,185,129,0.15)" : "rgba(239,68,68,0.15)",
                color: available_quantity > 0 ? "#34d399" : "#f87171",
                border: `1px solid ${available_quantity > 0 ? "rgba(16,185,129,0.3)" : "rgba(239,68,68,0.3)"}`,
            }}
            >
            {available_quantity > 0 ? `${available_quantity} left` : "Unavailable"}
            </span>
        </div>

        {/* Body */}
        <div className="flex flex-col flex-1 p-5">
            <h3 className="font-bold text-base leading-snug mb-1 line-clamp-2" style={{ color: "#e2e8f0" }}>
            {title}
            </h3>
            <p className="text-sm mb-3 font-medium" style={{ color: "#f97316" }}>
            {author}
            </p>
            <p className="text-xs leading-relaxed mb-5 flex-1 line-clamp-3" style={{ color: "#475569" }}>
            {description}
            </p>

            {/* Details button */}
            <Link
            href={`/books/${id}`}
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
    };

    export default BooksCard;