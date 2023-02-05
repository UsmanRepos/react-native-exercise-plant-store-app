import { View, Text, Image } from 'react-native';
import React from 'react';
import { COLORS, FONTS, SIZES } from '../constants';

const RequirementDetails = ({ icon, label, detail }) => {
  return (
    <View style={{ flexDirection: 'row', alignItems:'center' }}>
      <View
        style={{ flexDirection: 'row', flex: 1, alignItems: 'center' }}
      >
        <View
          style={{
            height: 50,
            width: 50,
            borderRadius: 25,
            borderWidth: 1,
            borderColor: COLORS.gray,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Image
            source={icon}
            resizeMode='contain'
            style={{
              width: 30,
              height: 30,
              tintColor: COLORS.secondary
            }}
          />
        </View>
        <Text style={{ ...FONTS.title, marginLeft: SIZES.base, color: COLORS.secondary }}>{label}</Text>
      </View>

      <View style={{ alignItems: "center" }}>
        <Text style={{ ...FONTS.h2, color: COLORS.gray }}>{detail}</Text>
      </View>

    </View>
  );
};

export default RequirementDetails;
