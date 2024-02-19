
// function to take a list of objects and a template and insert the objects as HTML into the DOM
export function renderListWithTemplate(
    templateFn,
    parentElement,
    list,
    position = "afterbegin",
    clear = false
  ) {
    const htmlStrings = list.map(templateFn);
    // if clear is true we need to clear out the contents of the parent.
    if (clear) {
      parentElement.innerHTML = "";
    }
    parentElement.insertAdjacentHTML(position, htmlStrings.join(""));
  }

//Load,Grab and Render the header and footer
export async function loadTemplate(path) {
    const res = await fetch(path);
    const template = await res.text();
    return template;
  }

  export async function loadHeaderFooter(path) {
    const headerTemplate = await loadTemplate("./public/partials/header.html");
    const headerElement = document.querySelector("#main-header");
    const footerTemplate = await loadTemplate("./public/partials/footer.html");
    const footerElement = document.querySelector("#main-footer");
  
    renderWithTemplate(headerTemplate, headerElement);
    renderWithTemplate(footerTemplate, footerElement);
  }

  //load the templates
export function renderWithTemplate(template, parentElement, data, callback) {
    parentElement.insertAdjacentHTML("afterbegin", template);
    //if there is a callback...call it and pass data
    if (callback) {
      callback(data);
    }
  }