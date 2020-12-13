import React, { useState } from 'react'

const Result_Bet = ({ result_data, bet_value }) => {

    const [result, setResult] = useState()

    result_data.map(item => {
        item['class_result'] = ""
        if (item.type === "SPLIT") {
            item['result'] = item.type + "x" + item.value[0] + "-" + item.value[1]
        } else if (item.type === "STREET") {
            item['result'] = item.type + "x" + item.value[0] + "-" + item.value[1] + "-" + item.value[2]
        } else if (item.type === "LINE") {
            item['result'] = item.type + "x" + item.value[0] + "-" + item.value[1] + "-" + item.value[2] + "-" + item.value[3] + "-" + item.value[4] + "-" + item.value[5]
        } else if (item.type === "SQUARE") {
            item['result'] = item.type + "x" + item.value[0] + "-" + item.value[1] + "-" + item.value[2] + "-" + item.value[3]
        } else if (item.type === "BASKET") {
            item['result'] = item.type + "x" + item.value[0] + "-" + item.value[1] + "-" + item.value[2]
        } else {
            item['result'] = item.type + "x" + item.value
        }
        bet_value.filter((filter) => (filter.type === item.type && filter.value === item.value)).map(data => {
            item['class_result'] = "text-green-600"
        })
    })

    return (<>
        <div>
            <label>Last Result BET KEYS</label>
            <hr className="my-3" />
            <div className="grid grid-cols-2 gap-1 text-center">
                {result_data.map((item, i) =>
                    <div className={"bg-gray-800 px-3 py-1 m-0 text-xs " + item.class_result}>{item.result}</div>
                )}
            </div>
        </div>
    </>)
}

export default Result_Bet