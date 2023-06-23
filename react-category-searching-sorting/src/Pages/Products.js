import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import '../css/sidepanel.css';

const Products = () => {
  const [users, setUserData] = useState([]);
  const [page, setPage] = useState(0);
  const [API_DATA, setAPIData] = useState([]);
  const [sortByPrice, setSort] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortedData, setSortedData] = useState([]);

  let productPerPage = 8;
  let start;
  let end;

  const fetchData = async (category = activeCategory) => {
    try {
      const response = await fetch("https://api.escuelajs.co/api/v1/products");
      const data = await response.json();

      const filteredData = category === "All" ? data : data.filter(item => item.category.name === category);

      let sortedData = [...filteredData];

      if (sortByPrice === "lowToHigh") {
        sortedData.sort((a, b) => a.price - b.price);
      } else if (sortByPrice === "highToLow") {
        sortedData.sort((a, b) => b.price - a.price);
      }

      setAPIData(filteredData);
      setSortedData(sortedData);

      start = page * productPerPage;
      end = start + productPerPage;
      const dataValue = sortedData.slice(start, end);
      setUserData(dataValue);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    start = page * productPerPage;
    end = start + productPerPage;
    const dataValue = sortedData.slice(start, end);
    setUserData(dataValue);
  }, [page, sortedData]);

  const handleCategoryChange = (item) => {
    setActiveCategory(item);
    fetchData(item);
  };

  const handleSort = (e) => {
    const selectedSort = e.target.value;
    setSort(selectedSort);
    fetchData(activeCategory);
  };

  return (
    <Row>
      <Col md={2} className="sidepanel bg-dark text-light">
        <Container className="mt-5">
          <Col>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button>
                Search
              </Button>
            </Form>
          </Col>
        </Container>
        <div className="categories">
          <h4 className="mt-5">Categories :</h4>
          {["All", ...new Set(API_DATA.map(item => item.category.name))].map((item) => (
            <p
              onClick={() => handleCategoryChange(item)}
              key={item}
              className={activeCategory === item ? "active" : ""}
            >
              {item}
            </p>
          ))}
        </div>
        <div className="sort-by">
          <h4>Sort By:</h4>
          <Form.Select value={sortByPrice} onChange={handleSort}>
            <option value="">Select</option>
            <option value="lowToHigh">Price Low to High</option>
            <option value="highToLow">Price High to Low</option>
          </Form.Select>
        </div>
      </Col>
      <Col md={10}>
        <div>
          <h1>Products Page</h1>
          <hr />
          {sortedData.length > 0 && (
            <>
              <Row>
                {users.map((user) => (
                  <Col sm={6} md={4} lg={3} key={user.id}>
                    <Product
                      title={user.title}
                      price={user.price}
                      image={user.images[0]}
                      description={user.description}
                      category={user.category.name}
                    />
                  </Col>
                ))}
              </Row>
              <div className="mt-4">
                <Button
                  variant="secondary"
                  onClick={() => setPage((prevPage) => prevPage - 1)}
                  disabled={page === 0}
                >
                  Previous
                </Button>{" "}
                <span>Page: {page + 1}</span>{" "}
                <Button variant="primary" onClick={() => setPage((prevPage) => prevPage + 1)}>
                  Next
                </Button>
              </div>
            </>
          )}
        </div>
      </Col>
    </Row>
  );
};

export default Products;