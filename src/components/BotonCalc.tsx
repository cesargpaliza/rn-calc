import React from 'react'
import { View , Text, TouchableOpacity} from 'react-native'
import { styles } from './../theme/appTheme'

interface Props{
    texto: string,
    color?: string,
    ancho?: boolean,
    accion: (numeroTexto: string) => void,
}


export const BotonCalc = ( {texto, color = '#BDC3C7', ancho= false, accion} : Props  ) => {
    return (
        <TouchableOpacity onPress={ () => accion(texto) }>
            <View style={{
                ...styles.boton, 
                backgroundColor: color,
                width: (ancho)? 170 : 80
            }}>
                <Text style={{...styles.botonTexto,
                    color: (color==='#BDC3C7')? '#2C3E50' : '#E2E8F0'
                }}>{texto}</Text>
            </View>            
        </TouchableOpacity>
    )
}
