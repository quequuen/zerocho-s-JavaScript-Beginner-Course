class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Programmer extends Human {
  constructor(name, age, languages) {
    super(name, age);
    this.languages = languages;
  }

  writeCode() {
    console.log(this.languages.join() + "(으)로 코딩해요.");
  }
}

const programmer = new Programmer("가연", 26, ["html", "css", "js"]);
programmer.writeCode();
