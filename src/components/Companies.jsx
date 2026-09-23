import { firstRow, secondRow } from "../data/Companies";
import LogoStyle from "../ui/LogoStyle";
export default function Companies() {

  return (
    <div className="mt-32 brightness-125 opacity-80 hover:opacity-90 ">

      {/* First row  */}
      <div className="flex justify-center items-center gap-8 sm:gap-12 md:gap-18 lg:gap-25 
      flex-wrap">
        {firstRow.map((company) => (
          <img
            key={company.name}
            src={company.image}
            alt={company.name}
            className={LogoStyle}
          />
        ))}
      </div>

      {/* Second row  */}
      <div className="flex justify-center  items-center text-thin gap-8 sm:gap-12 md:gap-18 lg:gap-25 flex-wrap mt-8">
        {secondRow.map((company) => (
          <img
            key={company.name}
            src={company.image}
            alt={company.name}
            className={LogoStyle}
          />
        ))}
      </div>
    </div>
  );
}