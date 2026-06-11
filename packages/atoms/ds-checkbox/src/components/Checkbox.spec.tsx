import { html } from 'atomico';
import { fixture } from 'atomico/test-dom';
import { Checkbox } from '../index';
import { describe, test, expect } from 'vitest';

describe('Checkbox', () => {
	test('renders with default props', async () => {
		const el = await fixture(html`<${Checkbox}></${Checkbox}>`);
		await el.mounted;

		expect(el).to.have.property('checked').to.equal(false);
		expect(el).to.have.property('disabled').to.equal(false);
		expect(el).to.have.property('indeterminate').to.equal(false);
		expect(el).to.have.property('label').to.equal('');
		expect(el).to.have.property('helperText').to.equal('');
		expect(el).to.have.property('labelPosition').to.equal('right');
	});

	test('reflects checked as attribute', async () => {
		const el = await fixture(html`<${Checkbox} checked />`);
		await el.updated;

		expect(el).to.have.property('checked').to.equal(true);
		expect(el.getAttribute('checked')).not.to.be.null;
	});

	test('reflects disabled as attribute', async () => {
		const el = await fixture(html`<${Checkbox} disabled />`);
		await el.updated;

		expect(el).to.have.property('disabled').to.equal(true);
	});

	test('reflects indeterminate as attribute', async () => {
		const el = await fixture(html`<${Checkbox} indeterminate />`);
		await el.updated;

		expect(el).to.have.property('indeterminate').to.equal(true);
	});

	test('reflects labelPosition as attribute', async () => {
		const el = await fixture(html`<${Checkbox} label-position="left" />`);
		await el.updated;

		expect(el).to.have.property('labelPosition').to.equal('left');
	});

	test('updates checked reactively', async () => {
		const el = await fixture(html`<${Checkbox} />`);
		await el.updated;

		el.checked = true;
		await el.updated;

		expect(el).to.have.property('checked').to.equal(true);
	});

	test('toggles checked on click', async () => {
		const el = await fixture(html`<${Checkbox} />`);
		await el.mounted;

		el.shadowRoot.querySelector('.ds-checkbox-wrapper').click();
		await el.updated;

		expect(el).to.have.property('checked').to.equal(true);
	});

	test('clears indeterminate on click and sets checked true', async () => {
		const el = await fixture(html`<${Checkbox} indeterminate />`);
		await el.mounted;

		el.shadowRoot.querySelector('.ds-checkbox-wrapper').click();
		await el.updated;

		expect(el).to.have.property('indeterminate').to.equal(false);
		expect(el).to.have.property('checked').to.equal(true);
	});

	test('does not toggle when disabled', async () => {
		const el = await fixture(html`<${Checkbox} disabled />`);
		await el.mounted;

		el.shadowRoot.querySelector('.ds-checkbox-wrapper').click();
		await el.updated;

		expect(el).to.have.property('checked').to.equal(false);
	});
});
