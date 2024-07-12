import { useDispatch } from "react-redux";
import { fetchFilesUpload } from "../../../../store/files/upload";

const Upload = ({ token }: { token: string }) => {
  const dispatch = useDispatch();

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.currentTarget.files;
    const formData = new FormData();
  
    for (let i = 0; i < files.length; i += 1) {
      formData.append('file', files[i]);
    }
    console.log("🚀 ~ handleFileUpload ~ formData:", formData)

    try {
     // await dispatch(fetchFilesUpload({ token, files: formData }));
    } catch (error) {
      // Handle error, if any
    }
  };

  
  return (
    <div>
      <input type="file" onChange={handleFileUpload} multiple />
    </div>
  );
};

export default Upload;