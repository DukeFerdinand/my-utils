export enum ResultType {
    Ok = 'Ok',
    Err = 'Err',
}

export interface ResultProto<T, E> {
    /**
     * ### type
     * Not likely to be used, but could be useful if stringification is ever needed
     *
     * type will only ever be `Ok` or `Err`
     */
    type: ResultType;

    /**
     * ### isOk
     * `true` if instance of `Ok` variant, else false
     */
    isOk: boolean;

    /**
     * ### isErr
     * `true` if instance of `Err` variant, else false
     */
    isErr: boolean;

    getVal(): T;
    getErr(): E;
}

export class Ok<T> implements ResultProto<T, never> {
    private value: T;
    public type: ResultType;
    constructor(val: T) {
        this.value = val;
        this.type = ResultType.Ok;
    }

    public readonly isOk = true;
    public readonly isErr = false;

    public getVal() {
        return this.value;
    }

    public getErr(): never {
        throw new TypeError(
            '[RESULT ERROR] Attempted to call `unwrapErr` on `Ok` Result variant'
        );
    }
}

export class Err<E> implements ResultProto<never, E> {
    private value: E;
    public type: ResultType;
    constructor(val: E) {
        this.value = val;
        this.type = ResultType.Err;
    }

    public readonly isOk = false;
    public readonly isErr = true;

    public getVal(): never {
        throw new TypeError(
            '[RESULT ERROR] Attempted to call `unwrapErr` on `Ok` Result variant'
        );
    }
    public getErr() {
        return this.value;
    }
}

export type Result<T, E> = Ok<T> | Err<E>;

export const ok = <T>(val: T) => new Ok(val);
export const err = <E>(val: E) => new Err(val);
