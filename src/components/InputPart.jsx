import React, { useState } from "react";

function InputPart() {
    const [dayValue, setDayValue] = useState("");
    const [monthValue, setMonthValue] = useState("");
    const [yearValue, setYearValue] = useState("");

    const [error, setError] = useState({ day: false, month: false, year: false });

    const [dayLabelColor, setDayLabelColor] = useState("black");
    const [monthLabelColor, setMonthLabelColor] = useState("black");
    const [yearLabelColor, setYearLabelColor] = useState("black");

    const [dayErrorText, setDayErrorText] = useState("This field is required.");
    const [monthErrorText, setMonthErrorText] = useState("This field is required.");
    const [yearErrorText, setYearErrorText] = useState("This field is required.");

    const data = new Date();
    const [todayDate, setTodayDate] = useState(data.getDate());
    const [todayMonth, setTodayMonth] = useState(data.getMonth() +1);
    const [todayYear, setTodayYear] = useState(data.getFullYear());

    const [inputColor, setInputColor] = useState("hsl(0, 0%, 94%)");

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Check if any of the fields are empty and set the error state accordingly
        const emptyErrors = {
            day: dayValue === "",
            month: monthValue === "",
            year: yearValue === ""
        };

        if (emptyErrors.day || emptyErrors.month || emptyErrors.year) {
            e.preventDefault();
            setDayLabelColor("hsl(0, 100%, 67%)");
            setMonthLabelColor("hsl(0, 100%, 67%)");
            setYearLabelColor("hsl(0, 100%, 67%)");
            setInputColor("hsl(0, 100%, 67%)");
            setError(emptyErrors);
          } else {
            setDayLabelColor("black");
            setMonthLabelColor("black");
            setYearLabelColor(" black");
            setInputColor("hsl(0, 0%, 94%)");
            setError(false); // close the error state
          }
        
          
        //Check if numbers are not invalid and set the error state accordingly
        let hasError = false;

        let invalidErrors = {
            day: false,
            month: false,
            year: false
        };
        const dayInt = parseInt(dayValue, 10);
        const monthInt = parseInt(monthValue, 10);
        const yearInt = parseInt(yearValue, 10);

        if (dayInt < 1 || dayInt > 31) {
            setDayErrorText("Must be a valid day.");
            setInputColor("hsl(0, 100%, 67%)");
            setDayLabelColor("hsl(0, 100%, 67%)");
            invalidErrors.day = true;
            hasError = true;
        }
        if (monthInt < 1 || monthInt > 12) {
            setMonthErrorText("Must be a valid month.");
            setInputColor("hsl(0, 100%, 67%)");
            setMonthLabelColor("hsl(0, 100%, 67%)");
            invalidErrors.month = true;
            hasError = true;
        }
        if (yearInt < 1 || yearInt > todayYear) {
            setYearErrorText("Must be a valid year.");
            setInputColor("hsl(0, 100%, 67%)");
            setYearLabelColor("hsl(0, 100%, 67%)");
            invalidErrors.year = true;
            hasError = true;
        } 

        if (monthInt === 4 && dayInt < 1 || dayInt > 30){
            setDayErrorText("Must be a valid day.");
            setInputColor("hsl(0, 100%, 67%)");
            setDayLabelColor("hsl(0, 100%, 67%)");
            invalidErrors.day = true;
            hasError = true;
        }

        // update error message
        setError(invalidErrors);

        // If there are no errors, you can proceed with form submission, API call, etc.
        if (!emptyErrors.day && !emptyErrors.month && !emptyErrors.year && !hasError) {
            // Submit data
            console.log(dayValue, monthValue, yearValue);
            console.log(todayDate, todayMonth, todayYear);
            console.log("No errors, submit the form");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="inputArea">
                <div className="dayArea">
                    <label style={{color: dayLabelColor}}>D A Y</label>
                    <input 
                        type="number" 
                        placeholder="DD"
                        style={{borderColor: inputColor}}
                        value={dayValue}
                        onChange={(e) => setDayValue(e.target.value)}
                    />
                    {error.day && <p className="errorPart">{dayErrorText}</p>}
                </div>
                <div className="monthArea">
                    <label style={{color: monthLabelColor}}>M O N T H</label>
                    <input 
                        type="number" 
                        placeholder="MM"
                        style={{borderColor: inputColor}}
                        value={monthValue}
                        onChange={(e) => setMonthValue(e.target.value)}
                    />
                    {error.month && <p className="errorPart">{monthErrorText}</p>}
                </div>
                <div className="yearArea">
                    <label style={{color: yearLabelColor}}>Y E A R</label>
                    <input 
                        type="number" 
                        placeholder="YYYY"
                        style={{borderColor: inputColor}}
                        value={yearValue}
                        onChange={(e) => setYearValue(e.target.value)}
                    />
                    {error.year && <p className="errorPart">{yearErrorText}</p>}
                </div>    
            </div>
            <div className="buttonArea">
                <hr />
                <button type="submit">
                    <svg xmlns="http://www.w3.org/2000/svg" width="46" height="44" viewBox="0 0 46 44">
                        <g fill="none" stroke="#FFF" strokeWidth="2">
                            <path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44"/>
                        </g>
                    </svg>
                </button>
            </div>
        </form>
    );
}

export default InputPart;
