import {
  BackHandler,
  Modal,
  StyleSheet,
  View,
  TouchableOpacity,
  StyleProp,
  Platform,
} from 'react-native';
import React, {FC, useCallback} from 'react';
import {observer} from 'mobx-react';
import {useFocusEffect} from '@react-navigation/native';
import * as Material from 'react-native-vector-icons/MaterialCommunityIcons';

// import colors from '../theme/colors';
const Icon = Material.default;

export const FadedModal = ({
  modalVisible,
  setModalVisible,
  children,
  contentStyle,
}) => {
  const IS_IOS = Platform.OS === 'ios';

  const handleBackButton = () => {
    setModalVisible(false);
    return true;
  };

  useFocusEffect(
    useCallback(() => {
      BackHandler.addEventListener('hardwareBackPress', handleBackButton);
      return () => {
        BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
      };
    }, []),
  );

  return IS_IOS ? (
    <Modal
      animationType="fade"
      transparent
      visible={modalVisible}
      statusBarTranslucent>
      <View style={styles.fadeModal} />
      <Modal
        animationType="slide"
        transparent
        statusBarTranslucent
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.transaprentView}
            onPress={() => setModalVisible(false)}
          />
          <View style={[styles.modalView, contentStyle]}>{children}</View>
        </View>
      </Modal>
    </Modal>
  ) : (
    <Modal
      animationType="slide"
      transparent
      statusBarTranslucent
      visible={modalVisible}
      onRequestClose={() => setModalVisible(!modalVisible)}>
      <Modal
        animationType="fade"
        transparent
        visible={modalVisible}
        statusBarTranslucent>
        <View style={styles.fadeModal} />
      </Modal>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.transaprentView}
          onPress={() => setModalVisible(false)}
        />
        <View style={[styles.modalView, contentStyle]}>{children}</View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    zIndex: 1000,
  },
  fadeModal: {
    backgroundColor: 'rgba(0,0,0,0.38)',
    flex: 1,
    zIndex: 1000,
  },
  modalView: {
    backgroundColor: 'white',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    flexDirection: 'row',
    padding: 16,
    zIndex: 1000,
  },
  transaprentView: {
    flex: 1,
    zIndex: 10,
  },
});
