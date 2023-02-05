import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { COLORS, FONTS, SIZES, images, icons } from '../constants'
import { RequirementBar, RequirementDetails } from '../components'
import { TouchableOpacity } from 'react-native-gesture-handler';


const PlantDetail = ({ navigation }) => {

  const renderHeader = () => {
    return (
      <View
        style={{
          position: 'absolute',
          top: 50,
          left: SIZES.padding,
          right: SIZES.padding
        }}
      >
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              style={{
                width: 40,
                height: 40,
                backgroundColor: 'rgba(255,255,255,.5)',
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center'
              }}
              onPress={() => navigation.goBack()}
            >
              <Image
                source={icons.back}
                resizeMode='contain'
                style={{
                  width: 20,
                  height: 20
                }}
              />

            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'flex-end'
            }}
          >
            <Image
              source={icons.focus}
              resizeMode='contain'
              style={{
                width: 25,
                height: 25
              }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{ flexDirection:'row', marginTop:'10%'}}
        >
          <View style={{ flex:1 }}>
            <Text style={{ ...FONTS.largeTitle, color:COLORS.white }}>Galory Mantos</Text>
          </View>
          <View style={{ flex:1 }}></View>
        </View>
      </View>
    );
  };

  const renderRequirementsBar = () => {
    return (
      <View
        style={{
          flexDirection: 'row', marginTop: SIZES.padding,
          paddingHorizontal: SIZES.padding, justifyContent: 'space-between'
        }}
      >
        <RequirementBar
          icon={icons.sun}
          barPercentage={'50%'}
        />
        <RequirementBar
          icon={icons.drop}
          barPercentage={'25%'}
        />
        <RequirementBar
          icon={icons.temperature}
          barPercentage={'80%'}
        />
        <RequirementBar
          icon={icons.garden}
          barPercentage={'30%'}
        />
        <RequirementBar
          icon={icons.seed}
          barPercentage={'50%'}
        />

      </View>
    );
  };

  const renderRequirements = () => {
    return (
      <View
        style={{
          flex: 2.5, marginTop: SIZES.padding, paddingHorizontal: SIZES.padding,
          justifyContent: 'space-around'
        }}
      >
        <RequirementDetails
          icon={icons.sun}
          label="Sunlight"
          detail="15°C"
        />
        <RequirementDetails
          icon={icons.drop}
          label="Water"
          detail="250 ML Daily"
        />
        <RequirementDetails
          icon={icons.temperature}
          label="Room Temprature"
          detail="25°C"
        />
        <RequirementDetails
          icon={icons.garden}
          label="Soil"
          detail="3 kg"
        />
        <RequirementDetails
          icon={icons.seed}
          label="Fertilizer"
          detail="150 Mg"
        />
      </View>
    );
  };

  const renderFooter = () => {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          paddingTop:SIZES.padding,
        }}
      >
        <TouchableOpacity
          style={{
            flex: 1,
            flexDirection: 'row',
            paddingHorizontal: SIZES.padding,
            justifyContent: 'center',
            alignItems: 'center',
            borderTopRightRadius: 30,
            borderBottomRightRadius: 30,
            backgroundColor: COLORS.primary
          }}
        >
          <Text style={{...FONTS.h2, color: COLORS.white }}>Take Action</Text>
          <Image
            source={icons.chevron}
            resizeMode='contain'
            style={{
              width: 20,
              height: 20,
              marginLeft: SIZES.padding
            }}
          />
        </TouchableOpacity>

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: SIZES.padding
          }}
        >
          <Text style={{ flex: 1, ...FONTS.h3, color: COLORS.secondary }}>Almost 2 Weeks Of Growing Time</Text>
          <Image
            source={icons.downArrow}
            resizeMode='contain'
            style={{
              width: 20,
              height: 20,
              tintColor: COLORS.secondary,
              marginLeft: SIZES.base
            }}
          />
        </View>
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      {/* Banner Image */}
      <View
        style={{ height: '35%' }}
      >
        <Image
          source={images.bannerBg}
          resizeMode='cover'
          style={{
            width: '100%',
            height: '100%'
          }}
        />
      </View>

      {/* Requirements */}
      <View
        style={{
          flex: 1, marginTop: -40, borderTopLeftRadius: 40,
          borderTopRightRadius: 40, backgroundColor: COLORS.lightGray,
          paddingVertical: SIZES.padding
        }}
      >
        <Text style={{ marginLeft: SIZES.padding, color: COLORS.secondary, ...FONTS.h1 }}>Requirement's</Text>
        {renderRequirementsBar()}
        {renderRequirements()}
        {renderFooter()}
      </View>
      {renderHeader()}
    </View>
  );
};

export default PlantDetail;

const styles = StyleSheet.create({});
