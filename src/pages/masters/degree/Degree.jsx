import React, { useEffect, useState } from "react";
import { Heading, SubText } from "../../../components/Typography";
import { DegreeService } from "../../../services/DegreeService";
import { useApi } from "../../../helper/UseApi";
import { ActionButtons, Button } from "../../../components/Button";
import { Link, useParams } from "react-router-dom";
import Loader from "../../../components/Loader";
import { AddDegreeModal } from "../../../components/Modal";
import { MdEdit } from "react-icons/md";
import MainSection from "../../../components/MainSection";
import { Td, Th, Tr } from "../../../components/TableComponents";

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
        <MainSection
          btntext="Add degree"
          heading="Degree"
          subText="All degree"
          onClick={() => {
            setOpenModal(true);
            setSelectedDegree(null);
          }}
        >
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-linear-to-r from-gray-900 to-gray-800/50">
                <tr>
                  <Th text="S.no" />
                  <Th text="Name" />
                  <Th text="Action" />
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-800">
                {degree.map((d, index) => (
                  <Tr id={d.id}>
                    <Td text={index + 1} />
                    <Td text={d.degree_name} />
                    <td className="px-6 py-4">
                      <div className="flex ">
                        <button onClick={() => handleEditDegree(d)}>
                          <MdEdit className="text-white" />
                        </button>
                        {/* <ActionButtons editLink={`/degree/${d.id}`} /> */}
                      </div>
                    </td>
                  </Tr>
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
        </MainSection>
      )}
    </>
  );
}
