<template>
  <main class="container pt-5">

    <div class="mb-5">
      <h2 class="fw-bold">Painel Administrativo</h2>
    </div>
    
    <div class="row">

      <div class="col-md-3">
        <div class="mb-3 d-flex">
          <select id="" class="form-select border-0 shadow">
            <option selected>Usuários</option>
            <option v-for="n in 5">Rodrigo Tutz</option>
          </select>
        </div>
      </div>

      <div class="col-md-3">
        <div class="mb-3">
          <select id="" class="form-select border-0 shadow">
            <option selected>Sistemas</option>
            <option v-for="n in 5">SCPI 8</option>
          </select>
        </div>
      </div>

      <div class="col-md-3">
        <div class="mb-3">
          <select id="" class="form-select border-0 shadow">
            <option selected>Situações</option>
            <option v-for="n in 5">Finalzado</option>
          </select>
        </div>
      </div>

      <div class="col-md-3">
        <div class="mb-3">
          <select id="" class="form-select border-0 shadow">
            <option selected>Outros</option>
            <option v-for="n in 5">Clientes</option>
          </select>
        </div>
      </div>

    </div>
    
  </main>
</template>

