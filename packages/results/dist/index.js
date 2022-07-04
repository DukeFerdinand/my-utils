export var ResultType;
(function (ResultType) {
    ResultType["Ok"] = "Ok";
    ResultType["Err"] = "Err";
})(ResultType || (ResultType = {}));
export class Ok {
    constructor(val) {
        this.isOk = true;
        this.isErr = false;
        this.value = val;
        this.type = ResultType.Ok;
    }
    getVal() {
        return this.value;
    }
    getErr() {
        throw new TypeError("[RESULT ERROR] Attempted to call `unwrapErr` on `Ok` Result variant");
    }
}
export class Err {
    constructor(val) {
        this.isOk = false;
        this.isErr = true;
        this.value = val;
        this.type = ResultType.Err;
    }
    getVal() {
        throw new TypeError("[RESULT ERROR] Attempted to call `unwrapErr` on `Ok` Result variant");
    }
    getErr() {
        return this.value;
    }
}
export const ok = (val) => new Ok(val);
export const err = (val) => new Err(val);
