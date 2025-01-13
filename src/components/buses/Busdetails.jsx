import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchBusesDetails } from "../../Redux/features/buses";
import "./style/style.css";

export default function Busdetails() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.busSlice);

  useEffect(() => {
    dispatch(fetchBusesDetails());
  }, [dispatch]);

  const isAdmin = localStorage.getItem("admin_token");

  return (
    <>
      <div className="container mt-4">
        <h2 className="text-center mb-4">Bus Details</h2>

        {isAdmin && (
          <p className="text-center text-success">
            Welcome Admin! You have elevated privileges.
          </p>
        )}

        {!isAdmin && (
          <p className="text-center text-danger">
            Please log in to view bus details.
          </p>
        )}

        {isAdmin ? (
          <div className="row">
            {Array.isArray(data) && data.length > 0 ? (
              data.map((bus, index) => (
                <div className="col-md-4 mb-4" key={index}>
                  <div className="card shadow-sm h-100">
                    <div className="card-body">
                      <h5 className="card-title">
                        {bus.from} to {bus.to}
                      </h5>
                      <p className="card-text">
                        <strong>Type:</strong> {bus.busType}
                      </p>
                      <p className="card-text">
                        <strong>Contact:</strong> {bus.contactInfo}
                      </p>
                      <p className="card-text">
                        <strong>Date:</strong>{" "}
                        {new Date(bus.timeDate).toLocaleDateString()}{" "}
                        {new Date(bus.timeDate).toLocaleTimeString()}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-12">
                <p className="text-center">
                  No buses available or data is loading...
                </p>
              </div>
            )}
          </div>
        ) : (
          <p className="text-center">
            You don't have permission to view this content.
          </p>
        )}
      </div>
    </>
  );
}
