import {Button, Text, TextInput, Divider, FAB, List} from 'react-native-paper';
import {
  Modal,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Dimensions,
  Keyboard,
  FlatList,
} from 'react-native';

import React, {useState} from 'react';
import {fontConfig} from '../theme/paper';
import theme from '../theme/theme';
import {FadedModal} from './FadedModal';
import * as Material from 'react-native-vector-icons/MaterialCommunityIcons';
import {NewListItemModal} from '../components/NewListItemModal';
import {useSchopListsStore} from '../mobx/context/schopListsContext';

const Icon = Material.default;

const windowHeight = Dimensions.get('window').height;

export const NewListModal = ({
  modalVisible,
  setModalVisible,
  goBack = () => {},
}) => {
  const [newListItemModal, setNewListItemModal] = useState(false);
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const {listsData, addList} = useSchopListsStore();
  const addNewItem = item => {
    let tempArray = items;
    tempArray.push({name: item, id: new Date().valueOf(), checkbox: false});
    setItems(tempArray);
  };

  const deleteItem = itemName => {
    let tempArray = items;
    setItems(tempArray.filter(e => e !== itemName));
  };

  const saveList = () => {
    setModalVisible(false);
    console.log(items, 'ITEMS');
    addList(inputValue, items);
  };

  const renderItem = ({item}) => (
    <List.Item
      title={item.name}
      //   description={item.date}
      right={props => (
        <TouchableOpacity onPress={() => deleteItem(item)}>
          <List.Icon icon="delete" />
        </TouchableOpacity>
      )}
    />
  );
  const renderEmpty = () => (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
      }}>
      <Text>Brak Itemów</Text>
    </View>
  );

  const renderFooter = () => (
    <View style={{alignItems: 'flex-end'}}>
      <FAB
        animated={false}
        style={styles.fab}
        icon={() => (
          <Icon name="plus" size={24} color={theme.white} style={styles.icon} />
        )}
        onPress={() => setNewListItemModal(true)}
        // theme={{colors: {accent: theme.primaryColor}}}
      />
    </View>
  );

  return (
    <Text>
      <FadedModal modalVisible={modalVisible} setModalVisible={setModalVisible}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <View style={styles.topHeader}>
              <Text
                //   theme={useCustomTheme(fontConfig.default.medium, colors.textGrey)}
                style={styles.headerTitle}>
                Utwórz nową liste
              </Text>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Icon name="close" color={'red'} size={24} />
              </TouchableOpacity>
            </View>
            <View style={styles.flex}>
              <TextInput
                placeholder={'Dodaj Nazwe LIsty'}
                value={inputValue}
                onChangeText={setInputValue}
                label={'Nazwa'}
                mode="outlined"
                style={styles.input}
                autoCapitalize="none"
                //   theme={useCustomTheme(
                //     fontConfig.default.medium,
                //     colors.textGrey,
                //     colors.textGrey,
                //     colors.white,
                //     colors.textGrey,
                //   )}
              />
              <Divider style={{marginTop: 24, height: 2}} />
              {/* <View style={{marginTop: 20}}>
                <Text>Dodaj pierwszy item</Text>
              </View> */}

              <FlatList
                // showsVerticalScrollIndicator={false}
                // overScrollMode="never"
                contentContainerStyle={styles.flatListStyle}
                data={items}
                keyExtractor={item => item}
                renderItem={renderItem}
                ListEmptyComponent={renderEmpty}
                ListFooterComponent={renderFooter}
                bounces
              />
            </View>
            <View style={styles.bottomSection}>
              <TouchableOpacity>
                {/* <Text
									theme={useCustomTheme(
										fontConfig.default.bold,
										colors.secondaryColor
									)}
									style={styles.bottomTextStyle}
								>
									{languageStore!.getAppLabel('LBL_RESET')}
								</Text> */}
              </TouchableOpacity>
              {/* <TouchableOpacity onPress={() => setModalVisible(false)}> */}
              {/* <Text
									theme={useCustomTheme(
										fontConfig.default.bold,
										colors.secondaryColor
									)}
									style={styles.bottomTextStyle}
									onPress={filter}
								>
									{languageStore!.getAppLabel('LBL_OK').toUpperCase()}
								</Text> */}
              {/* </TouchableOpacity> */}
              <Button
                mode="contained"
                color={theme.secondaryColor}
                onPress={saveList}
                style={styles.loginButton}>
                <Text style={styles.buttonText}>Zapisz liste</Text>
              </Button>
            </View>
          </View>
        </TouchableWithoutFeedback>
        <NewListItemModal
          modalVisible={newListItemModal}
          setModalVisible={setNewListItemModal}
          addNewItem={addNewItem}
        />
      </FadedModal>
    </Text>
  );
};

const styles = StyleSheet.create({
  bottomSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
    paddingHorizontal: 8,
  },
  bottomTextStyle: {fontSize: 14},
  container: {
    flex: 1,
    height: windowHeight - 120,
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  empty: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  flatListStyle: {
    flex: 1,
    margin: 0,
    padding: 0,

    backgroundColor: 'red',
  },
  flex: {flex: 1},
  headerTitle: {fontSize: 20},
  text: {
    fontSize: 16,
    letterSpacing: 0.5,
    lineHeight: 24,
  },
  topHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 28,
  },
  fab: {
    // position: 'absolute',
    backgroundColor: theme.secondaryColor,
    // margin: 16,
    // right: 0,
    // bottom: 0,
    height: 56,
    width: 56,
  },
  buttonText: {
    color: theme.white,
  },
});
