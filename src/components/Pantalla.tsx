import { Text, TextProps } from "react-native";
import { GlobalStyles } from "../themes/GlobalStyles";

interface Props extends TextProps {
  value: string; // Valor que mostrará la pantalla
}

export const PantallaUnificada = ({ value, ...rest }: Props) => {
  return (
    <Text style={GlobalStyles.pantallaPrincipal} {...rest}>
      {value}
    </Text>
  );
};
