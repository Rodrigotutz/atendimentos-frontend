<template>
    <nav class="sidebar">
        <div class="mx-2 fixed-top">
            <button type="button" class="btn text-white fs-2" data-bs-toggle="modal" data-bs-target="#sidebar"><i class="bi bi-list"></i></button>
        </div>
        <div class="modal fade" id="sidebar" tabindex="-1" aria-labelledby="sidebar" aria-hidden="true">
            <div class="modal-dialog modal-fullscreen">
                <div class="modal-content bg-dark text-white">
                    <div class="modal-header">
                        <h3 class="modal-title" id="exampleModalLabel">Rodrigo Tutz</h3>
                    </div>
                    <div class="modal-body fs-5 d-flex flex-column gap-1">
                        <li class="nav-link ">
                            <router-link to="/inicio" class="nav-link"><i class="bi bi-house-door-fill"></i> Inicio</router-link>
                        </li>
                        <li class="nav-link">
                            <router-link to="/sobre" class="nav-link"><i class="bi bi-bookmark-fill"></i> Sobre</router-link>
                        </li>
                        <li class="nav-link">
                            <router-link to="/contato" class="nav-link"><i class="bi bi-telephone-fill"></i> Contato</router-link>
                        </li>
                    </div> 
                    <div class="footer">
                       &copy; 2023 - <a href="https://rodrigotutz.com" target="_blank" class="text-white">Rodrigo Tutz</a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

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

    .footer {
        text-align: center;
        margin-left: -30px;
        padding-bottom: 30px;
    }
</style>