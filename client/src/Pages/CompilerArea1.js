import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useDispatch } from "react-redux";
import { getProblemByID } from "../Reducers/problems/problemActions";
import { useParams } from "react-router-dom";
import { submitSolution } from "../Reducers/solutions/solutionAction";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import classNames from "classnames";

function CompilerArea1() {
  const [problemByID, setProblemByID] = useState({ title: "" });
  const [code, setCode] = useState();
  const dispatch = useDispatch();
  const { _id } = useParams();

  useEffect(() => {
    dispatch(getProblemByID(_id)).then((data) => {
      // console.log(data.payload.data.prob);
      setProblemByID(data.payload.data.prob);
    });
  }, []);

  const [solution, setSolution] = useState("");
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setSolution("");
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  function changeHandler(e) {
    setCode(e.target.value);
  }

  const dispatch1 = useDispatch();
  function onSubmit(e) {
    e.preventDefault();
    dispatch1(
      submitSolution({
        problemData: { code: code, language: "cpp" },
        _id: _id,
      })
    ).then((data) => {
      console.log(data);
      try {
        if (!data.payload.data) {
          if (data.payload.response.data.error.stderr) {
            setSolution({
              ver: "Failed",
              mess: data.payload.response.data.error.stderr.split("error: ")[1],
            });
          } else {
            setSolution({
              ver: "Failed",
              mess: data.payload.response.data.error,
            });
          }
        } else if (data.payload.data.solution.verdict == "Accepted") {
          setSolution({
            ver: "Accepted",
            mess: "You Have Passed All Test Cases",
          });
        } else {
          setSolution({
            ver: "Failed",
            mess: "You Have Not Passed All Test Cases.",
          });
        }
      } catch (error) {
        setSolution({
          ver: "Unauthorized User",
          mess: "Please Login to continue Solving.",
        });
      }
    });
    openModal();
  }

  return (
    <>
      <Navbar />
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-xl font-medium leading-6 text-gray-900"
                  >
                    Verdict
                  </Dialog.Title>
                  <div className="mt-2">
                    <p
                      className={classNames("text-lg", {
                        "text-green-500": solution.ver == "Accepted",
                        "text-red-500": solution.ver == "Failed",
                      })}
                    >
                      {solution.ver}
                    </p>
                    <p className="text-sm text-gray-500">{solution.mess}</p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      {/* ------------------------------------------------------------------------------ */}
      <div className="problem-page h-screen">
        <main className="p-4 h-full">
          <div className="flex flex-row container mx-auto h-full">
            {/* problem area --------------------------------------- */}

            <div className="w-1/2 overflow-y-auto  bg-gray-100 p-4 rounded mb-4">
              <h1 className="text-3xl font-bold mb-4">{problemByID.title}</h1>
              <h2 className="text-xl font-bold mb-2">Problem Description</h2>
              <p>{problemByID.statement}</p>
              <h2 className="text-xl font-bold mb-2">Examples</h2>
              <p>
                {problemByID.examples?.map((example) => {
                  return <div>example</div>;
                })}
              </p>
              <h2 className="text-xl font-bold mb-2">Constraints</h2>
              <p>{problemByID.constraints}</p>
              {/* Additional details for the problem */}
            </div>

            {/* Compiler Area ----------------------------------------------------------- */}

            <div className="w-1/2 h-4/5 flex flex-col items-center bg-gray-100 p-4 rounded">
              <h2 className="text-xl font-bold mb-2">Submit Solution</h2>
              <form className="w-full h-full" onSubmit={onSubmit}>
                <textarea
                  className="w-full h-5/6 p-2 mb-2 bg-white border border-gray-300 rounded"
                  rows="10"
                  placeholder="Enter your code solution here"
                  onChange={changeHandler}
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

            {/*--------------------------------------------------------------------------  */}
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
