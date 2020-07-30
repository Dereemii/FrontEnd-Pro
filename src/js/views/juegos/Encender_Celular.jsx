import React from "react";
import { JuegoUnoEncender } from "../../component/Tutorial_Encender_Telefono/JuegoUnoEncender";
import { JuegoDosEncender } from "../../component/Tutorial_Encender_Telefono/JuegoDosEncender";
import { JuegoTresEncender } from "../../component/Tutorial_Encender_Telefono/JuegoTresEncender";
import { JuegoCuatroEncender } from "../../component/Tutorial_Encender_Telefono/JuegoCuatroEncender";


export const Vista_Tutorial_Encender_Celular_Pregunta_Uno = () => {
	return (
		<>
			<JuegoUnoEncender/>
		</>
	)
};

export const Vista_Tutorial_Encender_Celular_Pregunta_Dos = () => {
	return (
		<>
			<JuegoDosEncender/>
		</>
	)
};

export const Vista_Tutorial_Encender_Celular_Pregunta_Tres = () => {
	return (
		<>
			<JuegoTresEncender/>
		</>
	)
};

export const Vista_Tutorial_Encender_Celular_Pregunta_Cuatro = () => {
	return (
		<>
			<JuegoCuatroEncender/>
		</>
	)
};
