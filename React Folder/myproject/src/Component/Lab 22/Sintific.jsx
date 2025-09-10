import React from "react";

function Sintific() {
    const [input, setInput] = React.useState("");

    let expression = input
        .replace(/π/g, "Math.PI")
        .replace(/sin/g, "Math.sin")
        .replace(/cos/g, "Math.cos")
        .replace(/tan/g, "Math.tan")
        .replace(/log/g, "Math.log10")
        .replace(/ln/g, "Math.log")
        .replace(/sqrt/g, "Math.sqrt")
        .replace(/exp/g, "Math.exp")
        .replace(/pow/g, "Math.pow")
        .replace(/(\d+)\^(\d+)/g, "Math.pow($1,$2)");
    setInput(eval(expression).toString());
    

        const handleClick = (value) => {
            if (value === "AC") {
                setInput("");
            } else if (value === "->") {
                setInput(input.slice(0, -1));
            } else if (value === "=") {
                try {
                    const result = safeEval(input);
                    setInput(result.toString());
                } catch (error) {
                    setInput("Error");
                }
            } else {
                setInput(input + value);
            }
        };

        // Button style for consistency
        const btnStyle = {
            width: "50px",
            height: "50px",
            margin: "3px",
            fontSize: "1rem",
            textAlign: "center",
            borderRadius: "5px",
        };

        return (
            <>
                <table
                    style={{
                        margin: "20px auto",
                        borderCollapse: "collapse",
                        padding: "10px",
                        userSelect: "none",

                    }}
                >
                    <tbody>
                        <tr>
                            <td colSpan="6">
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
                                        color: "#333",
                                    }}
                                />
                            </td>
                        </tr>

                        {/* Scientific function buttons */}
                        <tr>
                            <td>
                                <button style={btnStyle} onClick={() => handleClick("sin(")}>
                                    sin
                                </button>
                            </td>
                            <td>
                                <button style={btnStyle} onClick={() => handleClick("cos(")}>
                                    cos
                                </button>
                            </td>
                            <td>
                                <button style={btnStyle} onClick={() => handleClick("tan(")}>
                                    tan
                                </button>
                            </td>
                            <td>
                                <button style={btnStyle} onClick={() => handleClick("log(")}>
                                    log
                                </button>
                            </td>
                            <td>
                                <button style={btnStyle} onClick={() => handleClick("ln(")}>
                                    ln
                                </button>
                            </td>
                            <td>
                                <button style={btnStyle} onClick={() => handleClick("sqrt(")}>
                                    √
                                </button>
                            </td>
                        </tr>

                        {/* Numbers and basic operators */}
                        <tr>
                            <td>
                                <button style={btnStyle} onClick={() => handleClick("7")}>
                                    7
                                </button>
                            </td>
                            <td>
                                <button style={btnStyle} onClick={() => handleClick("8")}>
                                    8
                                </button>
                            </td>
                            <td>
                                <button style={btnStyle} onClick={() => handleClick("9")}>
                                    9
                                </button>
                            </td>
                            <td>
                                <button style={btnStyle} onClick={() => handleClick("AC")}>
                                    AC
                                </button>
                            </td>
                            <td>
                                <button style={btnStyle} onClick={() => handleClick("(")}>
                                    (
                                </button>
                            </td>
                            <td>
                                <button style={btnStyle} onClick={() => handleClick(")")}>
                                    )
                                </button>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <button style={btnStyle} onClick={() => handleClick("4")}>
                                    4
                                </button>
                            </td>
                            <td>
                                <button style={btnStyle} onClick={() => handleClick("5")}>
                                    5
                                </button>
                            </td>
                            <td>
                                <button style={btnStyle} onClick={() => handleClick("6")}>
                                    6
                                </button>
                            </td>
                            <td>
                                <button style={btnStyle} onClick={() => handleClick("->")}>
                                    {"←"}
                                </button>
                            </td>
                            <td>
                                <button style={btnStyle} onClick={() => handleClick("^")}>
                                    pow
                                </button>
                            </td>
                            <td>
                                <button style={btnStyle} onClick={() => handleClick("exp(")}>
                                    exp
                                </button>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <button style={btnStyle} onClick={() => handleClick("1")}>
                                    1
                                </button>
                            </td>
                            <td>
                                <button style={btnStyle} onClick={() => handleClick("2")}>
                                    2
                                </button>
                            </td>
                            <td>
                                <button style={btnStyle} onClick={() => handleClick("3")}>
                                    3
                                </button>
                            </td>
                            <td>
                                <button style={btnStyle} onClick={() => handleClick("*")}>
                                    *
                                </button>
                            </td>
                            <td>
                                <button style={btnStyle} onClick={() => handleClick("π")}>
                                    π
                                </button>
                            </td>
                            <td>
                                <button style={btnStyle} onClick={() => handleClick("/")}>
                                    /
                                </button>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <button style={btnStyle} onClick={() => handleClick("0")}>
                                    0
                                </button>
                            </td>
                            <td>
                                <button style={btnStyle} onClick={() => handleClick(".")}>
                                    .
                                </button>
                            </td>
                            <td>
                                <button style={btnStyle} onClick={() => handleClick("-")}>
                                    -
                                </button>
                            </td>
                            <td>
                                <button style={btnStyle} onClick={() => handleClick("+")}>
                                    +
                                </button>
                            </td>
                            <td colSpan="2">
                                <button
                                    style={{ ...btnStyle, width: "100%" }}
                                    onClick={() => handleClick("=")}
                                >
                                    =
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </>
        );
    }


export default Sintific
