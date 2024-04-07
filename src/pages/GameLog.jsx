import React, { useState } from 'react'
import '../assets/css/history.css'
import BASE_URL from '../hooks/baseURL';
import useFetch from '../hooks/useFetch';


const GameLogPage = () => {
    const url = "/wager-logs?type=";
    const [param, setParam] = useState("today");
    const {data: logs} = useFetch(BASE_URL+url+param);

    console.log(logs);
    const logRows = logs.map((log, index) => (
        <tr key={index}>
            <td>{index + 1}</td>
            <td>{log?.amount}</td>
            <td>{log?.status}</td>
            <td>{log?.datetime}</td>
        </tr>
    ));

    return (
        <div className='py-4 container history'>
            <h1 className="mb-4 mb-sm-5  text-center text-light">Game Log</h1>
            <div className="d-flex mb-3">
                <p
                    className={`historyTitle me-3 me-sm-4   ${param == "today" ? "active" : ""}`}
                    onClick={() => setParam("today")}
                    style={{ 'cursor' : "pointer" }}
                >Today</p>
                <p
                    className={` historyTitle me-3 me-sm-4 ${param == "yesterday" ? "active" : ""}`}
                    onClick={() => setParam("yesterday")}
                    style={{ 'cursor' : "pointer" }}
                >Yesterday</p>
                <p
                    className={`historyTitle me-3 me-sm-4 ${param == "this_week" ? "active" : ""}`}
                    onClick={() => setParam("this_week")}
                    style={{ 'cursor' : "pointer" }}
                >This Week</p>
                <p
                    className={`historyTitle  ${param == "last_week" ? "active" : ""}`}
                    onClick={() => setParam("last_week")}
                    style={{ 'cursor' : "pointer" }}
                >Last Week</p>
            </div>
            <div className="table-responsive text-center">
                <table className="table table-transparent">
                    <thead>
                        <tr>
                            <th>နံပါတ်</th>
                            <th>ပြန်ရငွေ</th>
                            <th>နိုင်/ရှုံး</th>
                            <th>အချိန်</th>
                        </tr>
                    </thead>
                    <tbody className='text-dark'>
                        {logRows.length > 0 ? logRows : 
                        <tr className='text-center text-white'>
                            <td colSpan={4}>မှတ်တမ်းမရှိသေးပါ။</td>
                        </tr>}
                    </tbody>
                </table>



            </div>
        </div>
    )
}

export default GameLogPage