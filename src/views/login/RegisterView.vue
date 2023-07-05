<template>
    <main class="register">
        <form class="bg text-dark p-4 border-0 shadow-lg rounded-3">
            <div class="mb-3 text-center">
                <h2 class="fs-2">Cadastre-se</h2>
            </div>

            <div class="row">

                <div class="col-md-6">
                    <div class=" mb-3">
                        <input type="text" class="form-control" id="name" placeholder="Insira seu nome">
                    </div>
                </div>
                <div class="col-md-6">
                    <div class=" mb-3">
                        <input type="text" class="form-control" id="sobrenome" placeholder="Insira seu sobrenome">
                    </div>
                </div>

                <div class="col-md-8">
                    <div class=" mb-3">
                        <input type="email" class="form-control" id="email" placeholder="Insira seu e-mail">
                    </div>
                </div>

                <div class="col-md-4">
                    <div class=" mb-3">
                        <input type="phone" class="form-control" id="email" placeholder="Insira seu telefone">
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="mb-2">
                        <input type="password" class="form-control" id="password" placeholder="Insira sua senha">
                    </div>
                </div>

                <div class="col-md-6">    
                    <div class="mb-2">
                        <input type="password" class="form-control" id="confirm" placeholder="Confirme a sua senha">
                    </div>
                </div>

            </div>

            <div class="mb-3 form-check small">
                <input type="checkbox" class="form-check-input" id="showPass">
                <label class="form-check-label text-muted" for="showPass">Ver Senha</label>
            </div>

            <div class="text-center mb-3">
                <button type="submit" class="btn btn-dark fw-bold">Entrar</button>
            </div>
        </form>
        
        <div class="text-center">
            Já tem uma conta? <router-link to="/" class="text-dark">Clique aqui!</router-link>
        </div>
    </main>
</template>

<script>
</script>

<style lang="scss" scoped>
    .register {
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
            width: 700px;

            button {
                width: 30%;
                height: 50px;
            }
        }
    }

    @media(max-width: 600px) {
        .register {
            form {
                width: 350px;
            }
        }
    }
</style>
