import { useNavigate } from "react-router-dom";

function Success() {
  let navigate = useNavigate();
  function redirectUser() {
    navigate("/");
  }
  return (
    <div>
      <h1>You're request has been successfully submitted.</h1>
      <button onClick={redirectUser}>Go to home</button>
    </div>
  );
}

export default Success;
