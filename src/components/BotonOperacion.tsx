import { Pressable, Text, StyleSheet, Vibration } from "react-native";
import { GlobalStyles } from "../themes/GlobalStyles";
import { Color } from "../themes/color";

interface Props {
  label: string;
  width: number;
  type?: "number" | "operator" | "utility"; // Tipo de botón
  onPress?: () => void; // Función al pulsar
}

export const BotonOperacion = ({ label, width, type = "number", onPress }: Props) => {
  // Manejo de la vibración
  const handlePress = () => {
    if (onPress) {
      Vibration.vibrate(50); // Vibración durante 50ms
      onPress();
    }
  };

  // Definición del estilo dinámico según el tipo de botón
  const styleType = 
    type === "number"
      ? { backgroundColor: Color.darkGray, color: Color.textPrimary }
      : type === "operator"
      ? { backgroundColor: Color.orange, color: Color.textPrimary }
      : { backgroundColor: Color.ligthGray, color: Color.textPrimary };

  return (
    <Pressable onPress={handlePress}>
      <Text
        style={[
          GlobalStyles.boton,
          { width, backgroundColor: styleType.backgroundColor, color: styleType.color }
        ]}
      >
        {label}
      </Text>
    </Pressable>
  );
};
