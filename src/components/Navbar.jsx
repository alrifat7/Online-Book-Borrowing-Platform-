    "use client";

    import { useState, useEffect } from "react";
    import Link from "next/link";
    import { usePathname } from "next/navigation";

    function useMockSession() {
    const [session, setSession] = useState(null);
    return { session, setSession };
    }

    const NAV_LINKS = [
    { href: "/", label: "Home" },
    { href: "/books", label: "All Books" },
    { href: "/profile", label: "My Profile" },
    ];

    export default function Navbar() {
    const pathname = usePathname();
    const { session, setSession } = useMockSession();
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 12);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => setMenuOpen(false), [pathname]);

    const initials = session?.user?.name
        ? session.user.name
            .split(" ")
            .map((w) => w[0])
            .join("")
            .slice(0, 2)
            .toUpperCase()
        : "";

    return (
        <>
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            scrolled
                ? "bg-[#0f1117]/95 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.4)]"
                : "bg-transparent"
            }`}
        >
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 lg:h-[70px]">

                <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
                <div className="relative w-9 h-9 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-200">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white">
                    <path d="M4 19.5A2.5 2.5 0 016.5 17H20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M9 7h7M9 11h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    </svg>
                </div>
                <span className="font-bold text-white text-[1.15rem] tracking-tight leading-none">
                    Book<span className="text-amber-400">Nest</span>
                </span>
                </Link>

                <ul className="hidden md:flex items-center gap-1">
                {NAV_LINKS.map(({ href, label }) => {
                    const active = pathname === href;
                    return (
                    <li key={href}>
                        <Link
                        href={href}
                        className={`relative px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                            active ? "text-amber-400" : "text-slate-300 hover:text-white"
                        }`}
                        >
                        {label}
                        {active && (
                            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-[2px] rounded-full bg-amber-400" />
                        )}
                        </Link>
                    </li>
                    );
                })}
                </ul>

                <div className="hidden md:flex items-center gap-3">
                {session ? (
                    <>
                    <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white text-xs font-bold shadow">
                        {session.user?.image ? (
                            <img
                            src={session.user.image}
                            alt={session.user.name}
                            className="w-full h-full rounded-full object-cover"
                            />
                        ) : (
                            initials
                        )}
                        </div>
                        <span className="text-slate-200 text-sm font-medium max-w-[120px] truncate">
                        {session.user?.name}
                        </span>
                    </div>
                    <button
                        onClick={() => setSession(null)}
                        className="flex items-center gap-1.5 px-4 py-1.5 rounded-md border border-slate-600 text-slate-300 text-sm font-medium hover:border-red-500 hover:text-red-400 transition-colors duration-200"
                    >
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
                        <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <polyline points="16 17 21 12 16 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <line x1="21" y1="12" x2="9" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                        Logout
                    </button>
                    </>
                ) : (
                    <Link
                    href="/login"
                    className="px-5 py-2 rounded-md bg-amber-400 hover:bg-amber-300 text-slate-900 text-sm font-semibold transition-colors duration-200 shadow-md shadow-amber-500/20"
                    >
                    Login
                    </Link>
                )}
                </div>

                <button
                onClick={() => setMenuOpen((o) => !o)}
                className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-[5px] rounded-md hover:bg-white/10 transition-colors"
                aria-label="Toggle menu"
                >
                <span className={`block w-5 h-[2px] bg-slate-300 rounded-full transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
                <span className={`block w-5 h-[2px] bg-slate-300 rounded-full transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
                <span className={`block w-5 h-[2px] bg-slate-300 rounded-full transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
                </button>
            </div>
            </nav>

            <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
            <div className="bg-[#0f1117]/98 backdrop-blur-md border-t border-slate-800 px-4 py-4 space-y-1">
                {NAV_LINKS.map(({ href, label }) => {
                const active = pathname === href;
                return (
                    <Link
                    key={href}
                    href={href}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors duration-150 ${
                        active ? "bg-amber-400/10 text-amber-400" : "text-slate-300 hover:bg-white/5 hover:text-white"
                    }`}
                    >
                    {active && <span className="w-1 h-4 rounded-full bg-amber-400 flex-shrink-0" />}
                    {label}
                    </Link>
                );
                })}
                <div className="pt-3 mt-3 border-t border-slate-800">
                {session ? (
                    <div className="flex items-center justify-between px-3">
                    <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white text-xs font-bold">
                        {initials}
                        </div>
                        <span className="text-slate-200 text-sm font-medium">
                        {session.user?.name}
                        </span>
                    </div>
                    <button
                        onClick={() => setSession(null)}
                        className="px-3 py-1.5 rounded-md border border-slate-700 text-slate-400 text-xs font-medium hover:border-red-500 hover:text-red-400 transition-colors"
                    >
                        Logout
                    </button>
                    </div>
                ) : (
                    <Link
                    href="/login"
                    className="flex items-center justify-center w-full py-2.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-900 text-sm font-semibold transition-colors"
                    >
                    Login
                    </Link>
                )}
                </div>
            </div>
            </div>
        </header>

        <div className="h-16 lg:h-[70px]" />
        </>
    );
    }