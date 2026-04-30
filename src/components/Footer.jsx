    "use client";

    import Link from "next/link";
    import { useState } from "react";

    const NAV_LINKS = [
    { href: "/", label: "Home" },
    { href: "/books", label: "All Books" },
    { href: "/profile", label: "My Profile" },
    { href: "/login", label: "Login" },
    ];

    const CATEGORIES = [
    { href: "/books?category=story", label: "Story" },
    { href: "/books?category=tech", label: "Technology" },
    { href: "/books?category=science", label: "Science" },
    { href: "/books?category=history", label: "History" },
    ];

    const SOCIAL = [
    {
        label: "Facebook",
        href: "https://facebook.com",
        color: "#1877f2",
        icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
        </svg>
        ),
    },
    {
        label: "Twitter / X",
        href: "https://twitter.com",
        color: "#e2e8f0",
        icon: (
        <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
        ),
    },
    {
        label: "Instagram",
        href: "https://www.instagram.com/al_rifat_7/",
        color: "#e1306c",
        icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
        </svg>
        ),
    },
    {
        label: "YouTube",
        href: "https://www.youtube.com/feed/you",
        color: "#ff0000",
        icon: (
        <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z" />
            <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#0f1117" />
        </svg>
        ),
    },
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/alrifat-codes/",
        color: "#0a66c2",
        icon: (
        <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
            <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
            <circle cx="4" cy="4" r="2" />
        </svg>
        ),
    },
    ];

    export default function Footer() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
        if (!formData.name || !formData.email || !formData.message) return;
        setLoading(true);
        await new Promise((r) => setTimeout(r, 900));
        setLoading(false);
        setSubmitted(true);
    };

    return (
        <>
        <style>{`
            @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to   { opacity: 1; transform: translateY(0); }
            }
            @keyframes checkPop {
            0%   { transform: scale(0); opacity: 0; }
            70%  { transform: scale(1.2); opacity: 1; }
            100% { transform: scale(1); opacity: 1; }
            }
            .footer-input {
            width: 100%;
            background: rgba(255,255,255,0.04);
            border: 1px solid rgba(255,255,255,0.09);
            border-radius: 10px;
            padding: 10px 14px;
            color: #e2e8f0;
            font-size: 14px;
            outline: none;
            transition: border-color 0.2s, background 0.2s;
            font-family: inherit;
            resize: none;
            }
            .footer-input::placeholder { color: #475569; }
            .footer-input:focus {
            border-color: rgba(251,191,36,0.45);
            background: rgba(251,191,36,0.04);
            }
            .social-btn {
            display: flex; align-items: center; justify-content: center;
            width: 40px; height: 40px; border-radius: 10px;
            border: 1px solid rgba(255,255,255,0.08);
            background: rgba(255,255,255,0.04);
            color: #94a3b8;
            transition: all 0.2s ease;
            text-decoration: none;
            }
            .social-btn:hover {
            transform: translateY(-3px);
            border-color: var(--sc, rgba(255,255,255,0.2));
            color: var(--sc, #e2e8f0);
            background: rgba(255,255,255,0.07);
            box-shadow: 0 6px 20px color-mix(in srgb, var(--sc, #fff) 20%, transparent);
            }
            .check-pop { animation: checkPop 0.4s cubic-bezier(.36,.07,.19,.97) forwards; }
            .submit-btn {
            position: relative; overflow: hidden;
            width: 100%; padding: 11px;
            border-radius: 10px; border: none; cursor: pointer;
            font-weight: 700; font-size: 14px; font-family: inherit;
            color: #0f1117;
            background: linear-gradient(135deg, #fbbf24 0%, #f97316 100%);
            transition: transform 0.15s, box-shadow 0.15s;
            box-shadow: 0 4px 16px rgba(251,191,36,0.22);
            }
            .submit-btn:hover:not(:disabled) { transform: translateY(-1px); box-shadow: 0 6px 22px rgba(251,191,36,0.32); }
            .submit-btn:active:not(:disabled) { transform: scale(0.98); }
            .submit-btn:disabled { opacity: 0.7; cursor: not-allowed; }
            .divider-line {
            height: 1px;
            background: linear-gradient(to right, transparent, rgba(255,255,255,0.07) 30%, rgba(255,255,255,0.07) 70%, transparent);
            }
            .footer-link {
            color: #64748b; font-size: 13.5px; text-decoration: none;
            transition: color 0.15s;
            }
            .footer-link:hover { color: #fbbf24; }
        `}</style>

        <footer className="bg-[#0a0d13] border-t border-white/[0.06] pt-16 pb-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* ── Top grid ──────────────────────────────────────────────────── */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">

                {/* Col 1 — Brand */}
                <div className="lg:col-span-1">
                {/* Logo */}
                <Link href="/" className="inline-flex items-center gap-2.5 mb-5 group">
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform"
                    style={{ background: "linear-gradient(135deg, #fbbf24, #f97316)" }}>
                    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" className="text-white">
                        <path d="M4 19.5A2.5 2.5 0 016.5 17H20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M9 7h7M9 11h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                    </svg>
                    </div>
                    <span className="font-bold text-white text-[1.1rem] tracking-tight">
                    Book<span className="text-amber-400">Nest</span>
                    </span>
                </Link>

                <p className="text-slate-500 text-sm leading-relaxed mb-6 max-w-[220px]">
                    Your modern digital library. Borrow, read, and explore — all in one place.
                </p>

                {/* Social icons */}
                <p className="text-[11px] font-semibold text-slate-600 tracking-widest uppercase mb-3">
                    Follow Us
                </p>
                <div className="flex items-center gap-2 flex-wrap">
                    {SOCIAL.map(({ label, href, color, icon }) => (
                    <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="social-btn"
                        style={{ "--sc": color }}
                        title={label}
                    >
                        {icon}
                    </a>
                    ))}
                </div>
                </div>

                {/* Col 2 — Quick Links */}
                <div>
                <p className="text-[11px] font-semibold text-slate-600 tracking-widest uppercase mb-5">
                    Quick Links
                </p>
                <ul className="space-y-3">
                    {NAV_LINKS.map(({ href, label }) => (
                    <li key={href}>
                        <Link href={href} className="footer-link flex items-center gap-2 group">
                        <span className="w-1 h-1 rounded-full bg-amber-400/0 group-hover:bg-amber-400 transition-colors flex-shrink-0" />
                        {label}
                        </Link>
                    </li>
                    ))}
                </ul>
                </div>

                <div>
                <p className="text-[11px] font-semibold text-slate-600 tracking-widest uppercase mb-5">
                    Categories
                </p>
                <ul className="space-y-3">
                    {CATEGORIES.map(({ href, label }) => (
                    <li key={href}>
                        <Link href={href} className="footer-link flex items-center gap-2 group">
                        <span className="w-1 h-1 rounded-full bg-amber-400/0 group-hover:bg-amber-400 transition-colors flex-shrink-0" />
                        {label}
                        </Link>
                    </li>
                    ))}
                </ul>
                </div>

                {/* Col 4 — Contact Us */}
                <div>
                <p className="text-[11px] font-semibold text-slate-600 tracking-widest uppercase mb-5">
                    Contact Us
                </p>

                {submitted ? (
                    /* Success state */
                    <div
                    className="flex flex-col items-center justify-center gap-3 py-8 rounded-xl border border-amber-400/20 bg-amber-400/5"
                    style={{ animation: "fadeIn 0.4s ease forwards" }}
                    >
                    <div className="check-pop w-11 h-11 rounded-full flex items-center justify-center"
                        style={{ background: "linear-gradient(135deg, #fbbf24, #f97316)" }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M5 13l4 4L19 7" stroke="#0f1117" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <p className="text-white text-sm font-semibold">Message Sent!</p>
                    <p className="text-slate-500 text-xs text-center">We'll get back to you within 24 hours.</p>
                    <button
                        onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", message: "" }); }}
                        className="text-amber-400 text-xs hover:text-amber-300 transition-colors mt-1"
                    >
                        Send another →
                    </button>
                    </div>
                ) : (
                    /* Contact form */
                    <div className="space-y-3">
                    <input
                        type="text"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                        className="footer-input"
                    />
                    <input
                        type="email"
                        placeholder="Email address"
                        value={formData.email}
                        onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                        className="footer-input"
                    />
                    <textarea
                        placeholder="Your message..."
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
                        className="footer-input"
                    />
                    <button
                        onClick={handleSubmit}
                        disabled={loading || !formData.name || !formData.email || !formData.message}
                        className="submit-btn"
                    >
                        {loading ? (
                        <span className="flex items-center justify-center gap-2">
                            <svg className="animate-spin" width="15" height="15" viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" opacity="0.25"/>
                            <path d="M12 2a10 10 0 0110 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                            </svg>
                            Sending...
                        </span>
                        ) : "Send Message"}
                    </button>

                    {/* Direct contact info */}
                    <div className="flex flex-col gap-1.5 pt-1">
                        <a href="mailto:hello@booknest.com" className="footer-link flex items-center gap-2 text-xs">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                            <polyline points="22,6 12,13 2,6"/>
                        </svg>
                        alrifat421@gmail.com.com
                        </a>
                        <a href="tel:+8801700000000" className="footer-link flex items-center gap-2 text-xs">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
                            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.02 1.18 2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z"/>
                        </svg>
                        +880 1311 779380
                        </a>
                    </div>
                    </div>
                )}
                </div>
            </div>

            {/* ── Divider ───────────────────────────────────────────────────── */}
            <div className="divider-line mb-6" />

            {/* ── Bottom bar ────────────────────────────────────────────────── */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                <p className="text-slate-600 text-xs">
                © {new Date().getFullYear()} BookNest. All rights reserved.
                </p>
                <div className="flex items-center gap-5">
                <Link href="/privacy" className="footer-link text-xs">Privacy Policy</Link>
                <Link href="/terms" className="footer-link text-xs">Terms of Service</Link>
                <Link href="/about" className="footer-link text-xs">About</Link>
                </div>
            </div>

            </div>
        </footer>
        </>
    );
    }