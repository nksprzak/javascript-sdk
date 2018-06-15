import { EdgeInterfaceUpdateRequestJson } from './__json__/edge-interface-update-request-json';
import { SubnetParticipationUpdateRequestJson } from './__json__/subnet-participation-update-request-json';
import { SubnetParticipationUpdateRequest } from './subnet-participation-update-request';

/**
 * Edge Interface Update Request.
 */
/* istanbul ignore next: autogenerated */
export class EdgeInterfaceUpdateRequest {

  private readonly _json: EdgeInterfaceUpdateRequestJson;

  constructor(EdgeInterfaceUpdateRequest: EdgeInterfaceUpdateRequest);
  constructor(EdgeInterfaceUpdateRequestJson: EdgeInterfaceUpdateRequestJson);
  constructor(displayName: string, name: string, inRateLimit: number, outRateLimit: number, interfaceType: string,
              applyRateLimit: boolean, useForDefaultRoute: boolean, network: string, networkUuid: string,
              subnetParticipation: Array<SubnetParticipationUpdateRequestJson>);
  constructor(firstParam: string | EdgeInterfaceUpdateRequest | EdgeInterfaceUpdateRequestJson, name?: string,
              inRateLimit?: number, outRateLimit?: number, interfaceType?: string, applyRateLimit?: boolean,
              useForDefaultRoute?: boolean, network?: string, networkUuid?: string,
              subnetParticipation?: Array<SubnetParticipationUpdateRequestJson>) {
    if (typeof firstParam === 'string') {
      // Parameters constructor
      this._json = {
        display_name: firstParam,
        name: name,
        in_rate_limit: inRateLimit,
        out_rate_limit: outRateLimit,
        interface_type: interfaceType,
        apply_rate_limit: applyRateLimit,
        use_for_default_route: useForDefaultRoute,
        network: network,
        network_uuid: networkUuid,
        subnet_participation: subnetParticipation
      } as EdgeInterfaceUpdateRequestJson;
    } else if (firstParam instanceof EdgeInterfaceUpdateRequest) {
      // Copy constructor
      this._json = (firstParam as EdgeInterfaceUpdateRequest).json;
    } else {
      // Json or empty constructor
      this._json = (firstParam || {}) as EdgeInterfaceUpdateRequestJson;
    }
  }

  /**
   * Get display name.
   * @returns {string}
   */
  get displayName(): string {
    return this._json.display_name;
  }

  /**
   * Get name.
   * @returns {string}
   */
  get name(): string {
    return this._json.name;
  }

  /**
   * Get in rate limit.
   * @returns {number}
   */
  get inRateLimit(): number {
    return this._json.in_rate_limit;
  }

  /**
   * Get out rate limit.
   * @returns {number}
   */
  get outRateLimit(): number {
    return this._json.out_rate_limit;
  }

  /**
   * Get interface type.
   * @returns {string}
   */
  get interfaceType(): string {
    return this._json.interface_type;
  }

  /**
   * Get apply rate limit.
   * @returns {boolean}
   */
  get applyRateLimit(): boolean {
    return this._json.apply_rate_limit;
  }

  /**
   * Get use for default route.
   * @returns {boolean}
   */
  get useForDefaultRoute(): boolean {
    return this._json.use_for_default_route;
  }

  /**
   * Get network.
   * @returns {string}
   */
  get network(): string {
    return this._json.network;
  }

  /**
   * Get network uuid.
   * @returns {string}
   */
  get networkUuid(): string {
    return this._json.network_uuid;
  }

  /**
   * Get subnet participation.
   * @returns {Array<SubnetParticipationUpdateRequest>}
   */
  get subnetParticipation(): Array<SubnetParticipationUpdateRequest> {
    return this._json.subnet_participation.map(it => new SubnetParticipationUpdateRequest(it));
  }

  /**
   * Get the json representation of this class.
   * @returns {EdgeInterfaceUpdateRequestJson}
   */
  get json(): EdgeInterfaceUpdateRequestJson {
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
