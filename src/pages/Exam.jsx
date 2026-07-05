import { useState } from "react";
import Performance from "./Performance";

function Exam({ setTab }) {
    const [examTab, setExamTab] = useState("performance");
    const [screen, setScreen] = useState("main");

    if (screen === "performance") {
        return <Performance setScreen={setScreen} 
                            setTab={setTab}
        />;
    }
    
  return (
    <>
    <div        
        style={{
            position: "fixed",
            bottom: "0",
            left: "0",
            width: "100%",
            backgroundColor: "#ffffff",
            borderTop: "2px solid #b9b9b9",

            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",

            padding: "12px 8px",
            boxSizing: "border-box",
        }}
        >
        <button
            onClick={() => setTab("timetable")}
            style={{
            flex: 1,
            maxWidth: "90px",
            fontWeight: "449",

        margin: "0 4px",

        padding: "10px",

        borderRadius: "12px",
        border: "2px solid #000",

        backgroundColor: "#fff",

        fontSize: "14px",
        }}
        >
            시간표
        </button>

        <button

            style={{
            flex: 1,
            maxWidth: "90px",
            fontWeight: "449",

        margin: "0 4px",

        padding: "10px",

        borderRadius: "12px",
        border: "2px solid #000",

        backgroundColor: "#fff",

        fontSize: "14px",
            }}
        >
            시험
        </button>

        <button
            onClick={() => setTab("post")}
            style={{
            padding: "12.5px",
        width: "82px",

        borderRadius: "12px",
        border: "2px solid #000000",

        backgroundColor: "#ffffff",

        fontSize: "12.5px",
        fontWeight: "449",
        minWidth: "90px",

        lineHeight: "1.2",

        cursor: "pointer",
            }}
        >
            익명 게시판
        </button>

        <button
            onClick={() => setTab("vote")}
            style={{
            flex: 1,
            maxWidth: "90px",
            fontWeight: "449",

        margin: "0 4px",

        padding: "10px",

        borderRadius: "12px",
        border: "2px solid #000",

        backgroundColor: "#fff",

        fontSize: "14px",
            }}
        >
            투표
        </button>
        </div>

    <div
      style={{
        minHeight: "100vh",
        padding: "16px",
        paddingBottom: "90px",
        boxSizing: "border-box",
        maxWidth: "480px",
        margin: "0 auto",
      }}
    >
      <h2
        style={{
          fontSize: "32px",
          fontWeight: "700",
          marginBottom: "20px",
        }}
      >
        시험
      </h2>

        <div
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                marginBottom: "20px",
            }}
            >
            <button
            onClick={() => setScreen("performance")}
            style={{
                padding: "10px 100px",
                borderRadius: "12px",
                border: "2px solid #000",
                backgroundColor: "#fff",
                fontSize: "20px",
                cursor: "pointer",
            }}
            >수행평가</button>

            <button
            onClick={() => setExamTab("written")}
            style={{
                padding: "10px 100px",
                borderRadius: "12px",
                border: "2px solid #000",
                backgroundColor: "#fff",
                fontSize: "20px",
                cursor: "pointer",
            }}
            >지필평가</button>
            </div>


    </div>
    </>
  );
}

export default Exam;