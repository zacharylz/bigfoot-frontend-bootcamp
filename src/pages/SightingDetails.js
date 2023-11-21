import React, { useState, useEffect } from "react";
import { getSpecificSighting, getSpecificComments } from "../api/backend";
import { useParams, useNavigate } from "react-router-dom";
import CommentForm from "../components/CommentForm";

// const SightingDetails = ({ report_number }) => {
const SightingDetails = () => {
  const [sighting, setSighting] = useState({});
  const [comments, setComments] = useState([]);
  const { report_number } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const sightingDetails = await getSpecificSighting(report_number);
      setSighting(sightingDetails.data);
      const commentDetails = await getSpecificComments(report_number);
      setComments(commentDetails.data);
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col w-full items-center p-4">
      <div
        onClick={() => navigate("/")}
        className="text-lg self-start max-w-[150px] px-2 py-1 border-[1px] rounded-sm cursor-pointer hover:ring-inset hover:ring-2 hover:ring-blue-900"
      >
        Return to Home
      </div>
      <div className="flex flex-col max-w-screen-xl w-full py-4 gap-4 mt-4">
        {/* For SQL version */}
        <div className="flex flex-col w-full">
          <div className="text-xl font-bold text-gray-600 mb-6">
            Report Details
          </div>
          <div className="flex flex-col w-full ml-6 gap-4">
            <div className="flex flex-col gap-2">
              <div className="font-semibold text-gray-600 w-[150px]">
                Report ID:
              </div>
              <div>{sighting.id ? sighting.id : "-"}</div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="font-semibold text-gray-600 w-[150px]">
                Sighting Date:
              </div>
              <div>{sighting.date ? sighting.date.substring(0, 10) : "-"}</div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="font-semibold text-gray-600 w-[150px]">
                Sighting Details:
              </div>
              <div>{sighting.notes ? sighting.notes : "-"}</div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="font-semibold text-gray-600 w-[150px]">
                Category:
              </div>
              <div className="flex gap-2">
                {sighting.categories && sighting.categories.length > 0
                  ? sighting.categories.map((category) => (
                      <p>{category.name}</p>
                    ))
                  : "-"}
              </div>
            </div>
            <button onClick={() => console.log(sighting)}>Log Sighting</button>
          </div>
          <div className="text-xl font-bold text-gray-600 my-6">Comments</div>

          <div className="flex flex-col-reverse w-full ml-6 gap-4">
            {comments.map((comment) => (
              <div className="flex flex-col">
                <div className="text-gray-600 text-sm">
                  Posted on: {comment.date.substring(0, 10)}
                </div>
                <div>{comment.content}</div>
              </div>
            ))}
            <CommentForm report_number={report_number} />
          </div>
        </div>
        {/* Report Details */}
        {/* <div className="flex flex-col w-full">
          <div className="text-xl font-bold text-gray-600 mb-2">
            Report Details
          </div>
          <div className="flex flex-col w-full ml-6 gap-1">
            <div className="flex gap-2">
              <div className="font-semibold text-gray-600 w-[120px]">
                Report Number:
              </div>
              <div>{sighting.REPORT_NUMBER ? sighting.REPORT_NUMBER : "-"}</div>
            </div>
            <div className="flex gap-2">
              <div className="font-semibold text-gray-600 w-[120px]">
                Report Class:
              </div>
              <div>{sighting.REPORT_CLASS ? sighting.REPORT_CLASS : "-"}</div>
            </div>
          </div>
        </div> */}
        {/* Location */}
        {/* <div className="flex flex-col w-full">
          <div className="text-xl font-bold text-gray-600 mb-2">Location</div>
          <div className="flex flex-col w-full ml-6 gap-1">
            <div className="flex gap-2">
              <div className="font-semibold text-gray-600 w-[120px]">
                State:{" "}
              </div>
              <div>{sighting.STATE ? sighting.STATE : "-"}</div>
            </div>
            <div className="flex gap-2">
              <div className="font-semibold text-gray-600 w-[120px]">
                County:{" "}
              </div>
              <div>{sighting.COUNTY ? sighting.COUNTY : "-"}</div>
            </div>
            <div className="flex gap-2">
              <div className="font-semibold text-gray-600 w-[120px]">
                Details:{" "}
              </div>
              <div>
                {sighting.LOCATION_DETAILS ? sighting.LOCATION_DETAILS : "-"}
              </div>
            </div>
          </div>
        </div> */}
        {/* Date */}
        {/* <div className="flex flex-col w-full">
          <div className="text-xl font-bold text-gray-600 mb-2">Date</div>
          <div className="flex flex-col w-full ml-6 gap-1">
            <div className="flex gap-2">
              <div className="font-semibold text-gray-600 w-[120px]">
                Year:{" "}
              </div>
              <div>{sighting.YEAR ? sighting.YEAR : "-"}</div>
            </div>
            <div className="flex gap-2">
              <div className="font-semibold text-gray-600 w-[120px]">
                Month:{" "}
              </div>
              <div>{sighting.MONTH ? sighting.MONTH : "-"}</div>
            </div>
            <div className="flex gap-2">
              <div className="font-semibold text-gray-600 w-[120px]">Day: </div>
              <div>{sighting.DATE ? sighting.DATE : "-"}</div>
            </div>
            <div className="flex gap-2">
              <div className="font-semibold text-gray-600 w-[120px]">
                Season:{" "}
              </div>
              <div>{sighting.SEASON ? sighting.SEASON : "-"}</div>
            </div>
          </div>
        </div> */}
        {/* Observations */}
        {/* <div className="flex flex-col w-full">
          <div className="text-xl font-bold text-gray-600 mb-2">
            Observations
          </div>
          <div className="flex flex-col w-full ml-6 gap-1">
            <div className="flex gap-2">
              <div className="font-semibold text-gray-600 w-[120px]">
                Reported:
              </div>
              <div className="max-w-4xl">
                {sighting.OBSERVED ? sighting.OBSERVED : "-"}
              </div>
            </div>
            <div className="flex gap-2">
              <div className="font-semibold text-gray-600 w-[120px]">
                Witnesses:
              </div>
              <div>
                {sighting.OTHER_WITNESSES ? sighting.OTHER_WITNESSES : "-"}
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default SightingDetails;
