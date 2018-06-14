import { SupportRegardingOptionJson, SupportServiceOptionJson } from './__json__';

/**
 * Support Regarding Option.
 */
/* istanbul ignore next: autogenerated */
export class SupportRegardingOption {

  constructor(private _json: SupportRegardingOptionJson) {
  }

  /**
   * Get id.
   * @returns {number}
   */
  get id(): number {
    return this._json.id;
  }

  /**
   * Get name.
   * @returns {string}
   */
  get name(): string {
    return this._json.name;
  }

  /**
   * Get service options.
   * @returns {Array<SupportServiceOptionJson>}
   */
  get serviceOptions(): Array<SupportServiceOptionJson> {
    return this._json.service_options;
  }

  /**
   * Get the json representation of this class.
   * @returns {SupportRegardingOptionJson}
   */
  get json(): SupportRegardingOptionJson {
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
