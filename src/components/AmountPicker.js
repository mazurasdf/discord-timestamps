import React, { useState } from "react";

const AmountPicker = (props) => {
    const [timeType, setTimeType] = useState("hr");
    const [timeValue, setTimeValue] = useState(1);

    const getTimeStamp = () => {
        let dt = new Date();

        let multiplier = 1000;
        switch (timeType) {
            case "min":
                multiplier *= 60;
                break;
            case "hr":
                multiplier *= 60 * 60;
                break;
            case "day":
                multiplier *= 60 * 60 * 24;
                break;
            case "week":
                multiplier *= 60 * 60 * 24 * 7;
                break;
            default:
                break;
        }

        dt = new Date(dt.valueOf() + timeValue * multiplier);

        //js unix timestamp includes milliseconds, but discord's doesn't, so I math out the three digits for milliseconds
        return Math.floor(dt.valueOf() / 1000);
    }

    const printTimeStamp = (event) => {
        event.preventDefault();
        props.setTimeTarget(getTimeStamp());

        console.log(`<t:${getTimeStamp()}:R>`);
    }

    return (
        <div className="formArea boxElement">
            <form onSubmit={printTimeStamp}>
                <div className="formGroup">
                    <input type="number" onChange={(event) => setTimeValue(event.target.value)} className="boxElement" />
                    <select onChange={(event) => setTimeType(event.target.value)} defaultValue="hr" className="boxElement">
                        <option value="sec">seconds</option>
                        <option value="min">minutes</option>
                        <option value="hr">hours</option>
                        <option value="day">days</option>
                        <option value="week">weeks</option>
                    </select>
                </div>
                <button type="submit" className="boxElement">get timestamp</button>
            </form>
        </div>
    );
}

export default AmountPicker;