import 'babel-polyfill';
/**
 * https://github.com/Keyamoon/svgxuse
 * If you do not use SVG <use xlink:href="…"> elements, remove svgxuse module
 */
import 'svgxuse';
import init from './init';
// import factory from './factory';
import { render, renderFactory } from './render';
import configureStore from './store/configureStore';
import CardForm from './components/CardForm';

const app = (config) => {
    const store = configureStore(config);

    render(CardForm, document.getElementById('card-form'), {}, store);
};

app(window.config);
