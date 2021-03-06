import React from 'react'
import ImageChipCursor from '../../../../chipCursor.png'

const BetBottom = ({ chooseBet, imageChip, statusRandom, dataBottom }) => {

    if (dataBottom.length === 0) {
        let index = 1
        while (index <= 34) {
            const dataLine = (index - 3) + "-" + (index - 2) + "-" + (index - 1) + "-" + index + "-" + (index + 1) + "-" + (index + 2)
            const dataSplit = (index - 3) + "-" + index
            const data = {
                num: index,
                class: index === 1 || index === 7 || index === 16 || index === 19 || index === 25 || index === 34 ?
                    "border-red-800 bg-red-900 "
                    :
                    "border-gray-700 bg-gray-800 ",
                statusBtn: false,
                valueStraight: index,
                valueStreet: index + "-" + (index + 1) + "-" + (index + 2),
                valueSplitB: (index - 1) + "-" + index,
                valueSplitL: dataSplit,
                valueLine: dataLine,
                [`disabled_${dataLine}`]: dataLine === "-2--1-0-1-2-3" ? true : false,

            }
            dataBottom.push(data)
            index = index + 3
        }
    }

    return (<>
        {dataBottom.map((item, i) =>
            <div key={i} style={{ outline: '0', cursor: 'url(' + ImageChipCursor + '), pointer' }} className={"border-2 lg:w-20 lg:h-20 sm:w-16 sm:h-16 rounded-lg flex justify-center items-center " + item.class}>{item.num}
                <div className="absolute">
                    <button style={{ outline: '0', cursor: 'url(' + ImageChipCursor + '), pointer' }} disabled={item[`icon${item.valueSplitL}`] || statusRandom === true ? true : false} className="box-content lg:h-10 sm:h-8 lg:w-10 sm:w-8 "
                        onClick={() => { chooseBet("SPLIT", item.valueSplitL) }}>
                        <div hidden={item[`icon${item.valueSplitL}`] ? false : true}>
                            <img src={imageChip} alt="imgChip" />
                        </div>
                    </button>
                    <button style={{ outline: '0', cursor: 'url(' + ImageChipCursor + '), pointer' }} disabled={item[`icon${item.valueStraight}`] || statusRandom === true ? true : false} className="box-content lg:h-10 sm:h-8 lg:w-10 sm:w-8 "
                        onClick={() => { chooseBet("STRAIGHTUP", item.valueStraight) }}>
                        <div hidden={item[`icon${item.valueStraight}`] === item.valueStraight ? false : true}>
                            <img src={imageChip} alt="imgChip" />
                        </div>
                    </button>
                    <button className="box-content lg:h-10 sm:h-8 lg:w-10 sm:w-8" style={{ outline: '0', cursor: 'url(' + ImageChipCursor + '), pointer' }} disabled>
                    </button>
                </div>
                <div className="absolute lg:mt-20 sm:mt-16">
                    <button style={{ outline: '0', cursor: 'url(' + ImageChipCursor + '), pointer' }} disabled={item[`icon${item.valueLine}`] === item.valueLine || item[`disabled_${item.valueLine}`] === true || statusRandom === true ? true : false} className="box-content lg:h-10 sm:h-8 lg:w-10 sm:w-8 "
                        onClick={() => { chooseBet("LINE", item.valueLine) }}>
                        <div hidden={item[`icon${item.valueLine}`] === item.valueLine ? false : true}>
                            <img src={imageChip} alt="imgChip" />
                        </div>
                    </button>
                    <button style={{ outline: '0', cursor: 'url(' + ImageChipCursor + '), pointer' }} disabled={item[`icon${item.valueStreet}`] || statusRandom === true ? true : false} className="box-content lg:h-10 sm:h-8 lg:w-10 sm:w-8 "
                        onClick={() => { chooseBet("STREET", item.valueStreet) }}>
                        <div hidden={item[`icon${item.valueStreet}`] ? false : true}>
                            <img src={imageChip} alt="imgChip" />
                        </div>
                    </button>
                    <button className="box-content lg:h-10 sm:h-8 lg:w-10 sm:w-8" style={{ outline: '0', cursor: 'url(' + ImageChipCursor + '), pointer' }} disabled>
                    </button>
                </div>
            </div>
        )}
    </>)
}

export default BetBottom