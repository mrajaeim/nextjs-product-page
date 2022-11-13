import Link from 'next/link'

export default function Home() {
  return (
    <div className={"min-h-screen flex justify-center items-center content-center"}>
      <Link href={"/products/1"}
            prefetch={false}
      >
          GO TO FIRST PRODUCT
      </Link>
    </div>
  )
}
