import React from "react";
import { Heading, SubText } from "../../components/Typography";
import { useParams } from "react-router-dom";
import { Input } from "../../components/InputFields";
import { Button } from "../../components/Button";

export default function AddDegree() {
  const { id } = useParams();
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 max-w-4xl mx-auto">
      <div className="mb-6">
        <Heading title={id ? "Edit University" : "Add University"} />
        <SubText text="add university" />
      </div>

      <form >
        <div className="space-y-6">
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                University Name *
              </label>
              <Input
                // register={register}
                name="name"
                type="text"
                placeholder="e.g., Bahria University Community"
              />
              {/* {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )} */}
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <Button title={id ? "Update degree" : "Add degree"} />
          </div>
        </div>
      </form>
    </div>
  );
}
