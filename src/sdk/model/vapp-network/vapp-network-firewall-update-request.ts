import { VappNetworkFirewallRuleRequestJson, VappNetworkFirewallUpdateRequestJson } from './__json__';
import { VappNetworkFirewallRuleRequest } from './vapp-network-firewall-rule-request';

/* istanbul ignore next: autogenerated */
export class VappNetworkFirewallUpdateRequest {

  private readonly _json: VappNetworkFirewallUpdateRequestJson;

  constructor(vappNetworkFirewallUpdateRequest: VappNetworkFirewallUpdateRequest);
  constructor(vappNetworkFirewallUpdateRequestJson: VappNetworkFirewallUpdateRequestJson);
  constructor(loggingEnabled: boolean, enabled: boolean, defaultAction: string,
              rules: Array<VappNetworkFirewallRuleRequestJson>);
  constructor(firstParam: boolean | VappNetworkFirewallUpdateRequest | VappNetworkFirewallUpdateRequestJson,
              enabled?: boolean, defaultAction?: string, rules?: Array<VappNetworkFirewallRuleRequestJson>) {
    if (typeof firstParam === 'boolean') {
      // Parameters constructor
      this._json = {
        logging_enabled: firstParam,
        enabled: enabled,
        default_action: defaultAction,
        rules: rules
      } as VappNetworkFirewallUpdateRequestJson;
    } else if (firstParam instanceof VappNetworkFirewallUpdateRequest) {
      // Copy constructor
      this._json = (firstParam as VappNetworkFirewallUpdateRequest).json;
    } else {
      // Json or empty constructor
      this._json = (firstParam || {}) as VappNetworkFirewallUpdateRequestJson;
    }
  }

  /**
   * Get logging enabled.
   * @returns {boolean}
   */
  get loggingEnabled(): boolean {
    return this._json.logging_enabled;
  }

  /**
   * Get enabled.
   * @returns {boolean}
   */
  get enabled(): boolean {
    return this._json.enabled;
  }

  /**
   * Get default action.
   * @returns {string}
   */
  get defaultAction(): string {
    return this._json.default_action;
  }

  /**
   * Get rules.
   * @returns {Array<VappNetworkFirewallRuleRequest>}
   */
  get rules(): Array<VappNetworkFirewallRuleRequest> {
    return this._json.rules.map((request) => { return new VappNetworkFirewallRuleRequest(request); });
  }

  /**
   * Get the json representation of this class.
   * @returns {VappNetworkFirewallUpdateRequestJson}
   */
  get json(): VappNetworkFirewallUpdateRequestJson {
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
