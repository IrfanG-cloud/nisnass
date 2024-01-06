import LeftSide from "./left/page"
import RightSide from "./right/page"

export default function SectionFour (){
 
  return (
      <section className="md:flex px-10 pb-10 bg-[#f3f4f6]">
        <LeftSide />
        <RightSide />
      </section>

  )
}
