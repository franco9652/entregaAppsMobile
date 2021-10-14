import React, { useEffect, useState } from 'react'
import { View, Text, Button } from 'react-native';


export const Home = () => {

    const [actividad, setActividad] = useState([]);

    const llamarApi=async()=>{
        let resp = await fetch("https://www.boredapi.com/api/activity")        
        let respJson= await resp.json()        
        setActividad(respJson["activity"]);
    }

    const NuevaActividad=()=>{
        llamarApi();
    }
    
    useEffect(() => {
        llamarApi();     
    }, [])
   
    return (
            
                <View style={{marginTop: 10}}>   
                    <View style={{marginLeft:15}}>
                        <Text style={{ justifyContent: 'center', alignContent:'center', fontSize:40,
                    fontWeight:'bold', marginBottom: 50}}>Actividades para no aburrirte</Text>
                    </View>
                    <View
                        style={{
                            height:380,
                            marginLeft:10,
                            marginRight: 10
                        }}
                    >  
                             
                                    <Button  
                                        title="Nueva actividad"
                                        onPress={NuevaActividad}                                        
                                    />
                                                                        
                                    <View>
                                        <Text style={{fontSize:20, marginTop:20}}>
                                            Actividad:
                                        </Text>
                                        
                                    </View>  
                                    <Text>
                                            {actividad}
                                    </Text>       
                        
                    </View>
                </View>                   
    )
}
