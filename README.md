## Diplomausstellung

Archive deployment for [Diplomausstellung HFIAD 2017](https://diplom.logrinto.signalwerk.ch/).
The previous domain `http://diplom.logrinto.ch/` is no longer used.

## Deployment

GitHub Pages is deployed by the GitHub Actions workflow in
`.github/workflows/pages.yml`. The workflow builds the Vite app into `dist/`
and uploads that folder as a Pages artifact.

## Animation Editor

The animation editor was originally explored in branch `feature/dat-gui-addition` and is hidden by default. Append `?editor` to the URL
to show the GUI controls;
`https://diplom.logrinto.signalwerk.ch/?editor`.
