import { View, Text, Image } from 'react-native';
import React from 'react';
import { COLORS, SIZES } from '../constants';

const RequirementBar = ({ icon, barPercentage }) => {
    return (
        <View style={{ height: 60, alignItems: 'center' }}>
            <View
                style={{
                    height: 50,
                    width: 50,
                    borderRadius: 10,
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

            {/* Bar */}
            <View
                style={{
                    position:'absolute',
                    left:0,
                    bottom:0,
                    width:'100%',
                    borderWidth:3,
                    borderColor:COLORS.gray,
                    marginTop:SIZES.base

                }}
            ></View>

<View
                style={{
                    position:'absolute',
                    left:0,
                    bottom:0,
                    width:barPercentage,
                    borderWidth:3,
                    borderColor:COLORS.primary,
                    marginTop:SIZES.base

                }}
            ></View>
        </View>
    );
};

export default RequirementBar;
