class Hashmap {
    constructor(){
        this.storage = {}
    }
    add(key, value){
        return this.storage[key] = value;
    }
    exist(key){
        return this.storage[key] ? true : false
    }
    get(key){
        return this.storage[key]
    }
    remove(key){
        delete this.storage[key]
    }
}