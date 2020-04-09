import React from "react";
import { Layout, Row, Col } from "antd";
import { Card } from "./Blocks/Card";
import "antd/dist/antd.css";


const { Header, Footer, Content } = Layout;

const data = [
  {
    id: 1,
    name: "клубника",
    image:
      "https://7ogorod.ru/wp-content/uploads/2018/08/klubnika.jpg",
  },
  {
    id: 2,
    name: "яблоко",
    image:
      "https://ekkobox.by/wp-content/uploads/2019/11/%D0%A1%D0%B5%D0%BC%D0%B5%D1%80%D0%B5%D0%BD%D0%BA%D0%BE-.jpg",
  },
  {
    id: 3,
    name: "малина",
    image:
      "https://ekkobox.by/wp-content/uploads/2019/10/%D0%BC%D0%B0%D0%BB%D0%B8%D0%BD%D0%B0-.jpg",
  },
];
export const ProductList = () => {
  const renderCards = (element) => (
    <Col span={4}>
      <Card el={element}/>
    </Col>
  );
  return (
    <Layout style={style.layoutStyle}>
      <Header>Header</Header>
      <Content>
        <Row justify="space-around">
          {data.map((el) => renderCards(el))}</Row>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
};

const style = {
  layoutStyle: {
    minHeight: "100vh",
  },
};
