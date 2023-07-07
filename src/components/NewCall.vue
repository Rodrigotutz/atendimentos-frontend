<template>
    <button type="button" data-bs-toggle="modal" data-bs-target="#newCall" class="btn btn-light shadow btn-sm fw-bold"><i class="bi bi-plus-square-fill"></i> Novo Atendimento</button>

    <div class="modal fade" id="newCall" tabindex="-1" aria-labelledby="newCall" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Novo Chamado</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-dark">Cadastrar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
    .modal-header,
    .modal-footer {
        border: none;
    }
</style>