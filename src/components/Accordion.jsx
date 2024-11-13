import { useState } from "react";
import PropTypes from "prop-types";

export default function Accordion({ title, content }) {
  const [isAccordionOpen, setAccordionOpen] = useState(false);

  const toggleAccordion = () => {
    setAccordionOpen(!isAccordionOpen);
  };

  return (
    <>
      <button
        className="flex justify-between w-full border-b h-[75px] items-center"
        onClick={toggleAccordion}
        aria-expanded={isAccordionOpen}
        aria-controls={title}
      >
        <p>{title}</p>
        <p>{isAccordionOpen ? "-" : "+"}</p>
      </button>
      <div
        id={title}
        className={`transition-all duration-300 ${
          isAccordionOpen ? "max-h-40" : "max-h-0 overflow-hidden"
        }`}
      >
        <div className="p-5 border border-t-0 border-gray-200">
          <p className="mb-2 text-gray-500 ">{content}</p>
        </div>
      </div>
    </>
  );
}
Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
