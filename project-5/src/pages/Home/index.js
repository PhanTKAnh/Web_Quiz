import { getCookie } from "../../helpers/cookie";
import "./home.scss"
import { useState } from "react"
function Home() {
    const [activeTab, setActive] = useState("topic");
    const token = getCookie("token");
    return (
        <>
           {token ? (<> <p>Chức mừng bạn đã đăng nhập thành công</p></>):(<></>)}
            <div className="tabs" >
                <div className={`tabs__items ${activeTab === "topic" ? "tabs__items--active" : ""}` } onClick={() => setActive("topic")}>
                    Danh sách chủ để ôn luyện
                </div>
                <div className={`tabs__items ${activeTab === "done" ? "tabs__items--active" : ""}`} onClick={() => setActive("done")} >
                    Danh sách bài đã luyện tập
                </div>
            </div>
            <div className="tabs__content">
                {activeTab === 'topic' && (
                    <>
                        <p>
                            Website trắc nghiệm online lập trình Frontend là một nền tảng lập trực tuyến cho phép các lập trình viên Frontend
                            thực hiện các bài kiểm tra, trắc nghiệm , dành giả và đo dạc kiến thức của mình trong lĩnh vực Frontend.
                        </p><p>
                            Đối với các lập trình viên Frontend website trắc nghiệm online cung cấp các bài kiểm tra để giúp họ nâng cao kỹ năng của mình trong các công nghệ và công cụ lập trình như HTML, CSS, JavaScript, jQuery, Bootstrap, Angular, React, Vue,...
                        </p></>
                )}
                 {activeTab === 'done' && (
                    <>
                        <p>
                            Website trắc nghiệm online lập trình Frontend là một nền tảng lập trực tuyến cho phép các lập trình viên Frontend
                            thực hiện các bài kiểm tra, trắc nghiệm , dành giả và đo dạc kiến thức của mình trong lĩnh vực Frontend.
                        </p></>
                )}
            </div>
        </>
    )
}
export default Home