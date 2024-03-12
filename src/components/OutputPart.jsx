import React from "react";

function OutputPart({ age }) {
    return (
        <div className="outputArea">
            <p><b>{age.years || "--"}</b> years</p>
            <p><b>{age.months || "--"}</b> months</p>
            <p><b>{age.days || "--"}</b> days</p>
        </div>   
    );
}

export default OutputPart;
