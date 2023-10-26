import Carousel from 'react-material-ui-carousel';
import thanksPlaying from "../../assets/result/thanks-playing.svg";
const AvatarSlider = () => {
    const items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        }
    ]
    return (
        <Carousel>
            {
                items.map((item, i) => (
                    <img src={thanksPlaying} alt="" />
                ))
            }
        </Carousel>
    )
}

export default AvatarSlider;