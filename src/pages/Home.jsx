import { useState } from "react";
import MainButton from "../components/MainButton";
import JoinClass from"./JoinClass";
import CreateClass from"./CreateClass";

function Home() {
    const [showJoinClass, setShowJoinClass] = useState(false);
    const [showCreateClass, setShowCreateClass] = useState(false);

        if (showJoinClass) {
            return (
            <JoinClass 
            onBack={()=>
                setShowJoinClass(false)
            }
            />
        );
        }

        if (showCreateClass) {
            return (
            <CreateClass 
            onBack={()=>
                setShowCreateClass(false)
            }
            />
        );
        }

    return (
        <div
        style={{
            minHeight: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#ffffff",
        }}
    >
        <div
            style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "-180px",
            }}
        >
        <h1
            style={{
            fontSize: "52px",
            fontWeight: "700",
            marginBottom: "80px",
            position: "absolute",
            top: "50px",
            }}
            >우리 반</h1>
        <div>
            <div
            onClick={() => setShowJoinClass(true)} 
            >

            <MainButton text="입장하기" />
            </div>
            
            <div
            onClick={() => setShowCreateClass(true)}
            >
            <MainButton text="반 만들기" />
            </div>
        </div>
    </div>
</div>
    );
}

export default Home;