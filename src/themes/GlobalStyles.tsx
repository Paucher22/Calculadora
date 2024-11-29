import { StyleSheet } from "react-native";
import { Color } from "./Color";
export const GlobalStyles = StyleSheet.create({

    
    boton: {
        width: 80,
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        fontWeight: 300,
        borderColor: Color.granate,
        borderWidth: 2,
        borderRadius: 150,
        
    },

    pantallaPrincipal: {
        fontSize: 70,
        textAlign: 'right',
        fontWeight:400,
        width: '90%',
        color: Color.textPrimary
    },

    container: {
        flex: 1,
        backgroundColor: Color.negro,
        alignItems:  'center',
        justifyContent: 'flex-end',
        paddingBottom:20,
    },

    fila: {
        flexDirection: 'row',
        justifyContent: "space-around",
        marginBottom:16,
        paddingHorizontal:10,
        width: '100%',
      }

})

