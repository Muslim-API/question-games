/* eslint-disable jsx-a11y/alt-text */
import { ButtonBase } from "@mui/material";
import { MouseEventHandler } from "react";
import CloseIcon from "../../assets/mobile/button-close.svg";
import ButtonMusic from "../../assets/mobile/button-music.svg";
const HeaderSoundAndBackClose = ({
  onClickClose,
  onClickSound,
}: {
  onClickClose?: MouseEventHandler<HTMLButtonElement>;
  onClickSound?: MouseEventHandler<HTMLButtonElement>;
}) => (
  <div>
    <div className="absolute top-8 left-4">
      <ButtonBase onClick={onClickClose}>
        <img src={CloseIcon} />
      </ButtonBase>
    </div>
    <div className="absolute top-8 right-4">
      <ButtonBase onClick={onClickSound}>
        <img src={ButtonMusic} />
      </ButtonBase>
    </div>
  </div>
);
export default HeaderSoundAndBackClose;
