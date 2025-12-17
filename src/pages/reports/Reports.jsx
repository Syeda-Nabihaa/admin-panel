import React, { useEffect, useState } from "react";
import { ReportService } from "../../services/ReportService";
import { useApi } from "../../helper/UseApi";
import Loader from "../../components/Loader";
import { Heading, SubText } from "../../components/Typography";
import { MdEdit } from "react-icons/md";

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
  //   function handleEditreport(report) {
  //     setSelectedreport({
  //       id: report.id, // important for edit
  //       report_name: report.report_name,
  //     });
  //     setOpenModal(true);
  //   }

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
                <Heading title="Report" />
                <SubText text="All Report" />
              </div>

              {/* <Button
                title="Add report"
                onClick={() => {
                  setOpenModal(true);
                  setSelectedreport(null);
                }}
              /> */}
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
                    Reported User
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                    Reported By
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                    Reason
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                    Description
                  </th>
                  <th className="px-6 py-3 text-center text-sm font-semibold text-gray-600">
                    Status
                  </th>
                  <th className="px-6 py-3 text-center text-sm font-semibold text-gray-600">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-100">
                {report.map((d, index) => (
                  <tr
                    key={d.id}
                    className="hover:bg-gray-50 transition-all duration-150"
                  >
                    {/* S.no */}
                    <td className="px-6 py-4 text-sm text-gray-700 font-medium">
                      {index + 1}
                    </td>

                    {/* Reported User */}
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {d.reportedUser?.email}
                    </td>

                    {/* Reported By */}
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {d.reportedBy?.email}
                    </td>

                    {/* Reason */}
                    <td className="px-6 py-4 text-sm text-gray-700">
                      {d.reason}
                    </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                      {d.description}
                    </td>

                    {/* Status */}
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

                    {/* Action */}
                    <td className="px-6 py-4">
                      <div className="flex justify-center gap-3">
                        <button onClick={() => handleEditreport(d)}>
                          <MdEdit />
                        </button>
                      </div>
                    </td>
                  </tr>
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
        </div>
      )}
    </>
  );
}
