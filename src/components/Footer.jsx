export default function Footer({ title, items }) {
  return (
    <div className="flex flex-col">
      <h3 className="text-2xl text-gray-300 sm:text-1xl md:text-1xl lg:text-2xl text-center">{title}</h3>

      <ul>
        {items.map((item) => (
          <li key={item}
          className=" text-gray-400 p-3 hover:text-green-600 hover:underline sm:text-lg text-center"
          >{item}</li>
        ))}
      </ul>
    </div>
  );
}