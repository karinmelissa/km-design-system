// import { html } from "atomico";
// import { fixture } from "atomico/test-dom";
// import { Alert } from "../index";

// describe("Alert test", () => {
//   test("test alert created", async () => {
//     const alert = await fixture(html`<${Alert}></${Alert}>`);
//     await alert.mounted;
//     expect(alert).to.have.property("type").to.be.equal("success");
//     expect(alert).to.have.property("show").to.be.equal(true);
//     expect(alert).to.have.property("title").to.be.equal("");
//     expect(alert).to.have.property("closeButton").to.be.equal(false);
//   });

//   test("test alert component updated type props", async () => {
//     const alert = await fixture(html`<${Alert} type="success" />`);
//     await alert.updated;

//     expect(alert).to.have.property("type").to.be.equal("success");
//     alert.type = "info";
//     await alert.updated;

//     expect(alert).to.have.property("type").to.be.equal("info");
//     alert.type = "error";
//     await alert.updated;

//     expect(alert).to.have.property("type").to.be.equal("error");
//     alert.type = "warning";
//     await alert.updated;

//     expect(alert).to.have.property("type").to.be.equal("warning");
//   });

//   test("test alert show props", async () => {
//     const alert = await fixture(html`<${Alert} show />`);
//     await alert.updated;

//     expect(alert).to.have.property("show").to.be.equal(true);
//     alert.show = false;
//     await alert.updated;

//     expect(alert).to.have.property("show").to.be.equal(false);
//   });

//   test("test alert CustomEvent", async () => {
//     let show = true;
//     let alert = await fixture(html`<${Alert} show="${show}" />`);
//     await alert.mounted;
//     alert.shadowRoot.querySelector("div").click();
//     await alert.updated;
//     expect(alert).to.have.property("show").to.equal(show);
//   });

//   test("test alert have prop title", async () => {
//     let title = "Alerta Success";
//     let alert = await fixture(html`<${Alert} title="${title}" />`);
//     await alert.updated;
//     await expect(alert).to.have.property("title").to.be.equal(title);
//   });

//   test("test alert header css class", async () => {
//     let alert = await fixture(html`<${Alert} />`);
//     await alert.mounted;
//     let parentComponent = alert.shadowRoot.querySelector(".alert-wrapper");
//     let component = alert.shadowRoot.querySelector(".header");
//     expect(component).to.exist;
//     let styles = getComputedStyle(component);
//     console.log(styles.justifyContent)
//     const widt_property = styles.getPropertyValue("width") == parentComponent.clientWidth + 'px' ? '100%' : styles.getPropertyValue("width");
//     const content_property = styles.getPropertyValue('justify-content');
//     expect(content_property).to.be.equal('');
//     expect(widt_property).to.be.equal('');
//   });

//   test("test alert handleClick props show change value true/false", async () => {
//     let alert = await fixture(html`<${Alert} />`);
//     await alert.mounted;
//     alert.shadowRoot.querySelector("div").click();
//     await alert.updated;
//     expect(alert).to.have.property("show").to.be.equal(true);
//   });
// });
