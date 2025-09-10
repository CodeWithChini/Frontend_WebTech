import React from "react";

function Calculator() {
  const [input, setInput] = React.useState("");

  const handleClick = (value) => {
    if (value === "AC") {
      setInput("");
    } else if (value === "->") {
      setInput(input.slice(0, -1));
    } else if (value === "=") {
      try {
        const result = eval(input);
        setInput(result.toString());
      } catch (error) {
        setInput("Error");
      }
    } else {
      setInput(input + value);
    }
  };

  return (
    <>
      <table style={{ margin: "20px auto", borderCollapse: "collapse",  padding: "10px" }}>
        <tbody>
          <tr>
            <td colSpan="4">
              <input
                type="text"
                value={input}
                readOnly
                style={{
                  width: "100%",
                  height: "40px",
                  fontSize: "1.5rem",
                  textAlign: "right",
                  paddingRight: "10px",
                    boxSizing: "border-box",
                    borderRadius: "10px",
                    backgroundColor: "#f0f0f0",
                    border: "1px solid gray",
                }}
              />
            </td>
          </tr>
                  <tr style={{
                      width: "50px",
                      height: "50px",
                      margin: "5px",
                  }}>
            <td>
              <button onClick={() => handleClick("7")}>7</button>
            </td>
            <td>
              <button onClick={() => handleClick("8")}>8</button>
            </td>
            <td>
              <button onClick={() => handleClick("9")}>9</button>
            </td>
            <td>
              <button onClick={() => handleClick("AC")}>AC</button>
            </td>
          </tr>
          <tr style={{
                      width: "50px",
                      height: "50px",
                  }}>
            <td>
              <button onClick={() => handleClick("4")}>4</button>
            </td>
            <td>
              <button onClick={() => handleClick("5")}>5</button>
            </td>
            <td>
              <button onClick={() => handleClick("6")}>6</button>
            </td>
            <td>
              <button onClick={() => handleClick("->")}>{"←"}</button>
            </td>
          </tr>
          <tr style={{
                      width: "50px",
                      height: "50px",
                  }}>
            <td>
              <button onClick={() => handleClick("1")}>1</button>
            </td>
            <td>
              <button onClick={() => handleClick("2")}>2</button>
            </td>
            <td>
              <button onClick={() => handleClick("3")}>3</button>
            </td>
            <td>
              <button onClick={() => handleClick("*")}>*</button>
            </td>
          </tr>
          <tr style={{
                      width: "50px",
                      height: "50px",
                  }}>
            <td>
              <button onClick={() => handleClick("0")}>0</button>
            </td>
            <td>
              <button onClick={() => handleClick("-")}>-</button>
            </td>
            <td>
              <button onClick={() => handleClick("+")}>+</button>
            </td>
            <td>
              <button onClick={() => handleClick("=")}>=</button>
            </td>
          </tr>
          <tr>
            <td colSpan="4">
              <button
                style={{ width: "95%", margin: "5px" }}
                onClick={() => handleClick("/")}
              >
                /
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Calculator;
