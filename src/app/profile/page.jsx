    "use client";

    import { useEffect } from "react";
    import { useRouter } from "next/navigation";
    import { authClient } from "@/lib/auth-client";
    import Link from "next/link";

    export default function ProfilePage() {
    const { data: session, isPending } = authClient.useSession();
    const router = useRouter();

    useEffect(() => {
        if (isPending) return;
        if (!session?.user) router.push("/login");
    }, [session, isPending]);

    if (isPending) {
        return (
        <div className="min-h-screen bg-[#0f1117] flex items-center justify-center">
            <div className="w-10 h-10 rounded-full border-2 border-amber-400/30 border-t-amber-400 animate-spin" />
        </div>
        );
    }

    if (!session?.user) return null;

    const { name, email, image } = session.user;
    const initials = name
        ? name.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase()
        : "?";

    return (
        <section className="min-h-screen bg-[#0f1117] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto">
            <div className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-8 sm:p-10">

            {/* Avatar */}
            <div className="flex flex-col items-center mb-8">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white text-3xl font-bold shadow-lg mb-4 overflow-hidden">
                {image ? (
                    <img src={image} alt={name} className="w-full h-full object-cover" />
                ) : initials}
                </div>
                <h1 className="text-2xl font-extrabold text-white">{name}</h1>
                <p className="text-sm text-slate-500 mt-1">{email}</p>
            </div>

            <div className="w-full h-[1px] bg-white/[0.06] mb-8" />

            {/* Info */}
            <div className="space-y-4">
                <div className="flex flex-col gap-1 bg-white/[0.02] border border-white/[0.06] rounded-xl px-5 py-4">
                <span className="text-xs text-slate-600 font-semibold uppercase tracking-wider">Full Name</span>
                <span className="text-slate-200 font-medium">{name}</span>
                </div>
                <div className="flex flex-col gap-1 bg-white/[0.02] border border-white/[0.06] rounded-xl px-5 py-4">
                <span className="text-xs text-slate-600 font-semibold uppercase tracking-wider">Email</span>
                <span className="text-slate-200 font-medium">{email}</span>
                </div>
                <div className="flex flex-col gap-1 bg-white/[0.02] border border-white/[0.06] rounded-xl px-5 py-4">
                <span className="text-xs text-slate-600 font-semibold uppercase tracking-wider">Account Status</span>
                <span className="text-emerald-400 font-medium flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
                    Active
                </span>
                </div>

                {/* Update Button */}
                <Link
                href="/profile/update"
                className="flex items-center justify-center w-full py-3 rounded-xl text-sm font-bold transition-all duration-200
                    bg-gradient-to-br from-amber-400 to-orange-500 text-[#0f1117]
                    hover:opacity-90 hover:scale-[1.01]"
                >
                Update Information
                </Link>
            </div>
            </div>
        </div>
        </section>
    );
    }