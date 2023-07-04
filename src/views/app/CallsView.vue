<template>
    <main class="container p-5">
        <h2>Atendimentos</h2>

        <div class="mt-5 d-flex justify-content-between align-items-center">
            <div class="btn btn-light fw-bold"><i class="bi bi-plus-square-fill"></i> Novo Atendimento</div>
            <form>
                <div class="form-outline">
                    <input type="search" id="search" class="form-control form-control-sm" placeholder="Pesquisar por..." />
                </div>
            </form>
        </div>

        <div class="call-not-found d-flex justify-content-center align-items-center">
            <h2>Não foram encontrados atendimentos</h2>
        </div>
    </main>
</template>

<script>
</script>

<style lang="scss" scoped>
    form {
        input {
            width: 250px;
        }
    }

    .call-not-found {
        min-height: 50vh;
        opacity: 0.2;
    }
</style>
