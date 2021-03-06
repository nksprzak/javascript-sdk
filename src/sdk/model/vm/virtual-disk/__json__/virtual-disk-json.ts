import { DiskType } from '../../../common/__json__/disk-type';

/**
 * Interface for virtual disk properties JSON representation.
 */
export interface VirtualDiskJson {
  name: string;
  size: number;
  type: DiskType;
}
