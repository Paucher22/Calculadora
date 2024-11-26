import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { PantallaUnificada } from './src/components/Pantalla';// Asegúrate de que esta ruta coincida con la de tu componente
import { BotonOperacion } from './src/components/BotonOperacion';
import { useCalculadora, Operadores } from './src/hooks/useCalculadora';
import { GlobalStyles } from './src/themes/GlobalStyles';

export default function App() {
  const {
    formula,
    numeroAnterior,
    construirNumero,
    clean,
    cambiarSigno,
    borrarDigito,
    establecerOperacion, // Nueva función unificada
    resultado,
  } = useCalculadora();

  return (
    <View style={GlobalStyles.container}>
      {/* Uso del nuevo componente PantallaUnificada */}
      <PantallaUnificada value={formula} numberOfLines={1} adjustsFontSizeToFit />

      {/* Validación sencilla para mostrar el número anterior */}
      <PantallaUnificada value={formula === numeroAnterior ? '' : numeroAnterior} numberOfLines={1} adjustsFontSizeToFit />

      <StatusBar style="auto" />

      <View style={GlobalStyles.fila}>
        <BotonOperacion label='C' width={80} onPress={clean} type="utility"></BotonOperacion>
        <BotonOperacion label='+/-' width={80} onPress={cambiarSigno} type="utility"></BotonOperacion>
        <BotonOperacion label='del' width={80} onPress={borrarDigito} type="utility"></BotonOperacion>
        <BotonOperacion label='/' width={80} onPress={() => establecerOperacion(Operadores.dividir)} type="operator"></BotonOperacion>
      </View>
      <View style={GlobalStyles.fila}>
        <BotonOperacion label='7' width={80} onPress={() => construirNumero('7')} type="number"></BotonOperacion>
        <BotonOperacion label='8' width={80} onPress={() => construirNumero('8')} type="number"></BotonOperacion>
        <BotonOperacion label='9' width={80} onPress={() => construirNumero('9')} type="number"></BotonOperacion>
        <BotonOperacion label='x' width={80} onPress={() => establecerOperacion(Operadores.multiplicar)} type="operator"></BotonOperacion>
      </View>
      <View style={GlobalStyles.fila}>
        <BotonOperacion label='4' width={80} onPress={() => construirNumero('4')} type="number"></BotonOperacion>
        <BotonOperacion label='5' width={80} onPress={() => construirNumero('5')} type="number"></BotonOperacion>
        <BotonOperacion label='6' width={80} onPress={() => construirNumero('6')} type="number"></BotonOperacion>
        <BotonOperacion label='-' width={80} onPress={() => establecerOperacion(Operadores.restar)} type="operator"></BotonOperacion>
      </View>
      <View style={GlobalStyles.fila}>
        <BotonOperacion label='1' width={80} onPress={() => construirNumero('1')} type="number"></BotonOperacion>
        <BotonOperacion label='2' width={80} onPress={() => construirNumero('2')} type="number"></BotonOperacion>
        <BotonOperacion label='3' width={80} onPress={() => construirNumero('3')} type="number"></BotonOperacion>
        <BotonOperacion label='+' width={80} onPress={() => establecerOperacion(Operadores.sumar)} type="operator"></BotonOperacion>
      </View>
      <View style={GlobalStyles.fila}>
        <BotonOperacion label='0' width={180} onPress={() => construirNumero('0')} type="number"></BotonOperacion>
        <BotonOperacion label='.' width={80} onPress={() => construirNumero('.')} type="number"></BotonOperacion>
        <BotonOperacion label='=' width={80} onPress={resultado} type="operator"></BotonOperacion>
      </View>
    </View>
  );
}
