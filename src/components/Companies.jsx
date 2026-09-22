import { firstRow, secondRow } from "../data/Companies";
import LogoStyle from "../ui/LogoStyle";
export default function Companies() {

  return (
    <div className="mt-25">

      {/* First row  */}
      <div className="flex justify-center items-center gap-25 ">
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
      <div className="flex justify-center items-center gap-18 mt-8">
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