<template>
    <main class="container pt-5 p-md-5">
        <h2 class="text-center text-md-start">Atendimentos</h2>

        <div class="mt-5 d-flex justify-content-between align-items-center gap-5">
            <div class="btn btn-light btn-sm fw-bold"><i class="bi bi-plus-square-fill"></i> Novo Atendimento</div>
            <form>
                <div class="form-outline">
                    <input type="search" id="search" class="form-control form-control-sm" placeholder="Pesquisar por..." />
                </div>
            </form>
        </div>

        <div class="call-not-found d-flex justify-content-center align-items-center">
            <h2 class="text-center">Não foram encontrados atendimentos</h2>
        </div>
    </main>
</template>

<script>
</script>

<style lang="scss" scoped>
    .call-not-found {
        min-height: 50vh;
        opacity: 0.2;
    }
</style>
