import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import { COLORS, SIZES, FONTS, icons, images } from '../constants';


const Home = ({ navigation }) => {

  const [newPlants, setNewPlants] = useState([
    {
      id: 0,
      name: "Plant 1",
      img: images.plant1,
      favourite: false,
    },
    {
      id: 1,
      name: "Plant 2",
      img: images.plant2,
      favourite: true,
    },
    {
      id: 2,
      name: "Plant 3",
      img: images.plant3,
      favourite: false,
    },
    {
      id: 3,
      name: "Plant 4",
      img: images.plant4,
      favourite: false,
    },
  ]);

  const [friendList, setFriendList] = useState([
    {
      id: 0,
      img: images.profile1,
    },
    {
      id: 1,
      img: images.profile2,
    },
    {
      id: 2,
      img: images.profile3,
    },
    {
      id: 3,
      img: images.profile4,
    },
    {
      id: 4,
      img: images.profile5,
    },
  ]);


  const renderNewPlants = ({ item, index }) => {
    return (
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginHorizontal: SIZES.base
        }}
      >
        <Image
          source={item.img}
          resizeMode='cover'
          style={{
            width: SIZES.width * 0.23,
            height: "82%",
            borderRadius: 15
          }}
        />
        <View
          style={{
            position: 'absolute',
            right: 0,
            bottom: "17%",
            backgroundColor: COLORS.primary,
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
            paddingHorizontal: SIZES.base
          }}
        >
          <Text style={{ ...FONTS.body4, color: COLORS.white }}>{item?.name}</Text>
        </View>

        <TouchableOpacity
          style={{
            position: 'absolute',
            top: "13%",
            left: 7
          }}
        >
          <Image
            source={item.favourite ? icons.heartRed : icons.heartGreenOutline}
            resizeMode='contain'
            style={{
              width: 20,
              height: 20
            }}
          />
        </TouchableOpacity>
      </View>
    );
  };

  const renderFriendsComponent = () => {
    if (friendList.length == 0) {
      return (
        <View></View>
      );
    } else if (friendList.length <= 3) {
      return (
        friendList.map((item, index) => (
          <View
            key={`friend-${index}`}
            style={index == 0 ? {} : { marginLeft: -20 }}>
            <Image
              source={item.img}
              resizeMode='cover'
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                borderWidth: 3,
                borderColor: COLORS.primary
              }}
            />
          </View>
        ))
      )
    } else {
      return (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          {friendList.map((item, index) => {
            if (index <= 2) {
              return (
                <View
                  key={`friend-${index}`}
                  style={index == 0 ? {} : { marginLeft: -20 }}>
                  <Image
                    source={item.img}
                    resizeMode='cover'
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: 25,
                      borderWidth: 3,
                      borderColor: COLORS.primary
                    }}
                  />
                </View>
              )
            }
          })}

          <Text style={{ ...FONTS.body3, color: COLORS.secondary, marginLeft: 5 }}>+{friendList.length - 3} More</Text>
        </View>
      )
    }
  };

  return (
    <View
      style={{
        flex: 1
      }}
    >
      {/* New Plants */}
      <View
        style={{ height: "30%", backgroundColor: COLORS.white }}
      >
        <View
          style={{
            flex: 1,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            backgroundColor: COLORS.primary
          }}
        >
          <View
            style={{
              flex: 1,
              marginTop: SIZES.padding * 2,
              marginHorizontal: SIZES.padding
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <Text style={{ ...FONTS.h2, color: COLORS.white }}>New Plant's</Text>
              <TouchableOpacity>
                <Image
                  source={icons.focus}
                  resizeMode='contain'
                  style={{
                    width: 20,
                    height: 20
                  }}
                />
              </TouchableOpacity>
            </View>

            <View style={{ flex: 1, marginTop: SIZES.base }}>
              <FlatList
                horizontal
                data={newPlants}
                keyExtractor={item => `NewPlant-${item.id}`}
                showsHorizontalScrollIndicator={false}
                renderItem={renderNewPlants}
              />
            </View>

          </View>
        </View>
      </View>

      {/* Today's Share */}
      <View
        style={{ height: "50%", backgroundColor: COLORS.lightGray }}
      >
        <View
          style={{
            flex: 1,
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
            backgroundColor: COLORS.white
          }}
        >
          <View
            style={{
              flex: 1,
              marginTop: SIZES.radius * 1.5,
              marginHorizontal: SIZES.padding
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <Text style={{ ...FONTS.h2, color: COLORS.secondary }}>Today's Share</Text>
              <TouchableOpacity>
                <Text style={{ ...FONTS.body3, color: COLORS.secondary }}>See All</Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                height: "88%",
                marginTop: SIZES.base,
                flexDirection: 'row'
              }}
            >
              <View style={{ flex: 1 }}>
                <TouchableOpacity
                  style={{ flex: 1 }}
                  onPress={() => navigation.navigate("plantDetail")}
                >
                  <Image
                    source={images.plant5}
                    resizeMode='cover'
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: 20
                    }}
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  style={{ flex: 1, marginTop: SIZES.radius }}
                  onPress={() => navigation.navigate("plantDetail")}
                >
                  <Image
                    source={images.plant6}
                    resizeMode='cover'
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: 20
                    }}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ flex: 1.3 }}>
                <TouchableOpacity
                  style={{ flex: 1, marginLeft: SIZES.radius }}
                  onPress={() => navigation.navigate("plantDetail")}
                >
                  <Image
                    source={images.plant7}
                    resizeMode='cover'
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: 20
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>

      {/* Added Friend */}
      <View
        style={{ height: "20%", backgroundColor: COLORS.lightGray }}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: COLORS.lightGray
          }}
        >
          <View style={{
            flex: 1,
            marginTop: SIZES.radius,
            marginHorizontal: SIZES.padding
          }}>
            <Text style={{ ...FONTS.h2, color: COLORS.secondary }}>Added Friend's</Text>
            <Text style={{ ...FONTS.body3, color: COLORS.secondary }}>5 Total</Text>

            <View style={{ flexDirection: 'row', height: '60%' }}>

              {/* Friends */}
              <View
                style={{
                  flex: 1.3,
                  flexDirection: 'row',
                  alignItems: 'center'
                }}
              >
                {renderFriendsComponent()}
              </View>

              {/* Add Friends */}
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                  alignItems: 'center'
                }}
              >
                <Text style={{ ...FONTS.body3, color: COLORS.secondary }}>Add New</Text>
                <TouchableOpacity
                  style={{
                    width: 40, height: 40, borderRadius: 10,
                    justifyContent: 'center', alignItems: 'center',
                    marginLeft: SIZES.base, backgroundColor: COLORS.gray
                  }}
                >
                  <Image
                    source={icons.plus}
                    resizeMode='contain'
                    style={{
                      width: 20,
                      height: 20
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
