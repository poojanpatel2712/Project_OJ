import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useDispatch } from "react-redux";
import { getProblemByID } from "../Reducers/problems/problemActions";
import { useParams } from "react-router-dom";
function CompilerArea1() {
  const [problemByID, setProblemByID] = useState({ title: "" });
  const dispatch = useDispatch();
  const { _id } = useParams();

  useEffect(() => {
      dispatch(getProblemByID(_id)).then((data) => {
      console.log(data.payload.data.prob);
      setProblemByID(data.payload.data.prob);
    });
  }, []);
  return (
    <>
      <Navbar />
      <div className="problem-page h-screen">
        <main className="p-4 h-full">
          <div className="flex flex-row container mx-auto h-full">
            <div className="w-1/2 overflow-y-auto  bg-gray-100 p-4 rounded mb-4">
              <h1 className="text-3xl font-bold mb-4">{problemByID.title}</h1>
              <h2 className="text-xl font-bold mb-2">Problem Description</h2>
              <p>
                {problemByID.statement}
              </p>
              <h2 className="text-xl font-bold mb-2">Examples</h2>
              <p>
                {problemByID.examples?.map((example) => {
                    return <div>example</div>
                })}
              </p>
              <h2 className="text-xl font-bold mb-2">Constraints</h2>
              <p>
                {problemByID.constraints}
              </p>
              {/* Additional details for the problem */}
            </div>
            <div className="w-1/2 h-4/5 flex flex-col items-center bg-gray-100 p-4 rounded">
              <h2 className="text-xl font-bold mb-2">Submit Solution</h2>
              <form className="w-full h-full">
                <textarea
                  className="w-full h-5/6 p-2 mb-2 bg-white border border-gray-300 rounded"
                  rows="10"
                  placeholder="Enter your code solution here"
                  // value={code}
                  // onChange={handleCodeChange}
                ></textarea>
                <div className="w-full flex justify-center">
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </main>
        <footer className="bg-gray-800 p-4">
          {/* Footer content goes here */}
        </footer>
      </div>
    </>
  );
}

export default CompilerArea1;
