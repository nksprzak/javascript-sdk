import { VappNetworkFirewallRule } from './vapp-network-firewall-rule';
import { VappNetworkFirewallJson } from './__json__';

/* istanbul ignore next: autogenerated */
export class VappNetworkFirewall {

  constructor(private _json: VappNetworkFirewallJson) {
  }

  /**
   * Get vapp uuid.
   * @returns {string}
   */
  get vappUuid(): string {
    return this._json.vapp_uuid;
  }

  /**
   * Get network name.
   * @returns {string}
   */
  get networkName(): string {
    return this._json.network_name;
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
   * @returns {Array<VappNetworkFirewallRule>}
   */
  get rules(): Array<VappNetworkFirewallRule> {
    return this._json.rules.map((rule) => { return new VappNetworkFirewallRule(rule); });
  }

  /**
   * Get the json representation of this class.
   * @returns {VappNetworkFirewallJson}
   */
  get json(): VappNetworkFirewallJson {
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
