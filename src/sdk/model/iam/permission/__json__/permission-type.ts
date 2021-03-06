/**
 * Enumeration of iland Permission keys.
 */
export type PermissionType =
  // ILAND_BACKUP TENANT level permissions
  'VIEW_ILAND_BACKUP_TENANT' |
  'MANAGE_ILAND_BACKUP_TENANT_STORAGE' |
  // ILAND_BACKUP LOCATION level permissions
  'VIEW_ILAND_BACKUP_LOCATION' |
  'VIEW_ILAND_BACKUP_LOCATION_BILLING' |
  'MANAGE_ILAND_BACKUP_DATA_CENTER_STORAGE' |
  // ILAND_CLOUD_VM level permissions
  'VIEW_ILAND_CLOUD_VM' |
  'VIEW_ILAND_CLOUD_VM_BILLING' |
  'ACCESS_ILAND_CLOUD_VM_CONSOLE' |
  'MANAGE_ILAND_CLOUD_VM_POWER_STATE' |
  'MANAGE_ILAND_CLOUD_VM_CONFIGURATION' |
  'MANAGE_ILAND_CLOUD_VM_SNAPSHOTS' |
  'COPY_MOVE_RESTORE_ILAND_CLOUD_VM' |
  'DELETE_ILAND_CLOUD_VM' |
  // ILAND_CLOUD_VAPP NETWORK level permissions
  'VIEW_ILAND_CLOUD_VAPP_NETWORK' |
  'MANAGE_ILAND_CLOUD_VAPP_NETWORK_CONFIGURATION' |
  'DELETE_ILAND_CLOUD_VAPP_NETWORK' |
  // ILAND_CLOUD_VAPP level permissions
  'VIEW_ILAND_CLOUD_VAPP' |
  'VIEW_ILAND_CLOUD_VAPP_BILLING' |
  'MANAGE_ILAND_CLOUD_VAPP_POWER_STATE' |
  'MANAGE_ILAND_CLOUD_VAPP_CONFIGURATION' |
  'MANAGE_ILAND_CLOUD_VAPP_SNAPSHOTS' |
  'MANAGE_ILAND_CLOUD_VAPP_LEASES' |
  'COPY_MOVE_DOWNLOAD_ILAND_CLOUD_VAPP' |
  'DELETE_ILAND_CLOUD_VAPP' |
  'CREATE_ILAND_CLOUD_VAPP_VMS' |
  'CREATE_ILAND_CLOUD_VAPP_NETWORKS' |
  // INTERNAL NETWORK level permissions
  'VIEW_ILAND_CLOUD_INTERNAL_NETWORK' |
  'MANAGE_ILAND_CLOUD_INTERNAL_NETWORK_CONFIGURATION' |
  'DELETE_ILAND_CLOUD_INTERNAL_NETWORK' |
  // ILAND_CLOUD_EDGE GATEWAY level permissions
  'VIEW_ILAND_CLOUD_EDGE' |
  'MANAGE_ILAND_CLOUD_EDGE_DHCP_CONFIGURATION' |
  'MANAGE_ILAND_CLOUD_EDGE_LOAD_BALANCER_CONFIGURATION' |
  'MANAGE_ILAND_CLOUD_EDGE_STATIC_ROUTING_CONFIGURATION' |
  'MANAGE_ILAND_CLOUD_EDGE_RATE_LIMIT_CONFIGURATION' |
  'MANAGE_ILAND_CLOUD_EDGE_IPSEC_VPN_CONFIGURATION' |
  'MANAGE_ILAND_CLOUD_EDGE_SSL_VPN_CONFIGURATION' |
  'MANAGE_ILAND_CLOUD_EDGE_FIREWALL_CONFIGURATION' |
  'MANAGE_ILAND_CLOUD_EDGE_NAT_CONFIGURATION' |
  // ILAND_CLOUD_VDC level permissions
  'VIEW_ILAND_CLOUD_VDC' |
  'VIEW_ILAND_CLOUD_VDC_BILLING' |
  'MANAGE_ILAND_CLOUD_VDC_CONFIGURATION' |
  'CREATE_ILAND_CLOUD_VDC_VAPPS' |
  'CREATE_ILAND_CLOUD_VDC_CATALOG_ITEMS' |
  'CREATE_ILAND_CLOUD_VDC_INTERNAL_NETWORKS' |
  // ILAND_CLOUD_VAPP TEMPLATE level permissions
  'VIEW_ILAND_CLOUD_VAPP_TEMPLATE' |
  'MANAGE_ILAND_CLOUD_VAPP_TEMPLATE_CONFIGURATION' |
  'DOWNLOAD_ILAND_CLOUD_VAPP_TEMPLATE' |
  'DELETE_ILAND_CLOUD_VAPP_TEMPLATE' |
  // ILAND_CLOUD_MEDIA level permissions
  'VIEW_ILAND_CLOUD_MEDIA' |
  'MANAGE_ILAND_CLOUD_MEDIA_CONFIGURATION' |
  'CLONE_DOWNLOAD_ILAND_CLOUD_MEDIA' |
  'DELETE_ILAND_CLOUD_MEDIA' |
  // ILAND_CLOUD_CATALOG level permissions
  'VIEW_ILAND_CLOUD_CATALOG' |
  'MANAGE_ILAND_CLOUD_CATALOG_CONFIGURATION' |
  'DELETE_ILAND_CLOUD_CATALOG' |
  'CREATE_ILAND_CLOUD_CATALOG_VAPP_TEMPLATES' |
  'CREATE_ILAND_CLOUD_CATALOG_MEDIA' |
  // ILAND_CLOUD_VPG level permissions
  'VIEW_ILAND_CLOUD_VPG' |
  'MANAGE_ILAND_CLOUD_VPG_CONFIGURATION' |
  'INITIATE_ILAND_CLOUD_VPG_TEST_FAILOVER' |
  'INITIATE_ILAND_CLOUD_VPG_LIVE_FAILOVER' |
  // ILAND_CLOUD_ORGANIZATION level permissions
  'VIEW_ILAND_CLOUD_ORG' |
  'VIEW_ILAND_CLOUD_ORG_SECURITY' |
  'VIEW_ILAND_CLOUD_ORG_BILLING' |
  'MANAGE_ILAND_CLOUD_ORG_CONFIGURATION' |
  'MANAGE_ILAND_CLOUD_ORG_DNS' |
  'CREATE_ILAND_CLOUD_ORG_CATALOGS' |
  'MANAGE_ILAND_CLOUD_ORG_SECURITY' |
  'VIEW_ILAND_CLOUD_ORG_DR_RUNBOOKS' |
  'MANAGE_ILAND_CLOUD_ORG_DR_RUNBOOKS' |
  // ILAND_CLOUD LOCATION level permissions
  'VIEW_ILAND_CLOUD_LOCATION' |
  'VIEW_ILAND_CLOUD_LOCATION_BILLING' |
  // ILAND_BACKUP PRODUCT level permissions
  'VIEW_ILAND_BACKUP' |
  'VIEW_ILAND_BACKUP_BILLING' |
  // ILAND_OBJECT_STORAGE LOCATION level permissions
  'VIEW_ILAND_OBJECT_STORAGE_LOCATION' |
  // ILAND_OBJECT_STORAGE PRODUCT level permissions
  'VIEW_ILAND_OBJECT_STORAGE' |
  'MANAGE_ILAND_OBJECT_STORAGE' |
  // ILAND_CLOUD PRODUCT level permissions
  'VIEW_ILAND_CLOUD' |
  'VIEW_ILAND_CLOUD_BILLING' |
  // COMPANY level permissions
  'VIEW_COMPANY' |
  'VIEW_COMPANY_SUPPORT_TICKETS' |
  'VIEW_COMPANY_IAM' |
  'MANAGE_COMPANY_IAM' |
  'MANAGE_COMPANY_SUPPORT_TICKETS';
