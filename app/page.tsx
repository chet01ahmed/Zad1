import Link from "next/link";

export default function Home() {
  return (
    <main style={{ textAlign: "center", padding: "2rem" }}>
      <h1>🚀 Welcome to My Next.js App!</h1>
      <p>Built with TypeScript and powered by Next.js 15.</p>
      <nav>
        <Link href="/about">Go to About Page</Link>
      </nav>
    </main>
  );
}


