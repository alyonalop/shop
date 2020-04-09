import React, { useState } from "react";
import { Card as CardComponent } from "antd";
import "antd/dist/antd.css";
import ReactCardFlip from "react-card-flip";
import { Link } from "react-router-dom";

const { Meta } = CardComponent;

export const Card = (props) => {
  const { el } = props;
  const [isFlipped, changeFlipped] = useState(false);
  const onChangeFlipped = () => {
    changeFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
      <CardComponent
        hoverable
        style={{ width: 240 }}
        cover={
          <img alt="example" src={el.image} style={{ minHeight: "240px" }} />
        }
        onClick={onChangeFlipped}
      >
        <Link to="/details">
          <Meta title={el.name} />
        </Link>
      </CardComponent>

      <CardComponent
        hoverable
        style={{ width: 240 }}
        cover={
          <img alt="example" src={el.image} style={{ minHeight: "240px" }} />
        }
        onClick={onChangeFlipped}
      >
        <Meta title="back side" />
      </CardComponent>
    </ReactCardFlip>
  );
};
