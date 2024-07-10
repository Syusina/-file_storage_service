import { useState } from "react"
import { useDispatch } from "react-redux";
import { fetchFilesUpload } from "../../../../store/files/upload";

const Upload = ({ token }: { token: string }) => {
  const dispatch = useDispatch();

  const [selectedFiles, setSelectedFiles] = useState([]);
  console.log("🚀 ~ Upload ~ selectedFiles:", selectedFiles)

  const handleFileChange = (event) => {
    setSelectedFiles(event.target.files);
  };

  const handleUpload = () => {
    // if (token && selectedFiles) {
    //   dispatch(fetchFilesUpload({ token, files: selectedFiles }));
    // }
  };

  
  return (
    <div>
      <form>
        <input type="file" onChange={handleFileChange} multiple />
        <button onClick={handleUpload}>Добавить</button>
      </form>
  </div>
  );
};

export default Upload;