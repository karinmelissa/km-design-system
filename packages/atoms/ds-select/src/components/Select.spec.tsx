// /* import { html } from "atomico";import { html } from "atomico";
// /* import { fixture } from "atomico/test-dom";
//  */
// import { html } from 'atomico';
// import { fixture } from 'atomico/test-dom';
// import { Select } from '../index';

// describe('Test ds-select ', () => {
// 	let component;
// 	beforeEach(async () => {
// 		component = fixture(html`<${Select}></${Select}>`);
// 		await component.mounted;
// 	});
// 	it('El elemento se renderiza correctamente y Las propiedades por defecto concuerdan con lo esperado', async () => {
// 		component = fixture(html`<${Select}  value=${null}></${Select}>`);
// 		await component.mounted;
// 		expect(component).to.have.property('required').to.be.equal(false);
// 		expect(component).to.have.property('isOpen').to.be.equal(false);
// 		expect(component).to.have.property('error').to.be.equal(false);
// 		expect(component).to.have.property('variant').to.be.equal('string');
// 		expect(component).to.have.property('isFilterable').to.be.equal(false);
// 		expect(component).to.have.property('ariaLabel').to.be.equal('select');
// 		expect(component).to.have.property('disabled').to.be.equal(false);
// 		expect(component).to.have.property('options').to.deep.equal([]);
// 		expect(component)
// 			.to.have.property('placeholder')
// 			.to.be.equal('Placeholder');
// 		expect(component).to.have.property('value').to.be.equal('');
// 		expect(component).to.have.property('helperText').to.be.equal('');
// 		expect(component).to.have.property('label').to.be.equal(undefined);
// 	});
// 	// test variant number
// 	it('El elemento ds-select se actualiza al cambiar la prop variant ', async () => {
// 		let value = 'number';
// 		let component = await fixture(html`<${Select} variant="${value}">
// 	</${Select}>`);
// 		expect(component).to.have.property('variant').to.be.equal('number');
// 		value = 'string';
// 		component = await fixture(html`<${Select} variant="${value}">
// 	</${Select}>`);
// 		expect(component).to.have.property('variant').to.be.equal('string');
// 	});
// 	it('El elemento ds-select se actualiza al cambiar la prop variant a un valor distinto de string o number', async () => {
// 		let value = 'number';
// 		const options = Array.from({ length: 20 }, (_, i) => ({
// 			value: i.toString(),
// 			label: i.toString()
// 		}));

// 		let component =
// 			await fixture(html`<${Select} options="${options}" variant="${value}" isFilterable="${true}">
// 	</${Select}>`);
// 		await component.mounted;
// 		await component.updated;
// 		const inputElement = 	component.shadowRoot.querySelector('input');
// 		inputElement.click();
// 		await component.updated;
// 		inputElement.value = '19';
// 		inputElement.dispatchEvent(new Event('input'));
// 		await component.updated;
// 		inputElement
// 			.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }));
// 		await component.updated;
// 		component.dispatchEvent(new Event('ChangeSelect'));
// 		await component.updated;
// 		expect(component.getAttribute('value')).to.be.equal('19');
// 	});
// 	it('El elemento ds-select limita la busqueda numerica al numero mas alto de la lista', async () => {
// 		let value = 'number';
// 		// del 0 al 20 value y label
// 		const options = Array.from({ length: 20 }, (_, i) => ({
// 			value: i.toString(),
// 			label: i.toString()
// 		}));

// 		let component =
// 			await fixture(html`<${Select} options="${options}" variant="${value}" isFilterable="${true}">
// 	</${Select}>`);
// 		//  write 20 on input and press enter
// 		await component.mounted;
// 		await component.updated;
// 		const inputElement = 	component.shadowRoot.querySelector('input');
// 		inputElement.click();
// 		await component.updated;
// 		inputElement.value = '2';
// 		inputElement.dispatchEvent(new Event('input'));
// 		await component.updated;
// 		inputElement
// 			.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }));
// 		await component.updated;
// 		component.dispatchEvent(new Event('ChangeSelect'));
// 		inputElement.value = '22';
// 		inputElement.dispatchEvent(new Event('input'));
// 		await component.updated;
// 		inputElement
// 			.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }));
			
