import "./AnimationEditor.css";

const clampNumber = (value, min, max, fallback) => {
  const parsed = Number(value);

  if (!Number.isFinite(parsed)) {
    return fallback;
  }

  return Math.min(max, Math.max(min, parsed));
};

const fields = [
  {
    key: "speed",
    label: "Sluggishness",
    min: 1,
    max: 120,
    step: 1
  },
  {
    key: "size",
    label: "Size",
    min: 10,
    max: 250,
    step: 1
  }
];

function AnimationEditor({ controls, onChange }) {
  const updateControl = (key, value) => {
    const field = fields.find(item => item.key === key);
    const nextValue = clampNumber(value, field.min, field.max, controls[key]);

    onChange({
      ...controls,
      [key]: nextValue
    });
  };

  return (
    <aside className="AnimationEditor" aria-label="Animation editor">
      {fields.map(field => (
        <label className="AnimationEditor-field" key={field.key}>
          <span className="AnimationEditor-label">{field.label}</span>
          <input
            className="AnimationEditor-range"
            type="range"
            min={field.min}
            max={field.max}
            step={field.step}
            value={controls[field.key]}
            onChange={event => updateControl(field.key, event.target.value)}
          />
          <input
            className="AnimationEditor-number"
            type="number"
            min={field.min}
            max={field.max}
            step={field.step}
            value={controls[field.key]}
            onChange={event => updateControl(field.key, event.target.value)}
          />
        </label>
      ))}
    </aside>
  );
}

export default AnimationEditor;
