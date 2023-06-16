import { useEffect, useState } from "react";
import Product from "../components/Product";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const Products = () => {
  const [users, setUserData] = useState([]);
  const [page, setPage] = useState(1);

  //   const maxPage;
  let productPerPage = 8;
  let start;
  let end;

  const fetchData = async () => {
    try {

      const response = await fetch("https://api.escuelajs.co/api/v1/products");
      const data = await response.json();
      start = page * productPerPage;
      end = start + productPerPage;
      const dataValue = data.slice(start,end)
      console.log(dataValue);
      setUserData(dataValue);

    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const fetchDataList = async () => {
      await fetchData();
    };
    fetchDataList();
  }, [page]);

  
  const handlePrevPage = () => {
    if (page > 0) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <div>
        <h1>Products Page</h1>
        {users.length > 0 && (
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
                onClick={handlePrevPage}
                disabled={page === 0}
              >
                Previous
              </Button>{" "}
              <span>Page: {page + 1}</span>{" "}
              <Button variant="primary" onClick={handleNextPage}>
                Next
              </Button>
        </div>
        </>
        )}
      </div>
    </>
  );
};

export default Products;