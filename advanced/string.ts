// 字符串字面量类型
// 字符串字面量类型允许你指定字符串必须的固定值
type Easing = 'ease-in' | 'ease-out' | 'ease-in-out'
class UIElement {
    animate(dx: number, dy: number, easing: Easing) {
        if (easing === "ease-in") {
            // ...
        }
        else if (easing === "ease-out") {
        }
        else if (easing === "ease-in-out") {
        }
        else {
            // error! should not pass null or undefined.
        }
    }
}

let button = new UIElement();
button.animate(0, 0, "ease-in");
button.animate(0, 0, "uneasy"); // error: "uneasy" is not allowed here

// 数字字面量类型
function rollDie(): 1 | 2 | 3 | 4 | 5 | 6 {
    // ...
}