// 		await component.updated;
// 		component.dispatchEvent(new Event('ChangeSelect'));
// 		await component.updated;

// 		// good path
// 		expect(component.getAttribute('value')).to.be.equal('2');

// 	});



// 	// test label
// 	it('El elemento ds-select se actualiza al cambiar la prop label ', async () => {
// 		let value = 'labelText';
// 		let component = await fixture(html`<${Select} label="${value}">
//     </${Select}>`);
// 		expect(
// 			component.shadowRoot.querySelector('label').textContent
// 		).to.be.contain(value);
// 	});
// 	//test helperText
// 	it('El elemento ds-select se actualiza al cambiar la prop helperText ', async () => {
// 		let value = 'helperText';
// 		let component = await fixture(html`<${Select} helperText="${value}">
//     </${Select}>`);
// 		expect(
// 			component.shadowRoot.querySelector('span.helper-text').textContent
// 		).to.be.contain(value);
// 	});
// 	it('El elemento ds-select se actualiza al cambiar la prop placeholder ', async () => {
// 		let value = 'manzana';
// 		let component = await fixture(html`<${Select} placeholder="${value}">
//     </${Select}>`);
// 		await component.mounted;
// 		expect(component).to.have.property('placeholder').to.be.equal('manzana');
// 		value = 'pera';
// 		component = await fixture(html`<${Select} placeholder="${value}">
//     </${Select}>`);
// 		await component.updated;
// 		expect(component).to.have.property('placeholder').to.be.equal('pera');
// 	});
// 	it('El elemento ds-select se actualiza al cambiar la prop value ', async () => {
// 		let value = 'manzana';
// 		let component = await fixture(html`<${Select} value="${value}">
//     </${Select}>`);
// 		await component.mounted;
// 		expect(component).to.have.property('value').to.be.equal('manzana');
// 		value = 'pera';
// 		component = await fixture(html`<${Select} value="${value}">
//     </${Select}>`);
// 		await component.updated;
// 		expect(component).to.have.property('value').to.be.equal('pera');
// 	});
// 	it('El elemento ds-select se actualiza al cambiar la prop disabled ', async () => {
// 		let disabled = false;
// 		let component = await fixture(html`<${Select} disabled="${disabled}">
//     </${Select}>`);
// 		await component.mounted;
// 		expect(component).to.have.property('disabled').to.be.equal(false);
// 		disabled = true;
// 		component = await fixture(html`<${Select} disabled="${disabled}">
//     </${Select}>`);
// 		await component.updated;
// 		expect(component).to.have.property('disabled').to.be.equal(true);
// 	});
// 	//
// 	it('El elemento ds-select se actualiza al cambiar la prop isFilterable ', async () => {
// 		let isFilterable = false;
// 		let component =
// 			await fixture(html`<${Select} is-filterable="${isFilterable}">
//       <span>label</span>
//     </${Select}>`);
// 		await component.mounted;
// 		expect(component).to.have.property('isFilterable').to.be.equal(false);
// 		isFilterable = true;
// 		component = await fixture(html`<${Select} is-filterable="${isFilterable}">
//       <span>label</span>
//     </${Select}>`);
// 		await component.updated;
// 		expect(component).to.have.property('isFilterable').to.be.equal(true);
// 	});
// 	//
// 	it('El elemento ds-select se actualiza al cambiar la prop ariaLabel ', async () => {
// 		let ariaLabel = 'arial-label';
// 		let component = await fixture(html`<${Select} aria-label="${ariaLabel}">
//       <span>label</span>
//     </${Select}>`);
// 		await component.mounted;
// 		expect(component.ariaLabel).to.be.equal(ariaLabel);
// 		ariaLabel = 'Select label';
// 		component = await fixture(html`<${Select} aria-label="${ariaLabel}">
//       <span>label</span>
//     </${Select}>`);
// 		await component.updated;
// 		expect(component.ariaLabel).to.be.equal(ariaLabel);
// 	});
// 	it('El elemento ds-select se actualiza al cambiar la prop error ', async () => {
// 		let value = false;
// 		let component = await fixture(html`<${Select} error="${value}">
//       <span>label</span>
//     </${Select}>`);
// 		await component.mounted;
// 		expect(component.error).to.be.equal(value);
// 		value = true;
// 		component = await fixture(html`<${Select} error="${value}">
//       <span>label</span>
//     </${Select}>`);
// 		await component.updated;
// 		expect(component.error).to.be.equal(value);
// 	});
// 	it('El elemento ds-select se actualiza al cambiar la prop isOpen ', async () => {
// 		let value = false;
// 		let component = await fixture(html`<${Select} isOpen="${value}">
//       <span>label</span>
//     </${Select}>`);
// 		await component.mounted;
// 		expect(component.isOpen).to.be.equal(value);
// 		value = true;
// 		component = await fixture(html`<${Select} isOpen="${value}">
//       <span>label</span>
//     </${Select}>`);
// 		await component.updated;
// 		expect(component.isOpen).to.be.equal(value);
// 	});

