if(Posts.find().count() === 0) {
  Posts.insert({ head: "Hello World", name: "Peter Nielsen", mail: "peter@designmonkey"});
  Posts.insert({ head: "Second Post", name: "Peter Nielsen", mail: "peter@designmonkey" });
  Posts.insert({ head: "Bourbon + Neat has been added!", name: "Rasmus Hjulskov", mail: "rasmus@awesomenameinc.com"});
}
