
export class Singleton {
    private static instance: Singleton;
    private _indexer: number;
    private constructor() { }
    static getInstance() {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
            Singleton.instance._indexer = 0;
        }
        return Singleton.instance;
    }
    get index(): number {
        return this._indexer;
    }
    set index(score) {
        this._indexer = score;
    }
    increaseIndex(): number {
        return this._indexer += 1;
    }
    decreaseIndex(): number {
        return this._indexer -= 1;
    }
}
