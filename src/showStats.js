import React from "react";
import "./card.css";

export const ShowStats = (stat) => {
  return (
    <div>
      <p>
        {stat.data.stat.name} : {stat.data.base_stat}/252
      </p>
      <div>
        <div
          className="barStats"
          style={{
            width: (100 * stat.data.base_stat) / 252 + "%"
          }}
        ></div>
      </div>
    </div>
  );
};
