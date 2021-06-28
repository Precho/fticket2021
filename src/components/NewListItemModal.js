import {Button, Text, TextInput, Divider, FAB} from 'react-native-paper';
import {
  Modal,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Dimensions,
  Keyboard,
} from 'react-native';

import React, {useState, useEffect} from 'react';
import {fontConfig} from '../theme/paper';
import theme from '../theme/theme';
import {FadedModal} from './FadedModal';
import * as Material from 'react-native-vector-icons/MaterialCommunityIcons';
const Icon = Material.default;

const windowHeight = Dimensions.get('window').height;
export const NewListItemModal = ({
  modalVisible,
  setModalVisible,
  addNewItem,
}) => {
  const addItem = () => {
    addNewItem(inputValue);
    setModalVisible(false);
  };

  useEffect(() => {
    setInputValue('');
  }, [modalVisible]);

  const [inputValue, setInputValue] = useState('');

  return (
    <>
      <FadedModal modalVisible={modalVisible} setModalVisible={setModalVisible}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <View style={styles.topHeader}>
              <Text
                //   theme={useCustomTheme(fontConfig.default.medium, colors.textGrey)}
                style={styles.headerTitle}>
                Dodaj przedmiot
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

              {/* <FlatList
              showsVerticalScrollIndicator={false}
              overScrollMode="never"
              style={styles.flatListStyle}
              data={data}
              keyExtractor={item => item.name}
              renderItem={renderItem}
              ListEmptyComponent={renderEmpty}
              bounces
            /> */}
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
              <TouchableOpacity onPress={() => setModalVisible(false)}>
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
              </TouchableOpacity>
            </View>
            <FAB
              animated={false}
              style={styles.fab}
              icon={() => (
                <Icon
                  name="plus"
                  size={24}
                  color={theme.white}
                  style={styles.icon}
                />
              )}
              onPress={addItem}
              // theme={{colors: {accent: theme.primaryColor}}}
            />
          </View>
        </TouchableWithoutFeedback>
      </FadedModal>
    </>
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
    height: 200,
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  empty: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  flatListStyle: {
    margin: 0,
    padding: 0,
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
    position: 'absolute',
    backgroundColor: theme.secondaryColor,
    // margin: 16,
    right: 0,
    bottom: 0,
    height: 56,
    width: 56,
  },
});
