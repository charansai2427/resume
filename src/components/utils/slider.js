import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { modify } from "../../redux/slices/skillsSlice";
import "./slider.scss";
export default function Slider({ data }) {
const dispatch  = useDispatch();
// const {modify} = useState(); 
  return (
    <div
      className="slider-parent"
      style={{
        backgroundColor: data.colors.bg[0],
        width: 60 * data.colors.bg.length + "px",
      }}
    >
      {data.colors.bg.map((e, i) => (
        <div
          className="slider-child"
          style={{
            backgroundColor: data.colors.moveBg[i],
          }}
          key={i}

          onClick={() => dispatch(modify({id:data.id , update:{level:data.colors.levels[i]}}))}
          // onClick={(e) => data.setIndex({ index: i, id: data.id })}
        ></div>
      ))}
      <div
        className="slider-move"
        style={{
          left: data.index * (100 / data.colors.bg.length) + "%",
          backgroundColor: data.colors.moveBg[data.index],
        }}
      />
    </div>
  );
}
