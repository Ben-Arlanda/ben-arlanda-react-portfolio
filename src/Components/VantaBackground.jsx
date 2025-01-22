import React, { useState, useEffect, useRef } from "react";
import * as THREE from "three";
import VANTA from "vanta/dist/vanta.fog.min";

const VantaFogBackground = () => {
	const [vantaEffect, setVantaEffect] = useState(null);
	const vantaRef = useRef(null);

	useEffect(() => {
		if (!vantaEffect) {
			setVantaEffect(
				VANTA({
					el: vantaRef.current,
					THREE,
					mouseControls: true,
					touchControls: true,
					gyroControls: false,
					minHeight: 200.0,
					minWidth: 200.0,
					highlightColor: 0xef7,
					midtoneColor: 0xfc2103,
					lowlightColor: 0x2e03fa,
					baseColor: 0x7,
					speed: 0.5,
				}),
			);
		}
		return () => {
			if (vantaEffect) vantaEffect.destroy();
		};
	}, [vantaEffect]);

	return (
		<div
			ref={vantaRef}
			className="fixed top-0 left-0 w-full h-screen"
			id="vanta-background"
		/>
	);
};

export default VantaFogBackground;
