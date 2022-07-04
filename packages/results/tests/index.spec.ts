import { ok, err, ResultType } from '../src/index';

describe('Tyescript Result classes', () => {
    const testCases = {
        ok: ok('ok-val'),
        err: err('err-val'),
    };

    describe('# Ok Instance', () => {
        it('has an "Ok" type', () => {
            expect(testCases.ok.type).toBe(ResultType.Ok);
        });

        describe('getVal', () => {
            it('returns wrapped value', () => {
                expect(testCases.ok.getVal()).toBe('ok-val');
            });
        });

        describe('getErr', () => {
            it('throws an error', () => {
                expect(() => testCases.ok.getErr()).toThrow();
            });
        });
    });

    describe('# Err Instance', () => {
        it('has an "Err" type', () => {
            expect(testCases.err.type).toBe(ResultType.Err);
        });

        describe('getVal', () => {
            it('throws an error', () => {
                expect(() => testCases.err.getVal()).toThrow();
            });
        });

        describe('getErr', () => {
            it('returns wrapped err value', () => {
                expect(testCases.err.getErr()).toBe('err-val');
            });
        });
    });
});
