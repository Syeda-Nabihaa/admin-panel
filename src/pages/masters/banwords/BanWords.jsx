import React, { useEffect, useState } from "react";
import { banwordsService } from "../../../services/BanWordsService";
import { useApi } from "../../../helper/UseApi";
import Loader from "../../../components/Loader";
import { Heading, SubText } from "../../../components/Typography";
import { MdEdit } from "react-icons/md";
import { Button } from "../../../components/Button";
import { AddbadWords } from "../../../components/Modal";

export default function BanWords() {
  const service = new banwordsService();

  const [banwords, setbanwords] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [selectedwords, setSelectedWords] = useState(null);

  const { request, loading, error } = useApi(service);

  async function getAlldata() {
    const data = await request("GetAllbanwords");
    if (data) {
      setbanwords(data.data);
      console.log(data.data);
    }

    if (error) {
      console.log(error);
    }
  }
  function handleEditWords(data) {
    setSelectedWords({
      id: data.id, // important for edit
      word: data.word,
      category: data.category,
    });
    setOpenModal(true);
  }

  useEffect(() => {
    getAlldata();
  }, []);
  return (
    <div>
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
                <Heading title="Bad Words" />
                <SubText text="All bad words" />
              </div>
              <Button
                title="Add Ban Words"
                onClick={() => {
                  setOpenModal(true);
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
                    words
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                    Category
                  </th>
                  <th className="px-6 py-3 text-center text-sm font-semibold text-gray-600">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody className="bg-white divide-y divide-gray-100">
                {banwords.map((d, index) => (
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
                          {d.word}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="text-sm font-medium text-gray-900">
                          {d.category}
                        </div>
                      </div>
                    </td>

                    {/* Action */}
                    <td className="px-6 py-4">
                      <div className="flex justify-center">
                        <button onClick={() => handleEditWords(d)}>
                          <MdEdit />
                        </button>
                        {/* <ActionButtons editLink={`/degree/${d.id}`} /> */}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <AddbadWords
              key={selectedwords?.id || "add"} // This forces re-render when degree changes
              open={openModal}
              onClose={() => {
                setOpenModal(false);
                setSelectedWords(null);
              }}
              initialData={selectedwords}
              onSuccess={getAlldata}
              loading={loading}
            />
          </div>
        </div>
      )}
    </div>
  );
}
