import React from "react";
import GaugeChart from "react-gauge-chart";
import style from "./Gauge.module.css";

const Gauge = () => (
  <>
    <GaugeChart
      id="gauge-chart1"
      nrOfLevels={12}
      percent={0.9}
      hideText={false}
      textColor="transparent"
      needleBaseColor="#5591cb"
      arcPadding={0.015}
      cornerRadius={0}
      arcWidth={0.19}
      formatTextValue={(value) => `${value}%`}
      needleColor="#5591cb"
      colors={[
        "#ffc19a",
        "#ffa165",
        "#ff8227",
        "#ff5f00",
        "#ffe4ae",
        "#ffd882",
        "#ffca53",
        "#ffbc03",
        "#b9d9b1",
        "#95c688",
        "#6eb35f",
        "#45a031",
      ]}
      arcsLength={[...Array(12).keys()].map(() => 0.075)}
    />
    <div className={style.legend}>
      <div className={style.legendItem}>
        <div className={style.itemColor}></div>
        <p>Needs improvement</p>
      </div>
      <div className={style.legendItem}>
        <div className={style.itemColor}></div>
        <p>Approaching</p>
      </div>
      <div className={style.legendItem}>
        <div className={style.itemColor}></div>
        <p>Meets</p>
      </div>
    </div>
  </>
);

export { Gauge };
