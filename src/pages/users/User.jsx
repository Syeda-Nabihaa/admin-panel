import React, { useEffect, useState } from "react";
import { Input } from "../../components/InputFields";
import { Button } from "../../components/Button";
import { Heading, SubText } from "../../components/Typography";
import { Link } from "react-router-dom";
import { UserService } from "../../services/UserService";
import { useApi } from "../../helper/UseApi";
import Loader from "../../components/Loader";
import MainSection from "../../components/MainSection";
import { Td, Th, Tr } from "../../components/TableComponents";

export default function User() {
  const [user, setUser] = useState([]);
  const service = new UserService();
  const { request, loading, error } = useApi(service);

  async function getAlldata() {
    const data = await request("getAlluser");
    if (data) {
      setUser(data.users);
      console.log(data.users);
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
      ) : user.length > 0 ? (
        <MainSection
          btntext="Add User"
          heading="All user"
          subText="all types of user"
          to="/adduser"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-linear-to-r from-gray-900 to-gray-800/50">
                <tr>
                  <Th text="Email" />
                  <Th text="First Name" />
                  <Th text="Last Name" />
                  <Th text="Role" />
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {Array.isArray(user) && user.length > 0 ? (
                  user.map((u) => (
                    <Tr key={u.id}>
                      <Td text={u.email} />
                      <Td text={u.userDetail[0]?.first_name || "-"} />
                      <Td text={u.userDetail[0]?.last_name ||  "-"}  />
                      <Td text={u.role} />
                    </Tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="4"
                      className="px-6 py-4 text-center text-sm text-gray-500"
                    >
                      No users found
                    </td>
                  </tr>
                )}
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
}
