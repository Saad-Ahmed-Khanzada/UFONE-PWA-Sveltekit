import { writable} from 'svelte/store';
import { fromLocalStorage, toLocalStorage } from "./storage";


export const hijriDateOffsetInitialValue = fromLocalStorage("hijriDateOffset", 0);
export const hijriDateOffset = writable(hijriDateOffsetInitialValue);
toLocalStorage(hijriDateOffset, "hijriDateOffset");


export const adjustedHijriDateInitialValue = fromLocalStorage("adjustedHijriDate", '');
export const adjustedHijriDate = writable(adjustedHijriDateInitialValue);
toLocalStorage(adjustedHijriDate, "adjustedHijriDate");

