import { Box, Input, Text, Select, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SetUp() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [num, setNum] = useState(10);
  const navigate = useNavigate();

  const handleClick = () => {
    if (name && category && difficulty && num) {
      localStorage.setItem("name", name);
      localStorage.setItem("category", category);
      localStorage.setItem("difficulty", difficulty);
      localStorage.setItem("num", num);
      navigate("/quiz");
    } else {
      alert("Please Enter All Details");
    }
  };

  return (
    <>
      <Box>
        <Text>SetUp Your Quiz</Text>
        <Input
          onChange={(e) => setName(e.target.value)}
          value={name}
          name="name"
          placeholder="Enter Your Name"
          style={{ width: "300px" }}
        />{" "}
        <br /> <br />
        <Select
          onChange={(e) => setCategory(e.target.value)}
          style={{ width: "300px" }}
        >
          <option value="null">Select Category</option>
          <option value="21">Sports</option>
          <option value="23">History</option>
          <option value="24">Politics</option>
          <option value="25">Art</option>
        </Select>{" "}
        <br />
        <Select
          onChange={(e) => setDifficulty(e.target.value)}
          style={{ width: "300px" }}
        >
          <option value="null">Select Dificulty</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </Select>{" "}
        <br />
        <Input
          onChange={(e) => setNum(e.target.value)}
          value={num}
          name="num"
          type="number"
          placeholder="Choose A Number Of Questions"
          style={{ width: "300px" }}
        />{" "}
        <br /> <br />
        <Button
          onClick={() => handleClick()}
          style={{
            width: "300px",
            backgroundColor: "#f50157",
            color: "white",
            fontStyle: "italic"
          }}
        >
          Start Quiz
        </Button>
      </Box>
    </>
  );
}
