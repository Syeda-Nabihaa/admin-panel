import { Link } from "react-router-dom";
import { Heading, SubText } from "../../components/Typography";
import Button, { ActionButtons } from "../../components/Button";
import { useEffect, useState } from "react";
import { UnversityService } from "../../services/UniversityService";

const UniversityTable = () => {
  const service = new UnversityService();
  const [university, setUniversity] = useState([]);
  async function getAlldata() {
    try {
      const res = await service.GetAllUniversity();
      console.log("dataaaaa", res.data.data);
      setUniversity(res.data.data);
    } catch (error) {
      console.log(error.message);
    }
  }
  useEffect(() => {
    getAlldata();
  }, []);
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      {/* Table Header */}

      <div className="px-6 py-4 border-b border-gray-200 bg-gray-50 flex items-center">
        <div>
          <Heading title="University Campuses" />
          <SubText text="  University campuses registered" />
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
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <img
                        className="h-10 w-10 rounded-full object-cover border border-gray-200"
                        src="https://via.placeholder.com/40"
                        alt="University logo"
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        {u.name}
                      </div>
                    </div>
                  </div>
                </td>

                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{u.user.email}</div>
                </td>

                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{u.domain}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{u.location}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{u.totalStudents}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{u.verifiedUsers}</div>
                </td>

                <td className="p-4">
                  <div className="flex justify-center space-x-2 ">
                    <ActionButtons
                      editLink={`/edituniversity/${u.id}`}
                      viewLink={`/university/${u.id}`}
                      onDelete={() => deleteBrand(u.id)}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UniversityTable;
