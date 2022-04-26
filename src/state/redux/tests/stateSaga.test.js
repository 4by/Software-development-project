import { put, takeEvery, call } from 'redux-saga/effects';
import { GET_API_TO_ASYNC } from '../stateConsts';
import { getAPIfromAsyncAction } from '../stateActons';
import { userWatcher, fetchUserWorker, getPromise, getAnswer, cursesAPI } from '../stateSaga';


test('userWatcher', async () => {
    expect(userWatcher().next().value)
        .toEqual(takeEvery(GET_API_TO_ASYNC, fetchUserWorker))
})

test('fetchUserWorker', async () => {

    const g = fetchUserWorker()

    expect(g.next().value)
        .toEqual(call(getPromise))

    await getPromise()
        .then(data => {
            expect(g.next(data).value).toEqual(call(getAnswer, data))
            return getAnswer(data)
        })
        .then(json => {
            const arg = getAPIfromAsyncAction({ cursesAPI: cursesAPI(json) })
            expect(g.next(json).value).toEqual(put(arg))
        })

    expect(g.next().done).toEqual(true)



    // await Promise.all([getPromise(), g.next().value])
    //     .then(v => {
    //         expect(v[0].status).toStrictEqual(v[1].status)
    //         return Promise.all([getAnswer(v[0]), g.next(v[1]).value])
    //     })
    //     .then(v =>
    //         expect(v[0].Valute).toStrictEqual(v[1].Valute)
    //     )
    //     .then(v =>
    //         expect(v[0].Valute).toStrictEqual(v[1].Valute)
    //     )




})
