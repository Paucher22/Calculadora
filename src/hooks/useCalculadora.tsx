import { useRef, useState, useEffect } from "react";

export enum Operadores {
  sumar = "+",
  restar = "-",
  multiplicar = "*",
  dividir = "/"
}

export const useCalculadora = () => {
  const [formula, setFormula] = useState("0");
  const [numero, setNumero] = useState("0");
  const [numeroAnterior, setNumeroAnterior] = useState("0");

  const UltimaOperacion = useRef<Operadores>();

  useEffect(() => {
    if (UltimaOperacion.current) {
      const primeraParteFormula = formula.split(" ").at(0);
      setFormula(`${primeraParteFormula} ${UltimaOperacion.current} ${numero}`);
    } else {
      setFormula(numero);
    }
  }, [numero]);

  useEffect(() => {
    const resultado = calcularResultado();
    setNumeroAnterior(`${resultado}`);
  }, [formula]);

  const clean = () => {
    setFormula("0");
    setNumero("0");
    setNumeroAnterior("0");
    UltimaOperacion.current = undefined;
  };

  const cambiarSigno = () => {
    if (numero.includes("-")) {
      return setNumero(numero.replace("-", ""));
    } else {
      return setNumero("-" + numero);
    }
  };

  const borrarDigito = () => {
    let signo = "";
    let numeroTemporal = numero;

    if (numero.includes("-")) {
      signo = "-";
      numeroTemporal = numero.substring(1);
    }
    if (numeroTemporal.length > 1) {
      return setNumero(signo + numeroTemporal.slice(0, -1));
    } else {
      return setNumero("0");
    }
  };

  const establecerUltimoNumero = () => {
    resultado();
    if (numero.endsWith(".")) {
      setNumeroAnterior(numero.slice(0, -1));
    }
    setNumeroAnterior(numero);
    setNumero("0");
  };

  // Unificación de operaciones
  const establecerOperacion = (operador: Operadores) => {
    establecerUltimoNumero();
    UltimaOperacion.current = operador; // Guardamos el último operador
  };

  const calcularResultado = () => {
    const [primerValor, operacion, segundoValor] = formula.split(" ");

    const num1 = Number(primerValor);
    const num2 = Number(segundoValor);

    if (isNaN(num2)) return num1; 

    // Realización del cálculo según el operador
    switch (operacion) {
      case Operadores.sumar:
        return num1 + num2;

      case Operadores.restar:
        return num1 - num2;

      case Operadores.multiplicar:
        return num1 * num2;

      case Operadores.dividir:
        return num1 / num2;

      default:
        throw new Error(`La operación ( ${operacion} ) no está implementada `);
    }
  };

  const resultado = () => {
    const resultado = calcularResultado();
    setFormula(`${resultado}`);
    UltimaOperacion.current = undefined; 
    setNumeroAnterior("0");
  };

  const construirNumero = (teclaNumero: string) => {
    if (numero.includes(".") && teclaNumero === ".") return;

    if (numero.startsWith("0") || numero.startsWith("-0")) {
      if (teclaNumero === ".") {
        return setNumero(numero + teclaNumero);
      }

      if (teclaNumero === "0" && numero.includes(".")) {
        return setNumero(numero + teclaNumero);
      }
      if (teclaNumero !== "0" && !numero.includes(".")) {
        return setNumero(teclaNumero);
      }
      if (teclaNumero === "0" && !numero.includes(".")) {
        return;
      }
    }
    return setNumero(numero + teclaNumero);
  };

  return {
    formula,
    numero,
    numeroAnterior,
    construirNumero,
    clean,
    cambiarSigno,
    borrarDigito,
    establecerOperacion, // Método unificado para operaciones
    calcularResultado,
    resultado,
  };
};
