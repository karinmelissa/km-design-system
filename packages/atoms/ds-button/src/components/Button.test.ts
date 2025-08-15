import { describe, it, expect } from "vitest";
import { fixture, html } from "@open-wc/testing";
import "../index";

/* Test :
PRIMERO => Comprueba que tus test falle.
1.- Que las propiedades seteadas por defecto en el componente sean correctamente asignadas.
2.- Si se actualiza una prop, que se actualice el componente.
3.- Accesibilidad (PENDING)
  3.1.- Que sea accesible por defecto
  3.2.- Que sea accesible en sus variantes de color
  3.3.- Que no sea accesible en alguna situación (?)
4.- Que el contenido se renderice en el slot correcto. (PENDING)
*/


describe("ds-button", () => {
  it("debe renderizar el contenido del slot", async () => {
    const el = await fixture(html`<ds-button>Click me</ds-button>`);
    expect(el?.textContent).toContain("Click me");
  });

  it("debe reflejar la prop 'variant'", async () => {
    const el = await fixture(html`<ds-button variant="secondary">Label</ds-button>`);
    expect(el.getAttribute("variant")).toBe("secondary");
  });

  it("debe reflejar la prop 'disabled'", async () => {
    const el = await fixture(html`<ds-button disabled>Label</ds-button>`);
    expect(el.hasAttribute("disabled")).toBe(true);
    const button = el.shadowRoot?.querySelector("button");
    expect(button?.disabled).toBe(true);
  });

  it("debe cambiar el tamaño según la prop 'size'", async () => {
    const el = await fixture(html`<ds-button size="large">Label</ds-button>`);
    expect(el.getAttribute("size")).toBe("large");
    const button = el.shadowRoot?.querySelector("button");
    expect(button?.className).toContain("button-size__large");
  });
});