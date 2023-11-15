import { useState } from "react";

const NavBtn = ({ title, isActive, onClick }) => {
  return (
    <button
      className={`${
        isActive ? "bg-white" : "bg-transparent"
      } w-[88px] h-[40px] lg:w-[96px] text-center rounded-full`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleBtnClick = (index) => {
    setActiveIndex(index);
  };
  const button = [
    { title: "Home" },
    { title: "Profile" },
    { title: "Contact" },
  ];

  return (
    <nav>
      {button.map((button, index) => (
        <NavBtn
          key={index}
          title={button.title}
          isActive={activeIndex === index}
          onClick={() => handleBtnClick(index)}
        />
      ))}
    </nav>
  );
};

export default Navbar;
