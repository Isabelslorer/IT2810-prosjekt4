import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, ImageSourcePropType } from 'react-native';
import { Card, ListItem, Button } from 'react-native-elements';
import { IRestaurant } from '../../backend/models/Restaurant';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from 'react-redux';
import { stateType } from '../pages/HomeScreen';
import { fetchRestaurants } from '../store/ducks/restaurantDuck';
import axios from 'axios';


type Props = {
    restaurant: IRestaurant
    navigation: any
  }

export const Restaurantobject: React.FC<Props> = ({ restaurant, navigation }) => {
  const dispatch = useDispatch();

  
    // Gets all the states from redux that is needed to fetch the correct restaurants
    const regionFilter = useSelector((state: stateType)  => state.regionFilter)
    const cuisineFilter = useSelector((state: stateType)  => state.cuisineFilter)
    const priceFilter = useSelector((state: stateType)  => state.priceFilter)
    const search = useSelector((state: stateType)  => state.search)
    const sortBy = useSelector((state: stateType)  => state.sorting)
    const skip = useSelector((state: stateType) => state.skip)
  
    useEffect(() => {
      dispatch(
          fetchRestaurants(skip, regionFilter, cuisineFilter, priceFilter, search, sortBy.sortBy, sortBy.ascending)
      );
    }, [fetchRestaurants, regionFilter, cuisineFilter, priceFilter, search, sortBy, skip])



    const restaurantnames: string[] = [
        "American", "Asian", "Classic cuisine", "Contemporary", 
        "Creative", "European contemporary", "Indian", "Italian", "Japanese",
        "Korean", "Market cuisine", "Modern cuisine", "Vegetarian"
      ]

    let image_path: ImageSourcePropType = require('../images/Default.jpg');
  
      if(restaurant.cuisine == 'American'){
          image_path = require('../images/American.jpg');
        }
      else if(restaurant.cuisine == 'Asian'){
          image_path = require('../images/Asian.jpg');
        }
      else if(restaurant.cuisine === 'Classic cuisine'){
        image_path = require('../images/Classic_cuisine.jpg');
      }
      else if(restaurant.cuisine === 'Contemporary'){
        image_path = require('../images/Contemporary.jpg');
      }
      else if(restaurant.cuisine === 'Creative'){
        image_path = require('../images/Creative.jpg');
      }
      else if(restaurant.cuisine === 'European contemporary'){
        image_path = require('../images/European_contemporary.jpg');
      }
      else if(restaurant.cuisine === 'Indian'){
        image_path = require('../images/Indian.jpg');
      }
      else if(restaurant.cuisine === 'Italian'){
        image_path = require('../images/Italian.jpg');
      }
      else if(restaurant.cuisine === 'Japanese'){
        image_path = require('../images/Japanese.jpg');
      }
      else if(restaurant.cuisine === 'Korean'){
        image_path = require('../images/Korean.jpg');
      }
      else if(restaurant.cuisine === 'Market cuisine'){
        image_path = require('../images/Market_cuisine.jpg');
      }
      else if(restaurant.cuisine == 'Modern cuisine'){
        image_path = require('../images/Modern_cuisine.jpg');
      }
      else if(restaurant.cuisine === 'Vegetarian'){
        image_path = require('../images/Vegetarian.jpg');
      }

    return(
     <Card>
         <Card.Title>{restaurant.name}</Card.Title>
         <Card.Divider/>
         <View style={styles.container} >
         <Image source={image_path} style={{width:170, height:100}}></Image>
         <View>
         <Text style={styles.text}>{restaurant.region}</Text>
         <Text style={styles.text}>{restaurant.cuisine}</Text>
         <Text style={styles.text}>{restaurant.price}</Text>
         </View>
         </View>
         <Button 
          style={styles.button}
          onPress={() => 
            navigation.navigate('Restaurant', restaurant.name)} 
            title={"More information"}
            icon={
              <Icon
                name="chevron-right"
                size={14}
                style={{padding: 5, paddingTop: 8}}
                color="black"
              />}
            iconRight
            type="outline"
            titleStyle={ {fontSize: 15}} />
    </Card>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row"
      },
    text: {
        paddingLeft: 18,
        paddingTop: 15
    },
    button: {
      marginTop: 10,
    }
})
