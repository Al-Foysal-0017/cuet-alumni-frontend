// import { useState } from "react";
import ReactImagePickerEditor, {
  ImagePickerConf,
} from "react-image-picker-editor";
import "react-image-picker-editor/dist/index.css";

const config2: ImagePickerConf = {
  borderRadius: "8px",
  language: "en",
  width: "148px",
  height: "148px",
  objectFit: "cover",
  compressInitial: null,
  hideEditBtn: true,
};

interface IStateType {
  initialImage: string;
  setImageSrc: React.Dispatch<React.SetStateAction<string>>;
}

const ImagePicker = ({ initialImage, setImageSrc }: IStateType) => {
  // const initialImage = "";

  // console.log("initialImage:>>", initialImage);

  return (
    <div>
      <ReactImagePickerEditor
        config={config2}
        imageSrcProp={initialImage}
        imageChanged={(newDataUri: any) => {
          setImageSrc(newDataUri);
        }}
      />
    </div>
  );
};

export default ImagePicker;
