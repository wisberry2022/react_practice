/**@jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as Emo from '../../../../styles/Styled';
import { useRef } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js';

const CanvasBox = () => {
  const meshRef = useRef(null);
  useFrame((state, delta) => {
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.02;
  });
  return (
    <>
      <OrbitControls autoRotate={true} />
      <mesh ref={meshRef}>
        <ambientLight intensity={1} />
        <directionalLight position={[4, 1, 2]} intensity={1.5} />
        <boxGeometry args={[3, 3, 3]} />
        <meshStandardMaterial attach='material' color={0xa3b18a} />
      </mesh>
    </>
  )
}

const Chart = () => {
  ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement)
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'],
    datasets: [
      {
        type: 'line',
        label: 'Dataset 1',
        data: [10, 15, 20, 35, 49, 51, 43, 49],
        borderColor: '#F1B0BC',
        backgroundColor: '#97CDBD',
      }
    ]
  }
  return (
    <div className="chartBox">
      <Line data={data}></Line>
    </div>
  )
}

const Effect = () => {
  return (
    <Emo.Section className="effectSection">
      <Emo.DefaultContainer display='flex' flexdirect='column' justifycontent='space-between' gap='2.5rem' className="container">
        <Emo.TitleBox marginbottom='5rem' textalign='center'>
          <h3>ELM'S Symbol</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla suscipit rem libero.</p>
        </Emo.TitleBox>
        <div className="canvasArea top">
          <Canvas style={{ height: '50rem' }}>
            <CanvasBox />
          </Canvas>
        </div>
        <Emo.CustomFlexDiv flexdirection='column' alignitems='center' gap='5.5rem' className="bottom">
          <div className="semiTitleBox">
            <h4>ELM's Record</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <Chart />
        </Emo.CustomFlexDiv>
      </Emo.DefaultContainer>
    </Emo.Section>
  )
}

export default Effect;