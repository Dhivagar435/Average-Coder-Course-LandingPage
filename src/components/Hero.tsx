export default function Hero() {
  return (
    <section className="flex min-h-screen items-center bg-slate-950 px-6 text-white">
      <div className="mx-auto max-w-3xl text-center">
        <span className="inline-block rounded-full bg-emerald-500/10 px-4 py-1 text-sm font-medium text-emerald-400">
          100% Free · Limited Seats
        </span>

        <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-6xl">
          Learn Web Development
          <span className="block text-emerald-400">from Zero.</span>
        </h1>

        <p className="mt-6 text-lg text-slate-300">
          HTML, CSS and JavaScript basics for absolute beginners. No coding
          knowledge needed. No hidden charges.
        </p>

        <p className="mt-3 text-sm text-slate-400">
          💻 Laptop / PC is required. Mobile is not supported.
        </p>

        <a
          href="#join"
          className="mt-8 inline-block rounded-lg bg-emerald-500 px-8 py-3 font-semibold text-slate-950 transition hover:bg-emerald-400"
        >
          Join Free Class
        </a>

        <p className="mt-6 text-sm text-slate-500">
          By <span className="text-slate-300">Average Coder</span> · Starts
          soon · 7 days · 1 hour daily
        </p>
      </div>
    </section>
  );
}