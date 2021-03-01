import { isObject } from "./isObject";

function applyOpacityToken(colors: any, opacityToken: string) {
  // copy object passed
  let appliedObject = { ...colors };

  // loop over object keys
  Object.keys(appliedObject).forEach((property: any) => {
    // check if the value for that key is an object if not return
    if (!isObject(appliedObject[property])) return;

    // copy nested object
    let appliedNestedObject = { ...appliedObject[property] };

    // loop over nested object keys
    Object.keys(appliedNestedObject).forEach((key: string) => {
      // string replacement to variable declaration, with passed opacity token
      const c = appliedNestedObject[key].replace(
        ",1)",
        `,var(${opacityToken}, 1)`
      );

      // override value in nested object with new placed string
      appliedNestedObject = { ...appliedNestedObject, [key]: c };
    });

    // override value in object with new object with replaced values
    appliedObject = { ...appliedObject, [property]: appliedNestedObject };
  });

  return appliedObject;
}

// TODO WRITE ACTUAL TEST!

// const test = {
//   transparent: "transparent",
//   current: "currentColor",
//   red: {
//     "000": "hsla(360,97%,97%,1)",
//     "100": "hsla(360,99%,92%,1)",
//     "200": "hsla(360,99%,87%,1)",
//     "300": "hsla(360,100%,81%,1)",
//     "400": "hsla(360,99%,75%,1)",
//     "500": "hsla(360,90%,60%,1)",
//     "600": "hsla(360,94%,45%,1)",
//     "700": "hsla(360,90%,37%,1)",
//     "800": "hsla(360,88%,30%,1)",
//     "900": "hsla(360,84%,25%,1)",
//   },
// };

// console.log(applyOpacityToken(test, "--test-token"));
