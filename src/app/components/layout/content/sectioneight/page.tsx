import Image from "next/image";
import Link from "next/link";

export default function SectionEight (){
 
  return (
    <div className="px-10 pt-10 pb-20">
        <div className="">
            <h1 className="md:text-4xl md:font-bold ">All the tools in the toolbox to increase your sales (at market risk)</h1>
        </div>
        <div className="md:flex md:justify-between ">
            <div>
                <Image src="utveckling.svg" width={100} height={100} alt="" className="pt-10"/>
                <h1 className="py-10 md:text-xl font-bold">Development</h1>
                <div>
                    <ul>
                        <li className="pb-2">- Web development</li>
                        <li className="pb-2">- E-commerce with WooCommerce</li>
                        <li className="pb-2">- WordPress development</li>
                        <li className="pb-2">- Operation & service agreement</li>
                        <li className="pb-2">- Programming</li>
                        <li className="pb-2">- API development</li>
                        <li className="pb-2">- Third-party integration</li>
                        <li>- Development of own plugins</li>
                    </ul>
                </div>
            </div>
            <div>
                <Image src="design.svg" width={150} height={100} alt="" className="pt-10"/>
                <h1 className="py-10 md:text-xl font-bold">Design</h1>
                <div>
                    <ul>
                        <li className="pb-2">- Webbdesign</li>
                        <li className="pb-2">- Identity & Art Direction</li>
                        <li className="pb-2">- Design of campaign pages</li>
                        <li className="pb-2">- Graphic profiles & Logotypes</li>
                        <li className="pb-2">- Promotional material (banners)</li>
                        <li className="pb-2">- Printed matter</li>
                        <li className="pb-2">- App design</li>
                    </ul>
                </div>
            </div>
            <div>
                <Image src="marknadsforing.svg" width={200} height={100} alt="" className="pt-10"/>
                <h1 className="py-10 md:text-xl font-bold">Marketing</h1>
                <div>
                    <ul>
                        <li className="pb-2">- Growth Hacking</li>
                        <li className="pb-2">- Search Engine Optimization (SEO)</li>
                        <li className="pb-2">- Pay per click (PPC)</li>
                        <li className="pb-2">- Social media advertising</li>
                        <li className="pb-2">- Conversion Optimization (CRO)</li>
                        <li className="pb-2">- Google Ads</li>
                        <li className="pb-2">- Email marketing</li>
                        <li>- Content marketing</li>
                    </ul>
                </div>
            </div>
            <div>
                <Image src="strategi.svg" width={200} height={100} alt="" className="pt-10"/>
                <h1 className="py-10 md:text-xl font-bold">Digital strategy</h1>
                <div>
                    <ul>
                        <li className="pb-2">- Marketing strategy</li>
                        <li className="pb-2">- Marketing plan</li>
                        <li className="pb-2">- Branding Guidelines</li>
                        <li className="pb-2">- Tonality guide</li>
                        <li className="pb-2">- Target group strategy (personas)</li>
                        <li className="pb-2">- Buyer's journey</li>
                        <li className="pb-2">- Campaign concept</li>
                        <li>- Project management</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}
