import { setItems } from '../state/timer/timerSlice';
import store from '../state/store';

function setUpTimer(items) {
    let values = {};
    items.forEach((item) => {
        values[item.id] = {
            started: false,
            value: 0
        }
    })
    store.dispatch(setItems(values));
}

export default setUpTimer;