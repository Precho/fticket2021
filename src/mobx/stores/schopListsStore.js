import {getData, storeData} from './asyncStore/storage';
import {runInAction} from 'mobx';

export const createSchopListsStore = () => {
  return {
    listsData: [],
    listsLoading: true,

    async setListData() {
      let storedListData = await getData('@username');
      console.log(storedListData, 'STORED DATA');

      runInAction(() => {
        this.listsData = JSON.parse(storedListData);
        this.listsLoading = false;
      });
      console.log(this.listsData, '---------');
    },

    async addList(listName, itemsValues) {
      let tempArray = this.listsData;
      tempArray.push({
        id: new Date().valueOf(),
        attributes: {
          name: listName,
          items: itemsValues,
          createdAt: new Date(),
        },
      });

      runInAction(() => {
        this.listsData = tempArray;
        storeData('@username', JSON.stringify(this.listsData));
      });
      console.log(this.listsData, 'VALUE STORE');
    },
  };
};
