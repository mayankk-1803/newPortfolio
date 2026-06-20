/* eslint-disable @next/next/no-html-link-for-pages */
export default function NotFound() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center min-h-screen p-6 text-center select-none relative z-10 bg-[#080808]">
      <div className="text-8xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-accent-teal via-accent-cyan to-accent-blue">
        404
      </div>

      <div className="flex flex-col gap-2 mt-6">
        <h2 className="text-2xl font-display font-extrabold tracking-tight text-white font-sans">PAGE NOT FOUND</h2>
        <p className="text-sm text-text-secondary font-light leading-relaxed max-w-md mx-auto">
          The digital experience you are looking for has shifted, or the route does not exist.
        </p>
      </div>

      <a
        href="/"
        className="mt-8 px-6 py-3 rounded-full bg-gradient-to-r from-accent-teal to-accent-cyan text-black font-semibold text-xs transition-transform duration-300 hover:scale-105 active:scale-95 inline-block"
      >
        RETURN HOME
      </a>
    </div>
  );
}
