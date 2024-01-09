import Image from "next/image"

export default function SectionTwo () {
  return (
    <>
    <div className="px-10 py-20">
        <h1 className="text-2xl text-center py-4 px-4 md:text-6xl md:py-10 md:px-20">Over 20 years of experience and +500 completed projects</h1>
        <div className="md:flex md:justify-between items-center pb-6">
            <div className="">
            <Image src="/s1.png" width={200} height={200} alt="" />
            </div>
            <div>
            <Image src="/s2.png" width={200} height={200} alt="" />
            </div>
            <div>
            <Image src="/s3.png" width={200} height={200} alt="" />
            </div>
            <div>
            <Image src="/s4.png" width={200} height={200} alt="" />
            </div>
        </div>
        <div className="md:flex md:justify-between">
            <div>
            <Image src="/s5.png" width={200} height={200} alt="" />
            </div>
            <div>
            <Image src="/s6.png" width={200} height={200} alt="" />
            </div>
            <div>
            <Image src="/s7.png" width={200} height={200} alt="" />
            </div>
            <div>
            <Image src="/s8.png" width={200} height={200} alt="" />
            </div>
        </div>
    </div>
    </>
  )
}

