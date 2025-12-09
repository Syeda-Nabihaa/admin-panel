import { Link } from "react-router-dom";
import { Heading, SubText } from "../../components/Typography";
import { Button, ActionButtons } from "../../components/Button";
import { useEffect, useState } from "react";
import { UnversityService } from "../../services/UniversityService";
import { useApi } from "../../helper/UseApi";
import Loader from "../../components/Loader";

const UniversityTable = () => {
  const service = new UnversityService();
  const [university, setUniversity] = useState([]);
  const { request, loading, error } = useApi(service);

  async function getAlldata() {
    const data = await request("GetAllUniversity");
    if (data) {
      setUniversity(data.data);
    }

    if (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAlldata();
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center py-20">
          <Loader />
        </div>
      ) : university.length>0 ? (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="px-6 py-4 border-b border-gray-200 bg-gray-50 flex items-center">
            <div>
              <Heading title="University Campuses" />
              <SubText text="University campuses registered" />
            </div>

            <Link to="/adduniversity" className="ml-auto">
              <Button title="Add University" />
            </Link>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    University
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Domain
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Location
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Students
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Verified Users
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody className="bg-white divide-y divide-gray-200">
                {university.map((u) => (
                  <tr
                    key={u.id}
                    className="hover:bg-gray-50 transition-colors duration-150"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <img
                          src={u.logo}
                          alt="University logo"
                          className="h-10 w-10 rounded-full object-cover border border-gray-200"
                        />
                        <div className="ml-4 text-sm font-medium text-gray-900">
                          {u.name}
                        </div>
                      </div>
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {u.user?.email}
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {u.domain}
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {u.location}
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {u.totalStudents}
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {u.verifiedUsers}
                    </td>

                    <td className="p-4">
                      <div className="flex justify-center space-x-2">
                        <ActionButtons
                          editLink={`/edituniversity/${u.id}`}
                          viewLink={`/university/${u.id}`}
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        </div>
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
      )  }
    </>
  );
};

export default UniversityTable;
