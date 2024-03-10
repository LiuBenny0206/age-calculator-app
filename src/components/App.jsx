import React from "react";

function App (){
    return(
        <div className="mainArea">
            <form>
                <div className="inputArea">
                    <div className="dayArea">
                        <label>D A Y</label>
                        <input type="text" placeholder="DD"/>
                        <p>This field is required</p>
                    </div>
                    <div className="monthArea">
                        <label>M O N T H</label>
                        <input type="number" placeholder="MM"/>
                        <p>This field is required</p>
                    </div>
                    <div className="yearArea">
                        <label>Y E A R</label>
                        <input type="number" placeholder="YYYY"/>
                        <p>This field is required</p>
                    </div>    
                </div>
                <div className="buttonArea">
                    <hr></hr>
                    <button type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="46" height="44" viewBox="0 0 46 44"><g fill="none" stroke="#FFF" stroke-width="2"><path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44"/></g></svg></button>
                </div>
            </form>
            <div className="outputArea">
                <p><b>--</b>years</p>
                <p><b>--</b>months</p>
                <p><b>--</b>days</p>
            </div>    
        </div>
        
    );
}

export default App;