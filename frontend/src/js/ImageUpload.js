import styles from "../styles/Upload.module.css";
import { useState } from "react";

function ImageUpload() {
  const [imageUploaded, setImageUploaded] = useState(false);
  const [imageSource, setImageSource] = useState("");

  var displayImage = function (event) {
    setImageUploaded(true);
    setImageSource(URL.createObjectURL(event.target.files[0]));
  };

  return (
    <div>
      <div className={styles.uploadBox}>
        <label className={styles.instruction}>
          Attach a photo of your current battery from the top view
        </label>
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
