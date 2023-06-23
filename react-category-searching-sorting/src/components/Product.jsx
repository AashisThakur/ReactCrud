import Card from "react-bootstrap/Card";
import React from "react";

const Product = ({ title, price, image, description, category }) => {
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substr(0, maxLength) + "...";
  };

  return (
    <div className="d-flex justify-content-center">
      <Card style={{ width: "22rem", marginBottom: "20px" }} className="text-center shadow">
        <div style={{ maxHeight: "200px", overflow: "hidden" }}>
          <Card.Img
            variant="top"
            src={image}
            alt="Card image"
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        </div>
        <Card.Body>
          <Card.Title style={{ color: "green", fontSize: "24px", fontWeight: "bold" }}>
            {title}
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Price: {price}
          </Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">
            Category: {category}
          </Card.Subtitle>
          <Card.Text style={{ maxHeight: "60px", overflow: "hidden", textOverflow: "ellipsis" }}>
            {truncateText(description, 80)}
          </Card.Text>
          <Card.Link href="#" className="btn btn-primary">For Students</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
