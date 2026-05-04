    "use client";

    import { useEffect, useState } from "react";
    import { useRouter } from "next/navigation";
    import toast, { Toaster } from "react-hot-toast";
    import { authClient } from "@/lib/auth-client";

    const BookDetails = ({ id }) => {
    const [book, setBook] = useState(null);
    const [loading, setLoading] = useState(true);
    const { data: session, isPending } = authClient.useSession();
    const router = useRouter();

    useEffect(() => {
        if (isPending) return;

        if (!session?.user) {
        router.push("/login");
        return;
        }

        fetch("/data.json")
        .then((res) => res.json())
        .then((data) => {
            const found = data.find((b) => String(b.id) === String(id));
            setBook(found);
            setLoading(false);
        })
        .catch(() => setLoading(false));
    }, [id, session, isPending]);

    const handleBorrow = () => {
        toast.success("Book borrowed successfully!", {
        style: {
            background: "#1e293b",
            color: "#e2e8f0",
            border: "1px solid rgba(251,191,36,0.3)",
        },
        iconTheme: { primary: "#fbbf24", secondary: "#0f1117" },
        });
    };

    if (isPending || loading) {
        return (
        <div className="min-h-screen bg-[#0f1117] flex items-center justify-center">
            <div className="w-10 h-10 rounded-full border-2 border-amber-400/30 border-t-amber-400 animate-spin" />
        </div>
        );
    }

    if (!book) {
        return (
        <div className="min-h-screen bg-[#0f1117] flex items-center justify-center">
            <p className="text-slate-500 text-lg font-semibold">Book not found.</p>
        </div>
        );
    }

    const { title, author, description, category, available_quantity, image_url } = book;

    const categoryColor = {
        Story:   "bg-orange-500/10 text-orange-400 border-orange-500/30",
        Tech:    "bg-indigo-500/10 text-indigo-400 border-indigo-400/30",
        Science: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    };

    return (
        <section className="min-h-screen bg-[#0f1117] py-16 px-4 sm:px-6 lg:px-8">
        <Toaster position="top-right" />
        <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row gap-10 bg-white/[0.03] border border-white/[0.07] rounded-2xl overflow-hidden p-6 sm:p-10">

            {/* Left - Cover Image */}
            <div className="w-full md:w-[320px] shrink-0">
                <div className="rounded-xl overflow-hidden h-[400px] md:h-full">
                <img
                    src={image_url}
                    alt={title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                    e.target.src = "https://placehold.co/320x400/1e2130/475569?text=No+Image";
                    }}
                />
                </div>
            </div>

            {/* Right - Details */}
            <div className="flex flex-col flex-1 justify-between gap-6">
                <div>
                <div className="flex items-center gap-3 mb-4 flex-wrap">
                    <span className={`text-[11px] font-semibold px-3 py-1 rounded-full border ${categoryColor[category] || categoryColor["Story"]}`}>
                    {category}
                    </span>
                    <span className={`text-[11px] font-semibold px-3 py-1 rounded-full border ${
                    available_quantity > 0
                        ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
                        : "bg-red-500/10 text-red-400 border-red-500/30"
                    }`}>
                    {available_quantity > 0 ? `${available_quantity} copies left` : "Unavailable"}
                    </span>
                </div>

                <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-100 leading-tight mb-3">
                    {title}
                </h1>

                <p className="text-base font-semibold text-orange-500 mb-6">
                    by {author}
                </p>

                <div className="w-12 h-[2px] bg-gradient-to-r from-amber-400 to-orange-500 rounded-full mb-6" />

                <p className="text-sm text-slate-500 leading-relaxed">
                    {description}
                </p>
                </div>

                <button
                onClick={handleBorrow}
                disabled={available_quantity === 0}
                className={`w-full sm:w-fit px-8 py-3 rounded-xl text-sm font-bold transition-all duration-200 
                    ${available_quantity > 0
                    ? "bg-gradient-to-br from-amber-400 to-orange-500 text-[#0f1117] hover:opacity-90 hover:scale-[1.02]"
                    : "bg-white/[0.05] text-slate-600 border border-white/[0.08] cursor-not-allowed"
                    }`}
                >
                {available_quantity > 0 ? "Borrow This Book" : "Not Available"}
                </button>
            </div>
            </div>
        </div>
        </section>
    );
    };

    export default BookDetails;