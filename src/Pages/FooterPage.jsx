import FooterData from "../data/FooterData";
import Footer from "../components/Footer";

export default function FooterPage() {
  return (
    <div className = "flex flex-col gap-4 px-6 py-15 bg-black  sm:px-10 md:flex-row md:flex-wrap md:justify-between lg:px-20">
      {FooterData.map((data) => (
        <Footer
          key={data.title}
          title={data.title}
          items={data.items}
        />
      ))}
    </div>
  );
}