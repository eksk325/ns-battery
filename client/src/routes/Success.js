import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Success.module.css";

function Success() {
  useEffect(() => {
    const formData = JSON.parse(sessionStorage.getItem("formData"));
    const infoSlots = document.querySelectorAll("td");
    console.log(formData);

    for (const info of infoSlots) {
      const context = info.id;
      if (context === "dimensions") {
        info.textContent = `${formData.length} x ${formData.width} x ${formData.height}`;
      } else {
        info.textContent = formData[context];
      }
    }
  }, []);
  let navigate = useNavigate();

  function redirectUser() {
    navigate("/");
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>
        You're request has been successfully submitted.
      </h2>
      <div className={styles.information}>
        <table>
          <tbody>
            <tr>
              <th>Name: </th>
              <td id="name"></td>
            </tr>
            <tr>
              <th>Email: </th>
              <td id="email"></td>
            </tr>
            <tr>
              <th>Phone Number: </th>
              <td id="phoneNum"></td>
            </tr>
            <tr>
              <th>Car Make: </th>
              <td id="carMake"></td>
            </tr>
            <tr>
              <th>Car Model: </th>
              <td id="carModel"></td>
            </tr>
            <tr>
              <th>Car Year: </th>
              <td id="carYear"></td>
            </tr>
            <tr>
              <th>Idle start-stop: </th>
              <td id="idle"></td>
            </tr>
            <tr>
              <th>Battery Dimensions: </th>
              <td id="dimensions"></td>
            </tr>
          </tbody>
        </table>
      </div>
      <button className={styles.homeButton} onClick={redirectUser}>
        Go to home
      </button>
    </div>
  );
}

export default Success;
