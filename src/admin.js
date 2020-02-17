import HTTPClient from './httpclient'

export default class Admin extends HTTPClient {
    
    constructor(options) {
        super(options, 'admin')
    }

    get pepe() {
        return 'blas'
    }

    async test() {
        await this.request('get', '/test/1', {}, { 'a': '1', 'b': '2' }, { a: 1, b: 2 })
    }

}