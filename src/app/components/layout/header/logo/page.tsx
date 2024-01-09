import Link from "next/link"
import Image from "next/image"

export default function Logo () {
  return (
        <div className="py-5">
          <Link href="/">
            <Image className="inline" src="/final_logo_w.png" width={250} height={200} alt="logo" />
          </Link>
        </div>
  )
}
