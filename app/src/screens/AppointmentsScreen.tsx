import AsyncStorage from '@react-native-community/async-storage';
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, Paragraph, Button, Badge } from 'react-native-paper';
import { FlatGrid } from 'react-native-super-grid';

export default class AppointmentsScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      appointments: [
        {
          date: '05-03-2020',
          slot: '10:00 AM',
          name: 'Anshad Vattapoyil',
          email: 'anshad.musafir@gmail.com',
          mobile: '8050020094',
          place: 'Electronic City'
        },
        {
          date: '05-03-2020',
          slot: '11:00 AM',
          name: 'Anshad Vattapoyil',
          email: 'anshad.musafir@gmail.com',
          mobile: '8050020094',
          place: 'Electronic City'
        },
        {
          date: '05-03-2020',
          slot: '11:30 AM',
          name: 'Anshad Vattapoyil',
          email: 'anshad.musafir@gmail.com',
          mobile: '8050020094',
          place: 'Electronic City'
        }
      ]
    };
  }

  componentDidMount() {
    AsyncStorage.getItem('token').then(token => {
      if (token !== null) {
        // navigate
      }
    });
  }

  render() {
    return (
      <View style={this.styles.gridView}>
        <FlatGrid
          itemDimension={250}
          items={this.state.appointments}
          renderItem={({ item, index }) => (
            <Card key={index}>
              <Card.Title titleStyle={this.styles.itemName} title={item.name} />

              <Card.Content>
                <Paragraph>Date:{item.date}</Paragraph>
                <Paragraph>
                  Slot:<Badge>{item.slot}</Badge>
                </Paragraph>
                <Paragraph>Place:{item.place}</Paragraph>
                <Paragraph>Contact:{item.mobile}</Paragraph>
              </Card.Content>

              <Card.Actions>
                <Button>Approve</Button>
                <Button>Reject</Button>
              </Card.Actions>
            </Card>
          )}
        />
      </View>
    );
  }

  styles = StyleSheet.create({
    itemDetails: {
      flex: 1.5,
      alignSelf: 'center'
    },
    gridView: {
      marginTop: 20,
      flex: 1
    },
    itemContainer: {
      backgroundColor: '#4B8BF5',
      justifyContent: 'flex-end',
      borderRadius: 5,
      padding: 10,
      height: 250
    },
    itemName: {
      textTransform: 'capitalize'
    }
  });
}
