import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function CircularProgress() {
    const percentage = 48;
    const primaryColour = "#883fdb";

    return (
        <CircularProgressbar
            className="text-primary size-52 my-10"
            value={percentage}
            styles={{
                path: {
                    stroke: primaryColour,
                    strokeLinecap: "round",
                    transition: "stroke-dashoffset 0.5s ease 0s"
                },
                trail: {
                    stroke: "#e2e8f0"
                },
                text: {
                    fill: primaryColour,
                    fontSize: "16px"
                }
            }}
            text={`${percentage}%`}
        />
    );
}