// 	it('El elemento ds-select se actualiza al cambiar la prop required ', async () => {
// 		let value = false;
// 		let component = await fixture(html`<${Select} required="${value}">
//       <span>label</span>
//     </${Select}>`);
// 		await component.mounted;
// 		expect(component.required).to.be.equal(value);
// 		value = true;
// 		component = await fixture(html`<${Select} required="${value}">
//       <span>label</span>
//     </${Select}>`);
// 		await component.updated;
// 		expect(component.required).to.be.equal(value);
// 	});

// 	it('El elemento ds-select se actualiza al hacer click dentro del elemento, cambiando la propiedad isOpen a true', async () => {
// 		let component = await fixture(html`<${Select}></${Select}>`);
// 		await component.mounted;
// 		component.shadowRoot.querySelector('input').click();
// 		await component.updated;
// 		expect(component.isOpen).to.be.equal(true);
// 	});

// 	it('El elemento ds-select se actualiza al hacer click fuera del elemento, cambiando la propiedad isOpen a false', async () => {
// 		let component = await fixture(html`<${Select}></${Select}>`);
// 		await component.mounted;
// 		component.shadowRoot.querySelector('input').click();
// 		await component.updated;
// 		document.body.click();
// 		await component.updated;
// 		expect(component.isOpen).to.be.equal(false);
// 	});
// 	it('El elemento ds-select se actualiza al hacer click en una opcion, cambiando la propiedad value al valor de la opcion clickeada', async () => {
// 		const options = [
// 			{
// 				value: 'valueSelected',
// 				label: 'label',
// 				disabled: false,
// 				selected: false
// 			},
// 			{
// 				value: 'value2',
// 				label: 'label2',
// 				disabled: false,
// 				selected: true
// 			}
// 		];
// 		let component = await fixture(
// 			html`<${Select} options=${options} ></${Select}>`
// 		);
// 		await component.mounted;
// 		component.shadowRoot.querySelector('input').click();
// 		await component.updated;
// 		component.shadowRoot.querySelector('ul > :first-child').click();
// 		await component.updated;
// 		expect(component.value).to.be.equal(options[0].value);
// 		expect(component.placeholder).to.be.equal(options[0].label);
// 	});
// 	it('El elemento ds-select se actualiza al escribir en el input, disparandose el evento SearchSelect', async () => {
// 		let component = await fixture(
// 			html`<${Select} showSearch="${true}"></${Select}>`
// 		);
// 		await component.mounted;
// 		let inputElement = component.shadowRoot.querySelector('input');
// 		inputElement.value = 'manzana';
// 		inputElement.dispatchEvent(new Event('input'));
// 		// Crear una promesa que se resuelve cuando se dispara el evento 'input'
// 		let eventFired = new Promise((resolve) => {
// 			component.addEventListener('SearchSelect', resolve);
// 		});
// 		// inputElement.dispatchEvent(new Event('SearchSelect'));
// 		await component.updated;
// 		// Verificar si el evento fue disparado
// 		await expect(eventFired).resolves.toBeTruthy();
// 	});

