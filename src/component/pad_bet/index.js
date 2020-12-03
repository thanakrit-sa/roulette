import React, { useState } from 'react'

const Pad_Bet = ({click_bet}) => {

    const [data_top, setTop] = useState([])
    const [data_middle, setMiddle] = useState([])
    const [data_bottom, setBottom] = useState([])

    if (data_top.length === 0) {
        for (let index = 3; index <= 36; index++) {
            if (index % 3 === 0) {
                const data = {
                    num: index,
                    class: index === 3 || index === 9 || index === 12 || index === 18 || index === 21 || index === 27 || index === 30 || index === 36 ?
                        "border-red-800 bg-red-900"
                        :
                        "border-gray-700 bg-gray-800"
                }
                data_top.push(data)
            }
        }
    }
    if (data_middle.length === 0) {
        let index = 2
        while (index <= 35) {
            const data = {
                num: index,
                class: index === 5 || index === 14 || index === 23 || index === 32 ?
                    "border-red-800 bg-red-900"
                    :
                    "border-gray-700 bg-gray-800"
            }
            data_middle.push(data)
            index = index + 3
        }
    }
    if (data_bottom.length === 0) {
        let index = 1
        while (index <= 34) {
            const data = {
                num: index,
                class: index === 1 || index === 7 || index === 16 || index === 19 || index === 25 || index === 34 ?
                    "border-red-800 bg-red-900"
                    :
                    "border-gray-700 bg-gray-800"
            }
            data_bottom.push(data)
            index = index + 3
        }
    }

    const select_bet = (value_bet) => {
        click_bet(value_bet)
    }

    return (<div className="px-28 mt-14">
        <div class="grid grid-cols-12 gap-1">
            <div className="grid grid-rows-5">
                <div className="row-span-3 flex justify-end">
                    <button className="border-2 border-green-700 bg-green-800 w-20 h-full rounded-lg flex justify-center items-center">0</button>
                </div>
            </div>
            <div className="col-span-10">
                <div className="grid grid-cols-12 gap-1">
                    {data_top.map((item, i) =>
                        <button key={i} className={"border-2 w-20 h-20 rounded-lg flex justify-center items-center " + item.class} id={item.num} onClick={(e) => {select_bet(e.target.id)}}>{item.num}</button>
                    )}
                    {data_middle.map((item, i) =>
                        <button key={i} className={"border-2 w-20 h-20 rounded-lg flex justify-center items-center " + item.class} id={item.num} onClick={(e) => {select_bet(e.target.id)}}>{item.num}</button>
                    )}
                    {data_bottom.map((item, i) =>
                        <button key={i} className={"border-2 w-20 h-20 rounded-lg flex justify-center items-center " + item.class} id={item.num} onClick={(e) => {select_bet(e.target.id)}}>{item.num}</button>
                    )}
                </div>
                <div className="grid grid-cols-3 mt-1 gap-1">
                    <button className="border-2 border-green-700 bg-green-800 w-full h-20 rounded-lg flex justify-center items-center">โซน 1-12</button>
                    <button className="border-2 border-green-700 bg-green-800 w-full h-20 rounded-lg flex justify-center items-center">โซน 13-24</button>
                    <button className="border-2 border-green-700 bg-green-800 w-full h-20 rounded-lg flex justify-center items-center">โซน 25-36</button>
                </div>
                <div className="grid grid-cols-6 mt-1 gap-1">
                    <button className="border-2 border-green-700 bg-green-800 w-full h-20 rounded-lg flex justify-center items-center">ต่ำ 1-18</button>
                    <button className="border-2 border-green-700 bg-green-800 w-full h-20 rounded-lg flex justify-center items-center">คู่</button>
                    <button className="border-2 border-red-800 bg-red-900 w-full h-20 rounded-lg flex justify-center items-center">แดง</button>
                    <button className="border-2 border-gray-700 bg-gray-800 w-full h-20 rounded-lg flex justify-center items-center">ดำ</button>
                    <button className="border-2 border-green-700 bg-green-800 w-full h-20 rounded-lg flex justify-center items-center">สูง 19-36</button>
                    <button className="border-2 border-green-700 bg-green-800 w-full h-20 rounded-lg flex justify-center items-center">คี่</button>
                </div>
            </div>
            <div>
                <div class="grid grid-rows-3 grid-flow-col gap-1">
                    <button className="border-2 border-green-700 bg-green-800 w-20 h-20 rounded-lg flex justify-center items-center">2:1</button>
                    <button className="border-2 border-green-700 bg-green-800 w-20 h-20 rounded-lg flex justify-center items-center">2:1</button>
                    <button className="border-2 border-green-700 bg-green-800 w-20 h-20 rounded-lg flex justify-center items-center">2:1</button>
                </div>
            </div>
        </div>
    </div>)
}

export default Pad_Bet