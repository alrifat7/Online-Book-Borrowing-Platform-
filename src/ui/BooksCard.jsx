    "use client";

    import Link from "next/link";

    const categoryStyles = {
    Story:   { bg: "bg-orange-500/[0.12]",  color: "text-orange-400", border: "border-orange-500/30"  },
    Tech:    { bg: "bg-indigo-500/[0.12]",  color: "text-indigo-400", border: "border-indigo-400/30"  },
    Science: { bg: "bg-emerald-500/[0.12]", color: "text-emerald-400", border: "border-emerald-500/30" },
    };

    export default function BooksCard({ data }) {
    if (!data) return null;

    const { id, title, author, description, category, available_quantity, image_url } = data;
    const style = categoryStyles[category] || categoryStyles["Story"];

    return (
        <div className="group flex flex-col rounded-2xl overflow-hidden transition-all duration-300 bg-white/[0.03] border border-white/[0.07] hover:-translate-y-[6px] hover:border-amber-400/30 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
        <div className="relative overflow-hidden h-[220px]">
            <img
            src={image_url}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
                e.target.src = "https://placehold.co/300x220/1e2130/475569?text=No+Image";
            }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f1117]/70 to-transparent" />
            <span className={`absolute top-3 left-3 text-[11px] font-semibold px-2.5 py-1 rounded-full border ${style.bg} ${style.color} ${style.border}`}>
            {category}
            </span>
            <span
            className={`absolute top-3 right-3 text-[11px] font-semibold px-2.5 py-1 rounded-full border ${
                available_quantity > 0
                ? "bg-emerald-500/15 text-emerald-400 border-emerald-500/30"
                : "bg-red-500/15 text-red-400 border-red-500/30"
            }`}
            >
            {available_quantity > 0 ? `${available_quantity} left` : "Unavailable"}
            </span>
        </div>

        <div className="flex flex-col flex-1 p-5">
            <h3 className="font-bold text-base leading-snug mb-1 line-clamp-2 text-slate-200">
            {title}
            </h3>
            <p className="text-sm mb-3 font-medium text-orange-500">
            {author}
            </p>
            <p className="text-xs leading-relaxed mb-5 flex-1 line-clamp-3 text-slate-600">
            {description}
            </p>

            <Link
            href={`/book/${id}`}
            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-bold transition-all duration-200 hover:opacity-90 hover:scale-[1.01] bg-gradient-to-br from-amber-400 to-orange-500 text-[#0f1117]"
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