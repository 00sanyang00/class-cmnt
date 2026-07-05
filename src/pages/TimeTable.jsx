import {useState, useEffect} from "react";
import Exam from "./Exam";
import Vote from "./Vote";
import Post from "./Post";

function TimeTable( { className, classCode } ) {
    const days = ["월", "화", "수", "목", "금"];
    const periods = [1, 2, 3, 4, 5, 6, 7];
    const [isEditing, setIsEditing] = useState(false);
    const [subjects, setSubjects] = useState({});
    const [savedSubjects, setSavedSubjects] = useState({});
    const [memo, setMemo] = useState("");
    const [tab, setTab] = useState("timetable");

    useEffect(() => {
    const savedSubjects =
        localStorage.getItem(
            `subjects-${classCode}`
        );

    if (savedSubjects) {
        setSubjects(
            JSON.parse(savedSubjects)
        );
    }
}, [classCode]);

useEffect(() => {
    const savedMemo =
        localStorage.getItem(
            `memo-${classCode}`
        );

    if (savedMemo) {
        setMemo(savedMemo);
    }
}, [classCode]);

        if (tab === "exam") {
    return <Exam setTab={setTab} />;
    }
    
    if (tab === "vote") {
    return <Vote setTab={setTab} />;
    }

    if (tab === "post") {
    return <Post setTab={setTab} />;
    }

    return(
        

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
                >시간표</h2>

        <div
            style={{
                display: "flex",
                justifyContent: "flex-end",
                marginBottom: "8px",
            }}
            >

            {!isEditing ? (
                <button
                onClick={() => {
                    setSavedSubjects(subjects);
                    setIsEditing(true)
                }}
                style={{
                    padding: "8px 14px",
                    borderRadius: "12px",
                    border: "2px solid #000",
                    backgroundColor: "#fff",
                }}
                >
                수정
                </button>
            ) : (
                <div
                style={{
                    display: "flex",
                    gap: "8px",
                }}
                >
                <button
                    onClick={() => {
                    localStorage.setItem(
                        `subjects-${classCode}`,
                        JSON.stringify(subjects)
                    );

                    setIsEditing(false);
                }}
                    style={{
                    padding: "8px 14px",
                    borderRadius: "12px",
                    border: "2px solid #000",
                    backgroundColor: "#fff",
                }}
                >
                    저장
                </button>

                <button
                    onClick={() =>{
                    setSubjects(savedSubjects);
                    setIsEditing(false)
                    }}
                    style={{
                    padding: "8px 14px",
                    borderRadius: "12px",
                    border: "2px solid #000",
                    backgroundColor: "#fff",
                }}
                >
                    취소
                </button>
                </div>
            )}
            </div>

<div
    style={{
        marginTop: "24px",
        overflowX: "auto",
    }}
>

<div
  style={{
    marginTop: "8px",
    justifyContent: "center",
    marginLeft: "-15px",
    marginTop: "12px",

    display: "grid",

    gridTemplateColumns:
      "42px repeat(5, 42px)",

    gap: "5px",
    textAlign: "center",
    alignItems: "center",

  }}
>


    
    <div></div>
    

    {days.map((day) => (
    <div
        key={day}
        style={{
        fontWeight: "700",
        fontSize: "14px",
        }}
    >
        {day}
    </div>
    ))}

    {periods.map((period) => (
        <>
          <div key={period}
            style={{
                fontSize: "13px",
            }}
            >
             {period} </div>

            {days.map((day) => (
                <div
  key={`${day}-${period}`}
  style={{
    border: "1px solid #b9b9b9",
    borderRadius: "8px",

    width: "40px",
    minHeight: "36px",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }}
>
  {isEditing ? (
    <input
      value={
        subjects[
          `${day}-${period}`
        ] || ""
      }
      onChange={(e) =>
        setSubjects({
          ...subjects,
          [`${day}-${period}`]:
            e.target.value,
        })
      }
      style={{
        width: "90%",
        border: "none",
        textAlign: "center",
        fontSize: "12px",
        outline: "none",
      }}
    />
  ) : (
  <div
    style={{
      width: "100%",
      fontSize: "12px",
      lineHeight: "1.15",

      wordBreak: "keep-all",
      overflowWrap: "break-word",

      textAlign: "center",

      padding: "2px",
      boxSizing: "border-box",

      overflow: "hidden",
    }}
  >
    {subjects[`${day}-${period}`]}
  </div>
)}

</div>
            ))}
        </>
    ))}

</div>


<div
  style={{
    marginTop: "18px",
    marginBottom: "20px",
  }}
>

  <textarea
  placeholder="메모장"

  value={memo}

  onChange={(e) => {
    setMemo(e.target.value);

    localStorage.setItem(
      `memo-${classCode}`,
      e.target.value
    );
  }}

  style={{
      width: "100%",
      height: "110px",

      borderRadius: "12px",
      border: "2px solid #b9b9b9",

      padding: "12px",
      fontSize: "14px",

      boxSizing: "border-box",

      resize: "none",

      outline: "none",
    }}
  />
</div>

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
        onClick={() => setTab("exam")}
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

        </div>
    </div>


    );

}

export default TimeTable;