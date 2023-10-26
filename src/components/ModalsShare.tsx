import { MouseEventHandler } from "react";
import ButtonBaseComponents from "./mobile/ButtonBase";
import shareLink from "../assets/mobile/share-link.svg";
import saveImage from "../assets/mobile/save-image.svg";

const Share = ({ onClose }: { onClose: MouseEventHandler<HTMLDivElement> }) => {
  return (
    <div
      onClick={onClose}
      className="fixed bg-[#00000099] top-0 left-0 right-0 z-50 w-full p-7 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] min-h-full"
    >
      <div className="relative h-full t-20">
        <div className="flex flex-col h-full pt-12">
          <div className="basis-3/4 text-white bg-neutral-300"></div>
          <div className="basis-1/5 text-white">
            <div className="flex justify-center pt-5">
              <ButtonBaseComponents
                key={1}
                image={shareLink}
                label="Copy Link"
                classStyling="w-44"
                onClick={() => ""}
              />

              <ButtonBaseComponents
                key={2}
                image={saveImage}
                label="Save Image"
                classStyling="w-44"
                onClick={() => ""}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
