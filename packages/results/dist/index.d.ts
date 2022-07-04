export declare enum ResultType {
    Ok = "Ok",
    Err = "Err"
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
    /**
     * ### unwrap
     * Assuming the `Result` type is `Ok`:
     * Returns the wrapped value. Unlike Rust, the wrapper class is not destroyed
     *
     * Assuming
     */
    getVal(): T;
    /**
     * ### unwrapErr
     * Assuming the `Result` type is `Ok`:
     * Throws a type error. You can't unwrap an error if the instance is not an error.
     *
     * Assuming the `Result` type is `Err`:
     */
    getErr(): E;
}
export declare class Ok<T> implements ResultProto<T, never> {
    private value;
    type: ResultType;
    constructor(val: T);
    readonly isOk = true;
    readonly isErr = false;
    getVal(): T;
    getErr(): never;
}
export declare class Err<E> implements ResultProto<never, E> {
    private value;
    type: ResultType;
    constructor(val: E);
    readonly isOk = false;
    readonly isErr = true;
    getVal(): never;
    getErr(): E;
}
export declare type Result<T, E> = Ok<T> | Err<E>;
export declare const ok: <T>(val: T) => Ok<T>;
export declare const err: <E>(val: E) => Err<E>;
//# sourceMappingURL=index.d.ts.map