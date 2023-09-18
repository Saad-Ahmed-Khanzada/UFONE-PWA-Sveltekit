import type { PageLoad } from "./$types";
import { error } from "@sveltejs/kit";

import {
  msisdn,
  // accessToken,
  // subStatus,
  currentCity,
  isAuthorised,
} from "../stores/store";
// import type { TCityData } from "../assets/data/constants";
import { get } from "svelte/store";
// import { currentCityDailyPrayerTime } from "../stores/prayerTime";
// import { getAccessToken } from "../helpers/subscriptionHelpers";
import { fetchCityPrayerTime } from "../helpers/prayerDataFetchers";

export const load: PageLoad = async ()=>{
  return {
    prayerTime: fetchCityPrayerTime(get(currentCity)),
  };
};


  // let phoneNumber: any = data.page_server_data.msisdn;

  // let authorisedStatus = data.page_server_data.isAuthorised;

  // msisdn.set(phoneNumber);
  // isAuthorised.set(authorisedStatus);

  // if (authorisedStatus == true) {
  //   console.log("app is authorised");

    // const getAccessTokenResponse: any = await getAccessToken();

    // if (getAccessTokenResponse.response[0]["desc"] == "Verified User") {
      // accessToken.set(getAccessTokenResponse.response[0]["token"]);
      // subStatus.set(getAccessTokenResponse.response[0]["sub_status"]);
    // }

    
  // } else {
  //   throw error(401, {
  //     message: "Unauthorized Access",
  //   });

// };
