// 联合类型
// 联合类型和交叉类型很有关联，但是在使用上完全不同
// 例如遇到的情况：一个代码库希望传入 number 或者 string 类型的参数，如下
function padLeft(value, padding) {
    if (typeof padding === 'number') {
        return Array(padding + 1).join(' ') + value;
    }
    if (typeof padding === 'string') {
        return padding + value;
    }
    throw new Error("Expected string or number, got '" + padding + "'.");
}
padLeft('Hello word', 4);
