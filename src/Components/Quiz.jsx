import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getFailure, getRequest, getSuccess } from "../Redux/AppReducer/action";
import { Box, Button, Img, Text } from "@chakra-ui/react";

export default function Quiz() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  const [right, setRight] = useState("");

  const handleClick = () => {
    let one = document.getElementById("box1").innerHTML;
    console.log(one);
  };

  const handleAnswer = () => {
    if (right == data[page].correct_answer) {
      alert("Correct");
      document.getElementById("box4").style.backgroundColor = "green";
    } else {
      alert("Incorrect");
    }
  };

  const name = localStorage.getItem("name");
  const category = localStorage.getItem("category");
  const difficulty = localStorage.getItem("difficulty");
  const num = localStorage.getItem("num");

  // console.log(name, category, difficulty, num);
  //https://opentdb.com/api.php?amount=10&category=21&difficulty=easy
  function getData() {
    dispatch(getRequest());
    axios
      .get(
        `https://opentdb.com/api.php?amount=${num}&category=${category}&difficulty=${difficulty}`
      )
      .then((res) => {
        // console.log(res.data.results);
        dispatch(getSuccess(res.data.results));
      })
      .catch((err) => {
        dispatch(getFailure());
      });
  }
  useEffect(() => {
    getData();
  }, []);

  const { data, loading, error } = useSelector((state) => {
    return {
      data: state.App.data,
      loading: state.App.loading,
      error: state.App.error
    };
  });

  // console.log(data, loading, error);
  console.log(right);

  return loading ? (
    <img
      style={{ margin: "auto" }}
      width="30%"
      src="https://raw.githubusercontent.com/Codelessly/FlutterLoadingGIFs/master/packages/cupertino_activity_indicator.gif"
      alt="Loading Icon"
    />
  ) : error ? (
    <img
      width="30%"
      src="https://user-images.githubusercontent.com/6059356/35678833-80566ce6-075d-11e8-9513-cc3d4233f5b1.gif"
      alt="Error Icon"
    />
  ) : (
    <>
      <Box
        style={{
          border: "1px solid",
          backgroundColor: "#6859d1",
          color: "white",
          width: "80%",
          margin: "auto",
          borderRadius: "8px",
          padding: "20px"
        }}
      >
        {data.length >= 0 ? (
          <Box>
            <Text
              style={{
                fontSize: "22px",
                fontWeight: "bold"
              }}
            >
              {page + 1}.{data[page].question}
            </Text>
            <Box onClick={() => handleAnswer()}>
              <Box
                id="box1"
                onClick={() => setRight(data[page].incorrect_answers[0])}
                style={{
                  border: "1px solid white",
                  width: "300px",
                  margin: "auto",
                  textAlign: "left",
                  padding: "10px",
                  borderRadius: "8px",
                  marginTop: "10px",
                  cursor: "pointer"
                }}
              >
                {data[page].incorrect_answers[0]}
              </Box>
              <Box
                id="box2"
                onClick={() => setRight(data[page].incorrect_answers[1])}
                style={{
                  border: "1px solid white",
                  width: "300px",
                  margin: "auto",
                  textAlign: "left",
                  padding: "10px",
                  borderRadius: "8px",
                  marginTop: "10px",
                  cursor: "pointer"
                }}
              >
                {data[page].incorrect_answers[1]}
              </Box>
              <Box
                id="box3"
                onClick={() => setRight(data[page].incorrect_answers[2])}
                style={{
                  border: "1px solid white",
                  width: "300px",
                  margin: "auto",
                  textAlign: "left",
                  padding: "10px",
                  borderRadius: "8px",
                  marginTop: "10px",
                  cursor: "pointer"
                }}
              >
                {data[page].incorrect_answers[2]}
              </Box>

              <Box
                id="box4"
                onClick={() => setRight(data[page].correct_answer)}
                style={{
                  border: "1px solid white",
                  width: "300px",
                  margin: "auto",
                  textAlign: "left",
                  padding: "10px",
                  borderRadius: "8px",
                  marginTop: "10px",
                  cursor: "pointer"
                }}
              >
                {data[page].correct_answer}
              </Box>
            </Box>
          </Box>
        ) : null}
      </Box>
      <Text>Question Number : {page + 1}</Text>
      <Button disabled={page === 0} onClick={() => setPage((page) => page - 1)}>
        Prev
      </Button>
      <Button
        disabled={page >= data.length - 1}
        onClick={() => setPage((page) => page + 1)}
      >
        Next
      </Button>
    </>
  );
}
