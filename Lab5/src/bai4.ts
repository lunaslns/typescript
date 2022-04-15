//generic
function merge<T extends object, U extends object>(objA: T, objB: U){
    return Object.assign(objA, objB);
}

const mergedObj = merge({name: 'Max', hobbies: ['sports']}, {age: 30});
console.log(mergedObj);

interface Lengthy{
    length: number;
}

function countAndDescribe<T extends Lengthy>(element: T):[T, string]{
    let descriptionText = 'got no value.';
    if(element.length === 1){
        descriptionText = 'got 1 element.';
    }else if(element.length>0){
        descriptionText = 'got ' + element.length + ' elements.';
    }
    return [element, descriptionText];
}

class DataStorage<T extends string|number|boolean>{
    private data: T[] = [];
    addItem(item:T){
        this.data.push(item);
    }
    removeItem(item:T){
        if(this.data.indexOf(item)===-1){
            return;
        }this.data.splice(this.data.indexOf(item), 1);
    }
    getItems(){
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Max');
textStorage.addItem('Manu');
textStorage.removeItem('Max');
console.log(textStorage.getItems());
const numberStorage = new DataStorage<number>();