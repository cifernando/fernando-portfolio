import React from "react";
import Button from "@material-tailwind/react/Button";

const Pagination = ({ items, onChange }) => {
  return (
    <div className="flex justify-center order-2 mt-6 lg:mt-0 lg:space-y-3 lg:flex-col">
      {items.map((item, index) => (
        <Button
          key={index}
          color="purple"
          onClick={onChange}
          id={index}
          value={index}
          name="option"
        />
      ))}
    </div>
  );
};

export default Pagination;
