import { lazy, Suspense, useEffect, useRef, useState } from "react";
import {
  SVG,
  CalcStick,
  DrawStick,
  // DrawGrid,
  DrawOutline,
  getRandom
} from "./logo";
import { One, Two, Three, outlineDraw } from "./logo/prefs";
import "./App.css";

const AnimationEditor = lazy(() => import("./AnimationEditor"));

const OneOutlinePath = getRandom(outlineDraw);
const TwoOutlinePath = getRandom(outlineDraw);
const ThreeOutlinePath = getRandom(outlineDraw);
const DEFAULT_CONTROLS = {
  speed: 50,
  size: 100
};

const isEditorEnabled = () => {
  if (typeof window === "undefined") {
    return false;
  }

  return new URLSearchParams(window.location.search).has("editor");
};

function easeInOut(t) {
  return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
}

// start - beginning position
// e - ending position
// t - your current value (0–1)
const getTween = (start, end, t) => {
  return start + (easeInOut(t) / 1) * (end - start);
};

const blend = (start, end, f) => {
  return {
    start: {
      x: getTween(start.start.x, end.start.x, f),
      y: getTween(start.start.y, end.start.y, f)
    },
    end: {
      x: getTween(start.end.x, end.end.x, f),
      y: getTween(start.end.y, end.end.y, f)
    }
  };
};

const createStickState = () => ({
  one: {
    start: CalcStick(One),
    end: CalcStick(One)
  },
  two: {
    start: CalcStick(Two),
    end: CalcStick(Two)
  },
  three: {
    start: CalcStick(Three),
    end: CalcStick(Three)
  }
});

const advanceStickState = sticks => {
  sticks.one.start = sticks.one.end;
  sticks.one.end = CalcStick(One);
  sticks.two.start = sticks.two.end;
  sticks.two.end = CalcStick(Two);
  sticks.three.start = sticks.three.end;
  sticks.three.end = CalcStick(Three);
};

function App() {
  const [count, setCount] = useState(0);
  const [controls, setControls] = useState(DEFAULT_CONTROLS);
  const [editorEnabled] = useState(isEditorEnabled);
  const requestRef = useRef();
  const previousTimeRef = useRef();
  const countRef = useRef(0);
  const sticksRef = useRef();
  const speedRef = useRef(controls.speed);

  speedRef.current = controls.speed;

  if (!sticksRef.current) {
    sticksRef.current = createStickState();
  }

  useEffect(() => {
    const animate = time => {
      if (previousTimeRef.current !== undefined) {
        const deltaTime = time - previousTimeRef.current;
        const speed = Math.max(1, speedRef.current);
        const newState = (countRef.current + deltaTime / speed) % speed;

        if (newState < countRef.current) {
          advanceStickState(sticksRef.current);
        }

        countRef.current = newState;
        setCount(newState);
      }

      previousTimeRef.current = time;
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(requestRef.current);
      previousTimeRef.current = undefined;
    };
  }, []);

  const { one, two, three } = sticksRef.current;
  const speed = Math.max(1, controls.speed);
  const OneStick = blend(one.start, one.end, count / speed);
  const TwoStick = blend(two.start, two.end, count / speed);
  const ThreeStick = blend(three.start, three.end, count / speed);

  return (
    <div className="App">
      <div className="App-bg">
        <SVG scale={controls.size}>
          {/* DrawGrid() */}
          {DrawStick(OneStick, One.color)}
          {DrawStick(TwoStick, Two.color)}
          {DrawStick(ThreeStick, Three.color)}
        </SVG>
      </div>
      <div className="App-title">
        <div className="App-title--inner">
          <h1>
            D&#x200b;i&#x200b;p&#x200b;l&#x200b;o&#x200b;m&#x200b;a&#x200b;u&#x200b;s&#x200b;s&#x200b;t&#x200b;e&#x200b;l&#x200b;l&#x200b;u&#x200b;n&#x200b;g
          </h1>
        </div>
      </div>

      <div className="App-bg">
        <SVG scale={controls.size}>
          {/* DrawGrid() */}
          {DrawOutline(OneStick, One.color, OneOutlinePath)}
          {DrawOutline(TwoStick, Two.color, TwoOutlinePath)}
          {DrawOutline(ThreeStick, Three.color, ThreeOutlinePath)}
        </SVG>
      </div>

      <div className="App-text">
        <div className="App-text--inner">
          <h3>Diplomausstellung</h3>
          <p>
            HF Interaction Design
            <br />
            Schule&nbsp;für Gestaltung Zürich{" "}
            <a
              className=""
              rel="noopener noreferrer"
              href="https://sfgz.ch"
              target="_blank"
            >
              ↗
            </a>
          </p>
          <h3>11. 7. 2020 · 13.30 – 18­&nbsp;Uhr</h3>
          <p>Eröffnung &amp; Apéro</p>
          <h3>Ort</h3>
          <p>
            SiloSilo Halle <br />
            Limmatstrasse&nbsp;254
            <br />
            8005&nbsp;Zürich{" "}
            <a
              className=""
              rel="noopener noreferrer"
              href="https://goo.gl/maps/mPSGSN56B21iZGTJ6"
              target="_blank"
            >
              ↗
            </a>
          </p>

          <a
            rel="noopener noreferrer"
            href="https://forms.gle/U5eY7ohNSczT8S2D7"
            target="_blank"
            className="a--underline"
          >
            Bitte Anmelden
          </a>
        </div>
      </div>
      {editorEnabled && (
        <Suspense fallback={null}>
          <AnimationEditor controls={controls} onChange={setControls} />
        </Suspense>
      )}
    </div>
  );
}

export default App;
