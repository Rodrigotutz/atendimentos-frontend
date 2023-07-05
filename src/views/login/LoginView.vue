<template>
    <main class="login">
        <form class="bg text-dark p-4 border-0 shadow rounded-3">
            <div class="mb-3 text-center">
                <h2 class="fs-2">Entrar</h2>
            </div>
            <div class=" mb-3">
                <input type="email" class="form-control" id="email" placeholder="Insira seu e-mail">
            </div>

            <div class="mb-2">
                <input type="password" class="form-control" id="password" placeholder="Insira sua senha">
            </div>

            <div class="mb-3 form-check small">
                <input type="checkbox" class="form-check-input" id="showPass">
                <label class="form-check-label text-muted" for="showPass">Ver Senha</label>
            </div>

            <div class="text-center mb-3">
                <button type="submit" class="btn btn-dark fw-bold">Entrar</button>
            </div>

            <div class="small">
                <small>Esqueceu a senha? <router-link to="/alterar-senha" class="text-dark">Alterar senha</router-link></small>
            </div>
        </form>
        
        <div class="text-center">
            Ainda não tem uma conta? <router-link to="/cadastrar" class="text-dark">Clique aqui!</router-link>
        </div>
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
                width: 80%;
                height: 50px;
            }
        }
    }
</style>
