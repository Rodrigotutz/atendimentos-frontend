<template>
    <main class="login">
        <form class="bg text-dark p-4 border-0 shadow rounded-3">
            <div class="mb-3 text-center">
                <h2 class="fs-2">Alterar senha</h2>
            </div>
            <div class="mb-3">
                <input type="email" class="form-control" id="email" placeholder="Insira seu e-mail para alterar a senha">
            </div>

            <div class="text-center">
                <button type="submit" class="btn btn-dark fw-bold ">Alterar senha</button>
            </div>
        </form>
        <router-link to="/" class="text-dark nav-link fw-bold"><i class="bi bi-arrow-left"></i> Voltar</router-link>
    </main>
</template>

<script>
</script>

<style lang="scss" scoped>
    .login {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        align-items: center;
        justify-content: center;
        gap: 3rem;

        .bg {
            background: #fff;
        }

        form {
            width: 350px;

            button {
                width: 200px;
                height: 50px;
            }
        }
    }
</style>
