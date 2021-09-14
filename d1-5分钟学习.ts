class Student{
  // 创建类
  fullName: string;
  constructor(public firstName, public middleInitial, public lastName){
    // 构造函数: 初始化变量[fullName]的值
    this.fullName = firstName + ' ' + middleInitial + ' ' + lastName;
  }
}

interface Person{
  // 定义接口
  firstName: string;
  lastName: string;
}

function greets(person: Person){
  // 定义函数
  return 'Hello ' + person.firstName + ' ' + person.lastName;
}

let user = new Student('Jane', 'M.', 'User');

document.body.innerHTML = greets(user);