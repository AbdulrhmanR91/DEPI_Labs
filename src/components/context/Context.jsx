import React from "react";

const mycontext = React.createContext();
const Provider = mycontext.Provider;

const Consumer = mycontext.Consumer;

export { Provider, Consumer };
