import styles from "../styles/Upload.module.css";
import { useState } from "react";
import example from "../images/exampleImage.jpg";

function ImageUpload() {
  const [imageUploaded, setImageUploaded] = useState(false);
  const [imageSource, setImageSource] = useState("");
  const [isClicked, setIsClicked] = useState(false);

  const displayImage = function (event) {
    setImageUploaded(true);
    setImageSource(URL.createObjectURL(event.target.files[0]));
  };

  const clicked = () => {
    isClicked ? setIsClicked(false) : setIsClicked(true);
  };

  return (
    <div>
      <div className={styles.uploadBox}>
        <div className={styles.tooltipIcon}>
          {!isClicked ? (
            <i className="fa-regular fa-circle-question" onClick={clicked}></i>
          ) : (
            <i className="fa-regular fa-circle-xmark" onClick={clicked}></i>
          )}
        </div>

        {isClicked && (
          <div className={styles.imageTooltip}>
            <label>
              Attach a photo of your current battery from the top view.
            </label>
            <img
              src={example}
              style={{ width: "80%", height: "auto", paddingBottom: "15px" }}
              alt="Example of a battery from the top view"
            />
          </div>
        )}

        <div className={styles.imageBox}>
          {!imageUploaded ? null : (
            <img
              src={imageSource}
              className={styles.outputImage}
              id="userUploadImg"
              alt="User's battery"
            />
          )}
        </div>

        <div className={styles.uploadIcon}>
          <label htmlFor="batteryImages">
            <i className="fa-solid fa-arrow-up-from-bracket"></i>
          </label>
        </div>

        <input
          accept="image/*"
          id="batteryImages"
          className={styles.uploadImages}
          type="file"
          capture="environment"
          multiple
          onChange={displayImage}
        />
      </div>
    </div>
  );
}

export default ImageUpload;
