import { getData, storeData } from "./asyncStore/storage";
import { runInAction } from "mobx";

export const createSchopListsStore = () => {
  return {
    //TempStore
    listsData: [],
    listsLoading: true,
  };
};
