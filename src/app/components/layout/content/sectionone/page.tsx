
import Left from "./leftarea/page";
import Right from "./rightarea/page";

export default function SectionOne(){
 
  return (
      <section className="md:flex px-10 py-20 bg-gradient-to-b from-gray-200 to-white">
        <Left />
        <Right />
      </section>

  )
}
