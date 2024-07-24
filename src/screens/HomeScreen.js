import React, { useCallback, useState } from 'react';
import {View} from 'react-native';
import {Typography} from '../components/Typography'
import {Header} from '../components/Header/Header';
import { Button } from '../components/Button';
import { Spacer } from '../components/Spacer';
import { LottoNumberView } from '../components/LottoNumberView';
import { getRandomNumbers } from '../utils/Utils';
export const HomeScreen = (props)=>{
    const [numbers, setNumbers] = useState([]);

    const onPressGetNumber = useCallback(()=>{
        const result = getRandomNumbers();
        setNumbers(result);
        
    }, [])

    return (
        <View style={{flex:1}}>
            <Header>
                <Header.Group>
                    <Header.Title title='HOME'></Header.Title>
                </Header.Group>
            </Header>

            <View style={{flex:1,justifyContent:'center', paddingHorizontal:24 , flexDirection:'column' }}>

                <View style={{height:250, flexDirection:'column', paddingHorizontal:24, backgroundColor:'white' }}>
                    {numbers.length === 6 && ( 
                        <LottoNumberView numbers={numbers}/>
                    )} 
                    {/* length가 6일때만 보여주게 설정 */}
                </View>
 
                <Spacer space={20}/>
                <Button onPress={onPressGetNumber}>
                    <View  style={{backgroundColor:'black', paddingVertical:24, alignItems:'center',}} >
                        <Typography color={'white'} fontSize={18}>로또 번호 추출하기</Typography>
                    </View>
                </Button>
            </View>
        </View>
    )
}