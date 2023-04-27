import { useEffect, useState } from "react";
import axios from "axios";

import { IBike } from "../interfaces/BikeInterface";
import TableData from "../components/TableData/Index";
import { H1Style } from "../utils/styles";

const Home = () => {
  const [bikes, setBikes] = useState<IBike[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [numberOfPages, setNumberOfPages] = useState(0);

  const url = "http://localhost:5000/api/v1/bikes/paginate/page?page";

  useEffect(() => {
    const getBikes = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${url}=${currentPage}`);

        const data = response?.data?.data?.map(function (obj: any) {
          // Assign new key
          obj["Departure_station_id"] = obj["Departure station id"];
          obj["Covered_distance_m"] = obj["Covered distance (m)"];
          obj["Departure_station_name"] = obj["Departure station name"];
          obj["Return_station_id"] = obj["Return station id"];
          obj["Return_station_name"] = obj["Return station name"];
          obj["Duration__sec"] = obj["Duration (sec"];

          // Delete old key
          delete obj["Departure station id"];
          delete obj["Covered distance (m)"];
          delete obj["Departure station name"];
          delete obj["Return station id"];
          delete obj["Return station name"];
          delete obj["Duration (sec"];

          return obj;
        });
        console.log(response.data.numberOfPages);
        setLoading(false);
        setNumberOfPages(response.data.numberOfPages);
        setBikes(data);
      } catch (error) {
        console.log(error);
      }
    };

    getBikes();
  }, [currentPage]);

  const prevPage = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const nextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const pageByNumber = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <h1 style={H1Style}>City-Bike-Dev-Academy</h1>

      <TableData
        bikes={bikes}
        loading={loading}
        currentPage={currentPage}
        numberOfPages={numberOfPages}
        prevPage={prevPage}
        nextPage={nextPage}
        pageByNumber={pageByNumber}
      />
    </div>
  );
};

export default Home;
