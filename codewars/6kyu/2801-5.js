class Dinglemouse {
  constructor() {
    this.name = this.age = this.sex = 0;
    this.data = {
      age: { idx: -1, value: undefined },
      name: { idx: -1, value: undefined },
      sex: { idx: -1, value: undefined },
    };
    this.count = 0;
  }

  setAge(age) {
    // this.age = age;
    this.data.age.idx === -1 && (this.data.age.idx = this.count);

    this.data.age.value = age;
    this.count++;
    return this;
  }

  setSex(sex) {
    // this.sex = sex;
    this.data.sex.idx === -1 && (this.data.sex.idx = this.count);
    this.data.sex.value = sex;
    this.count++;
    return this;
  }

  setName(name) {
    // this.name = name;
    this.data.name.idx === -1 && (this.data.name.idx = this.count);
    this.data.name.value = name;
    this.count++;
    return this;
  }

  hello() {
    let str = "Hello.";

    const sortedData = Object.fromEntries(
      Object.entries(this.data).sort(([, a], [, b]) => a.idx - b.idx),
    );
    console.log(sortedData);
    for (const key in sortedData) {
      console.log(key, sortedData[key].value);

      if (sortedData[key].value !== undefined) {
        let temp = sortedData[key].value;
        console.log(key);
        if (key === "age") {
          str += ` I am ${temp}.`;
        } else if (key === "sex") {
          str += ` I am ${temp == "M" ? "male" : "female"}.`;
        } else {
          str += ` My name is ${temp}.`;
        }
      }
    }

    return str;
  }
}

// iterating through object
// for (const key in objectData) {       // key=age,name,sex
//   sortedData[key].value               // 22,'joe',male
// }

// sorting the object
// const newObj = Object.fromEntries(
//   Object.entries(oldObject).sort(([,a][,b]=>a.idx-b.idx))
// )
