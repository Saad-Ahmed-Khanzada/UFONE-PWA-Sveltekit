import { writable } from "svelte/store";
import { toLocalStorage, fromLocalStorage } from "./storage";
import { CITIES_LIST, type TCityData } from "../assets/data/constants";
import { AYATLIST } from "../assets/daily_content/ayat";
import { HADITHLIST } from "../assets/daily_content/hadith";
import {DUALIST} from "../assets/daily_content/dua";

const isAuthorisedInitialValue = fromLocalStorage("isAuthorised", false);
export const isAuthorised = writable(isAuthorisedInitialValue);
toLocalStorage(isAuthorised, "isAuthorised");

const loggedInInitialValue = fromLocalStorage("loggedIn", false);
export const loggedIn = writable(loggedInInitialValue);
toLocalStorage(loggedIn, "loggedIn");

const msisdnInitialValue = fromLocalStorage("msisdn", null);
export const msisdn = writable(msisdnInitialValue);
toLocalStorage(msisdn, "msisdn");

const accessTokenInitialValue = fromLocalStorage("accessToken", "");
export const accessToken = writable(accessTokenInitialValue);
toLocalStorage(accessToken, "accessToken");

const isMaleInitialValue = fromLocalStorage("isMale", false);
export const isMale = writable(isMaleInitialValue);
toLocalStorage(isMale, "isMale");

const isHanafiInitialValue = fromLocalStorage("isHanafi", true);
export const isHanafi = writable(isHanafiInitialValue);
toLocalStorage(isHanafi, "isHanafi");

const isUrduInitialValue = fromLocalStorage("isUrdu", true);
export const isUrdu = writable(isUrduInitialValue);
toLocalStorage(isUrdu, "isUrdu");

const isDarkInitialValue = fromLocalStorage("isDark", false);
export const isDark = writable(isDarkInitialValue);
toLocalStorage(isDark, "isDark");

const subStatusInitialValue = fromLocalStorage("subStatus", "false");
export const subStatus = writable(subStatusInitialValue);
toLocalStorage(subStatus, "subStatus");

const currentCityInitialValue = fromLocalStorage("currentCity", CITIES_LIST[2]);
export const currentCity: any = writable(currentCityInitialValue);
toLocalStorage(currentCity, "currentCity");

export const citiesListInitialValue = fromLocalStorage(
  "citiesList",
  CITIES_LIST
);
export const citiesList = writable(citiesListInitialValue);
toLocalStorage(citiesList, "citiesList");

export const ayatList = writable(AYATLIST);
export const hadithList = writable(HADITHLIST);
export const duaList = writable(DUALIST);

// const appIDInitialValue = fromLocalStorage(
//   "appID",
//   "e9aecf06c1cd4721bea533233f9fa454"
// );
// export const appID = writable(appIDInitialValue);
// toLocalStorage(appID, "appID");
