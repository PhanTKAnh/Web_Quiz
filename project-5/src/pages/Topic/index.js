
import { getListTopic } from "../../services/topicServies";
import "./topic.scss"
import {useEffect, useState} from "react"
import {Link} from"react-router-dom"


function Topic() {
    const [dataTopic,setDataTopic] = useState([]);

    useEffect(()=> {
        const fetchApi = async() => {
            const response = await getListTopic();
            setDataTopic(response);
        }
        fetchApi();
    },[])
    return (
        <>
            <div className="container">
                <h3>Danh sách chủ đề ôn luyện </h3>
                <table className="table">
                    <thead className="table__head">
                        <tr >
                            <th>ID</th>
                            <th >Tên chủ đề </th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody >
                      {dataTopic.map(item => (
                        <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td><Link to ={`/quiz/${item.id}`} ><button>Làm bài</button></Link></td>

                        
                        </tr>
                      ))}  
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default Topic 