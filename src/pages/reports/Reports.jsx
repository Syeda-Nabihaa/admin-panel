import React, { useEffect, useState } from "react";
import { ReportService } from "../../services/ReportService";
import { useApi } from "../../helper/UseApi";
import Loader from "../../components/Loader";
import { Heading, SubText } from "../../components/Typography";
import { MdEdit } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import MainSection from "../../components/MainSection";
import { Td, Th, Tr } from "../../components/TableComponents";

export default function Reports() {
  const service = new ReportService();
  const [selectedreport, setSelectedreport] = useState(null);
  const [report, setreport] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const { request, loading, error } = useApi(service);

  async function getAlldata() {
    const data = await request("GetAllreport");
    if (data) {
      setreport(data.data);
      console.log(data.data);
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
      ) : (
        <MainSection heading="Report" subText="All Report">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-linear-to-r from-gray-900 to-gray-800/50">
                <tr>
                  <Th text="S.no" />
                  <Th text=" Reported User" />
                  <Th text=" Reported By" />
                  <Th text=" Reason" />
                  <Th text=" Description" />
                  <Th text=" Status" />
                  <Th text=" Action" />
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {report.map((d, index) => (
                  <Tr id={d.id}>
                    <Td text={index + 1} />
                    <Td text={d.reportedUser?.email} />
                    <Td text={d.reportedBy?.email} />
                    <Td text={d.reason} />
                    <Td text={d.description} />
                    <td className="px-6 py-4 text-center">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium
            ${
              d.status === "Pending"
                ? "bg-yellow-100 text-yellow-700"
                : "bg-green-100 text-green-700"
            }`}
                      >
                        {d.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex justify-center gap-3">
                        <button onClick={() => handleEditreport(d)}>
                          <MdEdit className="text-white" />
                        </button>
                        <Link to={`/report/${d.id}`}>
                          <FaEye className="text-white" />
                        </Link>
                      </div>
                    </td>
                  </Tr>
                ))}
              </tbody>
            </table>
            {/* <AddreportModal
              key={selectedreport?.id || "add"} // This forces re-render when report changes
              open={openModal}
              onClose={() => {
                setOpenModal(false);
                setSelectedreport(null);
              }}
              initialData={selectedreport}
              onSuccess={getAlldata}
              loading={loading}
            /> */}
          </div>
        </MainSection>
      )}
    </>
  );
}
