import React from "react";

export const Menu = ({
  price_three_course_food,
  price_five_course_food,
  price_three_course_wine,
  price_five_course_wine,
}) => {
  const MenuItem = ({ line_name, line_value }) => {
    return (
      <div className="flex justify-between items-center">
        <span className="">{line_name}</span>
        <hr className="flex-grow border-primary_700 mx-8" />
        <span className="">{line_value},-</span>
      </div>
    );
  };

  return (
    <section id="meny">
      <div className="flex flex-col mb-16 md:mb-32">
        <h3>Maten</h3>
        <MenuItem line_name="3-retters" line_value={price_three_course_food} />
        <MenuItem line_name="5-retters" line_value={price_five_course_food} />
      </div>
      <div className="flex flex-col mb-16 md:mb-32">
        <h3>Vinen</h3>
        <MenuItem line_name="3-retters vinpakke" line_value={price_three_course_wine} />
        <MenuItem line_name="5-retters vinpakke" line_value={price_five_course_wine} />
      </div>
    </section>
  );
};
