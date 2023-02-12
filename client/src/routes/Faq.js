import React from "react";
import Qna from "../js/Qna";

let module = require("../qnaArray");
let array = module.qnaArray;

function Faq() {
  return (
    <div>
      <h1 style={{ textAlign: "center", paddingTop: "15px" }}>FAQs</h1>
      {array.map((qna) => (
        <Qna key={qna[0]} question={qna[1]} answer={qna[2]} code={qna[0]} />
      ))}
      <hr
        style={{ width: "90%", marginTop: "15px", marginBottom: "100px" }}
      ></hr>
    </div>
  );
}

export default Faq;
