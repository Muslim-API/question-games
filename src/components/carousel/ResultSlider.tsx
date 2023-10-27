import Carousel from 'react-material-ui-carousel';
import thanksPlaying from "../../assets/result/thanks-playing.svg";
import avatar1 from "../../assets/avatar/avatar_1.svg";
import avatar2 from "../../assets/avatar/avatar_2.svg";
import avatar3 from "../../assets/avatar/avatar_3.svg";
import avatar4 from "../../assets/avatar/avatar_4.svg";
import avatar5 from "../../assets/avatar/avatar_5.svg";
import avatar6 from "../../assets/avatar/avatar_6.svg";
import avatar7 from "../../assets/avatar/avatar_7.svg";
import avatar8 from "../../assets/avatar/avatar_8.svg";

import { ReactComponent as NextIcon } from '../carousel/RightButton.svg';
import { ReactComponent as PrevIcon } from '../carousel/LeftButton.svg';
// import thanksPlaying2 from "../../assets/result/question-bucket-1.svg";
// import thanksPlaying3 from "../../assets/result/question-bucket-2.svg";
const AvatarSlider = () => {
    const items = [
        {
            name: "Random Name #1",
            avatar: avatar1,
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #2",
            avatar: avatar2,
            description: "Hello World!"
        },
        {
            name: "Random Name #3",
            avatar: avatar3,
            description: "Hello World!"
        },
        {
            name: "Random Name #4",
            avatar: avatar4,
            description: "Hello World!"
        },
        {
            name: "Random Name #5",
            avatar: avatar5,
            description: "Hello World!"
        },
        {
            name: "Random Name #6",
            avatar: avatar6,
            description: "Hello World!"
        },
        {
            name: "Random Name #7",
            avatar: avatar7,
            description: "Hello World!"
        },
        {
            name: "Random Name 8",
            avatar: avatar8,
            description: "Hello World!"
        }
    ]
    return (
        <Carousel
            NextIcon={<NextIcon />}
            PrevIcon={<PrevIcon />}
            indicators={false}
            navButtonsAlwaysVisible={true}
        >
            {
                items.map((item, i) => (
                    <img src={item.avatar} alt="" style={{"height" : "200px", width:"100%"}}/>
                ))
            }
        </Carousel>
    )
}

export default AvatarSlider;