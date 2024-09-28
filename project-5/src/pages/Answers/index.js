import {useEffect, useState} from"react"
import { getAnswersByUserId } from "../../services/answerSevies";
import { getListTopic } from "../../services/topicServies";
import "./answer.scss"
import { Link } from "react-router-dom";
function Answers(){
    const [dataAnswer,setDataAnswer] = useState([]);
   useEffect(()=>{
    const fetchApi = async () =>{
        const AnswerByUserId = await getAnswersByUserId();
        const topics = await getListTopic();
        console.log(AnswerByUserId);
        console.log(topics);
        
    let result = [];
    for(let i=0; i<AnswerByUserId.length; i++){
        result.push({
            ...topics.find(item => item.id == AnswerByUserId[i].topicsId),
            ...AnswerByUserId[i]
        })
    }
    console.log(result);
    setDataAnswer(result);
    };
    fetchApi();

   },[])
    return (
        <>
        <div className="container">
                <h3>Danh sách bài đã luyện tập </h3>
                <table className="table">
                    <thead className="table__head">
                        <tr >
                            <th>ID</th>
                            <th >Tên chủ đề </th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody >
                      {dataAnswer.map(item => (
                        <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td><Link to ={`/result/${item.id}`} ><button>Xem Chi Tiết</button></Link></td>

                        
                        </tr>
                      ))}  
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default Answers