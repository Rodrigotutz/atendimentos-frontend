<template>
  <main class="container mt-5 pt-5 mb-5 pt-5">
    <h1 class="fw-bold text-center mb-5">Testes</h1>
    <div class="table-responsive shadow-lg">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Atendimento</th>
            <th scope="col">Relator</th>
            <th scope="col">Sistema</th>
            <th scope="col">Situação</th>
            <th scope="col">Entidade</th>
            <th scope="col">Caso</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="n in 10">
            <th scope="row">108984</th>
            <td>Rodrigo Tutz</td>
            <td>SCPI 9</td>
            <td>Em Andamento</td>
            <td>CM Nhandeara</td>
            <td class="case">Cliente relata erro ao gerar empenho</td>
            <td>
              <button type="button" class="btn btn-danger btn-sm ms-2"><i class="bi bi-trash-fill"></i></button>
              <button type="button" class="btn btn-primary btn-sm ms-2"><i class="bi bi-pencil-square"></i></button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>

<style scoped>
  .case {
    max-width: 10ch;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  }
</style>

