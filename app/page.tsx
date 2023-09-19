import Link from "next/link";
import IntroSection from "./components/IntroSection";


export default function Home() {
  return (
    <main>
      <IntroSection />
      <Link href="/checkout">Checkout</Link>
      <br />
      <Link href="/success">Success</Link>
    </main>
  )
}
