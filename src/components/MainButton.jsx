function MainButton({ text, onClick }) {
    return (
        <button
        style={{
            width: "220px",
            height: "65px",
            borderRadius: "20px",
            border: "3px solid #000",
            backgroundColor: "#fff",
            fontSize: "24px",
            fontWeight: "700",
            cursor: "pointer",
            marginBottom: "20px",
        }}
        >
        {text}
        </button>
    );
}
export default MainButton;