<template>
    <nav class="sidebar">
        <div class="mx-2 fixed-top">
            <button type="button" class="btn text-dark fs-2" data-bs-toggle="modal" data-bs-target="#sidebar"><i class="bi bi-list"></i></button>
        </div>
        <div class="modal fade" id="sidebar" tabindex="-1" aria-labelledby="sidebar" aria-hidden="true">
            <div class="modal-dialog modal-fullscreen">
                <div class="modal-content bg-dark text-white">
                    <div class="modal-header">
                        <h3 class="modal-title" id="sidebar">Rodrigo Tutz</h3>
                    </div>
                    <div class="modal-body fs-6 d-flex flex-column justify-content-between">
                        <div class="links d-flex flex-column gap-1">
                            <li class="nav-link ">
                                <router-link to="/atendimentos" class="nav-link"><i class="bi bi-bookmark-plus-fill"></i> Atendimentos</router-link>
                            </li>
                            <li class="nav-link">
                                <router-link to="/perfil" class="nav-link"><i class="bi bi-person-circle"></i> Perfil</router-link>
                            </li>
                            <li class="nav-link">
                                <router-link to="/dicas" class="nav-link"><i class="bi bi-info-circle-fill"></i> Dicas</router-link>
                            </li>
                            <li class="nav-link">
                                <router-link to="/admin" class="nav-link"><i class="bi bi-gear-fill"></i> Adminstrativo</router-link>
                            </li>
                        </div>
                        
                        
                        <div class="sidebar-footer">
                            <li class="nav-link">
                                <router-link to="/novidades" class="nav-link"><i class="bi bi-newspaper"></i> Novidades</router-link>
                            </li>

                            <li class="nav-link">
                                <a href="https://github.com/Rodrigotutz/atendimentos-frontend" target="_blank" class="nav-link"><i class="bi bi-github"></i> Github</a>
                            </li>

                            <li class="nav-link">
                                <router-link to="/" class="nav-link"><i class="bi bi-door-open-fill"></i> Sair</router-link>
                            </li>
                        </div>
                    
                    </div> 
                </div>
            </div>
        </div>
    </nav>
</template>

<script>

</script>


<style scoped>
    .modal-content {
        float: left;
        width: 300px;
    }
    .modal-header {
        border: none;
    }

    .nav-link {
        padding: 5px;
        border-radius: 5px;
    }

    .router-link-exact-active {
        background: #ffffff;
        color: #1f1d1d !important;
        font-weight: bold;
    }

</style>