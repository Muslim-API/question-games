import Carousel from 'react-material-ui-carousel';
import thanksPlaying from "../../assets/result/thanks-playing.svg";
import avatar1 from "../../assets/avatar/avatar_1.svg";
import avatar2 from "../../assets/avatar/avatar_2.svg";
import avatar3 from "../../assets/avatar/avatar_3.svg";
import avatar4 from "../../assets/avatar/avatas_4.svg";
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
        }
    ]
    return (
        <Carousel>
            {
                items.map((item, i) => (
                    <img src={item.avatar} alt="" style={{"height" : "200px", width:"100%"}}/>
                ))
            }
        </Carousel>
    )
}

export default AvatarSlider;