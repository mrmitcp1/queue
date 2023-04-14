export class Queue <T> {
    container:T[]=[]
    constructor() {
    }
    enqueue(item:T){
        return this.container.push(item)
    }
    dequeue(){
        return this.container.shift()
    }
    size(){
        return this.container.length
    }
}