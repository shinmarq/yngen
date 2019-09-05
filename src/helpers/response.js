class HttpResponse {
  constructor() {
    this.httpStatusCode = {};
    this.httpStatusCode.internal_server_error =
      'Internal Server Error'; /** 500 */
    this.httpStatusCode.bad_gateway = 'Service Unavai­lable'; /** 502 */
    this.httpStatusCode.gateway_timeout = 'Gateway Timeout'; /** 504 */
    this.httpStatusCode.bad_request = 'Bad Request'; /** 400 */
    this.httpStatusCode.unauthorized = 'Unauthorized'; /** 401 */
    this.httpStatusCode.payment_required = 'Payment Required'; /** 402 */
    this.httpStatusCode.forbidden = 'Forbidden'; /** 403 */
    this.httpStatusCode.not_found = 'Not Found'; /** 404 */
    this.httpStatusCode.method_not_allowed = 'Method Not Allowed'; /** 405 */
    this.httpStatusCode.request_timeout = 'Request Timeout'; /** 408 */
    this.httpStatusCode.conflict = 'Conflict'; /** 409 */
    this.httpStatusCode.ok = 'OK'; /** 200 */
    this.httpStatusCode.created = 'Created'; /** 201 */
    this.httpStatusCode.accepted = 'Accepted';

    this.response = {};
  }

  respond(h, status, data, response, code) {
    this.response.status = response;
    this.response.success = status;
    this.response.data = data;

    return h.response(this.response).code(code);
  }

  failure(h, data, response, code) {
    return this.respond(h, false, data, response, code);
  }

  success(h, data, response, code) {
    return this.respond(h, true, data, response, code);
  }
}

exports.HttpResponse = HttpResponse;
