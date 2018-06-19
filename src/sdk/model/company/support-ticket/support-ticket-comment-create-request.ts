import { SupportTicketCommentCreateRequestJson } from './__json__/support-ticket-comment-create-request-json';

/**
 * Support Ticket Comment Create Request.
 */
/* istanbul ignore next: autogenerated */
export class SupportTicketCommentCreateRequest {

  private readonly _json: SupportTicketCommentCreateRequestJson;

  constructor(supportTicketCommentCreateRequest: SupportTicketCommentCreateRequest);
  constructor(supportTicketCommentCreateRequestJson: SupportTicketCommentCreateRequestJson);
  constructor(text: string);
  constructor(firstParam: string | SupportTicketCommentCreateRequest | SupportTicketCommentCreateRequestJson) {
    if (typeof firstParam === 'string') {
      // Parameters constructor
      this._json = {
        text: firstParam
      } as SupportTicketCommentCreateRequestJson;
    } else if (firstParam instanceof SupportTicketCommentCreateRequest) {
      // Copy constructor
      this._json = (firstParam as SupportTicketCommentCreateRequest).json;
    } else {
      // Json or empty constructor
      this._json = (firstParam || {}) as SupportTicketCommentCreateRequestJson;
    }
  }

  /**
   * Get text.
   * @returns {string}
   */
  get text(): string {
    return this._json.text;
  }

  /**
   * Get the json representation of this class.
   * @returns {SupportTicketCommentCreateRequestJson}
   */
  get json(): SupportTicketCommentCreateRequestJson {
    return Object.assign({}, this._json);
  }

  /**
   * Get the string representation of this class.
   * @returns {string}
   */
  toString(): string {
    return JSON.stringify(this._json, undefined, 2);
  }
}
