import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

const MyComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make a GET request to the API endpoint
        const response = await axios.get('https://rapidapi.com/freshdata-freshdata-default/api/fresh-linkedin-profile-data');
        // Set the data state with the response data
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Call the fetchData function when the component mounts
  }, []); // Pass an empty dependency array to useEffect to run it only once

  return (
    <View>
      {data ? (
        <Text>{JSON.stringify(data)}</Text> // Display the fetched data
      ) : (
        <Text>Loading...</Text> // Show a loading indicator while fetching data
      )}
    </View>
  );
};

export default MyComponent;
