import { getDateTime } from './DateTime'

describe('(Utils) getDateTime', () => {
    const RealDate = Date

    beforeAll(() => {
        jest.spyOn(window, 'Date')
    })

    afterAll(() => {
        window.Date.mockRestore()
    })

    it('should return the current date', () => {
        const now = new RealDate()
        Date.mockImplementationOnce(() => now)

        expect(getDateTime()).toEqual(now)
    })

    it('should return the specified date', () => {
        Date.mockImplementationOnce((y, mo, d, h, m, s) => new RealDate(y, mo, d, h, m, s))

        expect(getDateTime(2019, 1-1, 2, 3, 4, 5)).toEqual(new RealDate(2019, 1-1, 2, 3, 4, 5))
    })
})
