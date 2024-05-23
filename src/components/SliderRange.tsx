import React from "react";
import { RangeSlider } from "@mantine/core";
import { PRICE_RANGE } from "@/constant";

interface Props {
  handleChange: (key: string, e: number[]) => void;
}
const SliderRange: React.FC<Props> = (props) => {
  return (
    <div>
      <span>Filter by price range</span>
      <RangeSlider
        onChange={(e: number[]) => {
          props.handleChange("rangePrice", e);
        }}
        min={PRICE_RANGE[0]}
        max={PRICE_RANGE[1]}
      />
    </div>
  );
};

export default SliderRange;
