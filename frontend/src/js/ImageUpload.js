import styles from "../styles/Upload.module.css";
import { useState } from "react";
import example from "../images/exampleImage.png";

function ImageUpload() {
  const [imageUploaded, setImageUploaded] = useState(false);
  const [imageSource, setImageSource] = useState("");
  const [isHovering, setIsHovering] = useState(false);

  const displayImage = function (event) {
    setImageUploaded(true);
    setImageSource(URL.createObjectURL(event.target.files[0]));
  };

  const showInstruction = function () {
    document.getElementsByClassName(".imageTooltip").style.visibility =
      "visible";
  };

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div>
      <div className={styles.uploadBox}>
        <div className={styles.tooltipIcon}>
          <i
            className="fa-regular fa-circle-question"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          ></i>
        </div>

        {isHovering && (
          <div className={styles.imageTooltip}>
            <label>
              Attach a photo of your current battery from the top view.
            </label>
            <img src={example} style={{ width: "200px", height: "auto" }} />
          </div>
        )}

        <div className={styles.imageBox}>
          {!imageUploaded ? null : (
            <img src={imageSource} className={styles.outputImage} />
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
