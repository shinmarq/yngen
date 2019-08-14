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
    this.respond(h, true, data, response, code);
  }

  success(h, data, response, code) {
    this.respond(h, true, data, response, code);
  }

  chatfuelRespond(h, data, code) {
    return h.response(data).code(code);
  }

  quickReplies(opts = [], msg = '') {
    const qr = [];
    const obj = {};

    opts.forEach(val => {
      if (val.block) {
        obj.block_names = [val.block];
      }

      if (val.attributes) {
        obj.set_attributes = val.attributes;
      }

      obj.title = val.button;

      qr.push(obj);
    });

    return {
      messages: [
        {
          text: msg,
          quick_replies: qr,
        },
      ],
    };
  }

  redirectToBlock(block) {
    return { redirect_to_blocks: [block] };
  }

  sendTextMessage(msg) {
    return {
      messages: [{ text: msg }],
    };
  }
}

exports.HttpResponse = HttpResponse;
