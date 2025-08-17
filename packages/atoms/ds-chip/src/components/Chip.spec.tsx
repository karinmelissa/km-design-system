// /* import { html } from "atomico";import { html } from "atomico";
// /* import { fixture } from "atomico/test-dom";
//  */
// import { html } from 'atomico';
// import { fixture } from 'atomico/test-dom';
// import { Chip } from '../index';

// describe('Test uny-chip ', () => {
// 	it('El elemento se renderiza correctamente y Las propiedades por defecto concuerdan con lo esperado', async () => {
// 		const component = fixture(html`<${Chip}> <span>label</span> </${Chip}>`);
// 		await component.mounted;
// 		expect(component.querySelector('span').textContent).to.be.equal('label');
// 		expect(component).to.have.property('selected').to.be.equal(false);
// 		expect(component).to.have.property('ariaLabel').to.be.equal('chip');
// 		expect(component).to.have.property('disabled').to.be.equal(false);
// 	});
// 	it('El elemento uny-chip se actualiza al cambiar la prop disabled ', async () => {
// 		let disabled = false;
// 		let component = await fixture(html`<${Chip} disabled="${disabled}">
//       <span>label</span>
//     </${Chip}>`);
// 		await component.mounted;
// 		expect(component).to.have.property('disabled').to.be.equal(false);
// 		disabled = true;
// 		component = await fixture(html`<${Chip} disabled="${disabled}">
//       <span>label</span>
//     </${Chip}>`);
// 		await component.updated;
// 		expect(component).to.have.property('disabled').to.be.equal(true);
// 	});
// 	//
// 	it('El elemento uny-chip se actualiza al cambiar la prop selected ', async () => {
// 		let selected = false;
// 		let component = await fixture(html`<${Chip} selected="${selected}">
//       <span>label</span>
//     </${Chip}>`);
// 		await component.mounted;
// 		expect(component).to.have.property('selected').to.be.equal(false);
// 		selected = true;
// 		component = await fixture(html`<${Chip} selected="${selected}">
//       <span>label</span>
//     </${Chip}>`);
// 		await component.updated;
// 		expect(component).to.have.property('selected').to.be.equal(true);
// 	});
// 	//
// 	it('El elemento uny-chip se actualiza al cambiar la prop ariaLabel ', async () => {
// 		let ariaLabel = 'aria-label';
// 		let component = await fixture(html`<${Chip} aria-label="${ariaLabel}">
//       <span>label</span>
//     </${Chip}>`);
// 		await component.mounted;
// 		expect(component.ariaLabel).to.be.equal(ariaLabel);
// 		ariaLabel = 'Chip label';
// 		component = await fixture(html`<${Chip} aria-label="${ariaLabel}">
//       <span>label</span>
//     </${Chip}>`);
// 		await component.updated;
// 		expect(component.ariaLabel).to.be.equal(ariaLabel);
// 	});
// 	it(" el evento custom 'ClickChip' EXISTE en uny-chip  ", async () => {
// 		let component = await fixture(html`<${Chip} id="chipTest1">
//       <span>label</span>
//     </${Chip}>`);
// 		await component.mounted;
// 		// Get a reference to the button or element you want to click
// 		// Trigger a click event on the button
// 		component.shadowRoot.querySelector('div').click();
// 		await component.updated;
// 		expect(component).to.have.property('selected').to.equal(true);
// 	});
// 	it("Al ser click en el elemento uny-chip el evento custom 'ClickChip' es disparado y la propiedad selected cambia true/false", async () => {
// 		let component = fixture(html`<${Chip} id="chipTest1">
//       <span>label</span>
//     </${Chip}>`);
// 		await component.mounted;
// 		// const listener = oneEvent(component, "click");
// 		component.shadowRoot.querySelector('div').click();
// 		// const selectedExpected = true;
// 		// const { detail } = await listener;
// 		await component.updated;

// 		expect(component).to.have.property('selected').to.equal(true);
// 	});
// 	//
// 	it('El elemento button en uny-chip no se visualiza (display:none) si el estado selected es false', async () => {
// 		let component = fixture(html`<${Chip} selected='${true}'>
//     <span>label</span>
//   </${Chip}>`);
// 		await component.mounted;
// 		let xButton = component.shadowRoot.querySelector('.uny-chip-x-button');
// 		expect(xButton).to.exist;
// 		expect(getComputedStyle(xButton).display).toBe('flex');
// 		component = fixture(html`<${Chip} selected='${false}'>
//     <span>label</span>
//   </${Chip}>`);
// 		await component.updated;
// 		expect(getComputedStyle(xButton).display).toBe('none');
// 	});
// });
