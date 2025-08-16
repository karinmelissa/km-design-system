// import { html, render, useEvent } from "atomico"
// import { fixture } from "atomico/test-dom"
// import {Input } from "../index"

//  describe("Input component", () => {
//   let inputComponent:any;
//   beforeEach(async () => {
//     inputComponent = await fixture(html`<${Input} />`);
//   });

//   test("Las propiedades por defecto son pasadas correctamente", async () => {
//     expect(inputComponent).to.have.property("disabled").to.be.false
//     expect(inputComponent).to.have.property("label").to.be.equal("Label")
//     expect(inputComponent).to.have.property("placeholder").to.be.equal("Placeholder")
//     expect(inputComponent).to.have.property("value").to.be.equal("")
//     expect(inputComponent).to.have.property("inputId").to.be.equal("input1")
//     expect(inputComponent).to.have.property("type").to.be.equal("text")
//     expect(inputComponent).to.have.property("state").to.be.equal("default")
    
//   })

//    test("El input se actualiza al cambiar state y con helperText", async () => {
//     let state = 'error'
//     const helperMessage = "Text Message"
//     let input = await fixture(
//       html`<${Input} state=${state} helperMessage=${helperMessage} />`
//     )
//     await input.updated
//     expect(input).to.have.property("state").to.be.equal(state)

//      state = 'success'
//      input = await fixture(
//       html`<${Input} state=${state} helperMessage=${helperMessage} />`
//     )
//     await input.mounted
//     expect(input).to.have.property("state").to.be.equal(state)
//   }) 

//    test("El input se actualiza al estar disabled y con helperText", async () => {
//     let disabled = true
//     const helperMessage = "Text Message"
//     let input = await fixture(
//       html`<${Input} disabled=${disabled} helperMessage=${helperMessage} />`
//     )
//     await input.updated
//     expect(input).to.have.property("disabled").to.be.equal(disabled)

//      disabled = false
//      input = await fixture(
//       html`<${Input} disabled=${disabled} helperMessage=${helperMessage} />`
//     )
//     await input.mounted
//     expect(input).to.have.property("disabled").to.be.equal(disabled)
//   }) 

//   test("El input se actualiza al cambiar la prop type", async () => {
//     let type = 'text'
//     let input = await fixture(
//       html`<${Input} type=${type}  />`
//     )
//     await input.updated
//     expect(input).to.have.property("type").to.be.equal(type)

//     type = 'password'
//      input = await fixture(
//       html`<${Input} type=${type} />`
//     )
//     await input.mounted
//     expect(input).to.have.property("type").to.be.equal(type)
//   })

//   test("El input esta vacio", async () => {
//     let value = ''
//     let input = await fixture(
//       html`<${Input} value=${value}/>`
//     )
//     await input.updated
//     expect(input).to.have.property("value").to.be.equal(value)
//   })

//   test("Input have helperText", async () => {
//     const helperMessage = "Text Message"
//     let input = await fixture(
//       html`<${Input} helperMessage=${helperMessage} />`
//     )
//      await input.mounted;
//     expect(input).to.have.property("helperMessage").to.be.equal(helperMessage);
//   });

//   test('Input se actualiza al cambiar la prop required ', async () => {
// 		let value = false;
// 		let input = await fixture(html`<${Input} required="${value}"/>`);
// 		await input.mounted;
// 		expect(input.required).to.be.equal(value);

// 		value = true;
// 		input = await fixture(html`<${Input} required="${value}"/>`);
// 		await input.updated;
// 		expect(input.required).to.be.equal(value);
// 	});

//   test("Input change value ", async () => {
//     const label = "Label";
// 		let component = fixture(html`<${Input} id="input1"  label=${label}/>`);
//     await component.mounted;
// 		let inputElement = component.shadowRoot.querySelector('input');
// 		inputElement.value = 'hola';
// 		let eventFired = new Promise((resolve) => {
// 			inputElement.addEventListener('ChangeInput', resolve);
// 		});
// 		inputElement.dispatchEvent(new Event('ChangeInput'));
// 		await component.updated;
// 		await expect(eventFired).resolves.toBeTruthy();
		
// 	});

//    test("Input se actualiza al escribir", async () => {
//     let input = await fixture(
//       html`<${Input}  />`
//     )
//      await input.mounted;
//      let inputElement = input.shadowRoot.querySelector('input');
//      inputElement.value = 'hola';
//      let eventFired = new Promise((resolve) => {
// 			inputElement.addEventListener('ChangeOnInput', resolve);
// 		});
//      inputElement.dispatchEvent(new Event('ChangeOnInput'));
//      await input.updated;
//      await expect(eventFired).resolves.toBeTruthy();
//   }); 

//   test("Input test CustomEvent OnInput", async () => {
//     const label = 'label';
//     const value = 'hola';
//     const type = 'text';

//     let input = await fixture(
//       html`<${Input} type=${type} value=${value} label=${label} />`
//     )
//     await input.mounted;
//     const element = input.shadowRoot.querySelector('input')
//     element.value ='';
//     element.dispatchEvent(new Event('input'));
// 		await input.updated;

//     element.value ='hiii';
//     element.dispatchEvent(new Event('input'));
//     await input.updated;

//    expect(input.shadowRoot.querySelector('input').value).to.be.equal('hiii');
//   }); 
 

//   it("Input test CustomEvent OnChange ", async () => {
// 		let input = await fixture(
//       html`<${Input} id="input1" />`
//     )
// 		await input.mounted;
//     const element = input.shadowRoot.querySelector('input')
//     element.value ='';
//     element.dispatchEvent(new Event('change'));

//     await input.updated;
//     element.value ='hola';
//     element.dispatchEvent(new Event('change'));
//     await input.updated;

//    expect(input.shadowRoot.querySelector('input').value).to.be.equal('hola');
// 	});
// }) 


