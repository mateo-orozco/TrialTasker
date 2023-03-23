<template>
    <main>
        <div class='title'>
            <RouterLink :to="{ name: 'ActiveCase' }" class='title'>
                <button class='atras'>Atras</button>
            </RouterLink>
            <h1>Crear Caso</h1>
            <div></div>
        </div>
        <section>
            <div class="izquierda">
            <h2>Informacion del fiscal</h2>
                <input type="text" placeholder="Nombre">
                <input type="text" placeholder="Telefono">
                <input type="number" placeholder="Numero de fiscal">
                <input type="text" placeholder="Notas">
                <input type="email" placeholder="Correo">
                <input type="date" placeholder="fecha" class="fecha">

                <h2>Informacion juez preliminar</h2>
                <input type="number" placeholder="Numero de despacho">
                <input type="number" placeholder="Numero de juez">
                <input type="text" placeholder="Nombre">
                <input type="email" placeholder="Correo">
                <input type="text" placeholder="Direccion">
                <input type="text" placeholder="Notas">
                <input type="date" placeholder="fecha" class="fecha">
                
            </div>
            <div class="derecha">
                <div>
                    <label for="">Tipo de caso:</label>
                    <select name="" id="">
                        <option value="1" disable>seleccione el tipo de caso</option>
                        <option value="2">Penal</option>
                        <option value="2">Civil</option>
                    </select>
                </div>
                <div>
                    <label for="">Etapa actual:</label>
                    <select name="" id="">
                        <option value="">seleccione la etapa actual</option>
                        <option value="">Indagación</option>
                        <option value="">Imputación</option>
                        <option value="">Acusación</option>
                        <option value="">Preparatoria</option>
                        <option value="">Audiencias orales</option>
                        <option value="">Apelaciones</option>
                        <option value="">Condena</option>
                    </select>
                </div>

                <h2>Datos del cliente</h2>
                <input type="text" placeholder="Nombre">
                <input type="text" placeholder="Cedula">
                <input type="text" placeholder="Telefono">
                <input type="text" placeholder="Lugar de expedicion">
                <input type="text" placeholder="Direccion">
                <input type="email" placeholder="Correo">

                <h2>Datos contacto del cliente</h2>
                <input type="text" placeholder="Nombre">
                <input type="text" placeholder="Telefono">
                <input type="text" placeholder="Direccion">

                <div>
                    <h2>Accion</h2>
                    <select name="" id="">
                        <option value="">Seleccione la accion</option>
                        <option value="">Defensor</option>
                        <option value="">Representante de victima</option>
                    </select>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup>

</script>

<style scoped>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

.title {
    display: flex;
    justify-content: space-between;
    background-color: #664200;
    color: white;
    border-radius: 8px;
    text-decoration: none;
}

main {
    color: #473800;
    background-image: url(https://img.freepik.com/vector-premium/conecta-lineas-puntos-conexion-internet-sentido-abstracto-ciencia_41981-1596.jpg);
    background-size: cover;
    border-radius: 15px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

section {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 5px;
}

.izquierda {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    width: 45%;
}

.derecha {
    width: 45%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

}

input {
    height: 30px;
    width: 80%;
    border-radius: 7px;
    border: none;
    cursor: pointer;
    padding-left: 10px;


}

select {
    border-radius: 5px;
    border: none;
    background-color: white;
}

.atras {
    border: none;
    border-radius: 5px;
    width: 50px;
    background-color: #664200;
    color: white;
    cursor: pointer;
}
@media screen and (max-width:768px) {
    .izquierda {
        width: 100%;
    }
    .derecha{
        width: 100%;
    }
}
</style>