import { IBike } from "../../interfaces/BikeInterface";
import { divStyle } from "../../utils/styles";
import Spinner from "../Spinner/Index";

import "./table_Data.css";

interface TableDataProps {
  bikes: IBike[];
  loading: boolean;
   numberOfPages: number;
  currentPage: number;
  nextPage: () => void;
  prevPage: () => void;
  pageByNumber: (page: number) => void;
}
// const TableData = ({ bikes }: { bikes: IBike[] }) => {
const TableData = ({
  bikes,
  loading,
   numberOfPages,
  currentPage,
  nextPage,
  pageByNumber,
  prevPage,
}: TableDataProps) => {
  if (loading) {
    return <Spinner />;
  }
   return (
    <div className='table_container '>
      <div className='row align-items-center'>
        <div className='col-md-6'>
          <div className='mb-3'>
            <h5 className='card-title'>
              Showing ({bikes?.length}) of ({numberOfPages}) entries
              <span className='text-muted fw-normal ms-2'>
                ({numberOfPages})
              </span>
            </h5>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-lg-12'>
          <div className=''>
            <div className='table-responsive'>
              <table className='table project-list-table table-nowrap align-middle table-borderless text-center'>
                <thead className='table-dark'>
                  <tr>
                    <th>Departure</th>
                    <th>Return</th>
                    <th>Departure station id</th>
                    <th>Departure station name</th>
                    <th>Return station id</th>
                    <th>Return station name</th>
                    <th>Covered distance (m)</th>
                    <th>Duration (sec</th>
                  </tr>
                </thead>
                <tbody>
                   {bikes.map((bike: IBike) => (
                    <tr key={bike._id}>
                      <td>
                        {bike.Departure?.toString().slice(0, 10)} /{" "}
                        {bike.Departure?.toString().slice(11, 19)}
                      </td>
                      <td>
                        {bike.Return?.toString().slice(0, 10)} /{" "}
                        {bike.Return?.toString().slice(11, 19)}
                      </td>
                      <td>{bike.Departure_station_id}</td>

                      <td>{bike.Departure_station_name}</td>
                      <td>{bike.Return_station_id}</td>
                      <td>{bike.Return_station_name}</td>
                      <td>{bike.Covered_distance_m}</td>
                      <td>{bike.Duration__sec[")"]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className='row g-0 align-items-center pb-4'>
        <div className='d-flex justify-content-center mt-3  '>
          <div className=''>
            <nav aria-label='Page navigation example'>
              <ul className='pagination'>
                <li className='page-item'>
                  <button className='page-link' onClick={prevPage}>
                    Previous
                  </button>
                </li>
                <li className='page-item'>
                  <button className='page-link' onClick={() => pageByNumber(1)}>
                    1
                  </button>
                </li>
                <li className='page-item'>
                  <button className='page-link' onClick={() => pageByNumber(2)}>
                    2
                  </button>
                </li>
                <li className='page-item'>
                  <button className='page-link' onClick={() => pageByNumber(3)}>
                    3
                  </button>
                </li>
                <li className='page-item'>
                  <button className='page-link' onClick={nextPage}>
                    Next
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div style={divStyle}>Current page: {currentPage}</div>
      </div>
    </div>
  );
};

export default TableData;
