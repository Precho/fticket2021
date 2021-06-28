import AsyncStorage from '@react-native-community/async-storage';

const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {}
};

const getData = async key => {
  try {
    let data = await AsyncStorage.getItem(key);
    if (data !== null) {
      return data;
    }
  } catch (error) {}
};

export {storeData, getData};
