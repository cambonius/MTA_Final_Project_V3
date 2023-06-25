import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNPickerSelect from 'react-native-picker-select';

const stationsData = [
  { label: 'Station 1 (A)', value: 'Station 1', lines: '(A)' },
  { label: 'Station 2 (B)', value: 'Station 2', lines: '(B)' },
  { label: 'Station 3 (C)', value: 'Station 3', lines: '(C)' },
  // Add more station names as needed
];

const App = () => {
  const [selectedStation, setSelectedStation] = useState('');
  const [stations, setStations] = useState([]);

  useEffect(() => {
    retrieveStations();
  }, []);

  const retrieveStations = async () => {
    try {
      const storedStations = await AsyncStorage.getItem('stations');
      if (storedStations !== null) {
        setStations(JSON.parse(storedStations));
      }
    } catch (error) {
      console.log('Error retrieving stations:', error);
    }
  };

  const handleStationChange = (value) => {
    setSelectedStation(value);
  };

  const handleFormSubmit = async () => {
    if (selectedStation === '') {
      Alert.alert('Please select a station');
      return;
    }

    // Add the new station to the list
    const updatedStations = [...stations, selectedStation];
    setStations(updatedStations);

    try {
      // Store the updated stations in AsyncStorage
      await AsyncStorage.setItem('stations', JSON.stringify(updatedStations));
    } catch (error) {
      console.log('Error storing stations:', error);
    }

    // Clear the selected station
    setSelectedStation('');
  };

  const handleClearStations = async () => {
    // Clear all favorite stations
    setStations([]);

    try {
      // Remove stations from AsyncStorage
      await AsyncStorage.removeItem('stations');
    } catch (error) {
      console.log('Error clearing stations:', error);
    }
  };

  return (
    <View>
      <Text style={styles.heading}>Favorite NYC Subway Stations</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Select a station:</Text>
        <RNPickerSelect
          placeholder={{ label: 'Select a station...', value: null }}
          items={stationsData}
          value={selectedStation}
          onValueChange={handleStationChange}
          style={styles.input}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleFormSubmit}>
          <Text style={styles.buttonText}>Add Station</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={stations}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text style={styles.stationItem}>{item}</Text>}
      />

      {stations.length > 0 && (
        <TouchableOpacity style={styles.clearButton} onPress={handleClearStations}>
          <Text style={styles.buttonText}>Clear Stations</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = {
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  inputContainer: {
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  addButton: {
    backgroundColor: '#4287f5',
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 4,
  },
  clearButton: {
    backgroundColor: '#f54242',
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 4,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  stationItem: {
    fontSize: 16,
    marginBottom: 5,
    paddingHorizontal: 20,
  },
};

export default App;
