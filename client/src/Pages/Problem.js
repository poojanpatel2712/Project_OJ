import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useDispatch } from "react-redux";
import { getProblemList } from "../Reducers/problems/problemActions";
function Problems() {
  const problems = [
    { id: 1, title: "Problem A", difficulty: "Easy", description: "Problem A description goes here" },
    { id: 2, title: "Problem B", difficulty: "Medium", description: "Problem B description goes here" },
    { id: 3, title: "Problem C", difficulty: "Hard", description: "Problem C description goes here" },
    // Add more problems as needed
  ];

  const [problem, setProblem] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProblemList()).then((data) => {
      setProblem();
    })
  })
  return (
    <>
    <Navbar/>
    <div className="problems-page">
      <main className="p-4">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-4">Problems</h1>
          <div className="grid grid-cols-1 gap-4 hover:cursor-pointer">
            {problems.map((problem) => (
              <div className="bg-gray-100 p-4 rounded hover:bg-gray-200" key={problem.id}>
                <div className="mb-2">
                  <h2 className="text-xl font-bold">{problem.title}</h2>
                  <p className="text-gray-500">Difficulty: {problem.difficulty}</p>
                </div>
                <div className="text-gray-800">{problem.description}</div>
                {/* Additional details or elements for the problem */}
              </div>
            ))}
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

export default Problems;
