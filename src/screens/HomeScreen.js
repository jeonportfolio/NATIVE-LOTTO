import React, { useCallback } from "react";
import { View } from "react-native";
import { Header } from '../components/Header/Header';
import { HeaderTitle } from "../components/Header/HeaderTitle";
import { Spacer } from "../components/Spacer";
import { Typography } from "../components/Typography";
import { Button } from '../components/Button'

export const HomeScreen  = (props) => {
    const onPressGetNumber = useCallback (() => {

    },[])
    
    return(
        <View style={{flex:1}}>
            <Header>
                <HeaderTitle title= 'HOME' alignItems='center'></HeaderTitle>
            </Header>

            <View style={{flex:1,flexDirection:'column' ,justifyContent:'center', paddingHorizontal:24}}>
                    <View style={{
                        height:250, 
                        flexDirection: 'column', 
                        paddingHorizontal:24, 
                        backgroundColor:'white',
                        borderColor:'gray'
                    }}>

                        <View style={{ flex:1, flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                                {[1,2,3,4,5,6].map((item)=> {
                                        return (
                                            <View style={{
                                                backgroundColor:'black', 
                                                width:40, 
                                                borderRadius:20, 
                                                alignItems:'center', 
                                                justifyContent:'center'
                                            }}>
                                                <Typography fontSize={20} color='white'>
                                                     {item}
                                                </Typography>

                                            </View>
                                        )
                                })}
                        </View>
                        <Spacer space={20}/>

                        <Button onPress = {onPressGetNumber}> 
                                <View style={{backgroundColor:'black', paddingVertical:24,alignItems:'center'}}>
                                        <Typography color='white' fontSize={18}>로또 번호 추출하기 </Typography>
                                </View>
                        </Button>
                    </View>
            </View>
        </View>
    );
}