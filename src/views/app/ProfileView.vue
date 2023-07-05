<template>
  <main class="pt-5">
    <div class="container">

      <div class="mb-5">
        <h2 class="fw-bold">Perfil do Usuário</h2>
      </div>
      <div class="row">
        <div class="col-lg-4">
          <div class="card mb-4 border-0 shadow">
            <div class="card-body text-center">
              <img :src="require('@/assets/img/avatar.png')" alt="avatar" class="rounded-circle img-fluid shadow" style="width: 120px;" >
                <h5 class="my-3">Rodrigo Tutz</h5>
                <p class="text-muted mb-1">Full Stack Developer</p>
                <p class="text-muted mb-4">Bálsamo - SP</p>
            </div>
          </div>
        </div>

        <div class="col-lg-8">
          <div class="card mb-4 border-0 shadow">
            <div class="card-body">
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0 fw-bold">Nome Completo:</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0">Rodrigo Antunes Rufino</p>
                </div>
              </div>
              <hr>
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0 fw-bold">Email:</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0">rodrigo@rodrigotutz.com</p>
                </div>
              </div>
              <hr>
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0 fw-bold">Telefone:</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0">(17) 98133-7392</p>
                </div>
              </div>
              <hr>
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0 fw-bold">Endereço:</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0">Bálsamo - SP</p>
                </div>
              </div>
              <hr>
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0 fw-bold">Tipo:</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0">Administrador</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>


<style scoped>

</style>