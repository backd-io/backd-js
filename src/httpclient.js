import axios from 'axios'
import urljoin from 'url-join'

export default class HTTPClient {

    constructor(options, endpoint) {
        this._options = {}
        this._options.admin = options.admin || "https://admin.backd.io/"
        this._options.auth = options.auth || "https://auth.backd.io/"
        this._options.functions = options.functions || "https:functions//.backd.io/"
        this._options.objects = options.objects || "https://objects.backd.io/"
        this._proxy = options.proxy || {}
        
        this._headers = {}
        
        this._endpoint = endpoint
    }

    get options() {
        return this._options
    }

    async request(method, url, body, headers, params) {

        try {
            let query = {
                method,
                url: urljoin(this._options[this._endpoint], url),
                data: body,
                headers: this._headers,
                params,
                responseType: 'json',
                responseEncoding: 'utf8',
                proxy: this._proxy
            }
    
            for (let key in headers) {
                query.headers[key] = headers[key]
            }

            let response =  await axios(query)
            return response.json()

        } catch (error) {
            console.log(error)
        }
        
    }
}