import Link from "next/link";


export default function Home() {
  return (
    <main className="">
      <Link href="/checkout">Checkout</Link>
      <br />
      <Link href="/success">Success</Link>
    </main>
  )
}
