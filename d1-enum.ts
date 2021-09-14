enum week {Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday};
// 定义枚举

let keyInput: number = Number(prompt('请输入数字（0-6）：'));
// 获取输入数字
let day: string = week[keyInput];
// 通过输入的数字获取枚举类型[week]中的对应元素名字

alert(`今天是${day}`);