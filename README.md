# React Widgets

Here I added some useful widget that can be used in your React project (Accordion, Search [Wikipedia](https://www.wikipedia.org/), Translate [Google](https://translate.google.com/), Dropdown menu) 

## Getting Started

Its very sample open your command line cd to project directory, run `npm start` to start it, in development server open your browser navigate to `http://localhost:3000/` Also you can choose whatever widget you want and use it in your own project.

## Usage
We have 4 widgets (Accordion, Search [Wikipedia](https://www.wikipedia.org/), Translate [Google](https://translate.google.com/), Dropdown menu)

### Accordion

Copy src/components/Accordion.js to your project import it in needed location

```
import Accordion from "./components/Accordion";
```

and use it like that

```
<Accordion items={items} />
```

where items list of object contains title and content
```
const items=[{title: 'First Title', content: 'First Content'}]
```

### Search

Copy src/components/Search.js to your project import it in needed location

```
import Search from "./components/Search";
```

and use it like that

```
<Search />
```

it search by whatever term in [Wikipedia](https://www.wikipedia.org/)

### DropDown

Copy src/components/DropDown.js to your project import it in needed location

```
import Search from "./components/DropDown";
```

and use it like that

```
<DropDown
          options={options}
          label="Select Color"
          selected={selected}
          onSelectedChange={setSelected}
        />
```
where options list of object contains label and value, selected, and setSelected are to manage state


```
const [selected, setSelected] = useState(options[0]);
const options = [{label: 'The Red Color', value: 'red'}]
```

### Translate

It uses google translate api to perform the translation

copy three files to your project Convert.js, DropDown.js, Translate.js

First put your API key in key constant in Convert.js

Then import Translate.js

```
import Translate from "./components/Translate";
```

in Translate.js options variable with whatever translation options your want where the label will be Language label, value will be [Language Code] (https://cloud.google.com/translate/docs/languages)

Then you can use it like that

```
<Translate />
```


## Versioning
1.0.0

## Authors

Mostafa Hanafy

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
