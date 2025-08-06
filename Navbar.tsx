import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md px-4 py-3 flex justify-between items-center">
      <h1 className="text-xl font-bold text-indigo-600">Freelio</h1>
      <div className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/profile">Profile</Link>
      </div>
    </nav>
  )
}