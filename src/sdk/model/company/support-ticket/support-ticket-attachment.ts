import { SupportTicketAttachmentJson } from './__json__';

/**
 * Support Ticket Attachment.
 */
/* istanbul ignore next: autogenerated */
export class SupportTicketAttachment {

  constructor(private _json: SupportTicketAttachmentJson) {
  }

  /**
   * Get id.
   * @returns {number}
   */
  get id(): number {
    return this._json.id;
  }

  /**
   * Get title.
   * @returns {string}
   */
  get title(): string {
    return this._json.title;
  }

  /**
   * Get filename.
   * @returns {string}
   */
  get filename(): string {
    return this._json.filename;
  }

  /**
   * Get server filename.
   * @returns {string}
   */
  get serverFilename(): string {
    return this._json.server_filename;
  }

  /**
   * Get creation date.
   * @returns {number}
   */
  get creationDate(): number {
    return this._json.creation_date;
  }

  /**
   * Get creator username.
   * @returns {string}
   */
  get creatorUsername(): string {
    return this._json.creator_user_name;
  }

  /**
   * Get creator fullname.
   * @returns {string}
   */
  get creatorFullname(): string {
    return this._json.creator_full_name;
  }

  /**
   * Get the json representation of this class.
   * @returns {SupportTicketAttachmentDetailsJson}
   */
  get json(): SupportTicketAttachmentJson {
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
