import Link from "next/link";
import navStyles from "./nav.module.css";

export default function Nav() {
  return (
    <nav>
      <ul className={navStyles.mainNav}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/religion">Religion</Link>
        </li>
        <li>
          <Link href="/">link</Link>
        </li>
      </ul>
    </nav>
  );
}
