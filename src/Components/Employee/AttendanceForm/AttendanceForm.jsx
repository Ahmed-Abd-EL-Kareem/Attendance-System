import React, { useState } from "react";
import MapBox from "./MapBox";
import Head from "../../Head";
import FaceRecognition from "./FaceRecognition";
const AttendanceForm = () => {
  const [isLocationValid, setIsLocationValid] = useState(false);
  const handleLocationChange = (insidePolygon) => {
    setIsLocationValid(insidePolygon);
  };
  return (
    <>
      <div className="attendance w-100  mt-6">
        <div className="dash container">
          <Head title="Attendance Form" />
          <div className="box ">
            <div className="content  w-100 d-flex " style={{ height: "85%" }}>
              <div className="face w-50 p-4 position-relative ">
                <FaceRecognition />
              </div>
              <div className="mapBox w-50 p-4" style={{ height: "100%" }}>
                <MapBox onLocationChange={handleLocationChange} />
              </div>
            </div>
            <div
              className="buttons gap-4 d-flex justify-content-center flex-direction-row px-3"
              // style={{ transform: "translateX(50%)" }}
            >
              <button
                type="button"
                className={
                  !isLocationValid
                    ? "button disabled col-md-4 col-lg-2"
                    : "button out col-md-4 col-lg-2 "
                }
                disabled={!isLocationValid}
              >
                Check Out
              </button>
              <button
                type="button"
                className={
                  !isLocationValid
                    ? "button disabled col-md-4 col-lg-2"
                    : "button in col-md-4 col-lg-2"
                }
                disabled={!isLocationValid}
              >
                Check IN
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AttendanceForm;
