const Btn = ({ body, active, children, className ='' }) => {
  return (
    <div>
      <button
        className={` flex flex-row items-center mb-5 px-5 py-3 rounded-lg shadow-sm shadow-[#FFFFFF82] font-medium ${
          active ? "bg-yellow-300" : "bg-[#161D29] text-white"
        } cursor-pointer hover:scale-[95%] transition-all duration-150 ${className}`}
      >
        {body || children}
      </button>
    </div>
  );
};

export default Btn;
