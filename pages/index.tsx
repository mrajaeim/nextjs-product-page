import Link from 'next/link'
import Preview from "../components/atomic/Preview";

export default function Home() {
    return (
        <div className={"min-h-screen flex flex-wrap justify-center items-center content-center"}>
            <Link href={"/products/1"}
                  prefetch={false}
                  className={"w-full mb-8 text-center"}
            >
                GO TO FIRST PRODUCT
            </Link>
            <div className={"w-auto flex justify-center items-center content-center"}>
                <Preview name={"preview desktop"} className={"mr-6"} image={"/assets/preview_2-min.png"}/>
                <Preview name={"preview mobile"} image={"/assets/preview_1-min.png"}/>
            </div>
        </div>
    )
}
