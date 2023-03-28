<template>
        <div class="sub_container">
        <header>
            <button class="atras">Atras</button>
            <h1>Actualizar Caso representante de victima</h1>
        </header>
        <main class="cont_inputs">
            <div class="izquierda">
                <h2>Fiscal de conocimiento</h2>
                <input type="text" placeholder="Nombre">
                <input type="number" placeholder="Numero de fiscal">
                <input type="email" placeholder="Correo">
                <input type="number" placeholder="Telefono">
                <input type="text" placeholder="Notas fiscal">
    
                <h2>Juez de conocimiento</h2>
                <input type="text" placeholder="Nombre">
                <input type="number" placeholder="Numero de despacho">
                <input type="email" placeholder="correo"> 
                <input type="text" placeholder="Direccion">
                <input type="date" placeholder="fecha">
                <input type="text" placeholder="Notas Juez"> 
            </div>
            <div class="derecha">
                <h2>Ministerio publico</h2>
                <input type="text" placeholder="Nombre">
                <input type="number" placeholder="Numero de ministro">
                <input type="email" placeholder="Correo">
                <input type="number" placeholder="Telefono">
                <input type="text" placeholder="Direccion">
                <input type="text" placeholder="Notas">
    
                <h2>Segunda instancia</h2>
                <input type="text" placeholder="Autoridad">
                <input type="number" placeholder="Radicado">
                <input type="email" placeholder="Numero de despacho"> 
                <input type="date" placeholder="fecha">
                <input type="text" placeholder="Notas">
            </div>
        </main>
    </div>
</template>

<script setup>

</script>

<style>
.container{
    width: 74vw;

}
.sub_container{
    box-shadow: 0px 0px 10px 0.1px rgba(0, 0, 0, 0.288);
    border-radius: 12px;
    padding-bottom: 10px;
}

header{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--brown);
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    color: var(--white);
}
.atras{
    width: 30px;
    position: absolute;
    left: 27.1vw;
    height: 30px;
    border: none;
    border-radius: 7px;
    background-color: var(--brown);
    cursor: pointer;
    color: white;

}
.cont_inputs{
    display: flex;
    justify-content: center;
    gap: 5%;
}
.izquierda{
    width: 45%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}
.derecha{
    width: 45%;
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 10px;
}
input{
    height: 30px;
    width: 100%;
    border: none;
    border-radius: 7px;
    padding-left: 5px;
    background-color: #e8e8e8;
}
.notas{
    width: 95%;
    padding: 10px;
    display: flex;
    align-items: start;
    margin: auto;
    margin-top: 10px;
    border: none;
    border-radius: 8px;
    background-color: #e8e8e8;
}
</style>
