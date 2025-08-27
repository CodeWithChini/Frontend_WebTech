//event handling

function ClickMehod() {
    const handleClick = () => {
        alert("Button clicked!");
    };

    return (
        <>
        <h3>Event Handling : on Click</h3>
        <button onClick={handleClick}>Click Me!</button>
        </>
    );
}

function ClickMehod1() {
    const handleMouseOver = () => {
        alert("Mouse is over the button!");
    };
    return (
        <>
        <h3>Event Handling : Mouse Over</h3>
        <button onMouseOver={handleMouseOver}>Hover Over Me!</button>
        </>
    );
}

function ClickMehod2() {
    const handleMouseEnter = () => {
        alert("Mouse is Eneter the button!");
    };
    return (
        <>
            <h3>Event Handling : Mouse Enter</h3>
            <button onMouseEnter={handleMouseEnter}>Enter Me!</button>
        </>
    );
}

function ClickMehod3() {
    const handledblClick = () => {
        alert("Button is double clicked!");
    };

    return (
        <>
            <h3>Event Handling : on Double click</h3>
            <button onDoubleClick={handledblClick}>double Click Me!</button>
        </>
    );
}


function ClickMehod4() {
    const handleMouseleave = () => {
        alert("on mouse leave");
    };

    return (
        <>
            <h3>Event Handling : on Mouse Leave</h3>
            <button onMouseLeave ={handleMouseleave}>Click</button>
        </>
    );
}


export { ClickMehod, ClickMehod1, ClickMehod2, ClickMehod3, ClickMehod4 };
