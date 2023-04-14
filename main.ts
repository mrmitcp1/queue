import {Queue} from "./queue";

let queue = new Queue();
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
queue.dequeue()
console.log(queue)