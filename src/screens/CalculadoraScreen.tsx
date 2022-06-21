import React from 'react'
import { Text, View } from 'react-native';
import { BotonCalc } from '../components/BotonCalc';
import { styles } from './../theme/appTheme'
import { useCalculadora } from '../hooks/useCalculadora';



enum Operadores {
    sumar, restar, multiplicar, dividir
}

const CalculadoraScreen = () => {

    
    const {numero,
        numeroAnterior,
        limpiar,
        positivoNegativo,
        btnDel,
        btnDividir,
        armarNumero,
        btnMultiplicar,
        btnSumar,
        btnRestar,
        calcularResultado} = useCalculadora()


    return (
        <View style={styles.CalculadoraContainer}>
            { (numeroAnterior !== '0')
                && <Text style={styles.resultadoMenor}>{numeroAnterior}</Text>
            }
            
            <Text 
                style={styles.resultado}
                numberOfLines={ 1 }
                adjustsFontSizeToFit
            >
                { numero }
            </Text>
            
            <View style={styles.fila}>
                <BotonCalc texto='C'    accion={ limpiar } />
                <BotonCalc texto='+/-'  accion={ positivoNegativo } />
                <BotonCalc texto='del'  accion={ btnDel } />
                <BotonCalc texto='/' color='#2980B9' accion={ btnDividir } />
            </View>
            <View style={styles.fila}>
                <BotonCalc texto='7' color='#1C1917' accion={armarNumero}/>
                <BotonCalc texto='8' color='#1C1917' accion={armarNumero}/>
                <BotonCalc texto='9' color='#1C1917' accion={armarNumero}/>
                <BotonCalc texto='x' color='#2980B9' accion={ btnMultiplicar }/>
            </View>
            <View style={styles.fila}>
                <BotonCalc texto='4' color='#1C1917' accion={armarNumero}/>
                <BotonCalc texto='5' color='#1C1917' accion={armarNumero}/>
                <BotonCalc texto='6' color='#1C1917' accion={armarNumero}/>
                <BotonCalc texto='-' color='#2980B9' accion={ btnRestar }/>
            </View>
            <View style={styles.fila}>
                <BotonCalc texto='1' color='#1C1917' accion={armarNumero}/>
                <BotonCalc texto='2' color='#1C1917' accion={armarNumero}/>
                <BotonCalc texto='3' color='#1C1917' accion={armarNumero}/>
                <BotonCalc texto='+' color='#2980B9' accion={ btnSumar }/>
            </View>
            <View style={styles.fila}>
                <BotonCalc texto='0' color='#1C1917' accion={armarNumero} ancho/>
                <BotonCalc texto='.' color='#1C1917' accion={armarNumero} />
                <BotonCalc texto='=' color='#2980B9' accion={ calcularResultado } />
            </View>
        </View>
    )
}

export default CalculadoraScreen
