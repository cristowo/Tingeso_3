import React, { useState, useEffect, useRef } from 'react';
import '../css/cronometro.css';

function Cronometro(props) {
  const [diff, setDiff] = useState(0);
  const [initial, setInitial] = useState(Date.now());
  const animationFrameRef = useRef(null);
  
  const tick = () => {
    if (props.isRunning) { // Verifica si el cronómetro está corriendo antes de actualizar el estado
      const newDiff = Date.now() - initial;
      setDiff(newDiff);
      props.setTiempo(timeFormat(newDiff)); // Aquí actualizas el tiempo en el padre
      animationFrameRef.current = requestAnimationFrame(tick);
    }
  };

  useEffect(() => {
    if (props.isRunning) {
      setInitial(Date.now());
      setDiff(0);
      tick();  // Iniciar el cronómetro cuando el componente se monta
    }
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [props.isRunning]); // isRunning se añade como dependencia del useEffect

  const timeFormat = (ms) => {
    const totalSeconds = Math.floor(ms / 1000);
    const totalMinutes = Math.floor(totalSeconds / 60);

    let hours = Math.floor(totalMinutes / 60);
    let minutes = totalMinutes % 60;
    let seconds = totalSeconds % 60;
    let centiseconds = Math.floor((ms % 1000) / 10);

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    centiseconds = centiseconds < 10 ? '0' + centiseconds : centiseconds;

    return `${hours}:${minutes}:${seconds}:${centiseconds}`;
  };

  return (
    <div className="cronometro">
      <div className="timer">{timeFormat(diff)}</div>
    </div>
  );
}
export default Cronometro;