import { VappResourceSummaryMapJson } from './__json__/vapp-resource-summary-map-json';
import { VappResourceSummary } from '../vapp/summary/vapp-resource-summary';

/**
 * vApp Resource Summary Map.
 */
/* istanbul ignore next: autogenerated */
export class VappResourceSummaryMap {

  constructor(private _json: VappResourceSummaryMapJson) {
  }

  /**
   * Get summaries.
   * @returns {{ [key: string]: VappResourceSummary }}
   */
  get summaries(): { [key: string]: VappResourceSummary } {
    const result: { [key: string]: VappResourceSummary } = {};
    for (const key in this._json.summaries) {
      result[key] = new VappResourceSummary(this._json.summaries[key]);
    }
    return result;
  }

  /**
   * Get the json representation of this class.
   * @returns {VappResourceSummaryMapJson}
   */
  get json(): VappResourceSummaryMapJson {
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