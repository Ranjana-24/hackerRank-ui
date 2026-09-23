const variants = {
  blank: "bg-white border text-gray-700 hover:bg-green-200 hover:border-green-400 hover:shadow-[0_4px_15px_rgba(34,197,94,0.4)] ",
  plain: "bg-white text-gray-800 hover:bg-green-200 hover:text-green-700 ",
  filled:"bg-gray-900 text-white hover:bg-green-600 hover:shadow-[0_4px_15px_rgba(34,197,90,0.4)]  "
};
export default function Button({
  children,
  className = "",
  variant = "filled",
  onClick,
  disabled,
}) {
  return (
    <button
      className={` inline-block rounded py-3 px-3 mr-3
                  text-sm sm:text-base cursor-pointer 
                  ${variants[variant]} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}