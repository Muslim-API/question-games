import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import HeaderSoundAndBackButton from "../../components/mobile/HeaderSoundAndBack";
import ButtonBaseComponents from "../../components/mobile/ButtonBase";
import saveImage from "../../assets/mobile/save-image.svg";

const CaseStudyScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-neutral-100">
      <HeaderSoundAndBackButton onClickBack={() => navigate("/")} />
      <div className="flex flex-col justify-center h-full items-center">
        <div className="basis-5/6 w-full">
          <div className="flex justify-center"></div>
        </div>
        <div className="basis-2/5 w-full bg-white -mt-20">
          <div className="flex flex-col justify-center h-full items-center pb-24 gap-1 -ml-12">
            <div className="basis-2/5 w-64">
              <div className="flex justify-center -mt-14 h-24 w-80">
                <Typography
                  style={{
                    fontFamily: "BioRhyme",
                    fontSize: "20px",
                    fontWeight: "700",
                    lineHeight: "26px",
                    color: "#601609",
                  }}
                >
                  Helping to connect geothermal power plant to local homes in
                  Indonesia
                </Typography>
              </div>
            </div>
            <div className="basis-2/5 w-64">
              <div className="flex justify-center">
                <Typography
                  style={{
                    fontFamily: "BioRhyme",
                    fontSize: "10px",
                    fontWeight: "400",
                    lineHeight: "12px",
                    color: "#601609",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam ornare consequat odio...
                </Typography>
              </div>
            </div>
            <div className="w-64 -ml-12">
              <div className="flex">
                <ButtonBaseComponents
                  key={1}
                  image={saveImage}
                  label="Read More"
                  classStyling="w-44"
                  onClick={() => ""}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyScreen;
