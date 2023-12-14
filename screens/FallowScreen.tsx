import { StyleSheet, Text, View,SafeAreaView,FlatList,Image, ScrollView,Dimensions } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const FallowScreen = () => {

    const items = [
        {
            id:1,
            name:'Arma 3',
            url:require('../assets/Images/follows-cart.png'),
            wiewer:1400
        },
        {
            id:2,
            name:'Arma 3',
            url:require('../assets/Images/follows-cart.png'),
            wiewer:1400
        },
        {
            id:3,
            name:'Arma 3',
            url:require('../assets/Images/follows-cart.png'),
            wiewer:1400
        },
        {
            id:4,
            name:'Arma 3',
            url:require('../assets/Images/follows-cart.png'),
            wiewer:1400
        },
        {
            id:5,
            name:'Arma 3',
            url:require('../assets/Images/follows-cart.png'),
            wiewer:1400
        },
        {
            id:6,
            name:'Arma 3',
            url:require('../assets/Images/follows-cart.png'),
            wiewer:1400
        },
        {
            id:7,
            name:'Arma 3',
            url:require('../assets/Images/follows-cart.png'),
            wiewer:1400
        },
        {
            id:8,
            name:'Arma 3',
            url:require('../assets/Images/follows-cart.png'),
            wiewer:1400
        },
    ]

  return (
    <SafeAreaView style={{backgroundColor:'white', flex:1,paddingHorizontal:8}}>
        <View style={{flex:1}}>
            <Text style={{fontWeight:'bold', fontSize:38}}>
                Takip Ediliyor
            </Text>
        </View>
        <View style={{flex:3, gap:15}}>
            <Text style={{fontSize:17}}>
                TAKİP EDİLEN KATEGORİLER
            </Text>
            <FlatList
                data={items}
                renderItem={({item}) => <Item id={item.id} name={item.name} url={item.url} wiewer={item.wiewer}/>}
                keyExtractor={item=> item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
            />

        </View>
        <View style={{flex:4}}>
            <Text style={{fontSize:18, fontWeight:'bold'}}>ÖNERİLEN KANALLAR</Text>
            <ScrollView
            showsVerticalScrollIndicator={false}
            >
                <ChannelItem/>
                <ChannelItem/>
                <ChannelItem/>
                <ChannelItem/>
                <ChannelItem/>
                <ChannelItem/>
                <ChannelItem/>
            </ScrollView>
        </View>
    </SafeAreaView>
  )
}

type ItemProps = {name: string,id:number,url:string,wiewer:number};

function Item ({id,name,url,wiewer} : ItemProps){
    function formatNumberToShortString(number:number) {
        const suffixes = ['', 'K', 'M', 'B', 'T'];
        const tier = Math.log10(Math.abs(number)) / 3 | 0;
      
        if (tier === 0) return number;
      
        const suffix = suffixes[tier];
        const scale = Math.pow(10, tier * 3);
        const scaled = number / scale;
      
        return scaled.toFixed(1) + suffix;
    }

    return(
        <View key={id} style={{marginHorizontal:10}}>
            <Image source={url} style={{width:100, height:150}}/>
            <Text style={{fontWeight:'bold'}}>{name}</Text>
            <View style={{flexDirection:'row', alignItems:'center'}}>
                <View style={{width:10, height:10, backgroundColor:'red', borderRadius:6}}></View>
                <Text style={{opacity:0.6}}>{formatNumberToShortString(wiewer)}</Text>
            </View>
        </View>
    )
}

function ChannelItem(){
    return(
        <View style={{flexDirection:'row', height:windowHeight*0.1 ,gap:8,marginTop:4}}>
            <View style={{flex:1}}>
                <Image source={require('../assets/Images/banner.png')}/>
            </View>
            <View style={{flex:3}}>
                <View style={{flexDirection:'row',gap:4}}>
                    <Image source={require('../assets/Images/pp-online.png')} style={{width:22, height:22}}/>
                    <Text style={{fontSize:16, fontWeight:'bold'}}>Ozer SUBASI</Text>
                </View>
                <Text>Lorem ipsum dolor sit amet</Text>
                <Text>Sadece Sohbet</Text>
                <View style={{backgroundColor:'rgba(130,130,130,0.3)', width:windowWidth*0.14,alignItems:'center',borderRadius:10}}>
                    <Text style={{opacity:0.5}}>Latince</Text>
                </View>
            </View>
            <View>
                <Entypo name="dots-three-vertical" size={20} color="black" />
            </View>
        </View>
    )
}

export default FallowScreen