import Link from "next/link"

export default function Right(){
 
    return (
        <div className="md:w-1/2">
            <h1 className="text-4xl font-bold">A rather uncool web agency in Stockholm</h1>
            <div className="flex mt-10">
                <div className="w-1/2">
                    <p>
                    We’re not particularly cool at Nisnass web agency in Dubai. We don’t like flashy words and fast, short-term solutions. Instead, we thrive in close relationships, where we increase value over the long term. All that complex and weird stuff that web design and digital marketing can involve, we take care of so that you can focus on your business.
We build a good website. We get many people to visit the website. Then we make sure the visitors do what they should according to your business goals. Simple, right?
                    </p>
                </div>
                <div className="w-1/2 px-4">
                    <p>
                    At marketing risk, our services are called:
                    </p>
                    <ul className="text-md font-bold mt-10 ">
                        <li className="pb-4">. Design and programming</li>
                        <li className="pb-4">. Measurement, analysis and reporting</li>
                        <li className="pb-4">. Traffic and conversion</li>
                        <li className="pb-4">. Marketing automation</li>
                    </ul>
                </div>
            </div>
        </div>
    )}