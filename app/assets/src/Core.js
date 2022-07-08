const aNewFunction = () => {
  client.context().then(function(context) {
    console.log(context);
})
}

const Core = {
  aNewFunction,
};

export default Core;
