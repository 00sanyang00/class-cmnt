import { useState } from "react";

function Performance({ setScreen, setTab }) {
    const [isAdding, setIsAdding] = useState(false);
    const [subject, setSubject] = useState("");
    const [date, setDate] = useState("");
    const [content, setContent] = useState("");
    const [range, setRange] = useState("");
    const [performances, setPerformances] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [editingIndex, setEditingIndex] = useState(null);
    
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
            onClick={() => setScreen("main")}
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
      
      <button
        onClick={() => setScreen("main")}
        style={{
            width: "80px",
                padding: "8px",
                borderRadius: "12px",
                border: "2px solid #000000",
                backgroundColor: "#fff",
                cursor: "pointer",
                fontSize: "20px",
                
                position: "absolute",
                left: "10px",
                top: "17px",
        }}
        >
        ←
        </button>

      <h2
        style={{
          fontSize: "32px",
          fontWeight: "700",
          marginBottom: "20px",
        }}
      >
        수행평가
      </h2>

            {isAdding && (
        <div
            style={{
            marginTop: "20px",
            padding: "16px",
            border: "2px solid #b9b9b9",
            borderRadius: "12px",
            }}
        >
            <input
            placeholder="과목"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            style={{
                width: "100%",
                marginBottom: "10px",
                padding: "10px",
                boxSizing: "border-box",
            }}
            />

            <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            style={{
                width: "100%",
                marginBottom: "10px",
                padding: "10px",
                boxSizing: "border-box",
            }}
            />

            <input
            placeholder="내용"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            style={{
                width: "100%",
                marginBottom: "10px",
                padding: "10px",
                boxSizing: "border-box",
            }}
            />

            <textarea
            placeholder="범위"
            value={range}
            onChange={(e) => setRange(e.target.value)}
            style={{
                width: "100%",
                height: "80px",
                padding: "10px",
                boxSizing: "border-box",
                resize: "none",
            }}
            />
            <div
            style={{
                display: "flex",
                gap: "8px",
                marginTop: "12px",
            }}
            >
            <button
                onClick={() => {

            const newPerformance = {
              subject,
              date,
              content,
              range,
            };

            if (editingIndex !== null) {
              const updated = [...performances];

              updated[editingIndex] = newPerformance;

              setPerformances(updated);

              setEditingIndex(null);
            } else {
              setPerformances([
                ...performances,
                newPerformance,
              ]);
            }

            setSubject("");
            setDate("");
            setContent("");
            setRange("");

            setIsAdding(false);
            }}
                style={{
                flex: 1,
                padding: "10px",

                borderRadius: "12px",
                border: "2px solid #000",

                backgroundColor: "#fff",

                fontSize: "14px",
                cursor: "pointer",
                }}
            >
                저장
            </button>

            <button
                onClick={() => {
                setIsAdding(false);

                setSubject("");
                setDate("");
                setContent("");
                setRange("");
                }}
                style={{
                flex: 1,
                padding: "10px",

                borderRadius: "12px",
                border: "2px solid #000",

                backgroundColor: "#fff",

                fontSize: "14px",
                cursor: "pointer",
                }}
            >
                취소
            </button>
            </div>

        </div>
        
        )}
<div
  style={{
    width: "100%",
    display: "flex",
    flexDirection: "column",
  }}
>
                {performances.map((item, index) => (
        <div
  key={index}
    style={{
  width: "100%",
  display: "block",
  minHeight: "120px",

  border: "2px solid #b9b9b9",
  borderRadius: "12px",

  padding: "16px",
  marginTop: "12px",

  boxSizing: "border-box",
  textAlign: "left",

  position: "relative",
}}
>
  <button
  onClick={() =>
    setSelectedIndex(
      selectedIndex === index
        ? null
        : index
    )
  }
  style={{
    position: "absolute",
    top: "8px",
    right: "8px",

    border: "none",
    backgroundColor: "transparent",

    fontSize: "20px",
    cursor: "pointer",
  }}
>
  ⋮
</button>
  {selectedIndex === index && (
  <div
    style={{
      position: "absolute",
      top: "35px",
      right: "8px",

      backgroundColor: "#fff",
      border: "2px solid #b9b9b9",
      borderRadius: "12px",

      overflow: "hidden",
    }}
  >
    <button
      onClick={() => {
    setSubject(item.subject);
    setDate(item.date);
    setContent(item.content);
    setRange(item.range);

    setEditingIndex(index);
    setIsAdding(true);
    setSelectedIndex(null);
  }}
      style={{
        display: "block",
        width: "100%",
        padding: "10px",
        border: "none",
        backgroundColor: "#fff",
        cursor: "pointer",
      }}
    >
      수정
    </button>

    <button
      onClick={() => {
        setPerformances(
          performances.filter(
            (_, i) => i !== index
          )
        );

        setSelectedIndex(null);
      }}
      style={{
        display: "block",
        width: "100%",
        padding: "10px",
        border: "none",
        backgroundColor: "#fff",
        cursor: "pointer",
      }}
    >
      삭제
    </button>
  </div>
)}
  <div
    style={{
      fontSize: "20px",
      fontWeight: "700",
      marginBottom: "10px",
    }}
  >
    {item.subject}
  </div>

  <div
    style={{
      marginBottom: "8px",
    }}
  >
    {item.content}
  </div>

  <div
    style={{
      marginBottom: "8px",
      fontSize: "14px",
    }}
  >
    {item.date}
  </div>

  <div>
    범위 : {item.range}
  </div>
</div>
        ))}
        </div>
        {!isAdding && (
        <button
            onClick={() => setIsAdding(true)}
            style={{
                position: "fixed",

                right: "20px",
                bottom: "80px",

                width: "56px",
                height: "56px",

                borderRadius: "30%",

                border: "2px solid #000",
                backgroundColor: "#fff",

                fontSize: "28px",

                cursor: "pointer",
                        }}
            >
            +
            </button>
        )}
    </div>

    </>
  );
}

export default Performance;