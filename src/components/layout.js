import Link from "next/link"

export default function Layout({ children }) {

  return (
    <div>
      <header className="navbar sticky top-0 bg-opacity-90 px-4 w-full h-14 bg-base-100 text-base-content border-b backdrop-blur z-40">
        <Link href="/">
          <a className="normal-case text-xl tracking-tight font-medium">How to build platformer in Scratch</a>
        </Link>
      </header>
      <main className="min-h-screen">{children}</main>
      <footer className="w-full m-0 footer footer-center p-4 bg-neutral text-neutral-content">
        <div>
          <p>Copyright © 2022 - All right reserved by waryu</p>
        </div>
      </footer>
    </div>
  )
} 