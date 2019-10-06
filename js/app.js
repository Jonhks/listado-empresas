// $(document).foundation();

const components = document.getElementById('components')

const printComponents = () => {
  let str = ''
  for (let index = 0; index < 10; index++) {
    str += ` <div class="component">
    <div class="grid-container grid-x grid-padding-x align-self-middle">
      <div class="cell small-4 large-1 align-self-middle"><img src="./images/circulo.jpeg" alt="logo" width="50"></div>
      <div class="cell small-4 large-2 align-self-middle">
        <span class="company" >Círculo de crédito S.A de C.</span>
        <span class="person" >Alejandra de los Santos Berlanga</span>
      </div>
      <div class="cell large-1"></div>
      <div class="cell large-2">
        <span class="person">fecha de registro</span>
        <div class="company">24 Enero</div>
      </div>
      <div class="cell large-3"></div>
      <div class="cell large-1 table">
        <div class="company">150</div>
        <span class="person">Usuarios</span>
      </div>
      <div class="cell large-1 table">
          <div class="company">200</div>
          <span class="person">Publicaciones</span>
      </div>
      <div class="cell large-1 table">
          <div class="company">Ilimitado</div>
          <span class="person">Créditos</span>
      </div>
    </div>
  </div>`
  }
  components.insertAdjacentHTML('beforeend', str)
}

printComponents()


