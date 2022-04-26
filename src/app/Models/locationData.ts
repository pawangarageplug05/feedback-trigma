export interface LocationData {
    master_restaurant_id: string;
    master_restaurant_uuid: string;
    master_country_uuid: string;
    master_restaurant_code: string;
    master_restaurant_name: string;
    master_restaurant_name_ja: string;
    master_restaurant_name_cn: string;
    master_restaurant_desc: string;
    master_restaurant_desc_ja: string;
    master_restaurant_desc_cn: string;
    master_restaurant_type: string;
    master_restaurant_skip_queue: string;
    master_restaurant_thumbnail: string;
    master_restaurant_phone: string;
    master_restaurant_email: string;
    master_restaurant_address: string;
    master_restaurant_pincode: string;
    master_location_uuid: string;
    master_restaurant_total_tables: string;
    master_restaurant_total_pigeon_holes: string;
    master_restaurant_show_announcement: string;
    master_restaurant_announcement_html?: any;
    master_restaurant_lat: string;
    master_restaurant_lng: string;
    master_restaurant_gst_number: string;
    master_restaurant_delivery_charges: string;
    master_restaurant_service_tax: string;
    master_restaurant_gst: string;
    master_restaurant_admin: string;
    master_restaurant_sub_admin: string;
    master_restaurant_dining_pref: string;
    master_restaurant_operating_mon_from: string;
    master_restaurant_operating_mon_till: string;
    master_restaurant_operating_tues_from: string;
    master_restaurant_operating_tues_till: string;
    master_restaurant_operating_wed_from: string;
    master_restaurant_operating_wed_till: string;
    master_restaurant_operating_thus_from: string;
    master_restaurant_operating_thus_till: string;
    master_restaurant_operating_fri_from: string;
    master_restaurant_operating_fri_till: string;
    master_restaurant_operating_sat_from: string;
    master_restaurant_operating_sat_till: string;
    master_restaurant_operating_sun_from: string;
    master_restaurant_operating_sun_till: string;
    master_restaurant_created_date: string;
    master_restaurant_modified_date?: any;
    master_restaurant_category: string;
    enable_only_for_kiosk: string;
    master_corporate_uuid?: any;
    master_restaurant_is_featured: string;
    master_restaurant_override_opening_time: string;
    master_restaurant_status: string;
    master_restaurant_is_deleted: string;
    master_restaurant_wallet_discount: string;
    module_permissions: string;
    master_location_id: string;
    master_state_uuid: string;
    master_location_street_address: string;
    master_location_address_unit?: any;
    master_location_address_floor?: any;
    master_location_postal_code: string;
    master_location_name: string;
    master_location_lat?: any;
    master_location_long?: any;
    master_location_neighborhood?: any;
    master_location_locality?: any;
    master_location_raw?: any;
    master_location_created_date: string;
    master_location_modified_date?: any;
    master_location_status: string;
    master_location_is_deleted: string;
    master_state_id: string;
    master_state_code: string;
    master_state_short_code: string;
    master_state_name: string;
    master_region_uuid: string;
    master_state_created_date: string;
    master_state_modified_date?: any;
    master_state_status: string;
    master_state_is_deleted: string;
    master_region_id: string;
    master_region_code: string;
    master_region_short_code: string;
    master_region_name: string;
    master_region_created_date: string;
    master_region_modified_date?: any;
    master_region_status: string;
    master_region_is_deleted: string;
    master_country_id: string;
    master_country_code: string;
    master_country_short_code: string;
    master_country_calling_code: string;
    master_country_icon: string;
    master_country_name: string;
    master_country_currency_code: string;
    master_country_currency_abbreviation: string;
    master_country_currency_name: string;
    master_country_currency_decimal_places: string;
    master_country_created_date: string;
    master_country_modified_date?: any;
    master_country_for_login_only: string;
    master_country_status: string;
    master_country_is_deleted: string;
    distance: number;
    orders_in_queue: any;
    queue_order_time_estimation: any;
}

export interface RootObject {
    aaData: LocationData[];
    message: string;
    status: boolean;
    statusCode: number;
}
