import {data} from "../stores/document.mock.js";

export let documentId;
export let documentType;
export let documentLocation;
export let protagonist = [];
export let idBook;
export let city;
export let rootPerson = [];

for (let index = 0; index < data.length; index++) {
  documentId = data[index].id;
  documentType = data[index].documentType;
  protagonist = data[index].protagonist;
  documentLocation = data[index].documentLocation;
  rootPerson = [data[index].rootPerson.name, data[index].rootPerson.lastName];
}

export const getData = () => {
  // const protagonist = data.protagonist.map((p) => p.name + " " + p.lastName.join(" ")).join(", ");
  // const documentType = data.documentType;
  // const eventLocation = data.eventLocation;
  // const issueDate = data.issueDate;
  // console.log("Protagonistas: " + protagonist);
  // console.log("Tipo de documento: " + documentType);
  // console.log("Ubicación del evento: " + eventLocation);
  // console.log("Fecha de emisión: " + issueDate);
};
