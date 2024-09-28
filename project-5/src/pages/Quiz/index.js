import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { getTopic } from "../../services/topicServies";

import { getCookie } from "../../helpers/cookie";
import {createAnswers } from "../../services/quizSevies";
import { getListQuestion } from "../../services/questionSevies";

function Quiz() {
    const params = useParams();
    const [dataTopic, setDataTopic] = useState();
    const [dataQuestion, setDataQuestion] = useState([]);
    const userId = getCookie("id");
    const navigate = useNavigate();
    useEffect(() => {
        const fecthApi = async () => {
            const response = await getTopic(params.id);
            setDataTopic(response);

        }
        fecthApi();
    }, []);
    useEffect(() => {
        const fecthApi = async () => {
            const response = await getListQuestion(params.id);
            setDataQuestion(response);

        }
        fecthApi();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        let selectedAnswers = [];
        for (let i = 0; i < e.target.elements.length; i++) {
            // console.log(e.target.elements[i].checked);
            if (e.target.elements[i].checked) {
                const name = e.target.elements[i].name;
                const value = e.target.elements[i].value;
                selectedAnswers.push({
                    questionId: parseInt(name),
                    answer: parseInt(value)
                })
            }
        }
        console.log(selectedAnswers);
        let option = {
            userId: parseInt(userId),
            topicsId: parseInt(params.id),
            answers: selectedAnswers
        }
        console.log(option);
        const response = await createAnswers(option);
        if (response) {
            navigate(`/result/${response.id}`);
        }


    }
    return (
        <>
            <h1>Bài Quiz chủ đề : {dataTopic && (<>{dataTopic.name}</>)} </h1>
            <div className="form-quiz">
                <form onSubmit={handleSubmit}>
                    {dataQuestion.map((item, index) => (
                        <div className="" key={item.id}>
                            <p>Câu {index + 1}: {item.question}</p>
                            {item.answers.map((itemAns, indexAns) => (
                                <div className="form-quiz__answer" key={indexAns}>
                                    <input type="radio" name={item.id} value={indexAns} id={`quiz${item.dataQuestion}${indexAns}`} required />
                                    <label htmlFor={`quiz${item.dataQuestion}${indexAns}`} >{itemAns}</label>

                                </div>
                            ))}
                        </div>
                    ))}
                    <button type="submit" >Nop bai</button>

                </form>
            </div>
        </>
    )
}
export default Quiz