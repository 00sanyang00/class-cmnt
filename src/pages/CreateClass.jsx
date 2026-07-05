import { useState } from "react";
import TimeTable from "./TimeTable";


function CreateClass({ onBack }) {
    const [className, setClassName] = useState("");
    const [classCode, setClassCode] = useState("");
    const [goToTimeTable, setGoToTimeTable] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    function createClass(){

            if(
                className.trim() === "" ||
                classCode.trim() === ""
            ) {
                setErrorMessage("반 이름과 반 코드를 모두 입력해주세요.");
                return;
            }

        const savedClass = localStorage.getItem(classCode);

        if (savedClass) {
            const parsedClass = JSON.parse(savedClass);

            if (
                parsedClass.name === className && 
                parsedClass.code === classCode
            ) {
                setErrorMessage("이미 존재하는 반입니다.");
                return;
            }
        }
        setErrorMessage("");

        const classData = {
            name: className,
            code: classCode,
        };

    localStorage.setItem(classCode, JSON.stringify(classData)
    );

    setGoToTimeTable(true);
    }

    if (goToTimeTable) {
        return (
            <TimeTable
            className={className}
            classCode={classCode}
            />
        );
    }

    return(
        <div
        style={{
            minHeight: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            paddingTop: "120px",
        }}
        >

        <div
        style={{
            width: "300px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
        }}
        >

        <button
            onClick={onBack}
            style={{
                width: "80px",
                padding: "10px",
                borderRadius: "12px",
                border: "2px solid #000000",
                backgroundColor: "#fff",
                cursor: "pointer",
                fontSize: "16px",
                
                position: "absolute",
                left: "20px",
                top: "20px",
            }}
        >
            ←
        </button>

        <h1
            style={{
            fontSize: "52px",
            fontWeight: "700",
            marginBottom: "30px",
            }}
            >우리 반</h1>

            <h2
            style={{
            fontSize: "20px",
            fontWeight: "500",
            marginBottom: "60px",
            }}
            >만들기</h2>
        
        {errorMessage && (
                <p
                    style={{
                        color: "#ff0000",
                        fontSize: "14px",
                        marginTop: "-42px",
                        marginBottom: "0px",

                    }}
                    >
                    {errorMessage}
                </p>
            )}

        <input
        placeholder="반 이름"
        value={className}
        onChange={(e) => setClassName(e.target.value)}
        style={{
            padding: "14px",
            borderRadius: "12px",
            border: "2px solid #000000",
            fontSize: "16px",
        }}
        />

        <input
        placeholder="반 코드"
        value={classCode}
        onChange={(e) => setClassCode(e.target.value)}
        style={{
            padding: "14px",
            borderRadius: "12px",
            border: "2px solid #000000",
            fontSize: "16px",
        }}
        />

            

        <button
        onClick={createClass}
        style={{
            padding: "14px",
            borderRadius: "12px",
            border: "2px solid #000000",
            backgroundColor: "#fff",
            fontSize: "16px",
        }}
        >
            확인
        </button>
        </div>

        
    </div>
    );
}

export default CreateClass;