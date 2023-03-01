import React, {useEffect, useState} from "react";
import {CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis} from "recharts";
import {UngrySmiley} from "src/Components/Smiles/UngrySmiley";
import {SadSmiley} from "src/Components/Smiles/SadSmiley";
import {NormalSmiley} from "src/Components/Smiles/NormalSmiley";
import {HappySmiley} from "src/Components/Smiles/HappySmiley";
import {SuperHappySmiley} from "src/Components/Smiles/SuperHappySmiley";

interface Props{
    data: object,
    questionKey: number
}

export const SmilesChart : React.FC<Props> = (props) => {

    const [parsedData, setParsedData] = useState<object[]>([])
    const [question, setQuestion] = useState<string>('')

    const parseQuestion = () => {
        const questionKey = props.questionKey
        let questionData : object[] = []
        let questionText = ''

        Object.entries(props.data).forEach(entry => {
            const [dateString, questions] = entry;
            const question = questions[questionKey]
            const i = {
                name: dateString,
                average: question.average,
                mode: question.mode
            }
            questionData = [...questionData, i]
            questionText = question.question
        });

        setParsedData(questionData)
        setQuestion(questionText)
    }

    const customAxisTick = ({x,y,payload} : {x: number, y: number, payload: any}) : any => {
        if(!payload) return(<></>)

        switch (payload.value){
            case 1:
                return (<UngrySmiley x={x} y={y} />)
            case 2:
                return (<SadSmiley x={x} y={y} />)
            case 3:
                return (<NormalSmiley x={x} y={y} />)
            case 4:
                return (<HappySmiley x={x} y={y} />)
            case 5:
                return (<SuperHappySmiley x={x} y={y} />)
        }
    };

    useEffect(() => {
        parseQuestion()
    }, [props.data])

    return (
        <>
            <h1>{question}</h1>

            <LineChart
                width={900}
                height={300}
                data={parsedData}
                margin={{ top: 5, right: 20, bottom: 5, left: 20 }}
            >
                <Line
                    type="monotone"
                    name={"Average"}
                    dataKey="average"
                    stroke="#8884d8"
                />
                <Line
                    type="monotone"
                    name={"Mode"}
                    dataKey="mode"
                    stroke="#ff0000"
                />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis
                    dataKey="name"
                />
                <YAxis
                    padding={{top:25}}
                    type={"number"}
                    domain={[0,'dataMax']}
                    tick={customAxisTick}
                />
                <Tooltip />
            </LineChart>
        </>
    )

}
