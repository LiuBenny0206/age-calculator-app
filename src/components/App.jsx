import React, {useState} from "react";
import InputPart from "./InputPart";
import OutputPart from "./OutputPart";

function App (){
    const [age, setAge] = useState({ years: 0, months: 0, days: 0 });

    const handleDateChange = (ageData) => {
        setAge(ageData);
    };

    return(
        <div className="mainArea">
            <InputPart onUserInfo={handleDateChange}/>
            <OutputPart age={age} />
        </div>
    );
}

export default App;