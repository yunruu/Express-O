import React from "react";

function Calendar() {
    const [showCal, setShowCal] = React.useState(true);
    const calendarArr = ["Today", "Next 7 Days", "All Days"];

    return (
        <div className="calendar">
            <div className="cal-title">
                <button onClick={() => setShowCal(!showCal)}>Calendar</button>
            </div>
            {
                showCal && 
                <div className="cal-items">
                {
                    calendarArr.map( item => 
                        <div 
                            className="cal-item"
                            key={item}> {item} 
                        </div>
                        )
                }
                </div>
            }

        </div>
    )
}

export default Calendar;