// 	it('El elemento ds-select se actualiza al seleccionar una opcion, disparandose el evento ChangeSelect', async () => {
// 		const options = [
// 			{
// 				value: 'valueSelected',
// 				label: 'label',
// 				disabled: false,
// 				selected: false
// 			},
// 			{
// 				value: 'value2',
// 				label: 'label2',
// 				disabled: false,
// 				selected: true
// 			}
// 		];
// 		let component = await fixture(
// 			html`<${Select} options=${options} ></${Select}>`
// 		);
// 		await component.mounted;
// 		const inputElement = component.shadowRoot.querySelector('input');
// 		inputElement.click();
// 		await component.updated;
// 		component.shadowRoot.querySelector('ul > :first-child').click();
// 		await component.updated;
// 		expect(component.value).to.be.equal('valueSelected');
// 		await component.updated;
// 		let eventFired = new Promise((resolve) => {
// 			inputElement.addEventListener('ChangeSelect', resolve);
// 		});
// 		inputElement.dispatchEvent(new Event('ChangeSelect'));
// 		// Verificar si el evento fue disparado
// 		await expect(eventFired).resolves.toBeTruthy();
// 	});
// 	it('El elemento ds-select se actualiza al seleccionar una opcion, esta se muestra en el input como placeholder', async () => {
// 		const options = [
// 			{
// 				value: 'valueSelected',
// 				label: 'label',
// 				disabled: false
// 			},
// 			{
// 				value: 'value2',
// 				label: 'label2',
// 				disabled: false
// 			}
// 		];
// 		let component = await fixture(
// 			html`<${Select} options=${options} value=${options[0].value}></${Select}>`
// 		);
// 		await component.mounted;
// 		await component.updated;
// 		const inputElement = component.shadowRoot.querySelector('input');
// 		const ulElement = component.shadowRoot.querySelector('ul');

// 		expect(inputElement.value).to.be.equal(options[0].label);
// 		expect(inputElement.placeholder).to.be.equal(options[0].label);
// 		expect(ulElement.style.display).to.be.equal('none');
// 	});
// 	//
// 	it('El elemento ds-select se actualiza al escribir en el input, filtrandose las opciones que solo contienen el texto escrito en el input', async () => {
// 		const options = [
// 			{
// 				value: 'valueSelected',
// 				label: 'label2',
// 				selected: false
// 			},
// 			{
// 				value: 'value2',
// 				label: 'label2',
// 				selected: false
// 			},
// 			{
// 				value: 'value4',
// 				label: 'label3',
// 				selected: false
// 			}
// 		];
// 		const containText = 'label2';
// 		const countExpectedOption = options.filter((option) =>
// 			option.label.includes(containText)
// 		).length;
// 		let component = await fixture(
// 			html`<${Select} is-filterable="${true}" options=${options}></${Select}>`
// 		);
// 		await component.mounted;
// 		const inputElement = component.shadowRoot.querySelector('input');
// 		inputElement.value = '';
// 		inputElement.dispatchEvent(new Event('input'));
// 		await component.updated;
// 		inputElement.value = containText;
// 		inputElement.dispatchEvent(new Event('input'));
// 		await component.updated;
// 		expect(
// 			component.shadowRoot.querySelector('ul').children.length
// 		).to.be.equal(countExpectedOption);
// 	});
// });
