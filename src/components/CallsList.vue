<template>
    <div class="container">
        
        <div class="mt-5 d-flex justify-content-between align-items-center gap-5">
            <NewCall />
            <form>
                <div class="form-outline">
                    <input v-model="search" class="form-control form-control-sm shadow fw-bold" placeholder="Pesquisar por.." />
                </div>
            </form>
        </div>

        <div class="table-responsive shadow-lg mt-5" v-if="calls != ''">
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
                    <tr v-for="call in callsFiltered" :key="call.id">
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

        <div class="call-not-found d-flex justify-content-center align-items-center" v-else>
            <h2 class="text-center text-dark fw-bold">Não foram encontrados atendimentos</h2>
        </div>
    </div>
    
</template>

<script setup>
import {ref, computed} from 'vue'
import NewCall from './NewCall.vue';

const search = ref("")

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

const callsFiltered = computed(() => {
    if(calls.value && search.value) {
        return calls.value.filter(
            call => 
                call.atendimento.includes(search.value) || 
                call.relator.includes(search.value) || 
                call.sistema.includes(search.value) || 
                call.situacao.includes(search.value) || 
                call.entidade.includes(search.value) || 
                call.caso.includes(search.value)
        )
    }
    return calls.value
})

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