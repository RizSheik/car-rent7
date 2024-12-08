import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full border-t bg-white">
      <div className="container mx-auto grid gap-8 px-4 py-8 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand Section */}
        <div className="space-y-4">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            MORENT
          </Link>
          <p className="text-sm text-gray-500">
            Our vision is to provide convenience and help increase your sales business.
          </p>
        </div>

        {/* About Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">About</h3>
          <ul className="space-y-2 text-sm text-gray-500">
            <li><Link href="/how-it-works">How it works</Link></li>
            <li><Link href="/featured">Featured</Link></li>
            <li><Link href="/partnership">Partnership</Link></li>
            <li><Link href="/business">Business Relation</Link></li>
          </ul>
        </div>

        {/* Community Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Community</h3>
          <ul className="space-y-2 text-sm text-gray-500">
            <li><Link href="/events">Events</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/podcast">Podcast</Link></li>
            <li><Link href="/invite">Invite a friend</Link></li>
          </ul>
        </div>

        {/* Socials Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Socials</h3>
          <ul className="space-y-2 text-sm text-gray-500">
            <li><Link href="https://discord.com">Discord</Link></li>
            <li><Link href="https://instagram.com">Instagram</Link></li>
            <li><Link href="https://twitter.com">Twitter</Link></li>
            <li><Link href="https://facebook.com">Facebook</Link></li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto flex flex-col items-center justify-between gap-4 border-t px-4 py-6 sm:flex-row">
        <p className="text-sm text-gray-500">©2024 MORENT. All rights reserved</p>
        <div className="flex gap-4 text-sm text-gray-500">
          <Link href="/privacy">Privacy & Policy</Link>
          <Link href="/terms">Terms & Condition</Link>
        </div>
      </div>
    </footer>
  );
}
