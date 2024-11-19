import Link from "next/link"

export default function NavLinks() {
  return (
    <nav>
      <ul>
        <li>
          <Link href={"railway"}>
            鉄道
          </Link>
        </li>
      </ul>
    </nav>
  )
}