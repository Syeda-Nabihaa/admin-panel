import React, { useEffect, useState } from "react";
import { UnversityService } from "../../services/UniversityService";
import { Link, useParams } from "react-router-dom";
import { Heading, SubText } from "../../components/Typography";
import { ActionButtons, Button } from "../../components/Button";
import { IoIosContact } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { AddBadgeModal } from "../../components/Modal";

export default function ViewUniversity() {
  const [university, setUniversity] = useState(null);
  const service = new UnversityService();
  const [loading, setloading] = useState(true);
  const [openModal, setOpenModal] = useState(false);

  const { id } = useParams();
  async function getUniByid(id) {
    try {
      const res = await service.getUniversitybyiD(id);
      setUniversity(res?.data);
      console.log(res.data);
      setloading(false);
    } catch (error) {
      console.error("error fetching university", error);
    }
  }
  useEffect(() => {
    getUniByid(id);
  }, [id]);

  const handleAddBadge = (data) => {
    console.log("Badge Added:", data);

    // API call here...
  };
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          <span className="ml-3 text-gray-600">
            Loading university details...
          </span>
        </div>
      ) : university ? (
        <>
          {/* Header */}
          <div className="px-6 py-5 border-b border-gray-200 bg-linear-to-r from-gray-50 to-white">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  {university.name}
                </h1>
                <p className="text-gray-600 mt-1">University Details</p>
              </div>
              <div className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                {university.verifiedUsers > 0
                  ? "Verified Institution"
                  : "Unverified"}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-5">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                    <IoIosContact />
                    Contact Information
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-500 mb-1">
                        Email Address
                      </label>
                      <div className="flex items-center text-gray-900">
                        <MdOutlineMail />
                        <a
                          href={`mailto:${university.user?.email}`}
                          className="hover:text-blue-600 hover:underline"
                        >
                          {university.user?.email || "Not provided"}
                        </a>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-500 mb-1">
                        Website Domain
                      </label>
                      <div className="flex items-center text-gray-900">
                        <svg
                          className="w-4 h-4 mr-2 text-gray-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>{university.domain || "No domain set"}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-5">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                    <IoLocationOutline />
                    Campus Information
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-500 mb-1">
                        Location
                      </label>
                      <div className="flex items-center text-gray-900">
                        <IoLocationOutline />

                        <span>
                          {university.location || "Location not specified"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
                    <div className="flex items-center">
                      <div className="bg-blue-100 p-2 rounded-lg mr-3">
                        <svg
                          className="w-6 h-6 text-blue-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5 0c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5-.672-1.5-1.5-1.5z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Total Students</p>
                        <p className="text-2xl font-bold text-gray-900">
                          {university.totalStudents?.toLocaleString() || 0}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 border border-green-100 rounded-lg p-4">
                    <div className="flex items-center">
                      <div className="bg-green-100 p-2 rounded-lg mr-3">
                        <svg
                          className="w-6 h-6 text-green-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Verified Users</p>
                        <p className="text-2xl font-bold text-gray-900">
                          {university.verifiedUsers || 0}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6 bg-gray-50 mt-5">
              <Heading title="All Badges" />

              <div className="flex gap-5 mt-6">
                {university.badges?.map((b, i) => (
                  <div className="bg-white rounded-xl shadow-md p-4  hover:shadow-lg transition">
                    <img
                      src={b.badge_url}
                      alt="badge"
                      className="w-20 h-20 object-contain mx-auto"
                    />

                    <div className="flex-1 text-center">
                      <p className="font-semibold text-gray-800 text-lg">
                        {b.badge_name}
                      </p>
                      <div className="flex justify-between">
                        <p className="text-gray-500 text-sm ">
                        {b.condition_date}
                      </p>
                       <ActionButtons
                      className="mx-auto"
                      editLink={`/edituniversity`}
                   
                    />
                      </div>
                    
                    </div>

                   
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 pt-6 border-t border-gray-200 flex space-x-4">
              <Link to={`/edituniversity/${university.id}`}>
                <Button title="Edit" />
              </Link>

              <Button title="Add badge" onClick={() => setOpenModal(true)} />
              <AddBadgeModal
                id={id}
                open={openModal}
                onClose={() => setOpenModal(false)}
                onSubmit={handleAddBadge}
              />
            </div>
          </div>
        </>
      ) : (
        <div className="text-center py-12">
          <svg
            className="w-16 h-16 mx-auto text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h3 className="mt-4 text-lg font-medium text-gray-900">
            No university found
          </h3>
          <p className="mt-1 text-gray-500">
            Unable to load university details. Please try again.
          </p>
          <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            Retry
          </button>
        </div>
      )}
    </div>
  );
}
