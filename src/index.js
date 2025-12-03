import LinkedList from "./linkedList";

const list = new LinkedList("dog");

list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());
