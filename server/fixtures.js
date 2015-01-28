if(Posts.find().count() === 0) {
  Posts.insert({ head: "Hello World", name: "Peter Nielsen", mail: "peter@designmonkey", createDate: new Date() });
  Posts.insert({ head: "Second Post", name: "Peter Nielsen", mail: "peter@designmonkey", createDate: new Date() });
  Posts.insert({ head: "Bourbon + Neat has been added!", name: "Rasmus Hjulskov", mail: "rasmus@awesomenameinc.com", createDate: new Date() });
}
