# Amadeus Exploration Docs

## Usage

```html
<script src="exploration-demo.js" charset="utf-8"></script>

<div id='target' />

<script type="text/javascript">
  exploration.setup({
    element: '#target',
    url: 'http://exmaple.com/path/to/config'
  });
</script>
```

## Development

To start the dev server run.

```sh
yarn start
```

This will open a new browser and run linting, and compile the widget ready
for the browser.

## Configuration

See this example [config.json](./build/config.json).

## Distribution

```sh
yarn build
```
