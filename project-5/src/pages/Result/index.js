import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import { getAnswers } from "../../services/answerSevies";
import { getListQuestion } from "../../services/questionSevies";
import "./result.scss"
import { getTopic } from "../../services/topicServies";

function Result() {
    const params = useParams();
    const [dataResult, setDataResult] = useState([]);
    const [dataTopic,setDataTopic] = useState("");
    const [totalCount, setTotalCount] = useState(0);
   

    useEffect(() => {
        const fetchApi = async () => {
            const dataAnswers = await getAnswers(params.id);
            console.log(dataAnswers);
            const dataQuestion = await getListQuestion(dataAnswers.topicsId);
            console.log(dataQuestion);
            const dataTopic= await getTopic(dataAnswers.topicsId);
            setDataTopic(dataTopic);
            let resultFinal = [];
            for (let i = 0; i < dataQuestion.length; i++) {
               
                resultFinal.push({
                    ...dataQuestion[i],
                    ...dataAnswers.answers.find(item => (item.questionId == dataQuestion[i].id))
                })
            };
            setTotalCount( dataQuestion.length)
            console.log(resultFinal);
            setDataResult(resultFinal);
        };

        fetchApi();
    }, []);
    return (
        <>
            <h1>Kết quả chủ đề :  {dataTopic && (<>{dataTopic.name}</>)}</h1>
            <div>Tổng Số Câu: {totalCount}</div>
            <form >
                {dataResult && (dataResult.map((item, index) => (
                    <div key={item.id}>
                        <p>Câu {index + 1}: {item.question}
                            {item.answer == item.correctAnswer ? (
                                <span className="result__item--true" > Đúng </span>
                            ) : (
                                <span className="result__item--false"> Sai </span>)}
                        </p>
                        {item.answers.map((itemAns, indexAns) => {
                            let checked = false;
                            let className = '';
                            if (item.answer == indexAns) {
                                checked = true;
                                className = "result__item--selected"
                            }
                            if (item.correctAnswer == indexAns) {
                                className = "result__item--result"
                            }
                            return (
                                <div key={indexAns}>
                                    <input type="radio" checked={checked} disabled />
                                    <label className={className}> {itemAns}</label>
                                </div>
                            )
                        })}

                    </div>


                )))}
             
            </form>
            <Link to={`/quiz/${dataTopic.id}`}>  <button>Làm lại</button></Link>
        </>
    )
}
export default Result