import EnquiryForm from "../js/EnquiryForm";

function Quote() {
  return (
    <div style={{ paddingTop: "15px", textAlign: "center" }}>
      <h1>Send us an enquiry</h1>

      <div
        style={{
          width: "90%",
          display: "flex",
          alignItems: "center",
          margin: "auto",
          justifyContent: "center",
        }}
      >
        <span>
          Fill out this form and we will get in contact with you as soon as
          possible. <br></br>
          <br></br>If your request is urgent, please call or text 021 152 3789.
        </span>
      </div>
      <hr style={{ width: "90%", marginTop: "30px" }}></hr>

      <EnquiryForm />
    </div>
  );
}

export default Quote;
