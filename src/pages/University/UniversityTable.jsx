import { Link } from "react-router-dom";
import { Heading, SubText } from "../../components/Typography";
import { Button, ActionButtons } from "../../components/Button";
import { useEffect, useState } from "react";
import { UnversityService } from "../../services/UniversityService";
import { useApi } from "../../helper/UseApi";
import Loader from "../../components/Loader";
import MainSection from "../../components/MainSection";
import { Td, Th, Tr } from "../../components/TableComponents";

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
      ) : university.length > 0 ? (
        <MainSection
          btntext="Add University"
          heading="University"
          subText="All universities"
          to="/adduniversity"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-linear-to-r from-gray-900 to-gray-800/50">
                <tr>
                  <Th text="University" />
                  <Th text="Email" />
                  <Th text="Domain" />
                  <Th text="Location" />
                  <Th text="Students" />
                  <Th text="Verified Users" />
                  <Th text="Actions" />
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-800">
                {university.map((u) => (
                  <Tr key={u.id}>
                    <td className="px-8 py-5">
                      <div className="flex items-center">
                        <div className="relative">
                          <div className="absolute inset-0 bg-linear-to-r from-dark to-indigo rounded-full blur opacity-75 group-hover:opacity-100 transition-opacity"></div>
                          <img
                            src={u.logo}
                            alt={`${u.name} logo`}
                            className="relative h-12 w-12 rounded-full object-cover border-2 border-dark group-hover:border-indigo transition-all duration-300"
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-base font-semibold text-white group-hover:text-blue-300 transition-colors">
                            {u.name}
                          </div>
                          <div className="text-xs text-gray-400 mt-0.5">
                            ID: {u.id}
                          </div>
                        </div>
                      </div>
                    </td>
                    <Td text={u.user?.email} />
                    <Td text={u.domain} />
                    <Td text={u.location} />
                    <Td text={u.totalStudents} />
                    <Td text={u.verifiedUsers} />
                    <td className="p-4">
                      <div className="flex justify-center space-x-2">
                        <ActionButtons
                          editLink={`/edituniversity/${u.id}`}
                          viewLink={`/university/${u.id}`}
                        />
                      </div>
                    </td>
                  </Tr>
                ))}
              </tbody>
            </table>
          </div>
        </MainSection>
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
          <h3 className="mt-4 text-lg font-medium text-white">
            No university found
          </h3>
          <p className="mt-1 text-white">
            Unable to load university details. Please try again.
          </p>
          <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            Retry
          </button>
        </div>
      )}
    </>
  );
};

export default UniversityTable;
