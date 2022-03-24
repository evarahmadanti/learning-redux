import store from "./store/store";
// import * as actions from './store/product/actionType';
import reducer, { productRemoved } from './store/product';
import { productAdded, productMarkAsDiscount } from "./store/product/actions";

store.subscribe(() => {
    console.log('Store changed!', store.getState());
});

store.dispatch(productAdded({ 
    name: "Tas Branded",
    price: 5000000000
}));

store.dispatch(productRemoved({
    id: 1
}));

store.dispatch(productAdded({ 
    name: "Sepatu Branded",
    price: 5000000000
}));

store.dispatch(productAdded({ 
    name: "Baju Branded",
    price: 5000000000
}));

store.dispatch(productMarkAsDiscount({
    id: 2,
    hasDiscount: true
}));

store.dispatch(productMarkAsDiscount({
    id: 3,
    hasDiscount: true
}));
