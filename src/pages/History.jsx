import React, { useState } from 'react'
import '../assets/css/history.css'


const HistoryPage = () => {
    const [param, setParam] = useState("today");



    return (
        <div className='py-4 container'>
            <h1 className="mb-5 text-center text-light">History</h1>
            <div className="d-flex mb-3">
                <button
                    className={`btn btn-sm btn-outline-warning m-md-2 m-1 ${param == "today" ? "active" : ""}`}
                    onClick={() => setParam("today")}
                >Today</button>
                <button
                    className={`btn btn-sm btn-outline-warning m-md-2 m-1 ${param == "yesterday" ? "active" : ""}`}
                    onClick={() => setParam("yesterday")}
                >Yesterday</button>
                <button
                    className={`btn btn-sm btn-outline-warning m-md-2 m-1 ${param == "this_week" ? "active" : ""}`}
                    onClick={() => setParam("this_week")}
                >This Week</button>
                <button
                    className={`btn btn-sm btn-outline-warning m-md-2 m-1 ${param == "last_week" ? "active" : ""}`}
                    onClick={() => setParam("last_week")}
                >Last Week</button>
            </div>
            <div className="table-responsive text-center">
                <table className="table table-transparent">
                    <thead>
                        <tr>
                            <th>နံပါတ်</th>
                            {/* <th>ဂိမ်းအခြေအနေ</th> */}
                            <th>အပိတ်လက်ကျန်</th>
                            <th>အမျိုးအစား</th>
                            <th>ပမာဏ (ကျပ်)</th>
                            <th>အချိန်</th>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>

                <p className='text-center text-danger'>Data များ မရှိသေးပါ။</p>

            </div>

        </div>
    )
}

export default HistoryPage