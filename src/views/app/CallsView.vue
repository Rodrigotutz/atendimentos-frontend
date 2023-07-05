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
                    <tr v-for="call in calls" :key="call.id">
                        <th scope="row">{{call.atendimento}}</th>
                        <td>{{call.relator}}</td>
                        <td>{{call.sistema}}</td>
                        <td>{{call.situacao}}</td>
                        <td>{{call.entidade}}</td>
                        <td class="case">{{call.caso}}</td>
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

<script setup>
import {ref} from 'vue'

const calls = ref([
  { id: 1,atendimento: "105992", relator: "Rodrigo Tutz", sistema: "SCPI 8", situacao: "Finalizado", entidade: "CM Nhandeara", caso: "Cliente relata erro ao empenhar"},
  { id: 2,atendimento: "105998", relator: "Marcos Paulo", sistema: "SCPI 9", situacao: "Em Andamento", entidade: "PM Votuporanga", caso: "Cliente relata erro ao empenhar"},
  { id: 3,atendimento: "106992", relator: "César Neto", sistema: "SGM", situacao: "Aguardando Banco", entidade: "CM Mirassol", caso: "Cliente relata erro ao empenhar"},
  { id: 4,atendimento: "106989", relator: "Rodrigo Antunes", sistema: "SCPI 8", situacao: "Finalizado", entidade: "CM Nhandeara", caso: "Cliente relata erro ao empenhar"},
  { id: 5,atendimento: "107899", relator: "Marcius Mellem", sistema: "SCPI 9", situacao: "Encaminhado", entidade: "CM Pirapora", caso: "Cliente relata erro ao empenhar"},
  { id: 6,atendimento: "108987", relator: "Pedro Pinto", sistema: "STS", situacao: "Finalizado", entidade: "PM Bálsamo", caso: "Cliente relata erro ao empenhar"},
  { id: 7,atendimento: "109959", relator: "Rodrigo Tutz", sistema: "SCPI 8", situacao: "Em Andamento", entidade: "CM Nhandeara", caso: "Cliente relata erro ao empenhar"},
  { id: 8,atendimento: "104656", relator: "Marcio Silva", sistema: "SCPI 9", situacao: "Finalizado", entidade: "CM Ponta Porãs", caso: "Cliente relata erro ao empenhar"},
  { id: 9,atendimento: "105989", relator: "Rodrigo Tutz", sistema: "SGM", situacao: "Aguardando Banco", entidade: "PM Theobroma", caso: "Cliente relata erro ao empenhar"},
  { id: 10,atendimento: "109456", relator: "Marcos Castro", sistema: "SCPI 8", situacao: "Encaminhado", entidade: "PM Mongaguá", caso: "Cliente relata erro ao empenhar"}, 
]);

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

    @media(max-width: 1000px) {
        td {
            max-width: 10ch;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }
</style>
