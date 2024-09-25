// app/components/AudioUploader.js
import { FileInput } from "@mantine/core";

const AudioUploader = ({ onUpload }) => {
  return (
    <FileInput
      placeholder="Upload audio file"
      label="Audio File"
      onChange={onUpload}
      accept="audio/*"
    />
  );
};

export default AudioUploader;
