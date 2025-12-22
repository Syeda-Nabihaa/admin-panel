import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useApi } from "../../helper/UseApi";
import { ReportService } from "../../services/ReportService";
import { Heading, SubText } from "../../components/Typography";
import { InfoCard } from "../../components/Card";
import { MdEmail } from "react-icons/md";
import { Button } from "../../components/Button";

export default function ViewReports() {
  const { id } = useParams();
  console.log(id);
  const [report, setreport] = useState([]);
  const service = new ReportService();
  const { request, loading, error } = useApi(service);
  async function getreportbyID(id) {
    const data = await request("getreportbyiD", id);
    if (data) {
      setreport(data);
      console.log("data", data);

      loading;
    }

    if (error) {
      console.log(error);
    }
  }
  async function banUser(id) {
    const data = await request("reportUser", id , {status:"Block"});

    if (data) {
      setreport(data);
      console.log("data", data.data);

     
      loading;
  //        if (res?.error) {
  //   return;
  // }
    }

    if (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getreportbyID(id);
  }, [id]);

  return (
    <div className="bg-dark rounded-2xl p-6 space-y-6 shadow-lg border border-white/10">
      <div className="px-6 py-5 border-b border-gray-700">
        <div className="flex items-center justify-between">
          <div>
            <Heading title="Report user details" />
            <SubText text="University Details" />
          </div>
        </div>
      </div>
      {/* Reported By */}
       {error && (
        <p className="text-white bg-error p-2 rounded mt-2 mb-4">{error.text}</p>
      )}
      <div>
        <h3 className="text-sm font-semibold text-indigo-400 mb-3 uppercase tracking-wide">
          Reported By
        </h3>
        <InfoCard
          title={report.reportedBy?.email || "—"}
          label="Email"
          icon={<MdEmail />}
        />
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <p className="text-xs text-gray-400">Email</p>
            <p className="text-sm text-white font-medium">
              {report.reportedBy?.email || "—"}
            </p>
          </div>

          <div>
            <p className="text-xs text-gray-400">Status</p>
            <span
              className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold
            ${
              report.reportedBy?.status === "Active"
                ? "bg-green-500/20 text-green-400"
                : "bg-red-500/20 text-red-400"
            }`}
            >
              {report.reportedBy?.status || "Unknown"}
            </span>
          </div>
        </div> */}
      </div>

      {/* Divider */}
      <div className="border-t border-white/10" />

      {/* Report Details */}
      <div>
        <h3 className="text-sm font-semibold text-indigo-400 mb-3 uppercase tracking-wide">
          Report Details
        </h3>

        <div className="space-y-3">
          <div>
            <p className="text-xs text-gray-400">Reason</p>
            <SubText text={report.reason} />
          </div>

          <div>
            <p className="text-xs text-gray-400">Description</p>

            <SubText text={report.description} />
          </div>

          <div>
            <p className="text-xs text-gray-400">Report Status</p>
            <span
              className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold
            ${
              report.status === "Pending"
                ? "bg-yellow-500/20 text-yellow-400"
                : report.status === "Resolved"
                ? "bg-green-500/20 text-green-400"
                : "bg-red-500/20 text-red-400"
            }`}
            >
              {report.status}
            </span>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10" />

      {/* Reported User */}
      <div>
        <h3 className="text-sm font-semibold text-indigo-400 mb-3 uppercase tracking-wide">
          Reported User
        </h3>
        <InfoCard
          title={report.reportedUser?.email || "—"}
          label="Email"
          icon={<MdEmail />}
        />
        <p className="text-white">{report.reportedUserId}</p>
      </div>
      <Button title="Ban User" onClick={() => banUser(report.id)} />
    </div>
  );
}
