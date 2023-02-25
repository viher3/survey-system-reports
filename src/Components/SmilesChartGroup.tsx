import React, {useEffect, useState} from "react";
import {SmilesChart} from "src/Components/SmilesChart";

interface Props {
    data: object
}

export const SmilesChartGroup: React.FC<Props> = (props) => {

    const [questionIds, setQuestionIds] = useState<string[]>([])

    const countQuestions = () => {
        const firstDayData = Object.values(props.data)[0]
        setQuestionIds(Object.keys(firstDayData))
    }

    useEffect(() => {
        countQuestions()
    }, [])

    return (
        <>
            {
                questionIds.map(questionId => {
                    return (
                        <SmilesChart
                            key={parseInt(questionId)}
                            data={props.data}
                            questionKey={parseInt(questionId)}
                        />
                    )
                })
            }
        </>
    )

}
