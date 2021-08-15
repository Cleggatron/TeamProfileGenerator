const internTemplate = (data) => {
    const {name, id, email, role, school} = data;

    const template = `
    <div class="card">
      <h2 class="name header">${name}</h2>
      <h3 class="role header">${role}</h3>
      <p class="details">Employee ID: ${id}</p>
      <p class="details">Email: <a href="mailto:">${email}</a></p>
      <p class="details">School: ${school}</p>
    </div>`

    return template;
}

const engineerTemplate = (data) => {
    const {name, id, email, role, github} = data;

    const template = `
    <div class="card">
      <h2 class="name header">${name}</h2>
      <h3 class="role header">${role}</h3>
      <p class="details">Employee ID: ${id}</p>
      <p class="details">Email: <a href="mailto:">${email}</a></p>
      <p class="details">Github: <a href="https://github.com/${github}" target="_blank">${github}</p>
    </div>`

    return template;
}

const managerTemplate = (data) => {
    const {name, id, email, role, officeNumber} = data;

    const template = `
    <div class="card">
      <h2 class="name header">${name}</h2>
      <h3 class="role header">${role}</h3>
      <p class="details">Employee ID: ${id}</p>
      <p class="details">Email: <a href="mailto:">${email}</a></p>
      <p class="details">Office Number: ${officeNumber}</p>
    </div>`

    return template;
}
