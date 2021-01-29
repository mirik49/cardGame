import React, {useEffect, useState} from "react";

export default function Timer(props) {
    const [sec, setSec] = useState(0);
    const [min, setMin] = useState(0);
    const {index} = props;


    useEffect(() => {
        let timeOutId;
        if (sec !== 60) {
            timeOutId = setTimeout(() => {
                setSec(sec + 1);
            }, 1000);
        } else {
            setMin(min + 1);
            setSec(0);
        }
        return () => {
            clearTimeout(timeOutId);
        }

    }, [sec]);

    return (
        <p>Time {min}:{sec}</p>
    )
}
