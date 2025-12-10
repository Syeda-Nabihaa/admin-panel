import React, { useEffect, useState } from "react";
import { Heading, SubText } from "../../components/Typography";
import { DegreeService } from "../../services/DegreeService";
import { useApi } from "../../helper/UseApi";
import { ActionButtons, Button } from "../../components/Button";
import { Link, useParams } from "react-router-dom";
import Loader from "../../components/Loader";
import { AddDegreeModal } from "../../components/Modal";
import { MdEdit } from "react-icons/md";

export default function Degree() {
  const service = new DegreeService();
  const [selectedDegree, setSelectedDegree] = useState(null);
  const [degree, setdegree] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const { request, loading, error } = useApi(service);

  async function getAlldata() {
    const data = await request("GetAlldegree");
    if (data) {
      setdegree(data);
      console.log(data);
    }

    if (error) {
      console.log(error);
    }
  }
  function handleEditDegree(degree) {
    setSelectedDegree({
      id: degree.id, // important for edit
      degree_name: degree.degree_name,
    });
    setOpenModal(true);
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
      ) : (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="px-6 py-5 border-b border-gray-200 bg-linear-to-r from-gray-50 to-white">
            <div className="flex items-center justify-between">
              <div>
                <Heading title="Degree" />
                <SubText text="All Degree" />
              </div>

              <Button
                title="Add Degree"
                onClick={() => {
                  setOpenModal(true);
                  setSelectedDegree(null);
                }}
              />
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                    S.no
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                    Name
                  </th>
                  <th className="px-6 py-3 text-center text-sm font-semibold text-gray-600">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody className="bg-white divide-y divide-gray-100">
                {degree.map((d, index) => (
                  <tr
                    key={d.id}
                    className="hover:bg-gray-50 transition-all duration-150"
                  >
                    {/* S.no */}
                    <td className="px-6 py-4 text-sm text-gray-700 font-medium">
                      {index + 1}
                    </td>

                    {/* Degree Name */}
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="text-sm font-medium text-gray-900">
                          {d.degree_name}
                        </div>
                      </div>
                    </td>

                    {/* Action */}
                    <td className="px-6 py-4">
                      <div className="flex justify-center">
                        <button onClick={() => handleEditDegree(d)}>
                          <MdEdit />
                        </button>
                        {/* <ActionButtons editLink={`/degree/${d.id}`} /> */}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <AddDegreeModal
              key={selectedDegree?.id || "add"} // This forces re-render when degree changes
              open={openModal}
              onClose={() => {
                setOpenModal(false);
                setSelectedDegree(null);
              }}
              initialData={selectedDegree}
              onSuccess={getAlldata}
              loading={loading}
            />
          </div>
        </div>
      )}
    </>
  );
}
