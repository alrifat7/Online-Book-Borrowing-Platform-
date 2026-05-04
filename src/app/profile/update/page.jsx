    "use client";

    import { useEffect, useState } from "react";
    import { useRouter } from "next/navigation";
    import { authClient } from "@/lib/auth-client";
    import toast, { Toaster } from "react-hot-toast";

    export default function UpdateProfilePage() {
    const { data: session, isPending } = authClient.useSession();
    const router = useRouter();
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        if (isPending) return;
        if (!session?.user) router.push("/login");
        else {
        setName(session.user.name || "");
        setImage(session.user.image || "");
        }
    }, [session, isPending]);

    const handleUpdate = async () => {
        setSaving(true);
        try {
        await authClient.updateUser({ name, image });
        toast.success("Profile updated!", {
            style: {
            background: "#1e293b",
            color: "#e2e8f0",
            border: "1px solid rgba(251,191,36,0.3)",
            },
            iconTheme: { primary: "#fbbf24", secondary: "#0f1117" },
        });
        setTimeout(() => router.push("/profile"), 1000);
        } catch {
        toast.error("Update failed!");
        } finally {
        setSaving(false);
        }
    };

    if (isPending) {
        return (
        <div className="min-h-screen bg-[#0f1117] flex items-center justify-center">
            <div className="w-10 h-10 rounded-full border-2 border-amber-400/30 border-t-amber-400 animate-spin" />
        </div>
        );
    }

    if (!session?.user) return null;

    const initials = name
        ? name.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase()
        : "?";

    return (
        <section className="min-h-screen bg-[#0f1117] py-16 px-4 sm:px-6 lg:px-8">
        <Toaster position="top-right" />
        <div className="max-w-xl mx-auto">
            <div className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-8 sm:p-10">

            {/* Avatar Preview */}
            <div className="flex flex-col items-center mb-8">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white text-3xl font-bold shadow-lg mb-4 overflow-hidden">
                {image ? (
                    <img src={image} alt={name}
                    className="w-full h-full object-cover"
                    onError={(e) => { e.target.style.display = "none"; }}
                    />
                ) : initials}
                </div>
                <h1 className="text-xl font-extrabold text-white">Update Information</h1>
            </div>

            <div className="w-full h-[1px] bg-white/[0.06] mb-8" />

            <div className="space-y-4">

                {/* Name */}
                <div className="flex flex-col gap-1.5">
                <label className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Full Name</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-xl text-sm text-slate-200 outline-none transition-all duration-200
                    bg-white/[0.04] border border-white/[0.09]
                    focus:border-amber-400/45 focus:bg-amber-400/[0.03]"
                />
                </div>

                {/* Image URL */}
                <div className="flex flex-col gap-1.5">
                <label className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Image URL</label>
                <input
                    type="text"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    placeholder="https://example.com/photo.jpg"
                    className="w-full px-4 py-3 rounded-xl text-sm text-slate-200 outline-none transition-all duration-200
                    bg-white/[0.04] border border-white/[0.09]
                    focus:border-amber-400/45 focus:bg-amber-400/[0.03]"
                />
                <p className="text-xs text-slate-600">Paste any image URL to update your profile picture</p>
                </div>

                {/* Buttons */}
                <div className="flex gap-3 pt-2">
                <button
                    onClick={() => router.push("/profile")}
                    className="flex-1 py-3 rounded-xl text-sm font-bold transition-all duration-200
                    bg-white/[0.04] border border-white/[0.09] text-slate-400
                    hover:bg-white/[0.07]"
                >
                    Cancel
                </button>
                <button
                    onClick={handleUpdate}
                    disabled={saving}
                    className="flex-1 py-3 rounded-xl text-sm font-bold transition-all duration-200
                    bg-gradient-to-br from-amber-400 to-orange-500 text-[#0f1117]
                    hover:opacity-90 hover:scale-[1.01] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {saving ? "Saving..." : "Update Information"}
                </button>
                </div>

            </div>
            </div>
        </div>
        </section>
    );
    }