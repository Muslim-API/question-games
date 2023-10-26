/* eslint-disable jsx-a11y/alt-text */
import { ButtonBase } from "@mui/material";
import { MouseEventHandler } from "react";
import BackArrowIcon from "../../assets/mobile/button-back.svg";
import ButtonMusic from "../../assets/mobile/button-music.svg";
const HeaderSoundAndBackButton = ({
  onClickBack,
  onClickSound,
}: {
  onClickBack?: MouseEventHandler<HTMLButtonElement>;
  onClickSound?: MouseEventHandler<HTMLButtonElement>;
}) => (
  <div>
    <div className="absolute top-8 left-4">
      <ButtonBase onClick={onClickBack}>
        <img src={BackArrowIcon} />
      </ButtonBase>
    </div>
    <div className="absolute top-8 right-4">
      <ButtonBase onClick={onClickSound}>
        <img src={ButtonMusic} />
      </ButtonBase>
    </div>
  </div>
);
export default HeaderSoundAndBackButton;
