import React, { useEffect, useState } from "react";
import { getAllCats } from "../../services/apiServices";
import ChakraTable from "../../core/ui/chakraTable/ChakraTable";
import Pagination from "../../core/ui/pagination/Pagination";
import "./home.css";

const Home = () => {
  const [allCats, setAllCats] = useState();

  const onPageChange = (event) => {
    getAllCats(event)
      .then((response) => {
        setAllCats(response);
      })
      .catch((error) => console.log("error: ", error));
  };

  useEffect(() => {
    onPageChange();
  }, []);

  return (
    <div className="home_container">
      <h1>Cats</h1>
      <div className="table_container">
        <ChakraTable
          dataSource={allCats?.data}
          column={["breed", "country", "origin"]}
        />
        <div>
          {allCats && (
            <Pagination
              pageCount={allCats?.last_page}
              paginationHandler={onPageChange}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
