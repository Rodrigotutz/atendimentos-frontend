<template>
    <main class="container pt-5 p-md-5">
        <h2 class="text-center text-dark text-md-start fw-bold">Atendimentos</h2>

        <div class="mt-5 d-flex justify-content-between align-items-center gap-5">
            <div class="btn btn-light shadow btn-sm fw-bold"><i class="bi bi-plus-square-fill"></i> Novo Atendimento</div>
            <form>
                <div class="form-outline">
                    <input type="search" id="search" class="form-control form-control-sm shadow fw-bold" placeholder="Pesquisar por..." />
                </div>
            </form>
        </div>

        <div class="table-responsive shadow-lg mt-5">
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
                <tr v-for="n in 20">
                    <th scope="row">108984</th>
                    <td>Rodrigo Tutz</td>
                    <td>SCPI 9</td>
                    <td>Em Andamento</td>
                    <td>CM Nhandeara</td>
                    <td class="case">Cliente relata erro ao gerar empenho</td>
                    <td class="d-flex flex-row">
                        <button type="button" class="btn btn-danger btn-sm ms-2"><i class="bi bi-trash-fill"></i></button>
                        <button type="button" class="btn btn-primary btn-sm ms-2"><i class="bi bi-pencil-square"></i></button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>

        <!--<div class="call-not-found d-flex justify-content-center align-items-center">
            <h2 class="text-center text-dark fw-bold">Não foram encontrados atendimentos</h2>
        </div>-->
    </main>
</template>

<script>
</script>

<style lang="scss" scoped>
    .call-not-found {
        min-height: 50vh;
        opacity: 0.5;
    }
    .case {
        max-width: 15ch;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    @media(max-width: 450px) {
        td {
            max-width: 10ch;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }
</style>
