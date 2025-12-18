import React, { useEffect, useState } from "react";
import { banwordsService } from "../../../services/BanWordsService";
import { useApi } from "../../../helper/UseApi";
import Loader from "../../../components/Loader";
import { Heading, SubText } from "../../../components/Typography";
import { MdEdit } from "react-icons/md";
import { Button } from "../../../components/Button";
import { AddbadWords } from "../../../components/Modal";
import MainSection from "../../../components/MainSection";
import { Td, Th, Tr } from "../../../components/TableComponents";

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
        <MainSection btntext="Add ban Words"  onClick={() => {
                  setOpenModal(true);
                }} heading="Ban Words" subText="All list of ban words"> 
  <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-linear-to-r from-gray-900 to-gray-800/50">
                <tr>
                  <Th text="S.no"/>
                  <Th text="Words"/>
                  <Th text="Category"/>
                  <Th text="Action"/>
                 
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-800">
                {banwords.map((d, index) => (
                  <Tr id={d.id}>
                    <Td text={index+1}/>
                    <Td text= {d.word}/>
                    <Td text={d.category}/>
                    <td className="px-6 py-4">
                      <div className="flex ">
                        <button onClick={() => handleEditWords(d)}>
                          <MdEdit className="text-white" />
                        </button>
                        {/* <ActionButtons editLink={`/degree/${d.id}`} /> */}
                      </div>
                    </td>
                  </Tr>
            
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
        </MainSection>
        
        
      )}
    </div>
  );
}
