import { StyleSheet } from 'react-native'


export const styles = StyleSheet.create({
    fondo: {
        flex:1,
        backgroundColor: '#303030',
    },
    CalculadoraContainer: {
        flex: 1,
        paddingHorizontal: 20,
        padding: 10,
        justifyContent: 'flex-end',
    },
    resultado: {
        color: '#fff',
        fontSize: 65,
        textAlign: 'right',
        marginBottom: 20,
    },
    resultadoMenor: {
        color: '#BDC3C7',
        fontSize: 30,
        textAlign: 'right',
    },
    fila: {
        flexDirection:'row',
        justifyContent: 'center',
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    boton: {
        height: 80,
        width: 80,
        backgroundColor: '#c8323c',
        borderRadius: 100,
        justifyContent: 'center',  
        marginHorizontal: 5,      
    },
    botonTexto: {
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        color: '#eee',
        fontWeight: '400'
    },
    


})


/*
#44d62c
#fff
#44d62c
#28aadc
#ffc107
#c8323c
#eee
#222
*/