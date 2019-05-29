
export class Index {
    private static instance: Index;
    private _indexer: any;
    private constructor() { }
    static getInstance() {
        if (!Index.instance) {
            Index.instance = new Index();
            Index.instance._indexer = 1;
        }
        return Index.instance;
    }
    get index(): any {
        return this._indexer;
    }
    set index(any) {
        this._indexer = any;
    }
    increaseIndex(): any {
        this._indexer = this._indexer + 1;
        return this._indexer;
    }
    decreaseIndex(): any {
        return this._indexer -= 1;
    }
    
}
