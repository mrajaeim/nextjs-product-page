import Link from 'next/link'
import {FAKE_STORE_API} from "../config";

export default function NotFoundPage() {
  return (
    <div className={"min-h-screen flex flex-wrap justify-center items-center content-center"}>
        <h1 className={"w-full text-center"}>
            One Error Happend! Page Or Product Not Found!
        </h1>
        <h2 className={"w-full text-center"}>
            Please use VPN! Maybe fakestoreapi.com is down!!!
        </h2>
        <p className={"w-full text-center mb-0"}>
            It should be noted that this app uses
            &nbsp;
            <a href="https://fakestoreapi.com" target={"_blank"} rel={"noreferrer"}>https://fakestoreapi.com</a>
            &nbsp;
            and there is the possibility that the server may be experiencing an error, so please try again or use the link below.
        </p>
        <p className={"w-full text-center mt-0"}>
            Range of product IDs: 1-20
        </p>
      <Link href={"/products/1"}
            prefetch={false}
            className={"w-full text-center"}
      >
          » GO TO FIRST PRODUCT «
      </Link>
    </div>
  )
}
