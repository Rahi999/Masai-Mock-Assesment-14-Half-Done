import React from "react";
import { Routes, Route } from "react-router-dom";
import Quiz from "./Quiz";
import SetUp from "./SetUp";

export default function AllRoutes() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<SetUp />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </div>
    </>
  );
}
