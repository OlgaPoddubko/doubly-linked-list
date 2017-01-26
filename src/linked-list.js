const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._head = null;
        this._tail = null;
    }

    append(data) {
        let node = new Node(data = data);

        if (this.length == 0) {
            this._head = node;
            this._tail = node;
        } else {
            this._tail.next = node;
            node.prev = this._tail;
            this._tail = node;
        }

        this.length ++;
        return this;
    }

    head() {
        if (this._head) {
            return this._head.data;
        } else {
            return null;
        }
    }

    tail() {
        if (this._tail) {
            return this._tail.data;
        } else {
            return null;
        }
    }

    at(index) {
        let current = this._head;
        let i = 0;

        while(i++ < index) {
            current = current.next;
        }
        return current.data;
    }

    insertAt(index, data) {

        if (index == this.length) {
            this.append(data);

        } else if (index == 0) {
            let node = new Node(data = data);
            this._head.prev = node;
            node.next = this._head;
            this._head = node;

        } else {
            let node = new Node(data = data);

            let current = this._head;
            let i = 0;

            while(i++ < index) {
            current = current.next;
             }

            current.prev.next = node;
            node.prev = current.prev;
            current.prev = node;
            node.next = current;
        }
        this.length ++;
        return this;
    }

    isEmpty() {
        if(this.length == 0){
            return true;
        } else {
            return false;
        }
    }

    clear() {
        this.length = 0;
        this._head = null;
        this._tail = null;
        
        return this;
    }

    deleteAt(index) {
        let current = this._head;
        let i = 0;

        if (index ==0) {
            this._head = current.next;

            if (!this._head) {
                this._tail = null;
            } else {
                this._head.prev = null;
            }

        } else if (index === this.length - 1) {
            current = this._tail;
            this._tail = current.prev;
            this._tail.next = null;
        } else {
            while (i++ < index) {
                current = current.next;
            }
            current.prev.next = current.next;
            current.next.prev = current.prev;
        }

        this.length--;
        return this;
    }

    reverse() {
        let reverseList = new LinkedList();
        for (let i = this.length-1; i >= 0; i--) {
            reverseList.append(this.at(i));
        }

        this.clear();
        for (let i = 0; i < reverseList.length; i++) {
            this.append(reverseList.at(i));
        }
        return this;
    }

    indexOf(data) {
        let current = this._head;
        let i = 0;

        for (i; i < this.length; i++) {
            if (current.data === data) {
                return i;
            }
            current = current.next;
        }

        if (i == this.length) {
                return -1;
            }
    }
}

module.exports = LinkedList;
