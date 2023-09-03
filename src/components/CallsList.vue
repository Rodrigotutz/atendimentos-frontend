<template>
    <div class="container">
        
        <div class="mt-5 d-flex justify-content-between align-items-center gap-5">
            <NewCall />
            <form>
                <div class="form-outline">
                    <!--<input v-model="search" class="form-control form-control-sm shadow fw-bold" placeholder="Pesquisar por.." />-->
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
                    <tr v-for="call in calls" :key="call.id">
                        <th scope="row">{{call.at_number}}</th>
                        <td>{{call.name}}</td>
                        <td>{{call.system}}</td>
                        <td>{{call.situation}}</td>
                        <td>{{call.entity}}</td>
                        <td class="case">{{call.call_case}}</td>
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
import axios from 'axios';
import { onMounted, ref } from 'vue';
import NewCall from './NewCall.vue';

var calls = ref([])

const fetchCalls = axios.get("https://atendimentos.rodrigotutz.com/api/v1").then((response) => {
    calls.value = response.data
}).catch((error) => {
    console.log(error)
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