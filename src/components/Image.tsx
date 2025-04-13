import React from "react";
import { BasePropertyProps } from "adminjs";

const ImageComponent: React.FC<BasePropertyProps> = (props) => {
  const { record, property } = props;
  const imageUrl = record?.params[property.path];

  return imageUrl ? (
    <img
      src={imageUrl}
      alt="Profile"
      style={{ width: "50px", height: "50px", borderRadius: "50%" }}
    />
  ) : (
    <span>No Image</span>
  );
};

export default ImageComponent;